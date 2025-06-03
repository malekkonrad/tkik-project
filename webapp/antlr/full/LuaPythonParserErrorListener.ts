import { ErrorListener, Token, RecognitionException, Recognizer} from 'antlr4'

export default class LuaPythonParserErrorListener extends ErrorListener<Token> {

  syntaxError(recognizer: Recognizer<Token>, 
    offendingSymbol: Token, 
    line: number, 
    column: number, 
    msg: string, 
    err: RecognitionException | undefined): // eslint-disable-line @typescript-eslint/no-unused-vars
    void {
      let errorLine = "Unknown line";
      
      if (offendingSymbol && offendingSymbol.getInputStream()) {
      const inputStream = offendingSymbol.getInputStream();
      if (inputStream && inputStream) {
          const lines = inputStream.toString().split('\n');
          if (line > 0 && line <= lines.length) {
            errorLine = lines[line - 1]; // indexowanie od 1
          }
        }
      }

      const string_mess = 'Parser Error at line: ' + line + '\n'
        + errorLine + '\n'
        + ' '.repeat(column) + '^' + '\n'
        + "PyToL_SyntaxError: " + msg;

      throw new Error(string_mess);
    }
  }