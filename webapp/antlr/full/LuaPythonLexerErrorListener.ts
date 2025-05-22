import { ErrorListener, RecognitionException, Recognizer } from 'antlr4'
export default class LuaPythonLexerErrorListener extends ErrorListener<number> {
  syntaxError(recognizer: Recognizer<number>, offendingSymbol: number, line: number, column: number, msg: string, err: RecognitionException | undefined): void {
    console.log("Lexer", recognizer, offendingSymbol, line, column, msg, err) // TODO
    throw new Error(`Lexer position ${line}:${column} `)
  }
}