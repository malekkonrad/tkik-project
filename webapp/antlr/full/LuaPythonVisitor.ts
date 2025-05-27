import { ParseTreeVisitor, TerminalNode } from "antlr4";
import {
    AssignmentContext,
    Compound_stmtContext,
    Function_defContext,
    ProgramContext,
    Return_stmtContext,
    Simple_stmtContext,
    Simple_stmtsContext,
    Star_expressionsContext,
    Star_expressionContext,
    StatementContext,
    StatementsContext,
    Bitwise_orContext,
    Bitwise_xorContext,
    Bitwise_andContext,
    Shift_exprContext,
    SumContext,
    TermContext,
    FactorContext,
    PowerContext,
    Del_stmtContext,
    Global_stmtContext,
    Nonlocal_stmtContext,
    BlockContext,
    If_stmtContext,
    Elif_stmtContext,
    Else_blockContext,
    While_stmtContext,
    Eq_bitwise_orContext,
    Notin_bitwise_orContext,
    Lte_bitwise_orContext,
    Lt_bitwise_orContext,
    Gte_bitwise_orContext,
    Gt_bitwise_orContext,
    DisjunctionContext,
    ConjunctionContext,
    InversionContext,
    ComparisonContext,
    Compare_op_bitwise_or_pairContext,
    AugassignContext,
    Function_def_rawContext,
    LambdefContext,
    Lambda_paramsContext,
    Lambda_parametersContext,
    ParamsContext,
    ParametersContext,
    Annotated_rhsContext,
    Raise_stmtContext,
    Yield_stmtContext,
    Assert_stmtContext,
    Import_stmtContext,
    Import_nameContext,
    Import_fromContext,
    Import_from_targetsContext,
    Import_from_as_namesContext,
    Dotted_as_namesContext,
    Import_from_as_nameContext,
    Dotted_as_nameContext,
    Dotted_nameContext,
    DecoratorsContext,
    Class_defContext,
    Class_def_rawContext,
    Slash_no_defaultContext,
    Slash_with_defaultContext,
    Star_etcContext,
    KwdsContext,
    Param_no_defaultContext,
    Param_no_default_star_annotationContext,
    Param_with_defaultContext,
    Param_maybe_defaultContext,
    ParamContext,
    Param_star_annotationContext,
    AnnotationContext,
    Star_annotationContext,
    Default_assignmentContext,
    For_stmtContext,
    With_stmtContext,
    With_itemContext,
    Try_stmtContext,
    Except_blockContext,
    Except_star_blockContext,
    Finally_blockContext,
    Match_stmtContext,
    Subject_exprContext,
    Case_blockContext,
    GuardContext,
    PatternsContext,
    PatternContext,
    Or_patternContext,
    Closed_patternContext,
    Literal_patternContext,
    Literal_exprContext,
    Complex_numberContext,
    Signed_numberContext,
    Signed_real_numberContext,
    Real_numberContext,
    Imaginary_numberContext,
    Capture_patternContext,
    Pattern_capture_targetContext,
    Wildcard_patternContext,
    Value_patternContext,
    AttrContext,
    Name_or_attrContext,
    Group_patternContext,
    Sequence_patternContext,
    Open_sequence_patternContext,
    Maybe_sequence_patternContext,
    Maybe_star_patternContext,
    Star_patternContext,
    Mapping_patternContext,
    Items_patternContext,
    Key_value_patternContext,
    Double_star_patternContext,
    Class_patternContext,
    Positional_patternsContext,
    Keyword_patternsContext,
    Keyword_patternContext,
    Type_aliasContext,
    Type_paramContext,
    Type_param_seqContext,
    Type_paramsContext,
    Type_param_boundContext,
    Type_param_defaultContext,
    Type_param_starred_defaultContext,
    ExpressionsContext,
    ExpressionContext,
    Yield_exprContext,
    Star_named_expressionsContext,
    Star_named_expressionContext,
    Assignment_expressionContext,
    Named_expressionContext,
    Noteq_bitwise_orContext,
    In_bitwise_orContext,
    Isnot_bitwise_orContext,
    Is_bitwise_orContext,
    Await_primaryContext,
    PrimaryContext,
    SlicesContext,
    SliceContext,
    AtomContext,
    GroupContext,
    Lambda_slash_no_defaultContext,
    Lambda_slash_with_defaultContext,
    Lambda_star_etcContext,
    Lambda_kwdsContext,
    Lambda_param_no_defaultContext,
    Lambda_param_with_defaultContext,
    Lambda_param_maybe_defaultContext,
    Lambda_paramContext,
    Fstring_middleContext,
    Fstring_replacement_fieldContext,
    Fstring_conversionContext,
    Fstring_full_format_specContext,
    Fstring_format_specContext,
    FstringContext,
    StringContext,
    StringsContext,
    ListContext,
    TupleContext,
    SetContext,
    DictContext,
    Double_starred_kvpairsContext,
    Double_starred_kvpairContext,
    KvpairContext,
    For_if_clausesContext,
    For_if_clauseContext,
    ListcompContext,
    SetcompContext,
    GenexpContext,
    DictcompContext,
    ArgumentsContext,
    ArgsContext,
    KwargsContext,
    Starred_expressionContext,
    Kwarg_or_starredContext,
    Kwarg_or_double_starredContext,
    Star_targetsContext,
    Star_targets_list_seqContext,
    Star_targets_tuple_seqContext,
    Star_targetContext,
    Target_with_star_atomContext,
    Star_atomContext,
    Single_targetContext,
    Single_subscript_attribute_targetContext,
    T_primaryContext,
    Del_targetsContext,
    Del_targetContext,
    Del_t_atomContext,
    Type_expressionsContext,
    Name_except_underscoreContext,
    NameContext,
    As_patternContext
} from "./PythonParser";
import PythonParserVisitor from "./PythonParserVisitor";
import PythonLexer from "./PythonLexer";
import polyfills, { globalDefinitions } from "./LuaPolyfills";

const indent = (txt: string, chars: string = '    ') => txt.split('\n').map(x => chars + x).join('\n')

type LoopData = {
    hasElse: boolean,
    identifier: number,
    tryCount: 0
}
enum ScopeType {
    GLOBAL,
    FUNCTION,
    CLASS,
    OTHER
}
class ScopeData {
    public loopStack: LoopData[] = []
    public definitions: { [Name: string]: string } = {}
    public hiddenDefinitions: { [Name: string]: string } = {} // Won't be redefined
    public scopeId: number
    public lastDefinitionIdentifier = 0;
    public scopeType: ScopeType;
    public parentScope: ScopeData | null;
    public usedDefinitions: Set<string> = new Set<string>();
    public usesYield: boolean = false;

    constructor (scopeId: number, scopeType: ScopeType, parentScope: ScopeData | null) {
        this.scopeId = scopeId
        this.scopeType = scopeType;
        this.parentScope = parentScope;
    }

    createScopeDefinitions() {
        const definition_list = []
        for (const definition in this.definitions) definition_list.push(this.definitions[definition])
        if (definition_list.length == 0) return ''
        return `local ${definition_list.join(', ')}`
    }

    createExportDefinitions() {
        const exportDefinition_list = []
        // Only export global definitions
        for (const definition in this.definitions) exportDefinition_list.push(`${definition} = ${this.definitions[definition]}`)
        return `return {\n${indent(exportDefinition_list.join(',\n'))}\n}`
    }

    getDefinition(name: string): (string | undefined) {
        const hiddenDefinition: string | undefined = this.hiddenDefinitions[name]
        if (hiddenDefinition != null) return hiddenDefinition
        const curDefinition: string | undefined = this.definitions[name]
        if (curDefinition != null) return curDefinition
        return undefined
    }

    deriveDefinition(name: string): (string | undefined) {
        const definition = this.getDefinition(name)
        if (definition != null) return definition
        if (this.parentScope != null) {
            const parentDefinition = this.parentScope.deriveDefinition(name)
            if (parentDefinition != null) return parentDefinition
        }
        return undefined
    }

    createDefinitionIfNotExists(name: string, hidden: boolean = false): string {
        const definition = this.getDefinition(name)
        if (definition != null) return definition

        const nname = `${name}_${this.scopeId}_${this.lastDefinitionIdentifier++}`;
        (hidden ? this.hiddenDefinitions : this.definitions)[name] = nname
        return nname
    }

    removeDefinition(name: string): void {
        delete this.hiddenDefinitions[name]
        delete this.definitions[name]
    }

    addDefinition(name: string, definition: string, hidden: boolean = false): void {
        (hidden ? this.hiddenDefinitions : this.definitions)[name] = definition
    }
}

export default class LuaPythonVisitor extends ParseTreeVisitor<string> implements PythonParserVisitor<string> {
    public scopeStack: ScopeData[];
    public lastLoopIdentifier: number;
    public lastScopeIdentifier: number;
    private putBlock: boolean;
    public loopContinueLabel: string = 'LOOP_CONT_';
    public loopBreakLabel: string = 'LOOP_BRK_'

    constructor() {
        super()

        this.lastLoopIdentifier = 0
        this.lastScopeIdentifier = 0
        this.putBlock = false
        const globalScope: ScopeData = new ScopeData(this.lastScopeIdentifier++, ScopeType.GLOBAL, null)
        this.scopeStack = [globalScope]

        // Load the global polyfill definitions
        for (const definition in globalDefinitions) {
            globalScope.addDefinition(definition, globalDefinitions[definition], true)
        }
    }

    // ==============
    // STARTING RULES
    // ==============
    /*
    // Start node
    program: statements? EOF;
    */
    visitProgram(ctx: ProgramContext): string {
        const statements = ctx.statements()
        if (statements != null) {
            let result = polyfills
            result += "\n-- Program content\n"
            const program = this.visit(statements)
            result += this.scopeStack.at(-1)?.createScopeDefinitions() + '\n' // Inject scope definitions
            result += program
            result += '\n\n' + this.scopeStack.at(-1)?.createExportDefinitions()
            return result
        }
        return ''
    }
    // ==================
    // GENERAL STATEMENTS
    // ==================
    /*
    statements: statement+;
    */
    visitStatements(ctx: StatementsContext): string {
        return ctx.statement_list().map((x) => this.visit(x)).filter(x => x.length > 0).join('\n')
    }
    /*
    statement: compound_stmt | simple_stmts;
    */
    visitStatement(ctx: StatementContext): string {
        return this.visit(ctx.getChild(0))
    }
    /*
    simple_stmts
    : simple_stmt (';' simple_stmt)* ';'? NEWLINE
    ;
    */
    visitSimple_stmts(ctx: Simple_stmtsContext): string {
        return ctx.simple_stmt_list().map((x) => this.visit(x)).filter(x => x.length > 0).join(';\n')
    }
    /*
    simple_stmt
    : assignment
    | type_alias
    | star_expressions
    | return_stmt
    | import_stmt
    | raise_stmt
    | 'pass'
    | del_stmt
    | yield_stmt
    | assert_stmt
    | 'break'
    | 'continue'
    | global_stmt
    | nonlocal_stmt;
    */
    visitSimple_stmt(ctx: Simple_stmtContext): string {
        const ch = ctx.getChild(0)
        let ld, scope
        if (ch instanceof TerminalNode) {
            switch (ch.symbol.type) {
                case PythonLexer.PASS:
                    return ''; // in lua there is no pass (it'll just be an empty block)
                case PythonLexer.BREAK:
                    scope = this.scopeStack.at(-1)
                    if (scope == null) throw new Error("Scope not found") // Should never happen
                    if (scope.loopStack.length == 0) throw new Error("SyntaxError: 'break' outside loop")
                    ld = scope.loopStack.at(-1)
                    if (ld == null) throw new Error('Loop not found') // Should absolutely never happen

                    if (ld.tryCount > 0) return 'return nil, 1'
                    if (ld.hasElse) {
                        return `goto ${this.loopBreakLabel}${ld.identifier}` // There is an else block and we should therefore use goto
                    } else {
                        return 'break'
                    }
                case PythonLexer.CONTINUE:
                    scope = this.scopeStack.at(-1)
                    if (scope == null) throw new Error("Scope not found") // Should never happen
                    if (scope.loopStack.length == 0) throw new Error("SyntaxError: 'continue' not properly in loop")
                    ld = scope.loopStack.at(-1)
                    if (ld == null) throw new Error('Loop not found') // Should absolutely never happen

                    if (ld.tryCount > 0) return 'return nil, 2' 
                    return `goto ${this.loopContinueLabel}${ld?.identifier}`
            }
        }
        return this.visit(ch)
    }
    /*
    compound_stmt
    : function_def
    | if_stmt
    | class_def
    | with_stmt
    | for_stmt
    | try_stmt
    | while_stmt
    | match_stmt;
    */
    visitCompound_stmt(ctx: Compound_stmtContext): string {
        return this.visit(ctx.getChild(0))
    }
    // =================
    // SIMPLE STATEMENTS
    // =================
    /*
    assignment
        : name ':' expression ('=' annotated_rhs )?
        | ('(' single_target ')' | single_subscript_attribute_target) ':' expression ('=' annotated_rhs )?
        | (star_targets '=' )+ (yield_expr | star_expressions)
        | single_target augassign (yield_expr | star_expressions);
    */
    visitAssignment(ctx: AssignmentContext): string {
        const name = ctx.name()
        if (name != null) { // name ':' expression ('=' annotated_rhs )?
            /* eg.
                x: int
                y: str = "hello"
            */
            // Ignore the expressions as the types are not supported
            const currentScope = this.scopeStack.at(-1)
            if (currentScope == null) throw new Error("Scope not found")

            const definition = currentScope.createDefinitionIfNotExists(this.visit(ctx.name()))
            const ann_rhs = ctx.annotated_rhs()
            if (ann_rhs == null) return ''
            return `${definition} = ${this.visit(ann_rhs)}`
        }
        const single_target = ctx.single_target()
        if (single_target != null) { // '(' single_target ')' ':' expression ('=' annotated_rhs )?
            // Ignore the expressions as the types are not supported
            const ann_rhs = ctx.annotated_rhs()
            if (ann_rhs == null) return ''
            return `${this.visit(single_target)} = ${this.visit(ann_rhs)}`
        }
        const single_subscript_attribute_target = ctx.single_subscript_attribute_target()
        if (single_subscript_attribute_target != null) { // single_subscript_attribute_target ':' expression ('=' annotated_rhs )?
            /* eg.
                (x): int = 42
                a[0]: float = 3.14
                obj.attr: bool = True
            */
            // Ignore the expressions as the types are not supported
            const ann_rhs = ctx.annotated_rhs()
            if (ann_rhs == null) return ''
            return `${this.visit(single_subscript_attribute_target)} = ${this.visit(ann_rhs)}`
        }
        const star_targets_list = ctx.star_targets_list()
        if (star_targets_list != null && star_targets_list.length > 0) { // (star_targets '=' )+ (yield_expr | star_expressions)
            /* eg.
                x = y = 5
                a, *b = [1, 2, 3, 4]
                x = (yield)
                // NOTE: There can't be two *args but `*a, b` is allowed.
            */
            const star_exprs = ctx.star_expressions()
            if (star_exprs != null && star_exprs.getChildCount() == 1 && (star_exprs.getChild(0) as Star_expressionContext).bitwise_or() != null) {
                throw new Error("SyntaxError: can't use starred expression here")
            }
            const yield_expr = ctx.yield_expr()
            
            const star_targets_list = ctx.star_targets_list()
            let result = `local ass_res = ${this.visit(star_exprs ?? yield_expr)}\n`
            for (const star_targets of star_targets_list) {
                result += `do\n${indent(this.visit(star_targets))}\nend\n`
            }
            return `do\n${indent(result)}end`
        }
        const augassign = ctx.augassign()
        if (augassign != null) { // single_target augassign (yield_expr | star_expressions)
            /* eg.
                x += 1
                a *= b + c
                total -= (yield)
            */
            const sin_target = ctx.single_target()
            const star_exprs = ctx.star_expressions()
            if (star_exprs != null && star_exprs.getChildCount() == 1 && (star_exprs.getChild(0) as Star_expressionContext).bitwise_or() != null) {
                throw new Error("SyntaxError: can't use starred expression here")
            }
            const target = this.visit(sin_target)
            const yield_expr = ctx.yield_expr()

            // augassign needs to be mapped to normal operator
            const augassign_op = ctx.augassign().getChild(0) as TerminalNode
            switch (augassign_op.symbol.type) {
                case PythonLexer.PLUSEQUAL:
                    return `${target} = ${target} + ${this.visit(star_exprs ?? yield_expr)}`
                case PythonLexer.MINEQUAL:
                    return `${target} = ${target} - ${this.visit(star_exprs ?? yield_expr)}`
                case PythonLexer.STAREQUAL:
                    return `${target} = ${target} * ${this.visit(star_exprs ?? yield_expr)}`
                case PythonLexer.SLASHEQUAL:
                    return `${target} = ${target} / ${this.visit(star_exprs ?? yield_expr)}`
                case PythonLexer.PERCENTEQUAL:
                    return `${target} = math.fmod(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.AMPEREQUAL:
                    return `${target} = bit.band(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.VBAREQUAL:
                    return `${target} = bit.bor(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.CIRCUMFLEXEQUAL:
                    return `${target} = bit.bxor(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.LEFTSHIFTEQUAL:
                    return `${target} = bit.lshift(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.RIGHTSHIFTEQUAL:
                    return `${target} = bit.rshift(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.DOUBLESTAREQUAL:
                    return `${target} = math.pow(${target}, ${this.visit(star_exprs ?? yield_expr)})`
                case PythonLexer.DOUBLESLASHEQUAL:
                    return `${target} = math.floor(${target} / ${this.visit(star_exprs ?? yield_expr)})`
                default:
                    throw new Error("Unknown augassign token")
            }
        }
        throw new Error("Unexpected assignment handling")
    }
    /*
    annotated_rhs: yield_expr | star_expressions;
    */
    visitAnnotated_rhs(ctx: Annotated_rhsContext): string {
        const star_exprs = ctx.star_expressions()
        if (star_exprs != null && star_exprs.getChildCount() == 1 && (star_exprs.getChild(0) as Star_expressionContext).bitwise_or() != null) {
            throw new Error("SyntaxError: can't use starred expression here")
        }
        if (star_exprs != null) return this.visit(star_exprs)
        return this.visit(ctx.yield_expr())
    }
    /*
    augassign
    : '+='
    | '-='
    | '*='
    | '@='
    | '/='
    | '%='
    | '&='
    | '|='
    | '^='
    | '<<='
    | '>>='
    | '**='
    | '//=';
    */
    visitAugassign(ctx: AugassignContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("augassign is parsed within assignment")
    }
    /*
    return_stmt : 'return' star_expressions?;
    */
    visitReturn_stmt(ctx: Return_stmtContext): string {
        const currentScope = this.scopeStack.at(-1)
        if (currentScope == null) throw new Error("Scope not found")
        if (currentScope.scopeType != ScopeType.FUNCTION) throw new Error("SyntaxError: 'return' outside function")

        const star_exprs = ctx.star_expressions()
        if (star_exprs != null && star_exprs.getChildCount() == 1 && (star_exprs.getChild(0) as Star_expressionContext).bitwise_or() != null) {
            throw new Error("SyntaxError: can't use starred expression here")
        }
        if (star_exprs == null) return 'return'
        return `return ${this.visit(star_exprs)}`
    }
    /*
    raise_stmt
    : 'raise' (expression ('from' expression )?)?;
    */
    visitRaise_stmt(ctx: Raise_stmtContext): string {
        const expression_list = ctx.expression_list()
        if (expression_list.length == 0) { // raise     [reraise the exception]
            let result = ''
            result += `if uncaught == nil then error('RuntimeError: No active exception to reraise') end`
            // TODO: Exception reraising
            return result
        } else if (expression_list.length == 1) { // raise EXCEPTION
            let result = ''
            result += `error(${this.visit(expression_list[0])})`
            // TODO: Analyse if theres uncaught present
            return result
        } else if (expression_list.length == 2) { // raise EXCEPTION from EXCEPTION
            let result = ''
            result += `error(${this.visit(expression_list[0])})`
            // TODO: Analyse if theres uncaught present
            return result
        }
        throw new Error("Unexpected raise_stmt handling")
    }
    /*
    global_stmt: 'global' name (',' name)*;
    */
    visitGlobal_stmt(ctx: Global_stmtContext): string {
        // Global =  variable from a global scope
        // Need to define it if it does not already exist
        const globalScope = this.scopeStack.at(0)
        const currentScope = this.scopeStack.at(-1)
        if (globalScope == null || currentScope == null) throw new Error("Scope not found")
        
        const name_list = ctx.name_list()
        for (const name of name_list) {
            const txtName = this.visit(name)
            if (currentScope.usedDefinitions.has(txtName)) {
                throw new Error(`SyntaxError: name '${txtName}' is used prior to global declaration`)
            }
            const definition = globalScope.createDefinitionIfNotExists(txtName)
            if (currentScope.hiddenDefinitions[txtName] != null && currentScope.hiddenDefinitions[txtName] != definition) {
                throw new Error(`SyntaxError: name '${txtName}' is nonlocal and global`)
            }
            if (currentScope.getDefinition(txtName) && currentScope != globalScope) {
                throw new Error(`SyntaxError: name '${txtName}' is assigned to before global declaration`)
            }
            // Add hidden definition as it should not be redefined within current scope (unless we are in the global scope)
            if (currentScope != globalScope) currentScope.addDefinition(txtName, definition, true)
        }
        return ''
    }
    /*
    nonlocal_stmt: 'nonlocal' name (',' name)*;
    */
    visitNonlocal_stmt(ctx: Nonlocal_stmtContext): string {
        // Nonlocal = finds a variable in upper scope (except global scope) and applies
        if (this.scopeStack.length <= 1) {
            throw new Error("SyntaxError: nonlocal declaration not allowed at module level")
        }
        const currentScope = this.scopeStack.at(-1)
        if (currentScope == null) throw new Error("Scope not found")

        const name_list = ctx.name_list()
        for (const name of name_list) {
            const txtName = this.visit(name)
            // Find the first applicable scope
            let nameDefinition = undefined
            for (let i = this.scopeStack.length - 2; i > 0; ++i) {
                const scopeDefinition = this.scopeStack[i].getDefinition(txtName)
                if (scopeDefinition != null) {
                    nameDefinition = scopeDefinition
                    break
                }
            }
            if (nameDefinition == null) throw new Error(`SyntaxError: no binding for nonlocal '${txtName}' found`)
            if (currentScope.usedDefinitions.has(txtName)) {
                throw new Error(`SyntaxError: name '${txtName}' is used prior to nonlocal declaration`)
            }
            if (currentScope.hiddenDefinitions[txtName] != null && currentScope.hiddenDefinitions[txtName] != nameDefinition) {
                throw new Error(`SyntaxError: name '${txtName}' is nonlocal and global`)
            }
            if (currentScope.getDefinition(txtName)) {
                throw new Error(`SyntaxError: name '${txtName}' is assigned to before nonlocal declaration`)
            }
            currentScope.addDefinition(txtName, nameDefinition, true)
        }
        return ''
    }
    /*
    del_stmt
    : 'del' del_targets;
    */
    visitDel_stmt(ctx: Del_stmtContext): string {
        return this.visit(ctx.del_targets()) // Everything is created within del_targets
    }
    /*
    yield_stmt: yield_expr;
    */
    visitYield_stmt(ctx: Yield_stmtContext): string {
        return this.visit(ctx.yield_expr())
    }
    /*
    assert_stmt: 'assert' expression (',' expression )?;
    */
    visitAssert_stmt(ctx: Assert_stmtContext): string {
        // https://www.lua.org/pil/8.3.html
        const exprs = ctx.expression_list()
        // This should work fine as Lua also accepts condition as 1st argument and error msg as 2nd
        return `assert(${exprs.map(x => this.visit(x)).join(', ')})`
    }
    /*
    import_stmt
    : import_name
    | import_from;
    */
    visitImport_stmt(ctx: Import_stmtContext): string {
        return this.visit(ctx.getChild(0))
    }
    // -----------------
    // Import statements
    // -----------------
    /*
    import_name: 'import' dotted_as_names;
    */
    visitImport_name(ctx: Import_nameContext): string {
        return 'TODO import_name' // TODO
    }
    /*
    import_from
    : 'from' ('.' | '...')* dotted_name 'import' import_from_targets
    | 'from' ('.' | '...')+ 'import' import_from_targets;
    */
    visitImport_from(ctx: Import_fromContext): string {
        return 'TODO import_from' // TODO
    }
    /*
    import_from_targets
    : '(' import_from_as_names ','? ')'
    | import_from_as_names
    | '*';
    */
    visitImport_from_targets(ctx: Import_from_targetsContext): string {
        return 'TODO import_from_targets' // TODO
    }
    /*
    import_from_as_names
    : import_from_as_name (',' import_from_as_name)*;
    */
    visitImport_from_as_names(ctx: Import_from_as_namesContext): string {
        return 'TODO import_from_as_names' // TODO
    }
    /*
    import_from_as_name
    : name ('as' name )?;
    */
    visitImport_from_as_name(ctx: Import_from_as_nameContext): string {
        return 'TODO import_from_as_name' // TODO
    }
    /*
    dotted_as_names
    : dotted_as_name (',' dotted_as_name)*;
    */
    visitDotted_as_names(ctx: Dotted_as_namesContext): string {
        return 'TODO dotted_as_names' // TODO
    }
    /*
    dotted_as_name
    : dotted_name ('as' name )?;
    */
    visitDotted_as_name(ctx: Dotted_as_nameContext): string {
        return 'TODO dotted_as_name' // TODO
    }
    /*
    dotted_name
    : dotted_name '.' name
    | name;
    */
    visitDotted_name(ctx: Dotted_nameContext): string {
        return 'TODO dotted_name' // TODO
    }
    // ===================
    // COMPOUND STATEMENTS
    // ===================
    // ---------------
    // Common elements
    // ---------------
    /*
    block
    : NEWLINE INDENT statements DEDENT
    | simple_stmts;
    */
    visitBlock(ctx: BlockContext): string {
        const shouldInsertDo = this.putBlock
        this.putBlock = false // Reset

        const stmts = ctx.statements()
        const simple_stmts = ctx.simple_stmts()
        const inner = (stmts != null) ? this.visit(stmts) : this.visit(simple_stmts)
        return shouldInsertDo ? `do\n${indent(inner)}\nend` : inner
    }
    /*
    decorators: ('@' named_expression NEWLINE )+;
    */
    visitDecorators(ctx: DecoratorsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("decorators are parsed within class / function defintions")
    }
    // -----------------
    // Class definitions
    // -----------------
    /*
    class_def
    : decorators class_def_raw
    | class_def_raw;
    */
    visitClass_def(ctx: Class_defContext): string {
        const cdr = ctx.class_def_raw()
        // TODO: Handle decorators
        return this.visit(cdr)
    }
    /*
    class_def_raw
    : 'class' name type_params? ('(' arguments? ')' )? ':' block;
    */
    visitClass_def_raw(ctx: Class_def_rawContext): string {
        // TODO: Handle type_params and arguments
        // TODO: Why is here a standard block???
        let result = `${this.visit(ctx.name())} = setmetatable({\n`
        result += '\n}, {\n'
        result += '\n})'
        return result
    }
    // --------------------
    // Function definitions
    // --------------------
    /*
    function_def
    : decorators function_def_raw
    | function_def_raw;
    */
    visitFunction_def(ctx: Function_defContext): string {
        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Stack not found")

        const funcName = ctx.function_def_raw().name()
        const txtName = this.visit(funcName)
        const definition = cscope.createDefinitionIfNotExists(txtName)

        const fdr = ctx.function_def_raw()
        let result = this.visit(fdr)
        const decorators = ctx.decorators()
        if (decorators != null) {
            const named_expression_list = decorators.named_expression_list()
            for (let i = named_expression_list.length - 1; i >= 0; --i) { // Use in reverse order
                result = `custCall(${this.visit}, ${fdr})`
            }
        }

        return `${definition} = ${result}`
    }
    /*
    function_def_raw
        : 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
        | 'async' 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
    */
    visitFunction_def_raw(ctx: Function_def_rawContext): string {
        const isAsync = ctx.ASYNC() != null
        const params = ctx.params()
        const parsed_params: Param[] = (params != null) ? (new LuaPythonVisitorParamHelper(this)).visit(params) : []
        const kwargs_name = parsed_params.filter(x => x.Kwargs == true).map(x => x.Name)[0]
        const args_name = parsed_params.filter(x => x.Args == true).map(x => x.Name)[0]

        const lua_func_params = []
        if (kwargs_name != null) lua_func_params.push(kwargs_name) // push kwargs as first
        if (args_name != null) lua_func_params.push(args_name) // push args as second
        const rest_args = parsed_params.filter(x => !x.Args && !x.Kwargs)
        lua_func_params.push(...rest_args.map(x => x.Name))

        const lua_rest_args = rest_args.map(x => {
            const props = []
            if (x.Default != null) props.push(`Default = ${x.Default}`)
            props.push(`Name = "${x.Name}"`)
            if (x.OnlyPositional) props.push('OnlyPositional = true')
            if (x.OnlyNamed) props.push('OnlyNamed = true')
            return `{ ${props.join(', ')} }`
        })

        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Stack not found")

        // Assignment to variable is done within function_def
        const nscope = new ScopeData(this.lastScopeIdentifier++, ScopeType.FUNCTION, cscope)
        this.scopeStack.push(nscope)
        // TODO: async
        let result = `defFunction(`
        result += `function (${lua_func_params.map(x => nscope.createDefinitionIfNotExists(x, true)).join(', ')})\n`
        let inner = ''
        //if (isAsync) inner += 'coroutine.create(function()' // TODO
        inner += this.visit(ctx.block())
        /*if (isAsync) {
            inner += 'end)'
            inner = indent(inner)
        }*/
        result += nscope.createScopeDefinitions() + '\n'
        result += inner
        result += `\nend, { ${lua_rest_args.join(', ')} }, ` // argsData
        result += `${(args_name != null) ? 'true' : 'false'}, `
        result += `${(kwargs_name != null) ? 'true' : 'false'})`
        // Ignoring the expression
        this.scopeStack.pop()
        return result
    }
    // -------------------
    // Function parameters
    // -------------------
    /*
    params
    : parameters;
    */
    visitParams(ctx: ParamsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("params is parsed in param helper parser")
    }
    /*
    parameters
    : slash_no_default param_no_default* param_with_default* star_etc?
    | slash_with_default param_with_default* star_etc?
    | param_no_default+ param_with_default* star_etc?
    | param_with_default+ star_etc?
    | star_etc;
    */
    visitParameters(ctx: ParametersContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("parameters is parsed in param helper parser")
    }
    /*
    slash_no_default
        : param_no_default+ '/' ','?;
    */
    visitSlash_no_default(ctx: Slash_no_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("slash_no_default is parsed in param helper parser")
    }
    /*
    slash_with_default
    : param_no_default* param_with_default+ '/' ','?;
    */
    visitSlash_with_default(ctx: Slash_with_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("slash_with_default is parsed in param helper parser")
    }
    /*
    star_etc
    : '*' param_no_default param_maybe_default* kwds?
    | '*' param_no_default_star_annotation param_maybe_default* kwds?
    | '*' ',' param_maybe_default+ kwds?
    | kwds;
    */
    visitStar_etc(ctx: Star_etcContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("star_etc is parsed in param helper parser")
    }
    /*
    kwds
    : '**' param_no_default;
    */
    visitKwds(ctx: KwdsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("kwds is parsed in param helper parser")
    }
    /*
    param_no_default
    : param ','?;
    */
    visitParam_no_default(ctx: Param_no_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("param_no_default is parsed in param helper parser")
    }
    /*
    param_no_default_star_annotation
    : param_star_annotation ','?;
    */
    visitParam_no_default_star_annotation(ctx: Param_no_default_star_annotationContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("param_no_default_star_annotation is parsed in param helper parser")
    }
    /*
    param_with_default
    : param default_assignment ','?;
    */
    visitParam_with_default(ctx: Param_with_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("param_with_default is parsed in param helper parser")
    }
    /*
    param_maybe_default
    : param default_assignment? ','?;
    */
    visitParam_maybe_default(ctx: Param_maybe_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("param_maybe_default is parsed in param helper parser")
    }
    /*
    param: name annotation?;
    */
    visitParam(ctx: ParamContext): string {
        return this.visit(ctx.name()) // Just return the parameter name (skip the annotation as it's not useful)
    }
    /*
    param_star_annotation: name star_annotation;
    */
    visitParam_star_annotation(ctx: Param_star_annotationContext): string {
        return this.visit(ctx.name()) // Just return the parameter name (skip the annotation as it's not useful)
    }
    /*
    annotation: ':' expression;
    */
    visitAnnotation(ctx: AnnotationContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Annotations are not supported and shouldn't be attempted to be parsed.")
    }
    /*
    star_annotation: ':' star_expression;
    */
    visitStar_annotation(ctx: Star_annotationContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Star annotations are not supported and shouldn't be attempted to be parsed.")
    }
    /*
    default_assignment: '=' expression;
    */
    visitDefault_assignment(ctx: Default_assignmentContext): string {
        return this.visit(ctx.expression()) // Return the string expression (used in param parser)
    }
    // ------------
    // If statement
    // ------------
    /*
    if_stmt
    : 'if' named_expression ':' block (elif_stmt | else_block?);
    */
    visitIf_stmt(ctx: If_stmtContext): string {
        let result = `if ${this.visit(ctx.named_expression())} then\n`
        result += this.visit(ctx.block())
        const elif_stmt = ctx.elif_stmt()
        if (elif_stmt != null) result += `\n${this.visit(elif_stmt)}`
        const else_block = ctx.else_block()
        if (else_block != null) result += `else\n${this.visit(else_block)}`
        result += '\nend'
        return result
    }
    /*
    elif_stmt
    : 'elif' named_expression ':' block (elif_stmt | else_block?);
    */
    visitElif_stmt(ctx: Elif_stmtContext): string {
        let result = `elseif ${this.visit(ctx.named_expression())} then\n`
        result += this.visit(ctx.block())
        const elif_stmt = ctx.elif_stmt()
        if (elif_stmt != null) result += `\n${this.visit(elif_stmt)}`
        const else_block = ctx.else_block()
        if (else_block != null) result += `else\n${this.visit(else_block)}`
        // end is already within if_stmt
        return result
    }
    /*
    else_block
    : 'else' ':' block;
    */
    visitElse_block(ctx: Else_blockContext): string {
        return this.visit(ctx.block()) // Only return the block (else should be inserted elsewhere if necessary)
    }
    // ---------------
    // While statement
    // ---------------
    /*
    while_stmt
    : 'while' named_expression ':' block else_block?;
    */
    visitWhile_stmt(ctx: While_stmtContext): string {
        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Scope not found")

        const else_block = ctx.else_block()
        const ld: LoopData = {
            identifier: this.lastLoopIdentifier += 1,
            hasElse: else_block != null,
            tryCount: 0
        }
        cscope.loopStack.push(ld)

        let result = `while ${this.visit(ctx.named_expression())} do\n`
        result += indent(this.visit(ctx.block()))
        result += indent(`::${this.loopContinueLabel}${ld.identifier}::`)
        result += '\nend'
        if (ld.hasElse) {
            this.putBlock = true // adds the `do`, `end` block
            result += this.visit(else_block)
            result += `::${this.loopBreakLabel}${ld.identifier}::`
        }

        cscope.loopStack.pop()
        return result
    }
    // -------------
    // For statement
    // -------------
    /*
    for_stmt
    : 'async'? 'for' star_targets 'in' star_expressions ':' block else_block?;
    */
    visitFor_stmt(ctx: For_stmtContext): string {
        // https://stackoverflow.com/questions/56161595/how-to-use-async-for-in-python
        const isAsync = ctx.ASYNC() != null
        const iterFunc = isAsync ? 'aiter' : 'iter'
        const nextFunc = isAsync ? 'anext' : 'next' // TODO: Technically its `await anext`
        const stopiterClass = isAsync ? 'StopIteration' : 'StopAsyncIteration'

        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Scope not found")

        const else_block = ctx.else_block()
        const ld: LoopData = {
            identifier: this.lastLoopIdentifier += 1,
            hasElse: else_block != null,
            tryCount: 0
        }
        cscope.loopStack.push(ld)

        let result = `local it = ${iterFunc}(${this.visit(ctx.star_expressions())})\n`
        result += 'while true do\n'
        let inner = ''
        inner += 'local suc, ret = pcall(function()\n'
        inner += indent(`local ass_res = ${nextFunc}(it)`) + '\n'
        inner += indent(this.visit(ctx.star_targets())) + '\n'
        inner += 'end)'
        inner += `if suc == false and ret ~= nil and instanceof(ret, ${stopiterClass}) then ${ld.hasElse ? `goto ${this.loopBreakLabel}${ld.identifier}` : 'break'} end`
        inner += this.visit(ctx.block())
        result += indent(inner)
        result += indent(`::${this.loopContinueLabel}${ld.identifier}::`)
        result += '\nend'
        if (ld.hasElse) {
            this.putBlock = true
            result += this.visit(else_block)
            result += `::${this.loopBreakLabel}${ld.identifier}::`
        }
        
        cscope.loopStack.pop()
        return result
    }
    // --------------
    // With statement
    // --------------
    /*
    with_stmt
    : 'with' '(' with_item (',' with_item)* ','? ')' ':' block
    | 'async' 'with' '(' with_item (',' with_item)* ','? ')' ':' block
    | 'async'? 'with' with_item (',' with_item)* ':' block
    ;
    */
    visitWith_stmt(ctx: With_stmtContext): string {
        return 'TODO with_stmt' // TODO
    }
    /*
    with_item
    : expression ('as' star_target)?;
    */
    visitWith_item(ctx: With_itemContext): string {
        return 'TODO with_item' // TODO
    }
    // -------------
    // Try statement
    // -------------
    /*
    try_stmt
    : 'try' ':' block finally_block
    | 'try' ':' block except_block+ else_block? finally_block?
    | 'try' ':' block except_star_block+ else_block? finally_block?;
    */
    visitTry_stmt(ctx: Try_stmtContext): string {
        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Scope not found")
        const loopData: LoopData | undefined = cscope.loopStack.at(-1)
        
        if (loopData != null) loopData.tryCount += 1
        let res = 'local trysucc, tryres, specAct = pcall(function ()\n'
        {
            let innerRes = `local trysucc, tryres, specAct = pcall(function()\n`
            innerRes += indent(this.visit(ctx.block()))
            innerRes += '\nend)\n'
            innerRes += 'if trysucc == false then\n'
            let inner = 'local uncaught = tryres\n'
            const except_block_list = ctx.except_block_list() ?? ctx.except_star_block_list()
            for (const except_block of except_block_list) {
                inner += this.visit(except_block)
            }
            inner += 'if uncaught ~= nil then error(uncaught) end' // Rethrow by default
            innerRes += indent(inner)
            innerRes += '\nelse\n'
            innerRes += indent('if tryres ~= nil then return tryres end') + '\n' // Repeat return from inside the function
            innerRes += indent(`if specAct ~= nil then return nil, specAct end`) + '\n' // This will always be in try func
            const else_block = ctx.else_block()
            if (else_block != null) {
                innerRes += indent(this.visit(else_block)) + '\n'
            }
            innerRes += 'end'
            res += indent(innerRes)
        }
        res += '\nend)\n'
        if (loopData != null) loopData.tryCount -= 1

        const finally_block = ctx.finally_block() // Handle finally block
        if (finally_block != null) res += indent(this.visit(finally_block)) + '\n'
        // Replicate result of the try except else
        res += 'if trysuc == true then\n'
        res += indent('if tryres ~= nil then return tryres end') + '\n' // Repeat return if the function inside has returned
        if (loopData != null) {
            let innerRes = 'if specAct ~= nil then\n'
            let inner = ''
            if (loopData.tryCount == 0) { // Need to handle it here
                inner += `if specAct == 1 then ${loopData.hasElse ? `goto ${this.loopBreakLabel}${loopData.identifier}` : 'break'} end` // Break
                inner += `if specAct == 2 then goto ${this.loopContinueLabel}${loopData.identifier} end` // Continue
            } else { // Replicate back
                inner += 'return nil, specAct'
            }
            innerRes += indent(inner)
            innerRes += '\nend'
            res += indent(innerRes) + '\n'
        }
        res += 'else\n'
        res += indent('error(tryres)')
        res += '\nend'
        return res
    }
    // ----------------
    // Except statement
    // ----------------
    /*
    except_block
    : 'except' (expression ('as' name )?)? ':' block;
    */
    visitExcept_block(ctx: Except_blockContext): string {
        const expression = ctx.expression()
        const name = ctx.name()
        const block = ctx.block()
        
        let result = `if uncaught ~= nil and custCall(instanceof, uncaught, ${this.visit(expression)}) then\n`
        let inner = ''
        if (name != null) {
            const cscope = this.scopeStack.at(-1)
            if (cscope == null) throw new Error("Scope not found")
            const txtName = this.visit(name)
            const definition = cscope.createDefinitionIfNotExists(txtName, true)
            inner += `${definition} = uncaught\n`
            inner += indent(this.visit(block))
            inner += `\nuncaught = nil\n`
            inner += `${definition} = nil` // I don't know why; it just works this way
        }
        result += indent(inner)
        result += '\nend'
        return result
    }
    /*
    except_star_block
    : 'except' '*' expression ('as' name )? ':' block;
    */
    visitExcept_star_block(ctx: Except_star_blockContext): string {
        return 'TODO except_star_block' // TODO
    }
    /*
    finally_block
    : 'finally' ':' block;
    */
    visitFinally_block(ctx: Finally_blockContext): string {
        return this.visit(ctx.block())
    }
    // ---------------
    // Match statement
    // ---------------
    /*
    match_stmt
    : 'match' subject_expr ':' NEWLINE INDENT case_block+ DEDENT;
    */
    visitMatch_stmt(ctx: Match_stmtContext): string {
        return 'TODO match_stmt' // TODO
    }
    /*
    subject_expr
    : star_named_expression ',' star_named_expressions?
    | named_expression;
    */
    visitSubject_expr(ctx: Subject_exprContext): string {
        return 'TODO subject_expr' // TODO
    }
    /*
    case_block
    : 'case' patterns guard? ':' block;
    */
    visitCase_block(ctx: Case_blockContext): string {
        return 'TODO case_block' // TODO
    }
    /*
    guard: 'if' named_expression;
    */
    visitGuard(ctx: GuardContext): string {
        return 'TODO guard' // TODO
    }
    /*
    patterns
    : open_sequence_pattern
    | pattern;
    */
    visitPatterns(ctx: PatternsContext): string {
        return 'TODO patterns' // TODO
    }
    /*
    pattern
    : as_pattern
    | or_pattern;
    */
    visitPattern(ctx: PatternContext): string {
        return 'TODO pattern' // TODO
    }
    /*
    as_pattern
    : or_pattern 'as' pattern_capture_target;
    */
    visitAs_pattern(ctx: As_patternContext): string {
        return 'TODO as_pattern' // TODO
    }
    /*
    or_pattern
    : closed_pattern ('|' closed_pattern)*;
    */
    visitOr_pattern(ctx: Or_patternContext): string {
        return 'TODO or_pattern' // TODO
    }
    /*
    closed_pattern
    : literal_pattern
    | capture_pattern
    | wildcard_pattern
    | value_pattern
    | group_pattern
    | sequence_pattern
    | mapping_pattern
    | class_pattern;
    */
    visitClosed_pattern(ctx: Closed_patternContext): string {
        return this.visit(ctx.getChild(0))
    }
    /*
    literal_pattern
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';
    */
    visitLiteral_pattern(ctx: Literal_patternContext): string {
        const lit = ctx.getChild(0)
        if (lit instanceof TerminalNode) {
            switch (lit.symbol.type) {
                case PythonLexer.NONE:
                    return 'None'
                case PythonLexer.TRUE:
                    return 'true'
                case PythonLexer.FALSE:
                    return 'false'
            }
        }
        return this.visit(lit)
    }
    /*
    literal_expr
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';
    */
    visitLiteral_expr(ctx: Literal_exprContext): string {
        const lit = ctx.getChild(0)
        if (lit instanceof TerminalNode) {
            switch (lit.symbol.type) {
                case PythonLexer.NONE:
                    return 'None'
                case PythonLexer.TRUE:
                    return 'true'
                case PythonLexer.FALSE:
                    return 'false'
            }
        }
        return this.visit(lit)
    }
    /*
    complex_number
    : signed_real_number ('+' | '-') imaginary_number;
    */
    visitComplex_number(ctx: Complex_numberContext): string {
        return 'TODO complex_number' // TODO
    }
    /*
    signed_number
    : '-'? NUMBER;
    */
    visitSigned_number(ctx: Signed_numberContext): string {
        const minus = ctx.MINUS()
        const num = ctx.NUMBER()
        if (minus != null) return `-${this.visit(num)}`
        return this.visit(num)
    }
    /*
    signed_real_number
    : '-'? real_number;
    */
    visitSigned_real_number(ctx: Signed_real_numberContext): string {
        const minus = ctx.MINUS()
        const realnum = ctx.real_number()
        if (minus != null) return `-${this.visit(realnum)}`
        return this.visit(realnum)
    }
    /*
    real_number
    : NUMBER;
    */
    visitReal_number(ctx: Real_numberContext): string {
        return ctx.NUMBER().getText()
    }
    /*
    imaginary_number
    : NUMBER;
    */
    visitImaginary_number(ctx: Imaginary_numberContext): string {
        return 'TODO imaginary_number' // TODO
    }
    /*
    capture_pattern
    : pattern_capture_target;
    */
    visitCapture_pattern(ctx: Capture_patternContext): string {
        return 'TODO capture_pattern' // TODO
    }
    /*
    pattern_capture_target
    : name_except_underscore;
    */
    visitPattern_capture_target(ctx: Pattern_capture_targetContext): string {
        return 'TODO pattern_capture_target' // TODO
    }
    /*
    wildcard_pattern
    : '_';
    */
    visitWildcard_pattern(ctx: Wildcard_patternContext): string {
        return 'TODO wildcard_pattern' // TODO
    }
    /*
    value_pattern
    : attr;
    */
    visitValue_pattern(ctx: Value_patternContext): string {
        return 'TODO value_pattern' // TODO
    }
    /*
    attr
    : name ('.' name)+;
    */
    visitAttr(ctx: AttrContext): string {
        return ctx.name_list().map(x => this.visit(x)).join('.')
    }
    /*
    name_or_attr
    : name ('.' name)*;
    */
    visitName_or_attr(ctx: Name_or_attrContext): string {
        return ctx.name_list().map(x => this.visit(x)).join('.')
    }
    /*
    group_pattern
    : '(' pattern ')';
    */
    visitGroup_pattern(ctx: Group_patternContext): string {
        return 'TODO group_pattern' // TODO
    }
    /*
    sequence_pattern
    : '[' maybe_sequence_pattern? ']'
    | '(' open_sequence_pattern? ')';
    */
    visitSequence_pattern(ctx: Sequence_patternContext): string {
        return 'TODO sequence_pattern' // TODO
    }
    /*
    open_sequence_pattern
    : maybe_star_pattern ',' maybe_sequence_pattern?;
    */
    visitOpen_sequence_pattern(ctx: Open_sequence_patternContext): string {
        return 'TODO open_sequence_pattern' // TODO
    }
    /*
    maybe_sequence_pattern
    : maybe_star_pattern (',' maybe_star_pattern)* ','?;
    */
    visitMaybe_sequence_pattern(ctx: Maybe_sequence_patternContext): string {
        return 'TODO maybe_sequence_pattern' // TODO
    }
    /*
    maybe_star_pattern
    : star_pattern
    | pattern;
    */
    visitMaybe_star_pattern(ctx: Maybe_star_patternContext): string {
        return 'TODO maybe_star_pattern' // TODO
    }
    /*
    star_pattern
    : '*' name;
    */
    visitStar_pattern(ctx: Star_patternContext): string {
        return 'TODO star_pattern' // TODO
    }
    /*
    mapping_pattern
    : LBRACE RBRACE
    | LBRACE double_star_pattern ','? RBRACE
    | LBRACE items_pattern (',' double_star_pattern)? ','? RBRACE;
    */
    visitMapping_pattern(ctx: Mapping_patternContext): string {
        return 'TODO mapping_pattern' // TODO
    }
    /*
    items_pattern
    : key_value_pattern (',' key_value_pattern)*;
    */
    visitItems_pattern(ctx: Items_patternContext): string {
        return 'TODO items_pattern' // TODO
    }
    /*
    key_value_pattern
    : (literal_expr | attr) ':' pattern;
    */
    visitKey_value_pattern(ctx: Key_value_patternContext): string {
        return 'TODO key_value_pattern' // TODO
    }
    /*
    double_star_pattern
    : '**' pattern_capture_target;
    */
    visitDouble_star_pattern(ctx: Double_star_patternContext): string {
        return 'TODO double_star_pattern' // TODO
    }
    /*
    class_pattern
    : name_or_attr '(' ((positional_patterns (',' keyword_patterns)? | keyword_patterns) ','?)? ')';
    */
    visitClass_pattern(ctx: Class_patternContext): string {
        return 'TODO class_pattern' // TODO
    }
    /*
    positional_patterns
    : pattern (',' pattern)*;
    */
    visitPositional_patterns(ctx: Positional_patternsContext): string {
        return 'TODO positional_patterns' // TODO
    }
    /*
    keyword_patterns
    : keyword_pattern (',' keyword_pattern)*;
    */
    visitKeyword_patterns(ctx: Keyword_patternsContext): string {
        return 'TODO keyword_patterns' // TODO
    }
    /*
    keyword_pattern
    : name '=' pattern;
    */
    visitKeyword_pattern(ctx: Keyword_patternContext): string {
        return 'TODO keyword_pattern' // TODO
    }
    // --------------
    // Type statement
    // --------------
    /*
    type_alias
    : 'type' name type_params? '=' expression;
    */
    visitType_alias(ctx: Type_aliasContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        return '' // Types are ignored as they don't exist within lua
    }
    // --------------------------
    // Type parameter declaration
    // --------------------------
    /*
    type_params: '[' type_param_seq  ']';
    */
    visitType_params(ctx: Type_paramsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    /*
    type_param_seq: type_param (',' type_param)* ','?;
    */
    visitType_param_seq(ctx: Type_param_seqContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    /*
    type_param
    : name type_param_bound? type_param_default?
    | '*'  name type_param_starred_default?
    | '**' name type_param_default?;
    */
    visitType_param(ctx: Type_paramContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    /*
    type_param_bound: ':' expression;
    */
    visitType_param_bound(ctx: Type_param_boundContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    /*
    type_param_default: '=' expression;
    */
    visitType_param_default(ctx: Type_param_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    /*
    type_param_starred_default: '=' star_expression;
    */
    visitType_param_starred_default(ctx: Type_param_starred_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Types are not implemented and should not be called.")
    }
    // -----------
    // EXPRESSIONS
    // -----------
    /*
    expressions
    : expression (',' expression )* ','?;
    */
    visitExpressions(ctx: ExpressionsContext): string {
        // This seems to only be used within eval
        const exprs = ctx.expression_list()
        if (ctx.getChildCount() > 1) { // If there is more than 1 value OR there is last ',', then the star expression becomes a tuple
            return `tableMerge(${
                exprs.map((x) => `table.pack(${this.visit(x)})`).join(", ")
            })`
        }
        return this.visit(exprs[0])
    }
    /*
    expression
    : disjunction ('if' disjunction 'else' expression)?
    | lambdef;
    */
    visitExpression(ctx: ExpressionContext): string {
        const lambdef = ctx.lambdef()
        if (lambdef != null) return this.visit(lambdef)
        
        const expr = ctx.expression()
        if (expr != null) return `shortHandIf(${this.visit(ctx.getChild(2))}, ${this.visit(ctx.getChild(0))}, ${this.visit(expr)})`
        return this.visit(ctx.getChild(0))
    }
    /*
    yield_expr
    : 'yield' ('from' expression | star_expressions?);
    */
    visitYield_expr(ctx: Yield_exprContext): string {
        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("No scope found")
        cscope.usesYield = true
        
        const star_exprs = ctx.star_expressions()
        if (star_exprs != null && star_exprs.getChildCount() == 1 && (star_exprs.getChild(0) as Star_expressionContext).bitwise_or() != null) {
            throw new Error("SyntaxError: can't use starred expression here")
        }
        const expression = ctx.expression()
        if (expression != null) {
            // TODO: yield from essentially does for on expression and yields every value; it returns the value returned by expression (if its a function)
        }
        return `coroutine.yield(${(expression != null) ? this.visit(expression) : ''})`
    }
    /*
    star_expressions
    : star_expression (',' star_expression )* ','?;
    */
    visitStar_expressions(ctx: Star_expressionsContext): string { 
        // star_named_expressions DOES NOT allow := expressions
        const starExprs = ctx.star_expression_list()
        if (ctx.getChildCount() > 1) { // If there is more than 1 value OR there is last ',', then the star expression becomes a tuple
            return `tableMerge(${
                starExprs.map((x) => `table.pack(${this.visit(x)})`).join(", ")
            })`
        }
        return this.visit(starExprs[0])
    }
    /*
    star_expression
    : '*' bitwise_or
    | expression;
    */
    visitStar_expression(ctx: Star_expressionContext): string {
        const expr = ctx.expression()
        if (expr != null) return this.visit(expr)
        return `table.unpack(${this.visit(ctx.bitwise_or())})`
    }
    /*
    star_named_expressions: star_named_expression (',' star_named_expression)* ','?;
    */
    visitStar_named_expressions(ctx: Star_named_expressionsContext): string {
        // star_named_expressions allows := expressions
        const starNamedExprs = ctx.star_named_expression_list()
        if (ctx.getChildCount() > 1) { // If there is more than 1 value OR there is last ',', then the star expression becomes a tuple
            return `tableMerge(${
                starNamedExprs.map((x) => `table.pack(${this.visit(x)})`).join(", ")
            })`
        }
        return this.visit(starNamedExprs[0])
    }
    /*
    star_named_expression
    : '*' bitwise_or
    | named_expression;
    */
    visitStar_named_expression(ctx: Star_named_expressionContext): string {
        const namedExpr = ctx.named_expression()
        if (namedExpr != null) return this.visit(namedExpr)
        return `table.unpack(${this.visit(ctx.bitwise_or())})`
    }
    /*
    assignment_expression
    : name ':=' expression;
    */
    visitAssignment_expression(ctx: Assignment_expressionContext): string {
        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Scope not found")

        const name = ctx.name()
        const txtName = this.visit(name)

        let result = `function() `
        result += `local v = ${this.visit(ctx.expression())}; `
        result += `${cscope.createDefinitionIfNotExists(txtName)} = v; `
        result += 'return v '
        result += 'end)'
        return result
    }
    /*
    named_expression
    : assignment_expression
    | expression;
    */
    visitNamed_expression(ctx: Named_expressionContext): string {
        return this.visit(ctx.getChild(0))
    }
    /*
    disjunction
    : conjunction ('or' conjunction )*;
    */
    visitDisjunction(ctx: DisjunctionContext): string {
        return ctx.conjunction_list().map(x => this.visit(x)).join(' or ')
    }
    /*
    conjunction
    : inversion ('and' inversion )*;
    */
    visitConjunction(ctx: ConjunctionContext): string {
        return ctx.inversion_list().map(x => this.visit(x)).join(' and ')
    }
    /*
    inversion
    : 'not' inversion
    | comparison;
    */
    visitInversion(ctx: InversionContext): string {
        const inv = ctx.inversion()
        if (inv != null) return `not ${this.visit(inv)}`
        return this.visit(ctx.comparison())
    }
    // --------------------
    // Comparison operators
    // --------------------
    /*
    comparison
    : bitwise_or compare_op_bitwise_or_pair*;
    */
    visitComparison(ctx: ComparisonContext): string {
        let result = this.visit(ctx.bitwise_or())

        for (const cop_bop of ctx.compare_op_bitwise_or_pair_list()) {
            const eq_bor = cop_bop.eq_bitwise_or()
            if (eq_bor != null) {
                result = `(${result} == ${this.visit(eq_bor.bitwise_or())})`
                continue
            }
            const noteq_bor = cop_bop.noteq_bitwise_or()
            if (noteq_bor != null) {
                result = `(${result} ~= ${this.visit(noteq_bor.bitwise_or())})`
                continue
            }
            const lte_bor = cop_bop.lte_bitwise_or()
            if (lte_bor != null) {
                result = `(${result} <= ${this.visit(lte_bor.bitwise_or())})`
                continue
            }
            const lt_bor = cop_bop.lt_bitwise_or()
            if (lt_bor != null) {
                result = `(${result} < ${this.visit(lt_bor.bitwise_or())})`
                continue
            }
            const gte_bor = cop_bop.gte_bitwise_or()
            if (gte_bor != null) {
                result = `(${result} >= ${this.visit(gte_bor.bitwise_or())})`
                continue
            }
            const gt_bor = cop_bop.gt_bitwise_or()
            if (gt_bor != null) {
                result = `(${result} > ${this.visit(gt_bor.bitwise_or())})`
                continue
            }
            const notin_bor = cop_bop.notin_bitwise_or()
            if (notin_bor != null) {
                result = `not in_operator(${result}, ${this.visit(notin_bor.bitwise_or())})`
                continue
            }
            const in_bor = cop_bop.in_bitwise_or()
            if (notin_bor != null) {
                result = `in_operator(${result}, ${this.visit(in_bor.bitwise_or())})`
                continue
            }
            const notis_bor = cop_bop.isnot_bitwise_or()
            if (notis_bor != null) {
                result = `not is_operator(${result}, ${this.visit(notis_bor.bitwise_or())})`
                continue
            }
            const is_bor = cop_bop.is_bitwise_or()
            if (is_bor != null) {
                result = `is_operator(${result}, ${this.visit(is_bor.bitwise_or())})`
                continue
            }
            throw new Error("Unknown comparison handling")
        }
        return result
    }
    /*
    compare_op_bitwise_or_pair
    : eq_bitwise_or
    | noteq_bitwise_or
    | lte_bitwise_or
    | lt_bitwise_or
    | gte_bitwise_or
    | gt_bitwise_or
    | notin_bitwise_or
    | in_bitwise_or
    | isnot_bitwise_or
    | is_bitwise_or;
    */
    visitCompare_op_bitwise_or_pair(ctx: Compare_op_bitwise_or_pairContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("compare_op_bitwise_or_pair is parsed within comparison")
    }
    /*
    eq_bitwise_or: '==' bitwise_or;
    */
    visitEq_bitwise_or(ctx: Eq_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("eq_bitwise_or is parsed within comparison")
    }
    /*
    noteq_bitwise_or
    : ('!=' ) bitwise_or;
    */
    visitNoteq_bitwise_or(ctx: Noteq_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("noteq_bitwise_or is parsed within comparison")
    }
    /*
    lte_bitwise_or: '<=' bitwise_or;
    */
    visitLte_bitwise_or(ctx: Lte_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lte_bitwise_or is parsed within comparison")
    }
    /*
    lt_bitwise_or: '<' bitwise_or;
    */
    visitLt_bitwise_or(ctx: Lt_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lt_bitwise_or is parsed within comparison")
    }
    /*
    gte_bitwise_or: '>=' bitwise_or;
    */
    visitGte_bitwise_or(ctx: Gte_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("gte_bitwise_or is parsed within comparison")
    }
    /*
    gt_bitwise_or: '>' bitwise_or;
    */
    visitGt_bitwise_or(ctx: Gt_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("gt_bitwise_or is parsed within comparison")
    }
    /*
    notin_bitwise_or: 'not' 'in' bitwise_or;
    */
    visitNotin_bitwise_or(ctx: Notin_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("notin_bitwise_or is parsed within comparison")
    }
    /*
    in_bitwise_or: 'in' bitwise_or;
    */
    visitIn_bitwise_or(ctx: In_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("in_bitwise_or is parsed within comparison")
    }
    /*
    isnot_bitwise_or: 'is' 'not' bitwise_or;
    */
    visitIsnot_bitwise_or(ctx: Isnot_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("isnot_bitwise_or is parsed within comparison")
    }
    /*
    is_bitwise_or: 'is' bitwise_or;
    */
    visitIs_bitwise_or(ctx: Is_bitwise_orContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("is_bitwise_or is parsed within comparison")
    }
    // -----------------
    // Bitwise operators
    // -----------------
    /*
    bitwise_or
    : bitwise_or '|' bitwise_xor
    | bitwise_xor;
    */
    visitBitwise_or(ctx: Bitwise_orContext): string {
        const bitOr = ctx.bitwise_or()
        const bitXor = ctx.bitwise_xor()
        if (bitOr != null) return `bit.bor(${this.visit(bitOr)}, ${this.visit(bitXor)})`
        return this.visit(bitXor)
    }
    /*
    bitwise_xor
    : bitwise_xor '^' bitwise_and
    | bitwise_and;
    */
    visitBitwise_xor(ctx: Bitwise_xorContext): string {
        const bitXor = ctx.bitwise_xor()
        const bitAnd = ctx.bitwise_and()
        if (bitXor != null) return `bit.bxor(${this.visit(bitXor)}, ${this.visit(bitAnd)})`
        return this.visit(bitAnd)
    }
    /*
    bitwise_and
    : bitwise_and '&' shift_expr
    | shift_expr;
    */
    visitBitwise_and(ctx: Bitwise_andContext): string {
        const bitAnd = ctx.bitwise_and()
        const shiftExpr = ctx.shift_expr()
        if (bitAnd != null) return `bit.band(${this.visit(bitAnd)}, ${this.visit(shiftExpr)})`
        return this.visit(shiftExpr)
    }
    /*
    shift_expr
    : shift_expr ('<<' | '>>') sum
    | sum;
    */
    visitShift_expr(ctx: Shift_exprContext): string {
        const shiftExpr = ctx.shift_expr()
        const sum = ctx.sum()
        if (shiftExpr != null) {
          const op = ctx.getChild(1) as TerminalNode
          switch (op.symbol.type) {
            case PythonLexer.LEFTSHIFT:
              return `bit.lshift(${this.visit(shiftExpr)}, ${this.visit(sum)})`
            case PythonLexer.RIGHTSHIFT:
              return `bit.rshift(${this.visit(shiftExpr)}, ${this.visit(sum)})`
          }
        }
        return this.visit(sum)
    }
    // --------------------
    // Arithmetic operators
    // --------------------
    /*
    sum
    : sum ('+' | '-') term
    | term;
    */
    visitSum(ctx: SumContext): string {
        const sum = ctx.sum()
        const term = ctx.term()
        if (sum != null) {
            const op = ctx.getChild(1) as TerminalNode
            switch (op.symbol.type) {
                case PythonLexer.PLUS:
                    return `${this.visit(sum)} + ${this.visit(term)}`
                case PythonLexer.MINUS:
                    return `${this.visit(sum)} - ${this.visit(term)}`
            }
        }
        return this.visit(term)
    }
    /*
    term
    : term ('*' | '/' | '//' | '%' | '@') factor
    | factor;
    */
    visitTerm(ctx: TermContext): string {
        const term = ctx.term()
        const factor = ctx.factor()
        if (term != null) {
            const op = ctx.getChild(1) as TerminalNode
            switch (op.symbol.type) {
                case PythonLexer.STAR:
                    return `${this.visit(term)} * ${this.visit(factor)}`
                case PythonLexer.SLASH:
                    return `${this.visit(term)} / ${this.visit(factor)}`
                case PythonLexer.DOUBLESLASH:
                    return `${this.visit(term)} // ${this.visit(factor)}` // Lua 5.3+
                case PythonLexer.PERCENT:
                    return `math.fmod(${this.visit(term)}, ${this.visit(factor)})`
                case PythonLexer.AT:
                    throw new Error("@ operator is not supported in Lua") // TODO: Implement using classes
            }
        }
        return this.visit(factor)
    }
    /*
    factor
    : '+' factor
    | '-' factor
    | '~' factor
    | power;
    */
    visitFactor(ctx: FactorContext): string {
        const factor = ctx.factor()
        if (factor != null) {
            const op = ctx.getChild(0) as TerminalNode
            switch (op.symbol.type) {
                case PythonLexer.PLUS:
                    return this.visit(factor)
                case PythonLexer.MINUS:
                    return `-(${this.visit(factor)})`
                case PythonLexer.TILDE:
                    return `bit.bnot(${this.visit(factor)})`
            }
        }
        return this.visit(ctx.power())
    }
    /*
    power
    : await_primary ('**' factor)?;
    */
    visitPower(ctx: PowerContext): string {
        const factor = ctx.factor()
        const awaitPrim = ctx.await_primary()
        if (factor != null) {
            return `math.pow(${this.visit(awaitPrim)}, ${this.visit(factor)})`
        }
        return this.visit(awaitPrim)
    }
    // ----------------
    // Primary elements
    // ----------------
    /*
    await_primary
    : 'await' primary
    | primary;
    */
    visitAwait_primary(ctx: Await_primaryContext): string {
        // TODO: Await?
        return this.visit(ctx.primary())
    }
    /*
    primary
    : primary ('.' name | genexp | '(' arguments? ')' | '[' slices ']')
    | atom;
    */
    visitPrimary(ctx: PrimaryContext): string {
        const atom = ctx.atom()
        if (atom != null) return this.visit(atom)
        const primary = ctx.primary()
        if (primary != null) {
            const name = ctx.name()
            if (name != null) return `${this.visit(primary)}.__getattr__(${this.visit(name)})`
            const slices = ctx.slices()
            if (slices != null) return `${this.visit(primary)}.__getitem__(${this.visit(slices)})`
            // TODO: genexp
            const args = ctx.arguments()
            return `${this.visit(primary)}(${(args != null) ? this.visit(args) : '{}, {}'})`
        }
        throw new Error("Unexpected primary handling")
    }
    /*
    slices
    : slice
    | (slice | starred_expression) (',' (slice | starred_expression))* ','?;
    */
    visitSlices(ctx: SlicesContext): string {
        return 'TODO slices' // TODO
    }
    /*
    slice
    : expression? ':' expression? (':' expression? )?
    | named_expression;
    */
    visitSlice(ctx: SliceContext): string {
        const named_expr = ctx.named_expression()
        if (named_expr != null) return this.visit(named_expr)
        const expression_list = ctx.expression_list()
        return 'TODO'
    }
    /*
    atom
    : name
    | 'True'
    | 'False'
    | 'None'
    | strings
    | NUMBER
    | (tuple | group | genexp)
    | (list | listcomp)
    | (dict | set | dictcomp | setcomp)
    | '...';
    */
    visitAtom(ctx: AtomContext): string {
        const t = ctx.getChild(0)
        if (t instanceof TerminalNode) {
            switch (t.symbol.type) {
                case PythonLexer.NONE:
                    return 'None'
                case PythonLexer.TRUE:
                    return 'true'
                case PythonLexer.FALSE:
                    return 'false'
                case PythonLexer.NUMBER:
                    return t.getText() // TODO: Check number lexing if any adjustments have to be made
                case PythonLexer.ELLIPSIS:
                    return 'Ellipsis'
            }
        }

        const name = ctx.name()
        if (name != null) { // Need to parse as a variable
            const txtName = this.visit(name)
            const cscope = this.scopeStack.at(-1)
            if (cscope == null) throw new Error("Scope not found")

            const definition = cscope.deriveDefinition(txtName) ?? cscope.createDefinitionIfNotExists(txtName)
            cscope.usedDefinitions.add(txtName)
            return `getOrErr(${definition}, '${txtName}', ${(cscope.scopeType == ScopeType.GLOBAL) ? 'false' : 'true'})`
        }

        return this.visit(ctx.getChild(0))
    }
    /*
    group
    : '(' (yield_expr | named_expression) ')';
    */
    visitGroup(ctx: GroupContext): string {
        return `(${this.visit(ctx.getChild(1))})`
    }
    // ----------------
    // Lambda functions
    // ----------------
    /*
    lambdef
    : 'lambda' lambda_params? ':' expression;
    */
    visitLambdef(ctx: LambdefContext): string {
        const lambda_params = ctx.lambda_params()
        const parsed_params: Param[] = (lambda_params != null) ? (new LuaPythonVisitorParamHelper(this)).visit(lambda_params) : []
        const kwargs_name = parsed_params.filter(x => x.Kwargs == true).map(x => x.Name)[0]
        const args_name = parsed_params.filter(x => x.Args == true).map(x => x.Name)[0]

        const lua_func_params = []
        if (kwargs_name != null) lua_func_params.push(kwargs_name) // push kwargs as first
        if (args_name != null) lua_func_params.push(args_name) // push args as second
        const rest_args = parsed_params.filter(x => !x.Args && !x.Kwargs)
        lua_func_params.push(...rest_args.map(x => x.Name))

        const lua_rest_args = rest_args.map(x => {
            const props = []
            if (x.Default != null) props.push(`Default = ${x.Default}`)
            props.push(`Name = "${x.Name}"`)
            if (x.OnlyPositional) props.push('OnlyPositional = true')
            if (x.OnlyNamed) props.push('OnlyNamed = true')
            return `{ ${props.join(', ')} }`
        })

        const cscope = this.scopeStack.at(-1)
        if (cscope == null) throw new Error("Stack not found")
            
        const nscope = new ScopeData(this.lastScopeIdentifier++, ScopeType.FUNCTION, cscope)
        this.scopeStack.push(nscope)

        let result = `defFunction(\n`
        result += `function (${lua_func_params.map(x => nscope.createDefinitionIfNotExists(x, true)).join(', ')})\n`
        const inner = this.visit(ctx.expression())
        result += nscope.createScopeDefinitions() + '\n'
        result += inner
        result += `\nend, { ${lua_rest_args.join(', ')} }, ` // argsData
        result += `${(args_name != null) ? 'true' : 'false'}, `
        result += `${(kwargs_name != null) ? 'true' : 'false'})`
        this.scopeStack.pop()
        return result
    }
    /*
    lambda_params
    : lambda_parameters;
    */
    visitLambda_params(ctx: Lambda_paramsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_params is parsed in param helper parser")
    }
    /*
    lambda_parameters
    : lambda_slash_no_default lambda_param_no_default* lambda_param_with_default* lambda_star_etc?
    | lambda_slash_with_default lambda_param_with_default* lambda_star_etc?
    | lambda_param_no_default+ lambda_param_with_default* lambda_star_etc?
    | lambda_param_with_default+ lambda_star_etc?
    | lambda_star_etc;
    */
    visitLambda_parameters(ctx: Lambda_parametersContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_parameters is parsed in param helper parser")
    }
    /*
    lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?;
    */
    visitLambda_slash_no_default(ctx: Lambda_slash_no_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_slash_no_default is parsed in param helper parser")
    }
    /*
    lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?;
    */
    visitLambda_slash_with_default(ctx: Lambda_slash_with_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_slash_with_default is parsed in param helper parser")
    }
    /*
    lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;
    */
    visitLambda_star_etc(ctx: Lambda_star_etcContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_star_etc is parsed in param helper parser")
    }
    /*
    lambda_kwds
    : '**' lambda_param_no_default;
    */
    visitLambda_kwds(ctx: Lambda_kwdsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_kwds is parsed in param helper parser")
    }
    /*
    lambda_param_no_default
    : lambda_param ','?;
    */
    visitLambda_param_no_default(ctx: Lambda_param_no_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_param_no_default is parsed in param helper parser")   
    }
    /*
    lambda_param_with_default
    : lambda_param default_assignment ','?;
    */
    visitLambda_param_with_default(ctx: Lambda_param_with_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_param_with_default is parsed in param helper parser")   
    }
    /*
    lambda_param_maybe_default
    : lambda_param default_assignment? ','?;
    */
    visitLambda_param_maybe_default(ctx: Lambda_param_maybe_defaultContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("lambda_param_maybe_default is parsed in param helper parser")
    }
    /*
    lambda_param: name;
    */
    visitLambda_param(ctx: Lambda_paramContext): string {
        return this.visit(ctx.name())
    }
    // ========
    // LITERALS
    // ========
    /*
    fstring_middle
    : fstring_replacement_field
    | FSTRING_MIDDLE;
    */
    visitFstring_middle(ctx: Fstring_middleContext): string {
        const t = ctx.getChild(0)
        if (t instanceof TerminalNode) {
            let innerText = t.getText()
            innerText = innerText.replaceAll(/(?<!\\)'/g, "'") // TODO: Need to fix this as well
            return `'${innerText}'`
        }
        return this.visit(ctx.fstring_replacement_field())
    }
    /*
    fstring_replacement_field
    : LBRACE annotated_rhs '='? fstring_conversion? fstring_full_format_spec? RBRACE;
    */
    visitFstring_replacement_field(ctx: Fstring_replacement_fieldContext): string {
        // TODO: implement str (`s`), repr (`r`), ascii (`a`), format
        const format_spec = ctx.fstring_full_format_spec()
        const fstring_conv = ctx.fstring_conversion()
        const equal_sign = ctx.EQUAL()
        const annotated_rhs = ctx.annotated_rhs()

        const results = []
        if (equal_sign != null) { // It actually just prepends the value with anything before the conversion
            let innerText = annotated_rhs.getText()
            innerText = innerText.replaceAll(/(?<!\\)'/g, "'") // TODO: Need to fix this as well
            results.push(`'${innerText} ='`)
        }

        let expr = this.visit(annotated_rhs)
        if (fstring_conv != null) expr = `${this.visit(fstring_conv)}(${expr})`
        if (format_spec != null) expr = `format(${expr}, ${this.visit(format_spec)})`

        results.push(`tostring(${expr})`)
        return results.join(' .. ')
    }
    /*
    fstring_conversion
    : '!' name;
    */
    visitFstring_conversion(ctx: Fstring_conversionContext): string {
        switch (this.visit(ctx.name())) {
            case 's':
                return 'str'
            case 'r':
                return 'repr'
            case 'a':
                return 'ascii'
        }
        throw new Error("Unknown fstring conversion")
    }
    /*
    fstring_full_format_spec
    : ':' fstring_format_spec*;
    */
    visitFstring_full_format_spec(ctx: Fstring_full_format_specContext): string {
        const fstring_format_spec_list_parsed = ctx.fstring_format_spec_list().map(x => this.visit(x))
        fstring_format_spec_list_parsed.unshift("''") // append so any string is produced
        return fstring_format_spec_list_parsed.join(' .. ')
    }
    /*
    fstring_format_spec
    : FSTRING_MIDDLE
    | fstring_replacement_field;
    */
    visitFstring_format_spec(ctx: Fstring_format_specContext): string {
        const t = ctx.getChild(0)
        if (t instanceof TerminalNode) {
            let innerText = t.getText()
            innerText = innerText.replaceAll(/(?<!\\)'/g, "'") // TODO: Need to fix this as well
            return `'${innerText}'`
        }
        return this.visit(ctx.fstring_replacement_field())
    }
    /*
    fstring
    : FSTRING_START fstring_middle* FSTRING_END;
    */
    visitFstring(ctx: FstringContext): string {
        const prefixesRes = /^\w+/.exec(ctx.FSTRING_START().getText())
        const prefixes = (prefixesRes != null) ? prefixesRes[0].split('') : [] // eslint-disable-line @typescript-eslint/no-unused-vars
        // TODO: Handle r prefix (should that just be propagated to the actual strings?)

        const fstring_middle_list_parsed = ctx.fstring_middle_list().map(x => this.visit(x))
        fstring_middle_list_parsed.unshift("''") // append so any string is produced
        return fstring_middle_list_parsed.join(' .. ')
    }
    /*
    string: STRING;
    */
    visitString(ctx: StringContext): string {
        let stringText = ctx.STRING().getText()
        const prefixesRes = /^\w+/.exec(stringText)
        if (prefixesRes != null) stringText = stringText.substring(prefixesRes[0].length) // Remove the flags
        
        const prefixes = (prefixesRes != null) ? prefixesRes[0].split('') : []
        if (prefixes.indexOf('r') != -1) {
            // Parse \u
            // TODO: The following wont fully work as we need to count the number of `\` (need to change it to a loop or so?)
            stringText = stringText.replaceAll(/(?<!\\)\\u([0-9a-fA-F]{4})/g, (_, v) => String.fromCharCode(parseInt(v, 16)))
            stringText = stringText.replaceAll(/(?<!\\)\\U([0-9a-fA-F]{8})/g, (_, v) => String.fromCharCode(parseInt(v, 16)))
            stringText = stringText.replaceAll(/(?<!\\)\\x([0-9a-fA-F]{2})/g, (_, v) => String.fromCharCode(parseInt(v, 16)))
            stringText = stringText.replaceAll(/(?<!\\)\\([0-8]{1,3})/g, (_, v) => String.fromCharCode(parseInt(v, 8)))
            // \n{name} is unsupported // https://docs.python.org/3/reference/lexical_analysis.html
        } else {
            stringText = stringText.replaceAll(/\\/g, '\\\\') // Parse the '\' to '\\' so that it's escaped
        }
        if (stringText.startsWith("'''") || stringText.startsWith('"""')) {
            // Goal here is to change `'''` to ' and then escape any not already escaped  `'`
            // TODO: Also need to make sure to count the number of `\`
            let innerText = stringText.substring(3, stringText.length - 3)
            innerText = innerText.replaceAll(/(?<!\\)'/g, "'")
            stringText = `'${innerText}'`
        }
        // TODO: Should be a byte type instead of a string if there is a `b` prefix
        return stringText
    }
    /*
    strings: (fstring|string)+;
    */
    visitStrings(ctx: StringsContext): string {
        const parsedChildren = []
        for (let i = 0; i < ctx.getChildCount(); ++i) parsedChildren.push(this.visit(ctx.getChild(i)))
        return parsedChildren.join(' .. ')
    }
    /*
    list
    : '[' star_named_expressions? ']';
    */
    visitList(ctx: ListContext): string {
        // star_named_expressions returns tuple or single value
        // if it is a single value, it should therefore convert it to a table
        // if it is already a tuple packed by star_named_expressions, then no conversion should be done
        // DISCLAIMER: the `single value` could be a tuple and then it should be packed in another table!
        const star_named_expressions = ctx.star_named_expressions()
        if (star_named_expressions != null) {
            if (star_named_expressions.getChildCount() > 1) { // This indicates the result is a tuple
                return `list(${this.visit(star_named_expressions)})`
            } else {
                return `list({${this.visit(star_named_expressions)}})`
            }
        }
        return '{}'
    }
    /*
    tuple
    : '(' (star_named_expression ',' star_named_expressions?  )? ')';
    */
    visitTuple(ctx: TupleContext): string {
        const star_named_expression = ctx.star_named_expression()
        const star_named_expressions = ctx.star_named_expressions()
        if (star_named_expressions != null) {
            if (star_named_expressions.getChildCount() > 1) { // This indicates the result is a tuple
                return `tuple(tableMerge(${this.visit(star_named_expression)}, ${this.visit(star_named_expressions)}))` // TODO: Change to tuple class
            } else {
                return `tuple(tableMerge(${this.visit(star_named_expression)}, {${this.visit(star_named_expressions)}}))`
            }
        }
        return '{}'
    }
    /*
    set: LBRACE star_named_expressions RBRACE;
    */
    visitSet(ctx: SetContext): string {
        const starNamedExprs = ctx.star_named_expressions()
        return `set(${this.visit(starNamedExprs)})`
    }
    // -----
    // Dicts
    // -----
    /*
    dict
    : LBRACE double_starred_kvpairs? RBRACE;
    */
    visitDict(ctx: DictContext): string {
        const dictParserHelper = new LuaPythonVisitorDictHelper(this)
        const dd: DictData[] = dictParserHelper.visit(ctx.double_starred_kvpairs())

        const args = dd.reduce((acc: string, val: DictData) => {
            if (typeof(val) == 'string') { // kwarg
                return acc + `}, ${val}, {`
            } else {
                return acc + `${(acc.at(-1) != '{') ? ', ' : ''}, [${val.key}] = ${val.value}`
            }
        }, '{') + '}'
        return `objectMerge(${args})`
    }
    /*
    double_starred_kvpairs: double_starred_kvpair (',' double_starred_kvpair)* ','?;
    */
    visitDouble_starred_kvpairs(ctx: Double_starred_kvpairsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("double_starred_kvpairs is parsed in dict data helper parser")
    }
    /*
    double_starred_kvpair
    : '**' bitwise_or
    | kvpair;
    */
    visitDouble_starred_kvpair(ctx: Double_starred_kvpairContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("double_starred_kvpair is parsed in dict data helper parser")
    }
    /*
    kvpair: expression ':' expression;
    */
    visitKvpair(ctx: KvpairContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("kvpair is parsed in dict data helper parser")
    }
    // ---------------------------
    // Comprehensions & Generators
    // ---------------------------
    /*
    for_if_clauses
    : for_if_clause+;
    */
    visitFor_if_clauses(ctx: For_if_clausesContext): string {
        return 'TODO for_if_clauses' // TODO
    }
    /*
    for_if_clause
    : 'async'? 'for' star_targets 'in' disjunction ('if' disjunction )*;
    */
    visitFor_if_clause(ctx: For_if_clauseContext): string {
        return 'TODO for_if_clause' // TODO
    }
    /*
    listcomp
    : '[' named_expression for_if_clauses ']';
    */
    visitListcomp(ctx: ListcompContext): string {
        return 'TODO listcomp' // TODO
    }
    /*
    setcomp
    : LBRACE named_expression for_if_clauses RBRACE;
    */
    visitSetcomp(ctx: SetcompContext): string {
        return 'TODO setcomp' // TODO
    }
    /*
    genexp
    : '(' ( assignment_expression | expression) for_if_clauses ')';
    */
    visitGenexp(ctx: GenexpContext): string {
        return 'TODO genexp' // TODO
    }
    /*
    dictcomp
    : LBRACE kvpair for_if_clauses RBRACE;
    */
    visitDictcomp(ctx: DictcompContext): string {
        return 'TODO dictcomp' // TODO
    }
    // =======================
    // FUNCTION CALL ARGUMENTS
    // =======================
    /*
    arguments
    : args ','?;
    */
    visitArguments(ctx: ArgumentsContext): string {
        const argumentsParserHelper = new LuaPythonVisitorArgsHelper(this)
        const cargs: Args = argumentsParserHelper.visit(ctx)
        
        const kwargObj = []
        for (const [name, expr] of Object.entries(cargs.keyword_args)) kwargObj.push(`['${name}'] = ${expr}`)
        cargs.kwargs.push(`{ ${kwargObj.join(', ')} }`)

        /*
        let orderedArgsStr = '{'
        for (const ordered_arg of cargs.ordered_args) {
            if (ordered_arg.starred) {
                orderedArgsStr += `}, ${ordered_arg.expr}, {`
            } else {
                if (orderedArgsStr.at(-1) != '{') orderedArgsStr += ', '
                orderedArgsStr += ordered_arg.expr
            }
        }
        orderedArgsStr += '}'
        */
        const orderedArgsStr = `${cargs.ordered_args.reduce((acc, val) => val.starred ? (acc + `}, ${val.expr}, {`) : (acc + `${(acc.at(-1) != '{') ? ', ' : ''}${val.expr}`),'{')}}`
        return `tableMerge(${orderedArgsStr}), objectMerge(${cargs.kwargs.join(', ')})`
        // Should return string of two arrays (ordered_arguments, keyword_arguments)
    }
    /*
    args
    : (starred_expression | (assignment_expression | expression)) (',' (starred_expression | ( assignment_expression | expression)))* (',' kwargs )?
    | kwargs;
    */
    visitArgs(ctx: ArgsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("args is parsed in arguments helper parser")
    }
    /*
    kwargs
    : kwarg_or_starred (',' kwarg_or_starred)* (',' kwarg_or_double_starred (',' kwarg_or_double_starred)*)?
    | kwarg_or_double_starred (',' kwarg_or_double_starred)*;
    */
    visitKwargs(ctx: KwargsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("kwargs is parsed in arguments helper parser")
    }
    /*
    starred_expression
    : '*' expression;
    */
    visitStarred_expression(ctx: Starred_expressionContext): string {
        return this.visit(ctx.expression()) // Will be merged as a table without unpacking
    }
    /*
    kwarg_or_starred
    : name '=' expression
    | starred_expression;
    */
    visitKwarg_or_starred(ctx: Kwarg_or_starredContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("kwarg_or_starred is parsed in arguments helper parser")
    }
    /*
    kwarg_or_double_starred
    : name '=' expression
    | '**' expression;
    */
    visitKwarg_or_double_starred(ctx: Kwarg_or_double_starredContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("kwarg_or_double_starred is parsed in arguments helper parser")
    }
    // ==================
    // ASSIGNMENT TARGETS
    // ==================
    // ---------------
    // Generic targets
    // ---------------
    /*
    star_targets
    : star_target (',' star_target )* ','?;
    */
    visitStar_targets(ctx: Star_targetsContext): string {
        const UnpackHelper = new LuaPythonVisitorUnpackTargetHelper(this)
        const unpackResult: UnpackComponent = UnpackHelper.visit(ctx)
        if ('expr' in unpackResult) {
            return `${unpackResult.expr} = ass_res`
        } else { // Need to begin unpacking
            type Star_targetData = {
                data: PackData,
                src: string
            }
            const toHandle: Star_targetData[] = [{ data: unpackResult, src: 'ass_res' }]
            const result = []
            let lastTempI = 0
            while (toHandle.length > 0) {
                const cData: Star_targetData | undefined = toHandle.shift()
                if (cData != null) {
                    const { data: cur, src } = cData
                    if (cur.children != null) {
                        if (cur.children.filter(x => x.packed == true).length > 1) throw new Error("SyntaxError: multiple starred expressions in assignment")
                        const starexprIndex = cur.children.findIndex(x => x.packed)
                        const symbols: string[] = []
                        for (const child of cur.children) {
                            if ('children' in child) { // Need to create temporary symbol
                                const defSymbol = `st_${lastTempI++}`
                                result.push(`local ${defSymbol}`)
                                symbols.push(defSymbol)
                                toHandle.push({ data: child, src: defSymbol })
                            } else if ('expr' in child) {
                                symbols.push(child.expr)
                            }
                        }
                        result.push(`${symbols.join(', ')} = cunpack(${(starexprIndex != -1) ? starexprIndex : symbols.length}, ${(starexprIndex != -1) ? (symbols.length - 1 - starexprIndex) : 'nil'}, table.unpack(${src}))`)
                    }
                }
            }
            return result.join('\n')
        }
    }
    /*
    star_targets_list_seq: star_target (',' star_target)* ','?;
    */
    visitStar_targets_list_seq(ctx: Star_targets_list_seqContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("star_targets_list_seq is parsed in dict data helper parser")
    }
    /*
    star_targets_tuple_seq
    : star_target (',' | (',' star_target )+ ','?);
    */
    visitStar_targets_tuple_seq(ctx: Star_targets_tuple_seqContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("star_targets_tuple_seq is parsed in dict data helper parser")
    }
    /*
    star_target
    : '*' target_with_star_atom
    | target_with_star_atom;
    */
    visitStar_target(ctx: Star_targetContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("star_target is parsed in dict data helper parser")
    }
    /*
    target_with_star_atom
    : t_primary ('.' name | '[' slices ']')
    | star_atom;
    */
    visitTarget_with_star_atom(ctx: Target_with_star_atomContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("target_with_star_atom is parsed in dict data helper parser")
    }
    /*
    star_atom
    : name
    | '(' target_with_star_atom ')'
    | '(' star_targets_tuple_seq? ')'
    | '[' star_targets_list_seq? ']';
    */
    visitStar_atom(ctx: Star_atomContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("star_atom is parsed in dict data helper parser")
    }
    /*
    single_target
    : single_subscript_attribute_target
    | name
    | '(' single_target ')';
    */
    visitSingle_target(ctx: Single_targetContext): string {
        const sin = ctx.single_target()
        if (sin != null) return this.visit(sin) // Lua does not accept paranthesis on the left side
        const name = ctx.name()
        if (name != null) { // Need to create the definition
            const currentScope = this.scopeStack.at(-1)
            if (currentScope == null) throw new Error("Scope not found")

            const definition = currentScope.createDefinitionIfNotExists(this.visit(ctx.name()))
            return definition
        }
        return this.visit(ctx.single_subscript_attribute_target())
    }
    /*
    single_subscript_attribute_target
    : t_primary ('.' name | '[' slices ']');
    */
    visitSingle_subscript_attribute_target(ctx: Single_subscript_attribute_targetContext): string {
        const tprimary = ctx.t_primary()
        if (tprimary != null) {
            const name = ctx.name()
            if (name != null) return `${this.visit(tprimary)}.__getattr__(${this.visit(name)})`
            const slices = ctx.slices()
            if (slices != null) return `${this.visit(tprimary)}.__getitem__(${this.visit(slices)})`
        }
        throw new Error("Unknown single_subscript_attribute_target handling")
    }
    /*
    t_primary
    : t_primary ('.' name | '[' slices ']' | genexp | '(' arguments? ')')
    | atom;
    */
    visitT_primary(ctx: T_primaryContext): string {
        const atom = ctx.atom()
        if (atom != null) return this.visit(atom)
        const tprimary = ctx.t_primary()
        if (tprimary != null) {
            const name = ctx.name()
            if (name != null) return `${this.visit(tprimary)}.__getattr__(${this.visit(name)})`
            const slices = ctx.slices()
            if (slices != null) return `${this.visit(tprimary)}.__getitem__(${this.visit(slices)})`
            // TODO: genexp
            const args = ctx.arguments()
            return `${this.visit(tprimary)}(${(args != null) ? this.visit(args) : '{}, {}'})`
        }
        throw new Error("Unknown t_primary handling")
    }
    // --------------------------
    // Targets for del statements
    // --------------------------
    /* eg.
    del [x, y]
    del [[x], y]
    del (((x)), y)
    ^ all just delete `x` and `y` 
    /*
    del_targets: del_target (',' del_target)* ','?;
    */
    visitDel_targets(ctx: Del_targetsContext): string {
        const del_target_list = ctx.del_target_list()
        return del_target_list.map(x => this.visit(x)).join('\n')
    }
    /*
    del_target
    : t_primary ('.' name | '[' slices ']')
    | del_t_atom;
    */
    visitDel_target(ctx: Del_targetContext): string {
        const del_t_atom = ctx.del_t_atom()
        if (del_t_atom != null) return this.visit(del_t_atom)
        const t_primary = ctx.t_primary()
        if (t_primary != null) {
            const name = ctx.name()
            if (name != null) return `${this.visit(t_primary)}.__delattr__(${this.visit(name)})`
            const slices = ctx.slices()
            if (slices != null) return `${this.visit(t_primary)}.__delitem__(${this.visit(slices)})`
        }
        throw new Error("Unknown del_target handling")
    }
    /*
    del_t_atom
    : name
    | '(' del_target ')'
    | '(' del_targets? ')'
    | '[' del_targets? ']';
    */
    visitDel_t_atom(ctx: Del_t_atomContext): string {
        const name = ctx.name()
        if (name != null) {
            const cscope = this.scopeStack.at(-1)
            if (cscope == null) throw new Error("Scope not found")
            const txtName = this.visit(name)
            const definition = cscope.createDefinitionIfNotExists(txtName)
            return `getOrErr(${definition}, '${txtName}', ${(cscope.scopeType == ScopeType.GLOBAL) ? 'false' : 'true'}); ${definition} = nil`
        }
        const del_target = ctx.del_target()
        if (del_target) return this.visit(del_target)
        const del_targets = ctx.del_targets()
        if (del_targets) return this.visit(del_targets)
        throw new Error("Unknown del_t_atom handling")
    }
    // ---------------
    // TYPING ELEMENTS
    // ---------------
    /*
    type_expressions
    : expression (',' expression)* (',' ('*' expression (',' '**' expression)? | '**' expression))?
    | '*' expression (',' '**' expression)?
    | '**' expression;
    */
    visitType_expressions(ctx: Type_expressionsContext): string { // eslint-disable-line @typescript-eslint/no-unused-vars
        /* eg.
            Callable[[int, str], bool]   (`int, str`)
            Callable[[int, *str], bool]   (`int, *str`)
            Callable[[int, str, **Any], bool]   (`int, str, **Any`)
            etc.
        */
        throw new Error("type_expressions are not implemented")
    }
    /*
    name_except_underscore
    : NAME
    | NAME_OR_TYPE
    | NAME_OR_MATCH
    | NAME_OR_CASE;
    */
    visitName_except_underscore(ctx: Name_except_underscoreContext): string {
        return ctx.getChild(0).getText() // Return raw text
    }
    /*
    name: NAME_OR_WILDCARD | name_except_underscore;
    */
    visitName(ctx: NameContext): string {
        const nor = ctx.NAME_OR_WILDCARD()
        if (nor != null) return nor.getText() // '_' - also works in lua
        return this.visit(ctx.name_except_underscore())
    }
}

// TODO
// add error handling (nodes are apparently not guaranteed)
/*
// interactive: statement_newline;
// eval: expressions NEWLINE* EOF;
// func_type: '(' type_expressions? ')' '->' expression NEWLINE* EOF;

//statement_newline
//    : compound_stmt NEWLINE
//    | simple_stmts
//    | NEWLINE
//    | EOF;
*/

type OrderedArg = {
    expr: string,
    starred?: boolean
}
type Args = {
    ordered_args: OrderedArg[],
    keyword_args: { [Name: string]: string },
    kwargs: string[]
}

const mergeArgs = (nargs: Args, ...cargs: Args[]) => {
    for (const carg of cargs) {
        nargs.ordered_args.push(...carg.ordered_args)
        for (const [name, expr] of Object.entries(carg.keyword_args)) {
            if (nargs.keyword_args[name] != undefined) throw new Error(`SyntaxError: keyword argument repeated: ${name}`)
            nargs.keyword_args[name] = expr
        }
        nargs.kwargs.push(...carg.kwargs)
    }
}
export class LuaPythonVisitorArgsHelper extends ParseTreeVisitor<Args> implements PythonParserVisitor<Args> {
    baseParser: LuaPythonVisitor

    constructor(baseParser: LuaPythonVisitor) {
        super();
        this.baseParser = baseParser;
    }

    /*
    arguments
    : args ','?;
    */
    visitArguments(ctx: ArgumentsContext): Args {
        return this.visit(ctx.args()) // ',' is ignored by Python compiler
    }
    /*
    args
    : (starred_expression | (assignment_expression | expression)) (',' (starred_expression | ( assignment_expression | expression)))* (',' kwargs )?
    | kwargs;
    */
    visitArgs(ctx: ArgsContext): Args {
        const cargs: Args = { ordered_args: [], keyword_args: {}, kwargs: [] }
        //const normal_arguments = []
        //let kwargs_arguments = null
        for (let i = 0; i < ctx.getChildCount(); i += 2) {
            const child = ctx.getChild(i)
            if (child instanceof KwargsContext) {
                mergeArgs(cargs, this.visit(child))
            } else {
                // TODO: See if all (starred_expression, assignment_expression, expression) are handled properly
                cargs.ordered_args.push({
                    expr: this.baseParser.visit(child),
                    starred: child instanceof Starred_expressionContext
                })
            }
        }
        return cargs
    }
    /*
    kwargs
    : kwarg_or_starred (',' kwarg_or_starred)* (',' kwarg_or_double_starred (',' kwarg_or_double_starred)*)?
    | kwarg_or_double_starred (',' kwarg_or_double_starred)*;
    */
    visitKwargs(ctx: KwargsContext): Args {
        const cargs: Args = { ordered_args: [], keyword_args: {}, kwargs: [] }
        for (let i = 0; i < ctx.getChildCount(); i += 2) {
            // All are parsed in the same way
            mergeArgs(cargs, this.visit(ctx.getChild(i)))
        }
        return cargs
    }
    /*
    kwarg_or_starred
    : name '=' expression
    | starred_expression;
    */
    visitKwarg_or_starred(ctx: Kwarg_or_starredContext): Args {
        const cargs: Args = { ordered_args: [], keyword_args: {}, kwargs: [] }
        const name = ctx.name()
        if (name != null) {
            cargs.keyword_args[this.baseParser.visit(name)] = this.baseParser.visit(ctx.expression())
        } else {
            cargs.ordered_args.push({
                expr: this.baseParser.visit(ctx.starred_expression()),
                starred: true
            })
        }
        return cargs
    }
    /*
    kwarg_or_double_starred
    : name '=' expression
    | '**' expression;
    */
    visitKwarg_or_double_starred(ctx: Kwarg_or_double_starredContext): Args {
        const cargs: Args = { ordered_args: [], keyword_args: {}, kwargs: [] }
        const name = ctx.name()
        const expr = ctx.expression()
        if (name != null) {
            cargs.keyword_args[this.baseParser.visit(name)] = this.baseParser.visit(expr)
        } else {
            cargs.kwargs.push(this.baseParser.visit(expr))
        }
        return cargs
    }
}

type PackEntryData = {
    expr: string,
    packed: boolean
}

type PackData = {
    children?: UnpackComponent[],
    packed: boolean
}

type UnpackComponent = PackData | PackEntryData

export class LuaPythonVisitorUnpackTargetHelper extends ParseTreeVisitor<UnpackComponent> implements PythonParserVisitor<UnpackComponent> {
    baseParser: LuaPythonVisitor

    constructor (baseParser: LuaPythonVisitor) {
        super();
        this.baseParser = baseParser;
    }

    /*
    star_targets
    : star_target (',' star_target )* ','?;
    */
    visitStar_targets(ctx: Star_targetsContext): UnpackComponent {
        const star_target_list = ctx.star_target_list()
        if (ctx.getChildCount() > 1) { // If there is more than 1 value OR there is last ',', then it's a tuple to unpack
            const pd: PackData = { children: star_target_list.map(x => this.visit(x)), packed: false }
            return pd
        }
        const res = this.visit(star_target_list[0])
        if (res.packed == true) throw new Error("SyntaxError: starred assignment target must be in a list or tuple")
        return res
    }
    /*
    star_targets_list_seq: star_target (',' star_target)* ','?;
    */
    visitStar_targets_list_seq(ctx: Star_targets_list_seqContext): UnpackComponent {
        const pd: PackData = { children: ctx.star_target_list().map(x => this.visit(x)), packed: false }
        return pd
    }
    /*
    star_targets_tuple_seq
    : star_target (',' | (',' star_target )+ ','?);
    */
    visitStar_targets_tuple_seq(ctx: Star_targets_tuple_seqContext): UnpackComponent {
        const pd: PackData = { children: ctx.star_target_list().map(x => this.visit(x)), packed: false }
        return pd
    }
    /*
    star_target
    : '*' target_with_star_atom
    | target_with_star_atom;
    */
    visitStar_target(ctx: Star_targetContext): UnpackComponent {
        const target_wsa = ctx.target_with_star_atom()
        const uc = this.visit(target_wsa)
        if (ctx.STAR() != null && uc != null) uc.packed = true
        return uc
    }
    /*
    target_with_star_atom
    : t_primary ('.' name | '[' slices ']')
    | star_atom;
    */
    visitTarget_with_star_atom(ctx: Target_with_star_atomContext): UnpackComponent {
        const tprimary = ctx.t_primary()
        if (tprimary != null) {
            const name = ctx.name()
            if (name != null) {
                const ped: PackEntryData = {
                    expr: `${this.baseParser.visit(tprimary)}.__getattr__(${this.baseParser.visit(name)})`,
                    packed: false
                }
                return ped
            }
            const slices = ctx.slices()
            if (slices != null) {
                const ped: PackEntryData = {
                    expr: `${this.baseParser.visit(tprimary)}.__getitem__(${this.baseParser.visit(slices)})`,
                    packed: false
                }
                return ped
            }
        }
        return this.visit(ctx.star_atom())
    }
    /*
    star_atom
    : name
    | '(' target_with_star_atom ')'
    | '(' star_targets_tuple_seq? ')'
    | '[' star_targets_list_seq? ']';
    */
    visitStar_atom(ctx: Star_atomContext): UnpackComponent {
        const name = ctx.name()
        if (name != null) {
            const cscope = this.baseParser.scopeStack.at(-1)
            if (cscope == null) throw new Error("Stack not found")

            const txtName = this.baseParser.visit(name)
            const definition = cscope.createDefinitionIfNotExists(txtName)
            const ped: PackEntryData = {
                expr: definition,
                packed: false
            }
            return ped
        }
        const target_wsa = ctx.target_with_star_atom()
        if (target_wsa != null) return this.visit(target_wsa)
        
        const target_tuplelistseq = ctx.star_targets_list_seq() ?? ctx.star_targets_tuple_seq()
        if (target_tuplelistseq != null) return this.visit(target_tuplelistseq)
        const pd: PackData = { children: [], packed: false }
        return pd
    }
}

type DictEntryData = {
    key: string,
    value: string
}
type DictData = (DictEntryData | string)

export class LuaPythonVisitorDictHelper extends ParseTreeVisitor<DictData[]> implements PythonParserVisitor<DictData[]> {
    baseParser: LuaPythonVisitor

    constructor (baseParser: LuaPythonVisitor) {
        super();
        this.baseParser = baseParser;
    }

    /*
    double_starred_kvpairs: double_starred_kvpair (',' double_starred_kvpair)* ','?;
    */
    visitDouble_starred_kvpairs(ctx: Double_starred_kvpairsContext): DictData[] {
        const dd: DictData[] = []
        const double_starred_kvpair_list = ctx.double_starred_kvpair_list()
        for (const double_starred_kvpair of double_starred_kvpair_list) {
            dd.push(...this.visit(double_starred_kvpair))
        }
        return dd
    }
    /*
    double_starred_kvpair
    : '**' bitwise_or
    | kvpair;
    */
    visitDouble_starred_kvpair(ctx: Double_starred_kvpairContext): DictData[] {
        const kvpair = ctx.kvpair()
        if (kvpair != null) {
            return this.visit(kvpair)
        } else {
            return [this.baseParser.visit(ctx.bitwise_or())]
        }
    }
    /*
    kvpair: expression ':' expression;
    */
    visitKvpair(ctx: KvpairContext): DictData[] {
        const de: DictEntryData = {
            key: this.baseParser.visit(ctx.getChild(0)),
            value: this.baseParser.visit(ctx.getChild(2))
        }
        return [de]
    }
}


type Param = {
    Kwargs?: boolean;
    Args?: boolean;
    Default?: string;
    Name: string;
    OnlyPositional?: boolean;
    OnlyNamed?: boolean;
}

export class LuaPythonVisitorParamHelper extends ParseTreeVisitor<Param[]> implements PythonParserVisitor<Param[]> {
    baseParser: LuaPythonVisitor

    constructor(baseParser: LuaPythonVisitor) {
        super();
        this.baseParser = baseParser;
    }
    // -------------------
    // Function parameters
    // -------------------
    /*
    params
    : parameters;
    */
    visitParams(ctx: ParamsContext): Param[] {
        return this.visit(ctx.parameters())
    }
    /*
    parameters
    : slash_no_default param_no_default* param_with_default* star_etc?
    | slash_with_default param_with_default* star_etc?
    | param_no_default+ param_with_default* star_etc?
    | param_with_default+ star_etc?
    | star_etc;
    */
    visitParameters(ctx: ParametersContext): Param[] {
        /* Note:
        All arguments before slash ('/') are positional only
        All arguments after star ('*') are named only
        */
        // Parse all the parameters and join the strings using `,`
        const params = []
        for (let i = 0; i < ctx.getChildCount(); ++i) {
            const child = ctx.getChild(i)
            params.push(...this.visit(child))
        }
        return params
    }
    /*
    slash_no_default
    : param_no_default+ '/' ','?;
    */
    visitSlash_no_default(ctx: Slash_no_defaultContext): Param[] {
        const param_no_default_list = ctx.param_no_default_list()
        const params = []
        for (const param of param_no_default_list) params.push(...this.visit(param)) // 1 is expected
        
        for (const param of params) { // Mark all as only positional
            param.OnlyPositional = true
        }
        return params
    }
    /*
    slash_with_default
    : param_no_default* param_with_default+ '/' ','?;
    */
    visitSlash_with_default(ctx: Slash_with_defaultContext): Param[] {
        const param_no_default_list = ctx.param_no_default_list()
        const param_with_default_list = ctx.param_with_default_list()
        const param_final_list = param_no_default_list.concat(param_with_default_list)
        const params = []
        for (const param of param_final_list) params.push(...this.visit(param)) // 1 is expected
        
        for (const param of params) { // Mark all as only positional
            param.OnlyPositional = true
        }
        return params
    }
    /*
    star_etc
    : '*' param_no_default param_maybe_default* kwds?
    | '*' param_no_default_star_annotation param_maybe_default* kwds?
    | '*' ',' param_maybe_default+ kwds?
    | kwds;
    */
    visitStar_etc(ctx: Star_etcContext): Param[] {
        const first = ctx.getChild(0)
        const kwds = ctx.kwds()
        if (first instanceof TerminalNode) {
            const second = ctx.getChild(1)
            if (second instanceof TerminalNode) {
                // '*' ',' param_maybe_default+ kwds?
                const params = []
                const param_maybe_default = ctx.param_maybe_default_list().map(x => this.visit(x))
                for (const param of param_maybe_default) params.push(...param) // 1 is expected
                if (kwds != null) params.push(...this.visit(kwds)) // 1 is expected
                
                for (const param of params) { // Mark each param as named only
                    param.OnlyNamed = true
                }

                return params
            } else {
                // '*' param_no_default param_maybe_default* kwds?
                // '*' param_no_default_star_annotation param_maybe_default* kwds?
                const params = []
                const param_no_default = ctx.param_no_default()
                if (param_no_default != null) params.push(...this.visit(param_no_default)) // 1 is expected
                const param_no_default_star_annotation = ctx.param_no_default_star_annotation()
                if (param_no_default_star_annotation != null) params.push(...this.visit(param_no_default_star_annotation)) // 1 is expected
                const param_maybe_default_list = ctx.param_maybe_default_list().map(x => this.visit(x))
                for (const param of param_maybe_default_list) params.push(...param) // 1 is expected
                if (kwds != null) params.push(...this.visit(kwds)) // 1 is expected
                
                params[0].Args = true // Apply args to first argument which has to exist (param_no_default or param_no_default_star_annotation)
                for (const param of params) { // Mark each param as named only
                    if (!param.Args) param.OnlyNamed = true
                }

                return params
            }
        }
        // kwds
        return this.visit(kwds)
    }
    /*
    kwds
    : '**' param_no_default;
    */
    visitKwds(ctx: KwdsContext): Param[] {
        const params = this.visit(ctx.param_no_default())
        params[0].Kwargs = true
        return params
    }
    /*
    param_no_default
    : param ','?;
    */
    visitParam_no_default(ctx: Param_no_defaultContext): Param[] {
        const param: Param = { Name: this.baseParser.visit(ctx.param()) }
        return [param]
    }
    /*
    param_no_default_star_annotation
    : param_star_annotation ','?;
    */
    visitParam_no_default_star_annotation(ctx: Param_no_default_star_annotationContext): Param[] {
        const param: Param = { Name: this.baseParser.visit(ctx.param_star_annotation()) } // Args will be adjusted within star_etc
        return [param]
    }
    /*
    param_with_default
    : param default_assignment ','?;
    */
    visitParam_with_default(ctx: Param_with_defaultContext): Param[] {
        const param: Param = {
            Name: this.baseParser.visit(ctx.param()),
            Default: this.baseParser.visit(ctx.default_assignment())
        }
        return [param]
    }
    /*
    param_maybe_default
    : param default_assignment? ','?;
    */
    visitParam_maybe_default(ctx: Param_maybe_defaultContext): Param[] {
        const param: Param = { Name: this.baseParser.visit(ctx.param()) }
        const default_assignment = ctx.default_assignment()
        if (default_assignment != null) param.Default = this.baseParser.visit(default_assignment)
        return [param]
    }
    /*
    lambda_params
    : lambda_parameters;
    */
    visitLambda_params(ctx: Lambda_paramsContext): Param[] {
        return this.visit(ctx.lambda_parameters())
    }
    /*
    lambda_parameters
    : lambda_slash_no_default lambda_param_no_default* lambda_param_with_default* lambda_star_etc?
    | lambda_slash_with_default lambda_param_with_default* lambda_star_etc?
    | lambda_param_no_default+ lambda_param_with_default* lambda_star_etc?
    | lambda_param_with_default+ lambda_star_etc?
    | lambda_star_etc;
    */
    visitLambda_parameters(ctx: Lambda_parametersContext): Param[] {
        const params = []
        for (let i = 0; i < ctx.getChildCount(); ++i) {
            const child = ctx.getChild(i)
            params.push(...this.visit(child))
        }
        return params
    }
    /*
    lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?;
    */
    visitLambda_slash_no_default(ctx: Lambda_slash_no_defaultContext): Param[] {
        const lambda_param_no_default_list = ctx.lambda_param_no_default_list()
        const params = []
        for (const param of lambda_param_no_default_list) params.push(...this.visit(param)) // 1 is expected
        
        for (const param of params) { // Mark all as only positional
            param.OnlyPositional = true
        }
        return params
    }
    /*
    lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?;
    */
    visitLambda_slash_with_default(ctx: Lambda_slash_with_defaultContext): Param[] {
        const lambda_param_no_default_list = ctx.lambda_param_no_default_list()
        const lambda_param_with_default_list = ctx.lambda_param_with_default_list()
        const param_final_list = lambda_param_no_default_list.concat(lambda_param_with_default_list)
        const params = []
        for (const param of param_final_list) params.push(...this.visit(param)) // 1 is expected
        
        for (const param of params) { // Mark all as only positional
            param.OnlyPositional = true
        }
        return params    }
    /*
    lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;
    */
    visitLambda_star_etc(ctx: Lambda_star_etcContext): Param[] {
        const first = ctx.getChild(0)
        const lambda_kwds = ctx.lambda_kwds()
        if (first instanceof TerminalNode) {
            const second = ctx.getChild(1)
            if (second instanceof TerminalNode) {
                // '*' ',' lambda_param_maybe_default+ lambda_kwds?
                const params = []
                const lambda_param_maybe_default = ctx.lambda_param_maybe_default_list().map(x => this.visit(x))
                for (const param of lambda_param_maybe_default) params.push(...param) // 1 is expected
                if (lambda_kwds != null) params.push(...this.visit(lambda_kwds)) // 1 is expected
                
                for (const param of params) { // Mark each param as named only
                    param.OnlyNamed = true
                }

                return params
            } else {
                // '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
                const params = []
                params.push(...this.visit(ctx.lambda_param_no_default())) // 1 is expected
                const lambda_param_maybe_default_list = ctx.lambda_param_maybe_default_list().map(x => this.visit(x))
                for (const param of lambda_param_maybe_default_list) params.push(...param) // 1 is expected
                if (lambda_kwds != null) params.push(...this.visit(lambda_kwds)) // 1 is expected
                
                params[0].Args = true // Apply args to first argument which has to exist (lambda_param_no_default)
                for (const param of params) { // Mark each param as named only
                    if (!param.Args) param.OnlyNamed = true
                }

                return params
            }
        }
        // lambda_kwds
        return this.visit(lambda_kwds)
    }
    /*
    lambda_kwds
    : '**' lambda_param_no_default;
    */
    visitLambda_kwds(ctx: Lambda_kwdsContext): Param[] {
        const params = this.visit(ctx.lambda_param_no_default())
        params[0].Kwargs = true
        return params
    }
    /*
    lambda_param_no_default
    : lambda_param ','?;
    */
    visitLambda_param_no_default(ctx: Lambda_param_no_defaultContext): Param[] {
        const param: Param = { Name: this.baseParser.visit(ctx.lambda_param()) }
        return [param]
    }
    /*
    lambda_param_with_default
    : lambda_param default_assignment ','?;
    */
    visitLambda_param_with_default(ctx: Lambda_param_with_defaultContext): Param[] {
        const param: Param = {
            Name: this.baseParser.visit(ctx.lambda_param()),
            Default: this.baseParser.visit(ctx.default_assignment())
        }
        return [param]
    }
    /*
    lambda_param_maybe_default
    : lambda_param default_assignment? ','?;
    */
    visitLambda_param_maybe_default(ctx: Lambda_param_maybe_defaultContext): Param[] {
        const param: Param = { Name: this.baseParser.visit(ctx.lambda_param()) }
        const default_assignment = ctx.default_assignment()
        if (default_assignment != null) param.Default = this.baseParser.visit(default_assignment)
        return [param]
    }
}
