import { ErrorListener, Token, RecognitionException, Recognizer } from 'antlr4'
export default class LuaPythonParserErrorListener extends ErrorListener<Token> {
  syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, err: RecognitionException | undefined): void {
    console.log("Parser",recognizer, offendingSymbol, line, column, msg, err) // TODO
    throw new Error(`Parser position ${line}:${column} `)
  }
}