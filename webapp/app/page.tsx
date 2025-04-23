"use client";
import Image from "next/image";
import antlr4 from 'antlr4'

import * as React from 'react';
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { CharStream, CommonTokenStream } from 'antlr4';
import FullPythonLexer from '../antlr/full/PythonLexer';
import FullPythonParser from '../antlr/full/PythonParser';
import OursPythonLexer from '../antlr/ours/MiniPythonLexer';
import OursPythonParser from '../antlr/ours/MiniPythonParser';
import LuaPythonListener from '../antlr/full/LuaPythonListener';

const lexers = {
  'full': FullPythonLexer,
  'ours': OursPythonLexer
}

const parsers = {
  'full': FullPythonParser,
  'ours': OursPythonParser
}

export default function Home() {
  const [code, setCode] = React.useState('')
  const [version, setVersion] = React.useState('ours')
  const [result, setResult] = React.useState('')
  const [dTree, setDTree] = React.useState('')
  React.useEffect(() => {
    console.log("Code:", code)
    const chars = new CharStream(code); // replace this with a FileStream as required
    console.log("Characters:", chars)
    const lexerClass = (lexers as any)[version] // eslint-disable-line
    const parserClass = (parsers as any)[version] // eslint-disable-line
    const lexer = new lexerClass(chars);
    console.log("Lexer", lexer);
    const tokens = new CommonTokenStream(lexer);
    console.log("Tokens", tokens);
    const parser = new parserClass(tokens);
    console.log("Parser", parser);
    const tree = parser.program();
    
    console.log("Tree", tree);
    console.log(tree.toStringTree(parser.ruleNames));
    setDTree(tree.toStringTree(parser.ruleNames))

    if (version == 'full') {
      const luaRes = new LuaPythonListener()
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(luaRes, tree)
      setResult(luaRes.result)
    } else {
      setResult("Can only parse full grammar")
    }
  }, [ code, version ])

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
      <p>{dTree}</p>
      <p>{result}</p>
    </>
  );
}
