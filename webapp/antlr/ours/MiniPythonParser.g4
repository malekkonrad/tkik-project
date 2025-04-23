parser grammar MiniPythonParser;

options { tokenVocab=MiniPythonLexer; }


// symbol startowy
program
    : stmt* EOF
    ;

stmt
    : assign
    | if_stmt
    | for_stmt
    | while_stmt
    | funcdef
    | return_stmt
    | break_stmt
    | continue_stmt
    | expr_stmt
    | print_stmt
    | NEWLINE
    ;

if_stmt
    : IF condition COLON
    block
    (ELIF condition COLON block)*
    (ELSE COLON block)?;

for_stmt
    : FOR ID IN ID COLON block
    | FOR ID IN INT DOT DOT INT COLON block   // extra
    | FOR ID IN RANGE LPAREN expr COMMA expr RPAREN COLON block;  // nie najlepiej zrobione
//    | FOR ID IN RANGE LPAREN INT COMMA INT RPAREN COLON block;


while_stmt
    : WHILE condition COLON block;

return_stmt
    : RETURN expr NEWLINE;

break_stmt
    : BREAK NEWLINE;

continue_stmt
    : CONTINUE NEWLINE;

funcdef
    : DEF ID  parameters  COLON block;

print_stmt
    : PRINT LPAREN (expr (COMMA expr)*)? RPAREN NEWLINE
    ;

parameters
    : LPAREN (ID (COMMA ID)*)? RPAREN ;

// obecnie wszyskie bloki są jednolinijkowe
block
    : NEWLINE stmt
    ;


expr_stmt
    : expr NEWLINE;

expr
    : expr op=(ADD|SUB) expr
    | expr op=(MUL|DIV) expr
    | ID LPAREN (expr (COMMA expr)*)? RPAREN   // wywołanie funkcji
    | LPAREN expr RPAREN
    | LBRACK (expr (COMMA expr)*)? RBRACK       // listy
    | INT
    | FLOAT
    | ID
    | boolean;


boolean
    : TRUE
    | FALSE;

// zaawansowane warunki
condition
    : condition OR and_condition
    | and_condition
    ;

and_condition
    : and_condition AND not_condition
    | not_condition
    ;

not_condition
    : NOT not_condition
    | comparison
    ;

comparison
    : expr comparison_op expr
    | expr
    | LPAREN condition RPAREN
    ;

comparison_op
    : EQUALS
    | LESS_THAN
    | GREATER_THAN
    | GT_EQ
    | LT_EQ
    | NOT_EQUAL;

assign
    : ID ASSIGN expr;