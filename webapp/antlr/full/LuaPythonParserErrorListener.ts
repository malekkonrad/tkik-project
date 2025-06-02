import { ErrorListener, Token, RecognitionException, Recognizer} from 'antlr4'
import PythonParser from './PythonParser';

export default class LuaPythonParserErrorListener extends ErrorListener<Token> {

  syntaxError(recognizer: Recognizer<Token>, 
    offendingSymbol: Token, 
    line: number, 
    column: number, 
    msg: string, 
    err: RecognitionException | undefined): 
    void {
      console.log("Parser",recognizer, offendingSymbol, line, column, msg, err); 
      
      let errorLine = "Unknown line";
      var parser = recognizer as PythonParser; 

      console.log("Parser", parser);
      // ? - chyba nie potrzebne
      // var ctx = (recognizer as PythonParser).pattern_capture_target();
      
      if (offendingSymbol && offendingSymbol.getInputStream()) {
      const inputStream = offendingSymbol.getInputStream();
      if (inputStream && inputStream) {
          const lines = inputStream.toString().split('\n');
          if (line > 0 && line <= lines.length) {
            errorLine = lines[line - 1]; // indexowanie od 1
          }
        }
      }

      var string_mess = ' Parser Error at line: '+ line+ '\n-- ' + errorLine + '\n-- ' +
      ' '.repeat(column) + '^' + '\n' + "-- SyntaxError: " + msg;

      throw new Error(string_mess);
    }
  }