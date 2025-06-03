import { ErrorListener, RecognitionException, Recognizer } from 'antlr4'
import PythonLexer from './PythonLexer';

export default class LuaPythonLexerErrorListener extends ErrorListener<number> {
  syntaxError(recognizer: Recognizer<number>, 
    offendingSymbol: number, 
    line: number, 
    column: number, 
    msg: string, 
    err: RecognitionException | undefined): void { // eslint-disable-line @typescript-eslint/no-unused-vars
      let errorLine = "Unknown line";
      const lexer = recognizer as PythonLexer; 

      
      if (lexer._input && lexer._input.toString) {
        const sourceText = lexer._input.toString();
        const lines = sourceText.split('\n');
        if (line > 0 && line <= lines.length) {
          errorLine = lines[line - 1]; 
        }
      }
      let string_mess = 'Lexer Error at line: ' + line + '\n'
        + errorLine + '\n'
        + ' '.repeat(column) + '^' + '\n'
        + msg;

      const rule_name = lexer.ruleNames[offendingSymbol];
      if (rule_name != null) string_mess += '\nRule: ' + rule_name;
      
      throw new Error(string_mess);
  }
}
