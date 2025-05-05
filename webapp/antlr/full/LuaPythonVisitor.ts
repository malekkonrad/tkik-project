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

export default class LuaPythonVisitor extends ParseTreeVisitor<string> implements PythonParserVisitor<string> {
    // ==============
    // STARTING RULES
    // ==============
    /*
    // Start node
    program: statements? EOF;
    */
    visitProgram(ctx: ProgramContext): string {
        const statements = ctx.statements()
        if (statements != null) return this.visit(statements);
        return ''
    }
    // ==================
    // GENERAL STATEMENTS
    // ==================
    /*
    statements: statement+;
    */
    visitStatements(ctx: StatementsContext): string {
        return ctx.children?.map((x) => this.visit(x))?.join('\n') ?? ''
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
        return ctx.simple_stmt_list().map((x) => this.visit(x)).join('\n')
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
        if (ch instanceof TerminalNode) {
            switch (ch.symbol.type) {
                case PythonLexer.PASS:
                    return ''; // in lua there is no pass (it'll just be an empty block)
                case PythonLexer.BREAK:
                    return 'break';
                case PythonLexer.CONTINUE:
                    throw Error("TODO: Consider continue support")
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
        const augassign = ctx.augassign()
        // TODO:
        // name ':' expression ('=' annotated_rhs )?
        // ('(' single_target ')' | single_subscript_attribute_target) ':' expression ('=' annotated_rhs )?
        // (star_targets '=' )+ (yield_expr | star_expressions) TYPE_COMMENT?
        if (augassign != null) { // single_target augassign (yield_expr | star_expressions)
            // TODO: Add yield_expr / star_expressions
            // augassign needs to be mapped to normal operator
            const sin_target = ctx.single_target()
            return `${this.visit(sin_target)} = ${this.visit(sin_target)} ${this.visit(augassign)} `
        }
        throw Error("TODO: Unimplemented")
    }
    /*
    annotated_rhs: yield_expr | star_expressions;
    */
    visitAnnotated_rhs(ctx: Annotated_rhsContext): string {
        return 'TODO annotated_rhs' // TODO
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
    visitAugassign(ctx: AugassignContext): string {
        // This returns normal operator since lua does not support operator with assignment
        const s = ctx.getChild(0) as TerminalNode
        switch (s.symbol.type) {
            case PythonLexer.PLUSEQUAL:
                return '+'
            case PythonLexer.MINEQUAL:
                return '-'
            case PythonLexer.STAREQUAL:
                return '*'
            case PythonLexer.SLASHEQUAL:
                return '/'
            case PythonLexer.PERCENTEQUAL:
                return '%'
            case PythonLexer.AMPEREQUAL:
                // TODO: We should modify the grammar to support this
                // eg augassign : {TOKEN} (yield_expr | star_expressions);
                throw Error('TODO: Not implemented yet augassign &')
            case PythonLexer.VBAREQUAL:
                throw Error('TODO: Not implemented yet augassign |')
            case PythonLexer.CIRCUMFLEXEQUAL:
                throw Error('TODO: Not implemented yet augassign ^')
            case PythonLexer.LEFTSHIFTEQUAL:
                throw Error('TODO: Not implemented yet augassign <<')
            case PythonLexer.RIGHTSHIFTEQUAL:
                throw Error('TODO: Not implemented yet augassign >> ')
            case PythonLexer.DOUBLESTAREQUAL:
                throw Error('TODO: Not implemented yet augassign **')
            case PythonLexer.DOUBLESLASHEQUAL:
                throw Error('TODO: Not implemented yet augassign //')
            default:
                throw Error("Unknown augassign token")
        }
    }
    /*
    return_stmt : 'return' star_expressions?;
    */
    visitReturn_stmt(ctx: Return_stmtContext): string {
        const starExpr = ctx.star_expressions()
        if (starExpr == null) return 'return'
        return `return ${this.visit(starExpr)}`
    }
    /*
    raise_stmt
    : 'raise' (expression ('from' expression )?)?;
    */
    visitRaise_stmt(ctx: Raise_stmtContext): string {
        return 'TODO raise_stmt' // TODO
    }
    /*
    global_stmt: 'global' name (',' name)*;
    */
    visitGlobal_stmt(ctx: Global_stmtContext): string {
        // Global does not exist in lua
        // TODO: Need to figure out how to handle local variables
        return `--[[ TODO global ${ctx.name_list().map(x => this.visit(x)).join(',')} ]]`
    }
    /*
    nonlocal_stmt: 'nonlocal' name (',' name)*;
    */
    visitNonlocal_stmt(ctx: Nonlocal_stmtContext): string {
        // TODO: What's nonlocal?
        return `--[[ TODO nonlocal ${ctx.name_list().map(x => this.visit(x)).join(',')} ]]`
    }
    /*
    del_stmt
    : 'del' del_targets;
    */
    visitDel_stmt(ctx: Del_stmtContext): string {
        // TODO: Need to confirm if that's fully alright
        return `${this.visit(ctx.del_targets())} = nil`
    }
    /*
    yield_stmt: yield_expr;
    */
    visitYield_stmt(ctx: Yield_stmtContext): string {
        return 'TODO yield_stmt' // TODO
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
        // TODO: delete do when it's not necessary
        let result = 'do\n'
        const stmts = ctx.statements()
        const simple_stmts = ctx.simple_stmts()
        if (stmts != null) {
            result += this.visit(stmts)
        } else if (simple_stmts != null) {
            result += this.visit(simple_stmts)
        }
        result += '\nend'
        return result
    }
    /*
    decorators: ('@' named_expression NEWLINE )+;
    */
    visitDecorators(ctx: DecoratorsContext): string {
        return 'TODO decorators' // TODO
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
        const fdr = ctx.function_def_raw()
        // TODO: Implement decorators?
        return this.visit(fdr)
    }
    /*
    function_def_raw
        : 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
        | 'async' 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
    */
    visitFunction_def_raw(ctx: Function_def_rawContext): string {
        let result = `function ${ctx.name().getText()}(`
        // TODO: async
        result += this.visit(ctx.params())
        result += ')\n'
        // TODO: expression & func_type_comment?
        result += this.visit(ctx.block())
        result += '\nend'
        return result
    }
    // -------------------
    // Function parameters
    // -------------------
    /*
    params
    : parameters;
    */
    visitParams(ctx: ParamsContext): string {
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
    visitParameters(ctx: ParametersContext): string {
        return 'TODO parameters' // TODO
    }
    /*
    slash_no_default
        : param_no_default+ '/' ','?;
    */
    visitSlash_no_default(ctx: Slash_no_defaultContext): string {
        return 'TODO slash_no_default' // TODO
    }
    /*
    slash_with_default
    : param_no_default* param_with_default+ '/' ','?;
    */
    visitSlash_with_default(ctx: Slash_with_defaultContext): string {
        return 'TODO slash_with_default' // TODO
    }
    /*
    star_etc
    : '*' param_no_default param_maybe_default* kwds?
    | '*' param_no_default_star_annotation param_maybe_default* kwds?
    | '*' ',' param_maybe_default+ kwds?
    | kwds;
    */
    visitStar_etc(ctx: Star_etcContext): string {
        return 'TODO star_etc' // TODO
    }
    /*
    kwds
    : '**' param_no_default;
    */
    visitKwds(ctx: KwdsContext): string {
        return 'TODO kwds' // TODO
    }
    /*
    param_no_default
    : param ','?;
    */
    visitParam_no_default(ctx: Param_no_defaultContext): string {
        return 'TODO param_no_default' // TODO
    }
    /*
    param_no_default_star_annotation
    : param_star_annotation ','?;
    */
    visitParam_no_default_star_annotation(ctx: Param_no_default_star_annotationContext): string {
        return 'TODO param_no_default_star_annotation' // TODO
    }
    /*
    param_with_default
    : param default_assignment ','?;
    */
    visitParam_with_default(ctx: Param_with_defaultContext): string {
        return 'TODO param_with_default' // TODO
    }
    /*
    param_maybe_default
    : param default_assignment? ','?;
    */
    visitParam_maybe_default(ctx: Param_maybe_defaultContext): string {
        return 'TODO param_maybe_default' // TODO
    }
    /*
    param: name annotation?;
    */
    visitParam(ctx: ParamContext): string {
        return 'TODO param' // TODO
    }
    /*
    param_star_annotation: name star_annotation;
    */
    visitParam_star_annotation(ctx: Param_star_annotationContext): string {
        return 'TODO param_star_annotation' // TODO   
    }
    /*
    annotation: ':' expression;
    */
    visitAnnotation(ctx: AnnotationContext): string {
        return 'TODO annotation' // TODO
    }
    /*
    star_annotation: ':' star_expression;
    */
    visitStar_annotation(ctx: Star_annotationContext): string {
        return 'TODO star_annotation' // TODO
    }
    /*
    default_assignment: '=' expression;
    */
    visitDefault_assignment(ctx: Default_assignmentContext): string {
        return 'TODO default_assignment' // TODO
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
        if (else_block != null) result += `\n${this.visit(else_block)}`
        result += '\nend'
        return result
    }
    /*
    elif_stmt
    : 'elif' named_expression ':' block (elif_stmt | else_block?);
    */
    visitElif_stmt(ctx: Elif_stmtContext): string {
        let result = `elif ${this.visit(ctx.named_expression())} then\n`
        result += this.visit(ctx.block())
        const elif_stmt = ctx.elif_stmt()
        if (elif_stmt != null) result += `\n${this.visit(elif_stmt)}`
        const else_block = ctx.else_block()
        if (else_block != null) result += `\n${this.visit(else_block)}`
        // end is already within if_stmt
        return result
    }
    /*
    else_block
    : 'else' ':' block;
    */
    visitElse_block(ctx: Else_blockContext): string {
        let result = 'else\n'
        result += this.visit(ctx.block())
        return result
    }
    // ---------------
    // While statement
    // ---------------
    /*
    while_stmt
    : 'while' named_expression ':' block else_block?;
    */
    visitWhile_stmt(ctx: While_stmtContext): string {
        let result = `while ${this.visit(ctx.named_expression())} do\n`
        result += this.visit(ctx.block())
        // TODO: How to handle else?
        result += '\nend'
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
        return 'TODO for_stmt' // TODO
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
        return 'TODO try_stmt' // TODO
    }
    // ----------------
    // Except statement
    // ----------------
    /*
    except_block
    : 'except' (expression ('as' name )?)? ':' block;
    */
    visitExcept_block(ctx: Except_blockContext): string {
        return 'TODO except_block' // TODO
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
        return 'TODO finally_block' // TODO
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
                    return 'TODO' // TODO: Implement none
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
                    return 'TODO' // TODO: Implement none
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
    visitType_alias(ctx: Type_aliasContext): string {
        return 'TODO type_alias' // TODO
    }
    // --------------------------
    // Type parameter declaration
    // --------------------------
    /*
    type_params: '[' type_param_seq  ']';
    */
    visitType_params(ctx: Type_paramsContext): string {
        return 'TODO type_params' // TODO
    }
    /*
    type_param_seq: type_param (',' type_param)* ','?;
    */
    visitType_param_seq(ctx: Type_param_seqContext): string {
        return 'TODO type_param_seq' // TODO
    }
    /*
    type_param
    : name type_param_bound? type_param_default?
    | '*'  name type_param_starred_default?
    | '**' name type_param_default?;
    */
    visitType_param(ctx: Type_paramContext): string {
        return 'TODO type_param' // TODO
    }
    /*
    type_param_bound: ':' expression;
    */
    visitType_param_bound(ctx: Type_param_boundContext): string {
        return 'TODO type_param_bound' // TODO
    }
    /*
    type_param_default: '=' expression;
    */
    visitType_param_default(ctx: Type_param_defaultContext): string {
        return 'TODO type_param_default' // TODO
    }
    /*
    type_param_starred_default: '=' star_expression;
    */
    visitType_param_starred_default(ctx: Type_param_starred_defaultContext): string {
        return 'TODO type_param_starred_default' // TODO
    }
    // -----------
    // EXPRESSIONS
    // -----------
    /*
    expressions
    : expression (',' expression )* ','?;
    */
    visitExpressions(ctx: ExpressionsContext): string {
        return 'TODO expressions' // TODO
    }
    /*
    expression
    : disjunction ('if' disjunction 'else' expression)?
    | lambdef;
    */
    visitExpression(ctx: ExpressionContext): string {
        return 'TODO expression' // TODO
    }
    /*
    yield_expr
    : 'yield' ('from' expression | star_expressions?);
    */
    visitYield_expr(ctx: Yield_exprContext): string {
        return 'TODO yield_expr' // TODO
    }
    /*
    star_expressions
    : star_expression (',' star_expression )* ','?;
    */
    visitStar_expressions(ctx: Star_expressionsContext): string {
        const starExprs = ctx.star_expression_list()
        if (starExprs.length > 1) {
            return `table.unpack(tablesMerge(${
                starExprs.map((x) => `table.pack(${this.visit(x)})`).join(", ")
            }))`
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
        return 'TODO star_named_expressions' // TODO
    }
    /*
    star_named_expression
    : '*' bitwise_or
    | named_expression;
    */
    visitStar_named_expression(ctx: Star_named_expressionContext): string {
        return 'TODO star_named_expression' // TODO
    }
    /*
    assignment_expression
    : name ':=' expression;
    */
    visitAssignment_expression(ctx: Assignment_expressionContext): string {
        return 'TODO assignment_expression' // TODO
    }
    /*
    named_expression
    : assignment_expression
    | expression;
    */
    visitNamed_expression(ctx: Named_expressionContext): string {
        return 'TODO named_expression' // TODO
    }
    /*
    disjunction
    : conjunction ('or' conjunction )*;
    */
    visitDisjunction(ctx: DisjunctionContext): string {
        // TODO: Confirm precedence in lua
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
        const compopbitorpair = ctx.compare_op_bitwise_or_pair_list()
        if (compopbitorpair.length == 0) return this.visit(ctx.bitwise_or())
        return `${this.visit(ctx.bitwise_or())} ${compopbitorpair.map(x => this.visit(x)).join(' ')}`
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
    visitCompare_op_bitwise_or_pair(ctx: Compare_op_bitwise_or_pairContext): string {
        return this.visit(ctx.getChild(0))
    }
    /*
    eq_bitwise_or: '==' bitwise_or;
    */
    visitEq_bitwise_or(ctx: Eq_bitwise_orContext): string {
        return `== ${this.visit(ctx.bitwise_or())}`
    }
    /*
    noteq_bitwise_or
    : ('!=' ) bitwise_or;
    */
    visitNoteq_bitwise_or(ctx: Noteq_bitwise_orContext): string {
        return `~= ${this.visit(ctx.bitwise_or())}`
    }
    /*
    lte_bitwise_or: '<=' bitwise_or;
    */
    visitLte_bitwise_or(ctx: Lte_bitwise_orContext): string {
        return `<= ${this.visit(ctx.bitwise_or())}`
    }
    /*
    lt_bitwise_or: '<' bitwise_or;
    */
    visitLt_bitwise_or(ctx: Lt_bitwise_orContext): string {
        return `< ${this.visit(ctx.bitwise_or())}`
    }
    /*
    gte_bitwise_or: '>=' bitwise_or;
    */
    visitGte_bitwise_or(ctx: Gte_bitwise_orContext): string {
        return `>= ${this.visit(ctx.bitwise_or())}`
    }
    /*
    gt_bitwise_or: '>' bitwise_or;
    */
    visitGt_bitwise_or(ctx: Gt_bitwise_orContext): string {
        return `> ${this.visit(ctx.bitwise_or())}`
    }
    /*
    notin_bitwise_or: 'not' 'in' bitwise_or;
    */
    visitNotin_bitwise_or(ctx: Notin_bitwise_orContext): string {
        return 'TODO notin_bitwise_or' // TODO
    }
    /*
    in_bitwise_or: 'in' bitwise_or;
    */
    visitIn_bitwise_or(ctx: In_bitwise_orContext): string {
        return 'TODO in_bitwise_or' // TODO
    }
    /*
    isnot_bitwise_or: 'is' 'not' bitwise_or;
    */
    visitIsnot_bitwise_or(ctx: Isnot_bitwise_orContext): string {
        return 'TODO isnot_bitwise_or' // TODO
    }
    /*
    is_bitwise_or: 'is' bitwise_or;
    */
    visitIs_bitwise_or(ctx: Is_bitwise_orContext): string {
        return 'TODO is_bitwise_or' // TODO
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
                    return `math.floor(${this.visit(term)} / ${this.visit(factor)})`
                case PythonLexer.PERCENT:
                    return `${this.visit(term)} % ${this.visit(factor)}`
                case PythonLexer.AT:
                    throw Error("TODO: Remove AT")
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
        return 'TODO await_primary' // TODO
    }
    /*
    primary
    : primary ('.' name | genexp | '(' arguments? ')' | '[' slices ']')
    | atom;
    */
    visitPrimary(ctx: PrimaryContext): string {
        return 'TODO primary' // TODO
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
        return 'TODO slice' // TODO
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
        return 'TODO atom' // TODO
    }
    /*
    group
    : '(' (yield_expr | named_expression) ')';
    */
    visitGroup(ctx: GroupContext): string {
        return 'TODO group' // TODO
    }
    // ----------------
    // Lambda functions
    // ----------------
    /*
    lambdef
    : 'lambda' lambda_params? ':' expression;
    */
    visitLambdef(ctx: LambdefContext): string {
        return `function (${this.visit(ctx.lambda_params())})\n${this.visit(ctx.expression())}\nend`
    }
    /*
    lambda_params
    : lambda_parameters;
    */
    visitLambda_params(ctx: Lambda_paramsContext): string {
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
    visitLambda_parameters(ctx: Lambda_parametersContext): string {
        return 'TODO lambda_parameters' // TODO
    }
    /*
    lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?;
    */
    visitLambda_slash_no_default(ctx: Lambda_slash_no_defaultContext): string {
        return 'TODO lambda_slash_no_default' // TODO
    }
    /*
    lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?;
    */
    visitLambda_slash_with_default(ctx: Lambda_slash_with_defaultContext): string {
        return 'TODO lambda_slash_with_default' // TODO
    }
    /*
    lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;
    */
    visitLambda_star_etc(ctx: Lambda_star_etcContext): string {
        return 'TODO lambda_star_etc' // TODO
    }
    /*
    lambda_kwds
    : '**' lambda_param_no_default;
    */
    visitLambda_kwds(ctx: Lambda_kwdsContext): string {
        return 'TODO lambda_kwds' // TODO
    }
    /*
    lambda_param_no_default
    : lambda_param ','?;
    */
    visitLambda_param_no_default(ctx: Lambda_param_no_defaultContext): string {
        return 'TODO lambda_param_no_default' // TODO
    }
    /*
    lambda_param_with_default
    : lambda_param default_assignment ','?;
    */
    visitLambda_param_with_default(ctx: Lambda_param_with_defaultContext): string {
        return 'TODO lambda_param_with_default' // TODO        
    }
    /*
    lambda_param_maybe_default
    : lambda_param default_assignment? ','?;
    */
    visitLambda_param_maybe_default(ctx: Lambda_param_maybe_defaultContext): string {
        return 'TODO lambda_param_maybe_default' // TODO
    }
    /*
    lambda_param: name;
    */
    visitLambda_param(ctx: Lambda_paramContext): string {
        return this.visit(ctx.getChild(0))
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
        return 'TODO fstring_middle' // TODO
    }
    /*
    fstring_replacement_field
    : LBRACE annotated_rhs '='? fstring_conversion? fstring_full_format_spec? RBRACE;
    */
    visitFstring_replacement_field(ctx: Fstring_replacement_fieldContext): string {
        return 'TODO fstring_replacement_field' // TODO
    }
    /*
    fstring_conversion
    : '!' name;
    */
    visitFstring_conversion(ctx: Fstring_conversionContext): string {
        return 'TODO fstring_conversion' // TODO
    }
    /*
    fstring_full_format_spec
    : ':' fstring_format_spec*;
    */
    visitFstring_full_format_spec(ctx: Fstring_full_format_specContext): string {
        return 'TODO fstring_full_format_spec' // TODO
    }
    /*
    fstring_format_spec
    : FSTRING_MIDDLE
    | fstring_replacement_field;
    */
    visitFstring_format_spec(ctx: Fstring_format_specContext): string {
        return 'TODO fstring_format_spec' // TODO
    }
    /*
    fstring
    : FSTRING_START fstring_middle* FSTRING_END;
    */
    visitFstring(ctx: FstringContext): string {
        return 'TODO fstring' // TODO
    }
    /*
    string: STRING;
    */
    visitString(ctx: StringContext): string {
        return 'TODO string' // TODO
    }
    /*
    strings: (fstring|string)+;
    */
    visitStrings(ctx: StringsContext): string {
        return 'TODO strings' // TODO
    }
    /*
    list
    : '[' star_named_expressions? ']';
    */
    visitList(ctx: ListContext): string {
        return 'TODO list' // TODO
    }
    /*
    tuple
    : '(' (star_named_expression ',' star_named_expressions?  )? ')';
    */
    visitTuple(ctx: TupleContext): string {
        return 'TODO tuple' // TODO
    }
    /*
    set: LBRACE star_named_expressions RBRACE;
    */
    visitSet(ctx: SetContext): string {
        return 'TODO set' // TODO
    }
    // -----
    // Dicts
    // -----
    /*
    dict
    : LBRACE double_starred_kvpairs? RBRACE;
    */
    visitDict(ctx: DictContext): string {
        return 'TODO dict' // TODO
    }
    /*
    double_starred_kvpairs: double_starred_kvpair (',' double_starred_kvpair)* ','?;
    */
    visitDouble_starred_kvpairs(ctx: Double_starred_kvpairsContext): string {
        return 'TODO double_starred_kvpairs' // TODO
    }
    /*
    double_starred_kvpair
    : '**' bitwise_or
    | kvpair;
    */
    visitDouble_starred_kvpair(ctx: Double_starred_kvpairContext): string {
        return 'TODO double_starred_kvpair' // TODO
    }
    /*
    kvpair: expression ':' expression;
    */
    visitKvpair(ctx: KvpairContext): string {
        return 'TODO kvpair' // TODO
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
        return this.visit(ctx.args()) // ',' is ignored by Python compiler
    }
    /*
    args
    : (starred_expression | (assignment_expression | expression)) (',' (starred_expression | ( assignment_expression | expression)))* (',' kwargs )?
    | kwargs;
    */
    visitArgs(ctx: ArgsContext): string {
        return 'TODO args' // TODO
    }
    /*
    kwargs
    : kwarg_or_starred (',' kwarg_or_starred)* (',' kwarg_or_double_starred (',' kwarg_or_double_starred)*)?
    | kwarg_or_double_starred (',' kwarg_or_double_starred)*;
    */
    visitKwargs(ctx: KwargsContext): string {
        return 'TODO kwargs' // TODO
    }
    /*
    starred_expression
    : '*' expression;
    */
    visitStarred_expression(ctx: Starred_expressionContext): string {
        return 'TODO starred_expression' // TODO
    }
    /*
    kwarg_or_starred
    : name '=' expression
    | starred_expression;
    */
    visitKwarg_or_starred(ctx: Kwarg_or_starredContext): string {
        return 'TODO kwarg_or_starred' // TODO
    }
    /*
    kwarg_or_double_starred
    : name '=' expression
    | '**' expression;
    */
    visitKwarg_or_double_starred(ctx: Kwarg_or_double_starredContext): string {
        return 'TODO kwarg_or_double_starred' // TODO
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
        return 'TODO star_targets' // TODO
    }
    /*
    star_targets_list_seq: star_target (',' star_target)* ','?;
    */
    visitStar_targets_list_seq(ctx: Star_targets_list_seqContext): string {
        return 'TODO star_targets_list_seq' // TODO
    }
    /*
    star_targets_tuple_seq
    : star_target (',' | (',' star_target )+ ','?);
    */
    visitStar_targets_tuple_seq(ctx: Star_targets_tuple_seqContext): string {
        return 'TODO star_targets_tuple_seq' // TODO
    }
    /*
    star_target
    : '*' (star_target)
    | target_with_star_atom;
    */
    visitStar_target(ctx: Star_targetContext): string {
        return 'TODO star_target' // TODO
    }
    /*
    target_with_star_atom
    : t_primary ('.' name | '[' slices ']')
    | star_atom;
    */
    visitTarget_with_star_atom(ctx: Target_with_star_atomContext): string {
        return 'TODO target_with_star_atom' // TODO
    }
    /*
    star_atom
    : name
    | '(' target_with_star_atom ')'
    | '(' star_targets_tuple_seq? ')'
    | '[' star_targets_list_seq? ']';
    */
    visitStar_atom(ctx: Star_atomContext): string {
        return 'TODO star_atom' // TODO
    }
    /*
    single_target
    : single_subscript_attribute_target
    | name
    | '(' single_target ')';
    */
    visitSingle_target(ctx: Single_targetContext): string {
        return 'TODO single_target' // TODO
    }
    /*
    single_subscript_attribute_target
    : t_primary ('.' name | '[' slices ']');
    */
    visitSingle_subscript_attribute_target(ctx: Single_subscript_attribute_targetContext): string {
        return 'TODO single_subscript_attribute_target' // TODO
    }
    /*
    t_primary
    : t_primary ('.' name | '[' slices ']' | genexp | '(' arguments? ')')
    | atom;
    */
    visitT_primary(ctx: T_primaryContext): string {
        return 'TODO t_primary' // TODO
    }
    // --------------------------
    // Targets for del statements
    // --------------------------
    /*
    del_targets: del_target (',' del_target)* ','?;
    */
    visitDel_targets(ctx: Del_targetsContext): string {
        return 'TODO del_targets' // TODO
    }
    /*
    del_target
    : t_primary ('.' name | '[' slices ']')
    | del_t_atom;
    */
    visitDel_target(ctx: Del_targetContext): string {
        return 'TODO del_target' // TODO
    }
    /*
    del_t_atom
    : name
    | '(' del_target ')'
    | '(' del_targets? ')'
    | '[' del_targets? ']';
    */
    visitDel_t_atom(ctx: Del_t_atomContext): string {
        return 'TODO del_t_atom' // TODO
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
    visitType_expressions(ctx: Type_expressionsContext): string {
        /* eg.
            Callable[[int, str], bool]   (`int, str`)
            Callable[[int, *str], bool]   (`int, *str`)
            Callable[[int, str, **Any], bool]   (`int, str, **Any`)
            etc.
        */
        return 'TODO type_expressions' // TODO
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

// Usunac break top-level
// Obsluga bledow semantycznych
// (Odwolanie do nieistniejacych elementów?)
// should error when coming across non-existing variable

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