lexer grammar MiniPythonLexer;


// Lexer rules

INT : [0-9]+ ;
FLOAT : [0-9]+ ('.' [0-9]+)?;
NEWLINE : '\r'? '\n' ;
WS : [ \t]+ -> skip ;


TRUE  : 'True';
FALSE : 'False';

ASSIGN: '=';

COLON: ':';
SEMICOLON: ';';
COMMA: ',';

LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';

ADD: '+';
SUB: '-';
DIV: '/';
MUL: '*';

DOT: '.';

EQUALS             : '==';
LESS_THAN          : '<';
GREATER_THAN       : '>';
GT_EQ              : '>=';
LT_EQ              : '<=';
NOT_EQUAL          : '!=';

ADD_ASSIGN         : '+=';
SUB_ASSIGN         : '-=';
MULT_ASSIGN        : '*=';
AT_ASSIGN          : '@=';
DIV_ASSIGN         : '/=';
MOD_ASSIGN         : '%=';
AND_ASSIGN         : '&=';
OR_ASSIGN          : '|=';
XOR_ASSIGN         : '^=';


AND        : 'and';
OR         : 'or';
NOT        : 'not';

//
IF         : 'if';
ELIF       : 'elif';
ELSE       : 'else';

// LOOPS:
FOR         : 'for';
RANGE : 'range';
IN          : 'in';
WHILE       : 'while';

// func
DEF: 'def';
RETURN: 'return';

BREAK    : 'break';
CONTINUE : 'continue';

PRINT : 'print';

// no końcu - słowa kluczowe muszą być wcześniej rozpoznawane!
ID  : [a-zA-Z_][a-zA-Z_0-9]* ;

// komentarze - są pomijane!
COMMENT : '#' ~[\r\n]* -> skip ;
TRIPLE_STRING : '"""' .*? '"""' -> skip;
