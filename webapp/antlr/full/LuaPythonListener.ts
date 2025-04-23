import { Function_defContext } from './PythonParser';
import PythonParserListener  from './PythonParserListener';

export default class LuaPythonListener extends PythonParserListener {    
    constructor () {
      super();
      this.result = '';
    }

    enterFunction_def(ctx: Function_defContext): void {
      this.result += `function ${ctx.function_def_raw().name().getText()}`;
    };

    exitFunction_def(ctx: Function_defContext): void {
      this.result += 'end';
    };
}