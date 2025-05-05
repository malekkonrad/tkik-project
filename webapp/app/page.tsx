"use client";
// import Image from "next/image";
// import antlr4 from 'antlr4'

import * as CryptoJS from 'crypto-js'
import * as React from 'react';
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CharStream, CommonTokenStream } from 'antlr4';
import FullPythonLexer from '../antlr/full/PythonLexer';
import FullPythonParser from '../antlr/full/PythonParser';
import OursPythonLexer from '../antlr/ours/MiniPythonLexer';
import OursPythonParser from '../antlr/ours/MiniPythonParser';
import LuaPythonVisitor from '../antlr/full/LuaPythonVisitor';

const lexers = {
  'full': FullPythonLexer,
  'ours': OursPythonLexer
}

const parsers = {
  'full': FullPythonParser,
  'ours': OursPythonParser
}

const visitors = {
  'full': LuaPythonVisitor
}

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
  const [code, setCode] = React.useState('')
  const [version, setVersion] = React.useState('full')
  const [result, setResult] = React.useState('')
  const [dTree, setDTree] = React.useState('')
  React.useEffect(() => {
    try {
      const chars = new CharStream(code); // replace this with a FileStream as required
      const lexerClass = (lexers as any)[version] // eslint-disable-line
      const parserClass = (parsers as any)[version] // eslint-disable-line
      const visitorClass = (visitors as any)[version] // eslint-disable-line
      const lexer = new lexerClass(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new parserClass(tokens);
      const tree = parser.program();
      
      console.log("Tree", tree);
      console.log(tree.toStringTree(parser.ruleNames));
      setDTree(tree.toStringTree(parser.ruleNames))

      if (visitorClass != null) {
        const luaVisitor = new visitorClass()
        const res = luaVisitor.visit(tree)
        console.log("Result", res)
        setResult((res != null) ? addHeader(code, res) : '-- No result')
      } else {
        setResult("-- Can't parse this grammar")
      }
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
        <MenuItem value='full'>Full Python</MenuItem>
        <MenuItem value='ours'>Our Version</MenuItem>
      </Select><br />
      <TextField variant='outlined' multiline value={code} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
      <SyntaxHighlighter language="lua" style={dark}>
        {result}
      </SyntaxHighlighter>
      <p>{dTree}</p>
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