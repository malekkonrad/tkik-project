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
    While_stmtContext
} from "./PythonParser";
import PythonParserVisitor from "./PythonParserVisitor";
import PythonLexer from "./PythonLexer";

export default class LuaPythonVisitor extends ParseTreeVisitor<string> implements PythonParserVisitor<string> {
  visitProgram(ctx: ProgramContext): string {
    const statements = ctx.statements()
    if (statements != null) return this.visit(statements);
    return ''
  }
  visitStatements(ctx: StatementsContext): string {
    return ctx.children?.map((x) => this.visit(x))?.join('\n') ?? ''
  }
  visitStatement(ctx: StatementContext): string {
    return this.visit(ctx.getChild(0))
  }
  visitSimple_stmts(ctx: Simple_stmtsContext): string {
    return ctx.simple_stmt_list().map((x) => this.visit(x)).join('\n')
  }
  visitSimple_stmt(ctx: Simple_stmtContext): string {
    const ch = ctx.getChild(0)
    if (ch instanceof TerminalNode) {
      switch (ch.symbol.type) {
        case PythonLexer.PASS:
          return '';
        case PythonLexer.BREAK:
          return 'break';
        case PythonLexer.CONTINUE:
          throw Error("TODO: Rozważyć continue")
      }
    }
    return this.visit(ch)
  }
  visitCompound_stmt(ctx: Compound_stmtContext): string {
    return this.visit(ctx.getChild(0))
  }

  visitFunction_def(ctx: Function_defContext): string {
    let result = `function ${ctx.function_def_raw().name().getText()}(`
    // TODO: Visit parameters
    console.log(ctx.function_def_raw().params())
    result += ')\n'
    result += this.visit(ctx.function_def_raw().block())
    
    result += '\nend'
    return result
/*
    function_def
    : decorators function_def_raw
    | function_def_raw;

function_def_raw
    : 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
    | 'async' 'def' name type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
    */
  }
  visitReturn_stmt(ctx: Return_stmtContext): string {
    const starExpr = ctx.star_expressions()
    if (starExpr == null) return 'return'
    return `return ${this.visit(starExpr)}`
  }
  /*
  visitAssignment(ctx: AssignmentContext): string {
    
  }

  */
  /*
  star_expressions
    : star_expression (',' star_expression )* ','?
    ;
  */
  visitStar_expressions(ctx: Star_expressionsContext): string {
    const starExprs = ctx.star_expression_list()
    if (starExprs.length > 1) {
        return `table.unpack(tablesMerge(${ // TODO: Check if this solution works?
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
    | sum
    ;
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
  /*
  sum
    : sum ('+' | '-') term
    | term
    ;
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
    | factor
    ;
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
    : await_primary ('**' factor)?
    ;
  */
  visitPower(ctx: PowerContext): string {
    const factor = ctx.factor()
    const awaitPrim = ctx.await_primary()
    if (factor != null) {
        return `math.pow(${this.visit(awaitPrim)}, ${this.visit(factor)})`
    }
    return this.visit(awaitPrim)
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
  global_stmt: 'global' name (',' name)*;
  */
  visitGlobal_stmt(ctx: Global_stmtContext): string {
    // Global does not exist in lua
    // TODO: Need to figure out how to handle local variables
    return `--[[ global ${ctx.name_list().map(x => this.visit(x)).join(',')} ]]`
  }
  /*
  nonlocal_stmt: 'nonlocal' name (',' name)*;
  */
  visitNonlocal_stmt(ctx: Nonlocal_stmtContext): string {
    // TODO: What's nonlocal?
    return `--[[ nonlocal ${ctx.name_list().map(x => this.visit(x)).join(',')} ]]`
  }
  /*
  block
    : NEWLINE INDENT statements DEDENT
    | simple_stmts;
  */
  visitBlock(ctx: BlockContext): string {
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
  if_stmt
    : 'if' named_expression ':' block (elif_stmt | else_block?)
    ;
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
    : 'elif' named_expression ':' block (elif_stmt | else_block?)
    ;
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
}

// Usunac break
// Obsluga bledow semantycznych
// (Odwolanie do nieistniejacych elementów?)

/*

eval: expressions NEWLINE* EOF;
func_type: '(' type_expressions? ')' '->' expression NEWLINE* EOF;

// SIMPLE STATEMENTS
// =================

// NOTE: annotated_rhs may start with 'yield'; yield_expr must start with 'yield'
assignment
    : name ':' expression ('=' annotated_rhs )?
    | ('(' single_target ')'
         | single_subscript_attribute_target) ':' expression ('=' annotated_rhs )?
    | (star_targets '=' )+ (yield_expr | star_expressions) TYPE_COMMENT?
    | single_target augassign (yield_expr | star_expressions);

annotated_rhs: yield_expr | star_expressions;

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

raise_stmt
    : 'raise' (expression ('from' expression )?)?
    ;

yield_stmt: yield_expr;

assert_stmt: 'assert' expression (',' expression )?;

import_stmt
    : import_name
    | import_from;

// Import statements
// -----------------

import_name: 'import' dotted_as_names;
// note below: the ('.' | '...') is necessary because '...' is tokenized as ELLIPSIS
import_from
    : 'from' ('.' | '...')* dotted_name 'import' import_from_targets
    | 'from' ('.' | '...')+ 'import' import_from_targets;
import_from_targets
    : '(' import_from_as_names ','? ')'
    | import_from_as_names
    | '*';
import_from_as_names
    : import_from_as_name (',' import_from_as_name)*;
import_from_as_name
    : name ('as' name )?;
dotted_as_names
    : dotted_as_name (',' dotted_as_name)*;
dotted_as_name
    : dotted_name ('as' name )?;
dotted_name
    : dotted_name '.' name
    | name;

// COMPOUND STATEMENTS
// ===================

// Common elements
// ---------------

decorators: ('@' named_expression NEWLINE )+;

// Class definitions
// -----------------

class_def
    : decorators class_def_raw
    | class_def_raw;

class_def_raw
    : 'class' name type_params? ('(' arguments? ')' )? ':' block;

// Function definitions
// --------------------


// Function parameters
// -------------------

params
    : parameters;

parameters
    : slash_no_default param_no_default* param_with_default* star_etc?
    | slash_with_default param_with_default* star_etc?
    | param_no_default+ param_with_default* star_etc?
    | param_with_default+ star_etc?
    | star_etc;

// Some duplication here because we can't write (',' | {isCurrentTokenType(RPAR)}?),
// which is because we don't support empty alternatives (yet).

slash_no_default
    : param_no_default+ '/' ','?
    ;
slash_with_default
    : param_no_default* param_with_default+ '/' ','?
    ;

star_etc
    : '*' param_no_default param_maybe_default* kwds?
    | '*' param_no_default_star_annotation param_maybe_default* kwds?
    | '*' ',' param_maybe_default+ kwds?
    | kwds;

kwds
    : '**' param_no_default;

// One parameter.  This *includes* a following comma and type comment.
//
// There are three styles:
// - No default_assignment
// - With default_assignment
// - Maybe with default_assignment
//
// There are two alternative forms of each, to deal with type comments:
// - Ends in a comma followed by an optional type comment
// - No comma, optional type comment, must be followed by close paren
// The latter form is for a final parameter without trailing comma.
//

param_no_default
    : param ','? TYPE_COMMENT?
    ;
param_no_default_star_annotation
    : param_star_annotation ','? TYPE_COMMENT?
    ;
param_with_default
    : param default_assignment ','? TYPE_COMMENT?
    ;
param_maybe_default
    : param default_assignment? ','? TYPE_COMMENT?
    ;
param: name annotation?;
param_star_annotation: name star_annotation;
annotation: ':' expression;
star_annotation: ':' star_expression;
default_assignment: '=' expression;

// If statement
// ------------


// For statement
// -------------

for_stmt
    : 'async'? 'for' star_targets 'in' star_expressions ':' TYPE_COMMENT? block else_block?
    ;

// With statement
// --------------

with_stmt
    : 'with' '(' with_item (',' with_item)* ','? ')' ':' TYPE_COMMENT? block
    | 'async' 'with' '(' with_item (',' with_item)* ','? ')' ':' block
    | 'async'? 'with' with_item (',' with_item)* ':' TYPE_COMMENT? block
    ;

with_item
    : expression ('as' star_target)?
    ;

// Try statement
// -------------

try_stmt
    : 'try' ':' block finally_block
    | 'try' ':' block except_block+ else_block? finally_block?
    | 'try' ':' block except_star_block+ else_block? finally_block?;


// Except statement
// ----------------

except_block
    : 'except' (expression ('as' name )?)? ':' block
    ;
except_star_block
    : 'except' '*' expression ('as' name )? ':' block;
finally_block
    : 'finally' ':' block;

// Match statement
// ---------------

match_stmt
    : 'match' subject_expr ':' NEWLINE INDENT case_block+ DEDENT;

subject_expr
    : star_named_expression ',' star_named_expressions?
    | named_expression;

case_block
    : 'case' patterns guard? ':' block;

guard: 'if' named_expression;

patterns
    : open_sequence_pattern
    | pattern;

pattern
    : as_pattern
    | or_pattern;

as_pattern
    : or_pattern 'as' pattern_capture_target;

or_pattern
    : closed_pattern ('|' closed_pattern)*;

closed_pattern
    : literal_pattern
    | capture_pattern
    | wildcard_pattern
    | value_pattern
    | group_pattern
    | sequence_pattern
    | mapping_pattern
    | class_pattern;

// Literal patterns are used for equality and identity constraints
literal_pattern
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';

// Literal expressions are used to restrict permitted mapping pattern keys
literal_expr
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';

complex_number
    : signed_real_number ('+' | '-') imaginary_number
    ;

signed_number
    : '-'? NUMBER
    ;

signed_real_number
    : '-'? real_number
    ;

real_number
    : NUMBER;

imaginary_number
    : NUMBER;

capture_pattern
    : pattern_capture_target;

pattern_capture_target
    : name_except_underscore;

wildcard_pattern
    : '_';

value_pattern
    : attr;

attr
    : name ('.' name)+
    ;
name_or_attr
    : name ('.' name)*
    ;

group_pattern
    : '(' pattern ')';

sequence_pattern
    : '[' maybe_sequence_pattern? ']'
    | '(' open_sequence_pattern? ')';

open_sequence_pattern
    : maybe_star_pattern ',' maybe_sequence_pattern?;

maybe_sequence_pattern
    : maybe_star_pattern (',' maybe_star_pattern)* ','?;

maybe_star_pattern
    : star_pattern
    | pattern;

star_pattern
    : '*' name
    ;

mapping_pattern
    : LBRACE RBRACE
    | LBRACE double_star_pattern ','? RBRACE
    | LBRACE items_pattern (',' double_star_pattern)? ','? RBRACE
    ;

items_pattern
    : key_value_pattern (',' key_value_pattern)*;

key_value_pattern
    : (literal_expr | attr) ':' pattern;

double_star_pattern
    : '**' pattern_capture_target;

class_pattern
    : name_or_attr '(' ((positional_patterns (',' keyword_patterns)? | keyword_patterns) ','?)? ')'
    ;



positional_patterns
    : pattern (',' pattern)*;

keyword_patterns
    : keyword_pattern (',' keyword_pattern)*;

keyword_pattern
    : name '=' pattern;

// Type statement
// ---------------

type_alias
    : 'type' name type_params? '=' expression;

// Type parameter declaration
// --------------------------

type_params: '[' type_param_seq  ']';

type_param_seq: type_param (',' type_param)* ','?;

type_param
    : name type_param_bound? type_param_default?
    | '*'  name type_param_starred_default?
    | '**' name type_param_default?
    ;


type_param_bound: ':' expression;
type_param_default: '=' expression;
type_param_starred_default: '=' star_expression;

// EXPRESSIONS
// -----------

expressions
    : expression (',' expression )* ','?
    ;


expression
    : disjunction ('if' disjunction 'else' expression)?
    | lambdef
    ;

yield_expr
    : 'yield' ('from' expression | star_expressions?)
    ;

star_named_expressions: star_named_expression (',' star_named_expression)* ','?;

star_named_expression
    : '*' bitwise_or
    | named_expression;

assignment_expression
    : name ':=' expression;

named_expression
    : assignment_expression
    | expression;

disjunction
    : conjunction ('or' conjunction )*
    ;

conjunction
    : inversion ('and' inversion )*
    ;

inversion
    : 'not' inversion
    | comparison;

// Comparison operators
// --------------------

comparison
    : bitwise_or compare_op_bitwise_or_pair*
    ;

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

eq_bitwise_or: '==' bitwise_or;
noteq_bitwise_or
    : ('!=' ) bitwise_or;
lte_bitwise_or: '<=' bitwise_or;
lt_bitwise_or: '<' bitwise_or;
gte_bitwise_or: '>=' bitwise_or;
gt_bitwise_or: '>' bitwise_or;
notin_bitwise_or: 'not' 'in' bitwise_or;
in_bitwise_or: 'in' bitwise_or;
isnot_bitwise_or: 'is' 'not' bitwise_or;
is_bitwise_or: 'is' bitwise_or;


// Primary elements
// ----------------

// Primary elements are things like "obj.something.something", "obj[something]", "obj(something)", "obj" ...

await_primary
    : 'await' primary
    | primary;

primary
    : primary ('.' name | genexp | '(' arguments? ')' | '[' slices ']')
    | atom
    ;



slices
    : slice
    | (slice | starred_expression) (',' (slice | starred_expression))* ','?;

slice
    : expression? ':' expression? (':' expression? )?
    | named_expression;

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

group
    : '(' (yield_expr | named_expression) ')';

// Lambda functions
// ----------------

lambdef
    : 'lambda' lambda_params? ':' expression;

lambda_params
    : lambda_parameters;

// lambda_parameters etc. duplicates parameters but without annotations
// or type comments, and if there's no comma after a parameter, we expect
// a colon, not a close parenthesis.  (For more, see parameters above.)
//
lambda_parameters
    : lambda_slash_no_default lambda_param_no_default* lambda_param_with_default* lambda_star_etc?
    | lambda_slash_with_default lambda_param_with_default* lambda_star_etc?
    | lambda_param_no_default+ lambda_param_with_default* lambda_star_etc?
    | lambda_param_with_default+ lambda_star_etc?
    | lambda_star_etc;

lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?
    ;

lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?
    ;

lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;

lambda_kwds
    : '**' lambda_param_no_default;

lambda_param_no_default
    : lambda_param ','?
    ;
lambda_param_with_default
    : lambda_param default_assignment ','?
    ;
lambda_param_maybe_default
    : lambda_param default_assignment? ','?
    ;
lambda_param: name;

// LITERALS
// ========

fstring_middle
    : fstring_replacement_field
    | FSTRING_MIDDLE;
fstring_replacement_field
    : LBRACE annotated_rhs '='? fstring_conversion? fstring_full_format_spec? RBRACE;
fstring_conversion
    : '!' name;
fstring_full_format_spec
    : ':' fstring_format_spec*;
fstring_format_spec
    : FSTRING_MIDDLE
    | fstring_replacement_field;
fstring
    : FSTRING_START fstring_middle* FSTRING_END;

string: STRING;
strings: (fstring|string)+;

list
    : '[' star_named_expressions? ']';

tuple
    : '(' (star_named_expression ',' star_named_expressions?  )? ')';

set: LBRACE star_named_expressions RBRACE;

// Dicts
// -----

dict
    : LBRACE double_starred_kvpairs? RBRACE;

double_starred_kvpairs: double_starred_kvpair (',' double_starred_kvpair)* ','?;

double_starred_kvpair
    : '**' bitwise_or
    | kvpair;

kvpair: expression ':' expression;

// Comprehensions & Generators
// ---------------------------

for_if_clauses
    : for_if_clause+;

for_if_clause
    : 'async'? 'for' star_targets 'in' disjunction ('if' disjunction )*
    ;

listcomp
    : '[' named_expression for_if_clauses ']';

setcomp
    : LBRACE named_expression for_if_clauses RBRACE;

genexp
    : '(' ( assignment_expression | expression) for_if_clauses ')';

dictcomp
    : LBRACE kvpair for_if_clauses RBRACE;

// FUNCTION CALL ARGUMENTS
// =======================

arguments
    : args ','?;

args
    : (starred_expression | ( assignment_expression | expression)) (',' (starred_expression | ( assignment_expression | expression)))* (',' kwargs )?
    | kwargs;

kwargs
    : kwarg_or_starred (',' kwarg_or_starred)* (',' kwarg_or_double_starred (',' kwarg_or_double_starred)*)?
    | kwarg_or_double_starred (',' kwarg_or_double_starred)*
    ;

starred_expression
    : '*' expression;

kwarg_or_starred
    : name '=' expression
    | starred_expression;

kwarg_or_double_starred
    : name '=' expression
    | '**' expression;

// ASSIGNMENT TARGETS
// ==================

// Generic targets
// ---------------

// NOTE: star_targets may contain *bitwise_or, targets may not.
star_targets
    : star_target (',' star_target )* ','?
    ;

star_targets_list_seq: star_target (',' star_target)* ','?;

star_targets_tuple_seq
    : star_target (',' | (',' star_target )+ ','?)
    ;

star_target
    : '*' (star_target)
    | target_with_star_atom;

target_with_star_atom
    : t_primary ('.' name | '[' slices ']')
    | star_atom
    ;

star_atom
    : name
    | '(' target_with_star_atom ')'
    | '(' star_targets_tuple_seq? ')'
    | '[' star_targets_list_seq? ']';

single_target
    : single_subscript_attribute_target
    | name
    | '(' single_target ')';

single_subscript_attribute_target
    : t_primary ('.' name | '[' slices ']')
    ;

t_primary
    : t_primary ('.' name | '[' slices ']' | genexp | '(' arguments? ')')
    | atom
    ;





// Targets for del statements
// --------------------------

del_targets: del_target (',' del_target)* ','?;

del_target
    : t_primary ('.' name | '[' slices ']')
    | del_t_atom
    ;

del_t_atom
    : name
    | '(' del_target ')'
    | '(' del_targets? ')'
    | '[' del_targets? ']';

// TYPING ELEMENTS
// ---------------


type_expressions
    : expression (',' expression)* (',' ('*' expression (',' '**' expression)? | '**' expression))?
    | '*' expression (',' '**' expression)?
    | '**' expression
    ;



func_type_comment
    : NEWLINE TYPE_COMMENT   // Must be followed by indented block
    | TYPE_COMMENT;

// *** related to soft keywords: https://docs.python.org/3.13/reference/lexical_analysis.html#soft-keywords
name_except_underscore
    : NAME // ***** The NAME token can be used only in this rule *****
    | NAME_OR_TYPE
    | NAME_OR_MATCH
    | NAME_OR_CASE
    ;

// ***** Always use name rule instead of NAME token in this grammar *****
name: NAME_OR_WILDCARD | name_except_underscore;

// ========================= END OF THE GRAMMAR ===========================

*/