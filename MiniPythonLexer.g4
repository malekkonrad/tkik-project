lexer grammar MiniPythonLexer;


// Lexer rules

//STRING
STRING
    :   '"' ( ESC_SEQ | ~["\\\r\n] )* '"'
    |   '\'' ( ESC_SEQ | ~['\\\r\n] )* '\''
    ;

fragment ESC_SEQ
    :   '\\' . | '\\' NEWLINE;


// liczby
NUMBER: INT | FLOAT;

INT : [0-9]+ ;
FLOAT : [0-9]+ ('.' [0-9]+)?;

// bools
TRUE  : 'True';
FALSE : 'False';


// znaki interpunkcyjne
DOT: '.';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';

// nawiasowanie
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';

ADD: '+';
SUB: '-';
DIV: '/';
MUL: '*';
MOD: '%';

// przypisanie
ASSIGN: '=';

// znaki porównania
EQUALS             : '==';
LESS_THAN          : '<';
GREATER_THAN       : '>';
GT_EQ              : '>=';
LT_EQ              : '<=';
NOT_EQUAL          : '!=';

// operacja i przypisanie
ADD_ASSIGN         : '+=';
SUB_ASSIGN         : '-=';
MULT_ASSIGN        : '*=';
AT_ASSIGN          : '@=';
DIV_ASSIGN         : '/=';
MOD_ASSIGN         : '%=';
AND_ASSIGN         : '&=';
OR_ASSIGN          : '|=';
XOR_ASSIGN         : '^=';

// operatory logiczne
AND        : 'and';
OR         : 'or';
NOT        : 'not';

AND_OP             : '&';
OR_OP              : '|';
NOT_OP             : '~';
XOR                : '^';

IS         : 'is';

// flow
IF         : 'if';
ELIF       : 'elif';
ELSE       : 'else';

CASE       : 'case';


// LOOPS:
FOR         : 'for';
RANGE : 'range';
IN          : 'in';
WHILE       : 'while';

// func
DEF: 'def';
RETURN: 'return';

LAMBDA     : 'lambda';

BREAK    : 'break';
CONTINUE : 'continue';

PRINT : 'print';

// extra
ASSERT     : 'assert';
WITH       : 'with';
YIELD      : 'yield';
UNDERSCORE : '_';


// blok try except finally
TRY        : 'try';
EXCEPT     : 'except';
FINALLY    : 'finally';
RAISE      : 'raise';

// obiekty
CLASS      : 'class';

// importy
FROM       : 'from';
IMPORT     : 'import';

// IDENTIFIER
ID  : [a-zA-Z_][a-zA-Z_0-9]* ;

NEWLINE : '\r'? '\n' ;
WS : [ \t]+ -> skip ;






// komentarze - są pomijane!
COMMENT : '#' ~[\r\n]* -> skip ;
TRIPLE_STRING : '"""' .*? '"""' -> skip;
