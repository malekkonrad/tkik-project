import { ErrorListener, RecognitionException, Recognizer } from 'antlr4'
import PythonParser from './PythonParser';
import PythonLexer from './PythonLexer';

export default class LuaPythonLexerErrorListener extends ErrorListener<number> {
  syntaxError(recognizer: Recognizer<number>, 
    offendingSymbol: number, 
    line: number, 
    column: number, 
    msg: string, 
    err: RecognitionException | undefined): void {
          console.log("Parser",recognizer, offendingSymbol, line, column, msg, err) 
          let errorLine = "Unknown line";
          var lexer = recognizer as PythonLexer; 
    
          var rule_name = lexer.ruleNames[offendingSymbol] || "Unknown Rule";
          
          if (lexer._input && lexer._input.toString) {
            const sourceText = lexer._input.toString();
            const lines = sourceText.split('\n');
            if (line > 0 && line <= lines.length) {
              errorLine = lines[line - 1]; 
            }
          }
          var string_mess = 'Lexer Error at line ' + ':\n--' + errorLine + '\n--' +
          ' '.repeat(column) + '^' + '\n' + "--" + msg;
          if (rule_name != "Unknown Rule"){
            string_mess += '\n--Rule: ' + rule_name;
          }
          
          throw new Error(string_mess);
  }
}
