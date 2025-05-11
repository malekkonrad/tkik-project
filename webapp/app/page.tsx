"use client";
// import Image from "next/image";

import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

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

export default function Home() {
  const editorRef = React.useRef<editor.IStandaloneCodeEditor>(null)

  const [code, setCode] = React.useState<string>('')
  const [version, setVersion] = React.useState<string>('full')
  const [result, setResult] = React.useState<string>('')
  const [dTree, setDTree] = React.useState<ParserRuleContext | null>(null)
  const [sampleName, setSampleName] = React.useState<string>('')
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

  React.useEffect(() => {
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
  }, [ result ])

  {/* ErrorListener https://tomassetti.me/antlr-mega-tutorial/#chapter19 */}
  return (
    <>
      <Select
        value={version}
        onChange={(event: SelectChangeEvent) => {
          setVersion(event.target.value)
        }}
      >
        {
          Object.entries(compilers).map(([key, value]) => (<MenuItem key={key} value={key}>{value.name}</MenuItem>))
        }
      </Select><br />
      <Select
        value={sampleName}
        onChange={(event: SelectChangeEvent) => setSampleName(event.target.value)}
      >
        <MenuItem value=''>No sample</MenuItem>
        {
          samples.map(x => (<MenuItem value={x.name} key={x.name}>{x.name}</MenuItem>))
        }
      </Select><br />
      <Editor
        height="90vh"
        defaultLanguage="python"
        defaultValue="// Put your code here"
        onChange={value => setCode(value ?? '')}
        onMount={(editor) => editorRef.current = editor}
      />;
      <SyntaxHighlighter
        language="lua"
        style={dark}
        showLineNumbers={true}
      >
        {result}
      </SyntaxHighlighter>
      <TldrawSvg parseTree={dTree} />
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
      />
    </>
  );
}