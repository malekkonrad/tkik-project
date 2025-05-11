import { ParseTreeVisitor, Lexer, Parser, ErrorListener, Token } from "antlr4";
import FullPythonLexer from './full/PythonLexer';
import FullPythonParser from './full/PythonParser';
import OursPythonLexer from './ours/MiniPythonLexer';
import OursPythonParser from './ours/MiniPythonParser';
import LuaPythonVisitor from './full/LuaPythonVisitor';
import LuaPythonErrorListener from './full/LuaPythonErrorListener';

export type CompilerSet = {
  name: string,
  lexer?: typeof Lexer,
  parser?: typeof Parser,
  visitor?: typeof ParseTreeVisitor<string>,
  lexerErrorListener?: typeof ErrorListener<number>,
  parserErrorListener?: typeof ErrorListener<Token>
}

const compilers: { [Name: string]: CompilerSet } = {
  'full': {
    name: "Full Python",
    lexer: FullPythonLexer,
    parser: FullPythonParser,
    visitor: LuaPythonVisitor
  },
  'ours': {
    name: "Our Python",
    lexer: OursPythonLexer,
    parser: OursPythonParser,
    parserErrorListener: LuaPythonErrorListener
  }
}
export default compilers