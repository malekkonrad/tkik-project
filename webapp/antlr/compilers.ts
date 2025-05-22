import { ParseTreeVisitor, Lexer, Parser, ErrorListener, Token } from "antlr4";
import FullPythonLexer from './full/PythonLexer';
import FullPythonParser from './full/PythonParser';
import LuaPythonVisitor from './full/LuaPythonVisitor';
import LuaPythonParserErrorListener from "./full/LuaPythonParserErrorListener";
import LuaPythonLexerErrorListener from "./full/LuaPythonLexerErrorListener";

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
    visitor: LuaPythonVisitor,
    parserErrorListener: LuaPythonParserErrorListener,
    lexerErrorListener: LuaPythonLexerErrorListener
  }
}
export default compilers