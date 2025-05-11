"use client";
import Image from "next/image";

import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem'
import { Typography, Box, FormControlLabel, FormGroup, FormControl, InputLabel, Grid } from '@mui/material';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4';

import samples from '../antlr/samples'
import compilers, { CompilerSet } from '../antlr/compilers'
import TldrawSvg from '../antlr/TldrawSvg'

const addURLParams = (url: string, params: { [Param: string]: string }) => {
  const u = new URL(url)
  for (const [param, value] of Object.entries(params)) {
    u.searchParams.set(param, value)
  }
  return u.toString()
}

const addHeader = (src: string, res: string) => {
  const srcHash = CryptoJS.SHA256(src).toString(CryptoJS.enc.Hex);
  return `-- PyToL\n-- Generated on: ${new Date().toISOString()}\n-- Source hash: ${srcHash}\n${res}`
}

const updateEditor = (document: Document, result: string) => {
  const luaResultEditor = document.getElementById('lua-result-editor')
    if (luaResultEditor != null && luaResultEditor instanceof HTMLIFrameElement && luaResultEditor.contentWindow != null) {
    luaResultEditor.contentWindow.postMessage({
      eventType: 'populateCode',
      language: 'lua',
      files: [
        {
          "name": "result.lua",
          "content": result
        }
      ]
    }, "*")
  }
}

export default function Home() {
  const editorRef = React.useRef<editor.IStandaloneCodeEditor>(null)

  const [isObfuscated, setObfuscated] = React.useState<boolean>(true)
  const [showResult, setShowResult] = React.useState<boolean>(true) // Result code
  const [showCompiler, setShowCompiler] = React.useState<boolean>(true) // External lua compiler
  const [showDTree, setShowDTree] = React.useState<boolean>(false) // Tldraw tree
  const [showTTree, setShowTTree] = React.useState<boolean>(false) // Text tree

  const [code, setCode] = React.useState<string>('')
  const [version, setVersion] = React.useState<string>('full')
  const [result, setResult] = React.useState<string>('')
  const [dTree, setDTree] = React.useState<ParserRuleContext | null>(null)
  const [tTree, setTTree] = React.useState<string | null>(null)
  const [sampleName, setSampleName] = React.useState<string>('None')
  React.useEffect(() => {
    if (sampleName != '' && editorRef.current != null) {
      const sample = samples.find(x => x.name == sampleName)
      if (sample != null) editorRef.current?.setValue(sample.src)
    }
  }, [ sampleName ])

  React.useEffect(() => {
    try {
      const compilerData: CompilerSet = compilers[version]
      if (compilerData == null) return setResult("-- No compiler found :(")

      const {lexer: lexerClass, parser: parserClass, visitor: visitorClass} = compilerData

      const chars = new CharStream(code);
      if (lexerClass == null) return setResult("-- No lexer available")
      const lexer = new lexerClass(chars);
      lexer.removeErrorListeners()
      if (compilerData.lexerErrorListener != null) lexer.addErrorListener(new compilerData.lexerErrorListener())

      const tokens = new CommonTokenStream(lexer);
      if (parserClass == null) return setResult("-- No parser available")
      const parser = new (parserClass as any)(tokens); // eslint-disable-line
      parser.buildParseTrees = true
      parser.removeErrorListeners()
      if (compilerData.parserErrorListener != null) parser.addErrorListener(new compilerData.parserErrorListener())
      
      const tree = parser.program();
      setDTree(tree)
      setTTree(tree.toStringTree(parser.ruleNames))

      if (visitorClass == null) return setResult("-- No visitor available")

      const luaVisitor = new visitorClass()
      const res = luaVisitor.visit(tree)
      setResult((res != null) ? addHeader(code, res) : '-- No result')
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResult(`-- Failed to parse :(\n--${error.message}`)
        console.warn(error.stack ?? 'No error trace')
      }
    }
  }, [ code, version ])

  React.useEffect(() => updateEditor(document, result), [ result, showCompiler ])

  {/* ErrorListener https://tomassetti.me/antlr-mega-tutorial/#chapter19 */}
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box>
            <FormControl>
              <InputLabel id="version-label">Version</InputLabel>
              <Select
                labelId="version-label"
                id="version-select"
                label='Version'
                value={version}
                onChange={(event: SelectChangeEvent) => {
                  setVersion(event.target.value)
                }}
              >
                {
                  Object.entries(compilers).map(([key, value]) => (<MenuItem key={key} value={key}>{value.name}</MenuItem>))
                }
              </Select><br />
            </FormControl>
            <FormControl>
              <InputLabel id="samplecode-label">Sample code</InputLabel>
              <Select
                labelId="samplecode-label"
                id="samplecode-select"
                label='Sample code'
                value={sampleName}
                onChange={(event: SelectChangeEvent) => setSampleName(event.target.value)}
              >
                <MenuItem value='None' key='None'>No sample</MenuItem>
                {
                  samples.map(x => (<MenuItem value={x.name} key={x.name}>{x.name}</MenuItem>))
                }
              </Select><br />
            </FormControl>
          </Box>
          <Box>
            <Editor
              height="90vh"
              defaultLanguage="python"
              defaultValue="// Put your code here"
              onChange={value => setCode(value ?? '')}
              onMount={(editor) => editorRef.current = editor}
            />;
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <FormGroup>
              <FormControlLabel
                label="Obfuscation"
                control={
                  <Checkbox
                    checked={isObfuscated}
                    onChange={((e: React.ChangeEvent<HTMLInputElement>) => setObfuscated(e.target.checked))}
                  />
                }
              />
              <FormControlLabel
                label="Show Result"
                control={
                  <Checkbox
                    checked={showResult}
                    onChange={((e: React.ChangeEvent<HTMLInputElement>) => setShowResult(e.target.checked))}
                  />
                }
              />
              <FormControlLabel
                label="Show Online Lua Compiler"
                control={
                  <Checkbox
                    checked={showCompiler}
                    onChange={((e: React.ChangeEvent<HTMLInputElement>) => setShowCompiler(e.target.checked))}
                  />
                }
              />
              <FormControlLabel
                label="Show Diagram Tree"
                control={
                  <Checkbox
                    checked={showDTree}
                    onChange={((e: React.ChangeEvent<HTMLInputElement>) => setShowDTree(e.target.checked))}
                  />
                }
              />
              <FormControlLabel
                label="Show Text Tree"
                control={
                  <Checkbox
                    checked={showTTree}
                    onChange={((e: React.ChangeEvent<HTMLInputElement>) => setShowTTree(e.target.checked))}
                  />
                }
              />
            </FormGroup>
          </Box>
          <Box>
          {
            (isObfuscated) ? (
              <>
                {
                  (showResult) ? (
                    <SyntaxHighlighter
                      language="lua"
                      style={dark}
                      showLineNumbers={true}
                    >
                      {result}
                    </SyntaxHighlighter>
                  ) : null
                }
                {
                  (showDTree) ? (<TldrawSvg parseTree={dTree} />) : null
                }
                {
                  (showTTree) ? (<Typography>{tTree}</Typography>) : null
                }
                {
                  (showCompiler) ? (
                    <>
                      {/* Docs: https://onecompiler.com/apis/embed-editor */}
                      <iframe
                        frameBorder="0"
                        height="450px"
                        id='lua-result-editor'
                        src={
                          addURLParams('https://onecompiler.com/embed/lua', {
                            hideLanguageSelection: 'true',
                            hideNew: 'true',
                            hideRun: 'false',
                            hideNewFileOption: 'true',
                            disableCopyPaste: 'false',
                            disableAutoComplete: 'true',
                            hideStdin: 'false',
                            hideResult: 'false',
                            hideTitle: 'true',
                            theme: 'dark',
                            listenToEvents: 'true',
                            codeChangeEvent: 'true',
                            hideEditorOptions: 'true'
                          })
                        }
                        width="100%"
                        onLoad={() => updateEditor(document, result)}
                      />
                    </>
                  ) : null
                }
              </>
            ) : (
              <Image
                alt="Troll face"
                src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png"
                layout="responsive"
              />
            )
          }
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '2vw' }}>
        <Typography align="center">Made with 💔 by:</Typography>
        <Typography align="center">- Kamil Pustelnik @ <a href='mailto:kpustelnik@student.agh.edu.pl'>kpustelnik@student.agh.edu.pl</a></Typography>
        <Typography align="center">- Konrad Małek @ <a href='mailto:kmalek@student.agh.edu.pl'>kmalek@student.agh.edu.pl</a></Typography>
      </Box>
    </>
  );
}