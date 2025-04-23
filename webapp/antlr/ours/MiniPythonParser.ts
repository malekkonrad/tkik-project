// Generated from ours/MiniPythonParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MiniPythonParserListener from "./MiniPythonParserListener";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MiniPythonParser extends Parser {
	public static readonly STRING = 1;
	public static readonly NUMBER = 2;
	public static readonly INT = 3;
	public static readonly FLOAT = 4;
	public static readonly TRUE = 5;
	public static readonly FALSE = 6;
	public static readonly DOT = 7;
	public static readonly COLON = 8;
	public static readonly SEMICOLON = 9;
	public static readonly COMMA = 10;
	public static readonly LPAREN = 11;
	public static readonly RPAREN = 12;
	public static readonly LBRACK = 13;
	public static readonly RBRACK = 14;
	public static readonly LBRACE = 15;
	public static readonly RBRACE = 16;
	public static readonly ADD = 17;
	public static readonly SUB = 18;
	public static readonly DIV = 19;
	public static readonly MUL = 20;
	public static readonly MOD = 21;
	public static readonly ASSIGN = 22;
	public static readonly EQUALS = 23;
	public static readonly LESS_THAN = 24;
	public static readonly GREATER_THAN = 25;
	public static readonly GT_EQ = 26;
	public static readonly LT_EQ = 27;
	public static readonly NOT_EQUAL = 28;
	public static readonly ADD_ASSIGN = 29;
	public static readonly SUB_ASSIGN = 30;
	public static readonly MULT_ASSIGN = 31;
	public static readonly AT_ASSIGN = 32;
	public static readonly DIV_ASSIGN = 33;
	public static readonly MOD_ASSIGN = 34;
	public static readonly AND_ASSIGN = 35;
	public static readonly OR_ASSIGN = 36;
	public static readonly XOR_ASSIGN = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly NOT = 40;
	public static readonly AND_OP = 41;
	public static readonly OR_OP = 42;
	public static readonly NOT_OP = 43;
	public static readonly XOR = 44;
	public static readonly IS = 45;
	public static readonly IF = 46;
	public static readonly ELIF = 47;
	public static readonly ELSE = 48;
	public static readonly CASE = 49;
	public static readonly FOR = 50;
	public static readonly RANGE = 51;
	public static readonly IN = 52;
	public static readonly WHILE = 53;
	public static readonly DEF = 54;
	public static readonly RETURN = 55;
	public static readonly LAMBDA = 56;
	public static readonly BREAK = 57;
	public static readonly CONTINUE = 58;
	public static readonly PRINT = 59;
	public static readonly ASSERT = 60;
	public static readonly WITH = 61;
	public static readonly YIELD = 62;
	public static readonly UNDERSCORE = 63;
	public static readonly TRY = 64;
	public static readonly EXCEPT = 65;
	public static readonly FINALLY = 66;
	public static readonly RAISE = 67;
	public static readonly CLASS = 68;
	public static readonly FROM = 69;
	public static readonly IMPORT = 70;
	public static readonly ID = 71;
	public static readonly NEWLINE = 72;
	public static readonly WS = 73;
	public static readonly COMMENT = 74;
	public static readonly TRIPLE_STRING = 75;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_if_stmt = 2;
	public static readonly RULE_for_stmt = 3;
	public static readonly RULE_while_stmt = 4;
	public static readonly RULE_return_stmt = 5;
	public static readonly RULE_break_stmt = 6;
	public static readonly RULE_continue_stmt = 7;
	public static readonly RULE_funcdef = 8;
	public static readonly RULE_print_stmt = 9;
	public static readonly RULE_parameters = 10;
	public static readonly RULE_block = 11;
	public static readonly RULE_expr_stmt = 12;
	public static readonly RULE_expr = 13;
	public static readonly RULE_boolean = 14;
	public static readonly RULE_condition = 15;
	public static readonly RULE_and_condition = 16;
	public static readonly RULE_not_condition = 17;
	public static readonly RULE_comparison = 18;
	public static readonly RULE_comparison_op = 19;
	public static readonly RULE_assign = 20;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "'True'", 
                                                            "'False'", "'.'", 
                                                            "':'", "';'", 
                                                            "','", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'+'", 
                                                            "'-'", "'/'", 
                                                            "'*'", "'%'", 
                                                            "'='", "'=='", 
                                                            "'<'", "'>'", 
                                                            "'>='", "'<='", 
                                                            "'!='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'@='", "'/='", 
                                                            "'%='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'and'", "'or'", 
                                                            "'not'", "'&'", 
                                                            "'|'", "'~'", 
                                                            "'^'", "'is'", 
                                                            "'if'", "'elif'", 
                                                            "'else'", "'case'", 
                                                            "'for'", "'range'", 
                                                            "'in'", "'while'", 
                                                            "'def'", "'return'", 
                                                            "'lambda'", 
                                                            "'break'", "'continue'", 
                                                            "'print'", "'assert'", 
                                                            "'with'", "'yield'", 
                                                            "'_'", "'try'", 
                                                            "'except'", 
                                                            "'finally'", 
                                                            "'raise'", "'class'", 
                                                            "'from'", "'import'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "STRING", 
                                                             "NUMBER", "INT", 
                                                             "FLOAT", "TRUE", 
                                                             "FALSE", "DOT", 
                                                             "COLON", "SEMICOLON", 
                                                             "COMMA", "LPAREN", 
                                                             "RPAREN", "LBRACK", 
                                                             "RBRACK", "LBRACE", 
                                                             "RBRACE", "ADD", 
                                                             "SUB", "DIV", 
                                                             "MUL", "MOD", 
                                                             "ASSIGN", "EQUALS", 
                                                             "LESS_THAN", 
                                                             "GREATER_THAN", 
                                                             "GT_EQ", "LT_EQ", 
                                                             "NOT_EQUAL", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MULT_ASSIGN", 
                                                             "AT_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "AND", "OR", 
                                                             "NOT", "AND_OP", 
                                                             "OR_OP", "NOT_OP", 
                                                             "XOR", "IS", 
                                                             "IF", "ELIF", 
                                                             "ELSE", "CASE", 
                                                             "FOR", "RANGE", 
                                                             "IN", "WHILE", 
                                                             "DEF", "RETURN", 
                                                             "LAMBDA", "BREAK", 
                                                             "CONTINUE", 
                                                             "PRINT", "ASSERT", 
                                                             "WITH", "YIELD", 
                                                             "UNDERSCORE", 
                                                             "TRY", "EXCEPT", 
                                                             "FINALLY", 
                                                             "RAISE", "CLASS", 
                                                             "FROM", "IMPORT", 
                                                             "ID", "NEWLINE", 
                                                             "WS", "COMMENT", 
                                                             "TRIPLE_STRING" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stmt", "if_stmt", "for_stmt", "while_stmt", "return_stmt", 
		"break_stmt", "continue_stmt", "funcdef", "print_stmt", "parameters", 
		"block", "expr_stmt", "expr", "boolean", "condition", "and_condition", 
		"not_condition", "comparison", "comparison_op", "assign",
	];
	public get grammarFileName(): string { return "MiniPythonParser.g4"; }
	public get literalNames(): (string | null)[] { return MiniPythonParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MiniPythonParser.symbolicNames; }
	public get ruleNames(): string[] { return MiniPythonParser.ruleNames; }
	public get serializedATN(): number[] { return MiniPythonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MiniPythonParser._ATN, MiniPythonParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MiniPythonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10360) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 100678545) !== 0)) {
				{
				{
				this.state = 42;
				this.stmt();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(MiniPythonParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MiniPythonParser.RULE_stmt);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 50;
				this.assign();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 51;
				this.if_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 52;
				this.for_stmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 53;
				this.while_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 54;
				this.funcdef();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 55;
				this.return_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 56;
				this.break_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 57;
				this.continue_stmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 58;
				this.expr_stmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 59;
				this.print_stmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 60;
				this.match(MiniPythonParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let localctx: If_stmtContext = new If_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MiniPythonParser.RULE_if_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(MiniPythonParser.IF);
			this.state = 64;
			this.condition(0);
			this.state = 65;
			this.match(MiniPythonParser.COLON);
			this.state = 66;
			this.block();
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 67;
					this.match(MiniPythonParser.ELIF);
					this.state = 68;
					this.condition(0);
					this.state = 69;
					this.match(MiniPythonParser.COLON);
					this.state = 70;
					this.block();
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 77;
				this.match(MiniPythonParser.ELSE);
				this.state = 78;
				this.match(MiniPythonParser.COLON);
				this.state = 79;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let localctx: For_stmtContext = new For_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MiniPythonParser.RULE_for_stmt);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 82;
				this.match(MiniPythonParser.FOR);
				this.state = 83;
				this.match(MiniPythonParser.ID);
				this.state = 84;
				this.match(MiniPythonParser.IN);
				this.state = 85;
				this.match(MiniPythonParser.ID);
				this.state = 86;
				this.match(MiniPythonParser.COLON);
				this.state = 87;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 88;
				this.match(MiniPythonParser.FOR);
				this.state = 89;
				this.match(MiniPythonParser.ID);
				this.state = 90;
				this.match(MiniPythonParser.IN);
				this.state = 91;
				this.match(MiniPythonParser.INT);
				this.state = 92;
				this.match(MiniPythonParser.DOT);
				this.state = 93;
				this.match(MiniPythonParser.DOT);
				this.state = 94;
				this.match(MiniPythonParser.INT);
				this.state = 95;
				this.match(MiniPythonParser.COLON);
				this.state = 96;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 97;
				this.match(MiniPythonParser.FOR);
				this.state = 98;
				this.match(MiniPythonParser.ID);
				this.state = 99;
				this.match(MiniPythonParser.IN);
				this.state = 100;
				this.match(MiniPythonParser.RANGE);
				this.state = 101;
				this.match(MiniPythonParser.LPAREN);
				this.state = 102;
				this.expr(0);
				this.state = 103;
				this.match(MiniPythonParser.COMMA);
				this.state = 104;
				this.expr(0);
				this.state = 105;
				this.match(MiniPythonParser.RPAREN);
				this.state = 106;
				this.match(MiniPythonParser.COLON);
				this.state = 107;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let localctx: While_stmtContext = new While_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MiniPythonParser.RULE_while_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this.match(MiniPythonParser.WHILE);
			this.state = 112;
			this.condition(0);
			this.state = 113;
			this.match(MiniPythonParser.COLON);
			this.state = 114;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let localctx: Return_stmtContext = new Return_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MiniPythonParser.RULE_return_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(MiniPythonParser.RETURN);
			this.state = 117;
			this.expr(0);
			this.state = 118;
			this.match(MiniPythonParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let localctx: Break_stmtContext = new Break_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MiniPythonParser.RULE_break_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.match(MiniPythonParser.BREAK);
			this.state = 121;
			this.match(MiniPythonParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let localctx: Continue_stmtContext = new Continue_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MiniPythonParser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(MiniPythonParser.CONTINUE);
			this.state = 124;
			this.match(MiniPythonParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcdef(): FuncdefContext {
		let localctx: FuncdefContext = new FuncdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MiniPythonParser.RULE_funcdef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(MiniPythonParser.DEF);
			this.state = 127;
			this.match(MiniPythonParser.ID);
			this.state = 128;
			this.parameters();
			this.state = 129;
			this.match(MiniPythonParser.COLON);
			this.state = 130;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public print_stmt(): Print_stmtContext {
		let localctx: Print_stmtContext = new Print_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MiniPythonParser.RULE_print_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(MiniPythonParser.PRINT);
			this.state = 133;
			this.match(MiniPythonParser.LPAREN);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10360) !== 0) || _la===71) {
				{
				this.state = 134;
				this.expr(0);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 135;
					this.match(MiniPythonParser.COMMA);
					this.state = 136;
					this.expr(0);
					}
					}
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 144;
			this.match(MiniPythonParser.RPAREN);
			this.state = 145;
			this.match(MiniPythonParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MiniPythonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(MiniPythonParser.LPAREN);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 148;
				this.match(MiniPythonParser.ID);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 149;
					this.match(MiniPythonParser.COMMA);
					this.state = 150;
					this.match(MiniPythonParser.ID);
					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 158;
			this.match(MiniPythonParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MiniPythonParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this.match(MiniPythonParser.NEWLINE);
			this.state = 161;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let localctx: Expr_stmtContext = new Expr_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MiniPythonParser.RULE_expr_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.expr(0);
			this.state = 164;
			this.match(MiniPythonParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 26;
		this.enterRecursionRule(localctx, 26, MiniPythonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 167;
				this.match(MiniPythonParser.ID);
				this.state = 168;
				this.match(MiniPythonParser.LPAREN);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10360) !== 0) || _la===71) {
					{
					this.state = 169;
					this.expr(0);
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===10) {
						{
						{
						this.state = 170;
						this.match(MiniPythonParser.COMMA);
						this.state = 171;
						this.expr(0);
						}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 179;
				this.match(MiniPythonParser.RPAREN);
				}
				break;
			case 2:
				{
				this.state = 180;
				this.match(MiniPythonParser.LPAREN);
				this.state = 181;
				this.expr(0);
				this.state = 182;
				this.match(MiniPythonParser.RPAREN);
				}
				break;
			case 3:
				{
				this.state = 184;
				this.match(MiniPythonParser.LBRACK);
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10360) !== 0) || _la===71) {
					{
					this.state = 185;
					this.expr(0);
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===10) {
						{
						{
						this.state = 186;
						this.match(MiniPythonParser.COMMA);
						this.state = 187;
						this.expr(0);
						}
						}
						this.state = 192;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 195;
				this.match(MiniPythonParser.RBRACK);
				}
				break;
			case 4:
				{
				this.state = 196;
				this.match(MiniPythonParser.INT);
				}
				break;
			case 5:
				{
				this.state = 197;
				this.match(MiniPythonParser.FLOAT);
				}
				break;
			case 6:
				{
				this.state = 198;
				this.match(MiniPythonParser.ID);
				}
				break;
			case 7:
				{
				this.state = 199;
				this.boolean_();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 210;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 208;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MiniPythonParser.RULE_expr);
						this.state = 202;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 203;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===17 || _la===18)) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 204;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MiniPythonParser.RULE_expr);
						this.state = 205;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 206;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===19 || _la===20)) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 207;
						this.expr(9);
						}
						break;
					}
					}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_(): BooleanContext {
		let localctx: BooleanContext = new BooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MiniPythonParser.RULE_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, MiniPythonParser.RULE_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 216;
			this.and_condition(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 223;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, MiniPythonParser.RULE_condition);
					this.state = 218;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 219;
					this.match(MiniPythonParser.OR);
					this.state = 220;
					this.and_condition(0);
					}
					}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public and_condition(): And_conditionContext;
	public and_condition(_p: number): And_conditionContext;
	// @RuleVersion(0)
	public and_condition(_p?: number): And_conditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: And_conditionContext = new And_conditionContext(this, this._ctx, _parentState);
		let _prevctx: And_conditionContext = localctx;
		let _startState: number = 32;
		this.enterRecursionRule(localctx, 32, MiniPythonParser.RULE_and_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 227;
			this.not_condition();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new And_conditionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, MiniPythonParser.RULE_and_condition);
					this.state = 229;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 230;
					this.match(MiniPythonParser.AND);
					this.state = 231;
					this.not_condition();
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public not_condition(): Not_conditionContext {
		let localctx: Not_conditionContext = new Not_conditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MiniPythonParser.RULE_not_condition);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 237;
				this.match(MiniPythonParser.NOT);
				this.state = 238;
				this.not_condition();
				}
				break;
			case 3:
			case 4:
			case 5:
			case 6:
			case 11:
			case 13:
			case 71:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 239;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let localctx: ComparisonContext = new ComparisonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MiniPythonParser.RULE_comparison);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 242;
				this.expr(0);
				this.state = 243;
				this.comparison_op();
				this.state = 244;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 246;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 247;
				this.match(MiniPythonParser.LPAREN);
				this.state = 248;
				this.condition(0);
				this.state = 249;
				this.match(MiniPythonParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison_op(): Comparison_opContext {
		let localctx: Comparison_opContext = new Comparison_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MiniPythonParser.RULE_comparison_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 253;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let localctx: AssignContext = new AssignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MiniPythonParser.RULE_assign);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.match(MiniPythonParser.ID);
			this.state = 256;
			this.match(MiniPythonParser.ASSIGN);
			this.state = 257;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		case 15:
			return this.condition_sempred(localctx as ConditionContext, predIndex);
		case 16:
			return this.and_condition_sempred(localctx as And_conditionContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}
	private condition_sempred(localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private and_condition_sempred(localctx: And_conditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,75,260,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,
	1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,62,8,1,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,5,2,73,8,2,10,2,12,2,76,9,2,1,2,1,2,1,2,3,2,81,
	8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,110,8,3,1,4,1,4,1,4,1,4,1,4,
	1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,
	1,9,1,9,1,9,5,9,138,8,9,10,9,12,9,141,9,9,3,9,143,8,9,1,9,1,9,1,9,1,10,
	1,10,1,10,1,10,5,10,152,8,10,10,10,12,10,155,9,10,3,10,157,8,10,1,10,1,
	10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,173,
	8,13,10,13,12,13,176,9,13,3,13,178,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,5,13,189,8,13,10,13,12,13,192,9,13,3,13,194,8,13,1,13,1,13,
	1,13,1,13,1,13,3,13,201,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,209,8,13,
	10,13,12,13,212,9,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,222,8,
	15,10,15,12,15,225,9,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,233,8,16,10,
	16,12,16,236,9,16,1,17,1,17,1,17,3,17,241,8,17,1,18,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,1,18,3,18,252,8,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,0,
	3,26,30,32,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
	0,4,1,0,17,18,1,0,19,20,1,0,5,6,1,0,23,28,274,0,45,1,0,0,0,2,61,1,0,0,0,
	4,63,1,0,0,0,6,109,1,0,0,0,8,111,1,0,0,0,10,116,1,0,0,0,12,120,1,0,0,0,
	14,123,1,0,0,0,16,126,1,0,0,0,18,132,1,0,0,0,20,147,1,0,0,0,22,160,1,0,
	0,0,24,163,1,0,0,0,26,200,1,0,0,0,28,213,1,0,0,0,30,215,1,0,0,0,32,226,
	1,0,0,0,34,240,1,0,0,0,36,251,1,0,0,0,38,253,1,0,0,0,40,255,1,0,0,0,42,
	44,3,2,1,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,
	1,0,0,0,47,45,1,0,0,0,48,49,5,0,0,1,49,1,1,0,0,0,50,62,3,40,20,0,51,62,
	3,4,2,0,52,62,3,6,3,0,53,62,3,8,4,0,54,62,3,16,8,0,55,62,3,10,5,0,56,62,
	3,12,6,0,57,62,3,14,7,0,58,62,3,24,12,0,59,62,3,18,9,0,60,62,5,72,0,0,61,
	50,1,0,0,0,61,51,1,0,0,0,61,52,1,0,0,0,61,53,1,0,0,0,61,54,1,0,0,0,61,55,
	1,0,0,0,61,56,1,0,0,0,61,57,1,0,0,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,1,
	0,0,0,62,3,1,0,0,0,63,64,5,46,0,0,64,65,3,30,15,0,65,66,5,8,0,0,66,74,3,
	22,11,0,67,68,5,47,0,0,68,69,3,30,15,0,69,70,5,8,0,0,70,71,3,22,11,0,71,
	73,1,0,0,0,72,67,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,80,
	1,0,0,0,76,74,1,0,0,0,77,78,5,48,0,0,78,79,5,8,0,0,79,81,3,22,11,0,80,77,
	1,0,0,0,80,81,1,0,0,0,81,5,1,0,0,0,82,83,5,50,0,0,83,84,5,71,0,0,84,85,
	5,52,0,0,85,86,5,71,0,0,86,87,5,8,0,0,87,110,3,22,11,0,88,89,5,50,0,0,89,
	90,5,71,0,0,90,91,5,52,0,0,91,92,5,3,0,0,92,93,5,7,0,0,93,94,5,7,0,0,94,
	95,5,3,0,0,95,96,5,8,0,0,96,110,3,22,11,0,97,98,5,50,0,0,98,99,5,71,0,0,
	99,100,5,52,0,0,100,101,5,51,0,0,101,102,5,11,0,0,102,103,3,26,13,0,103,
	104,5,10,0,0,104,105,3,26,13,0,105,106,5,12,0,0,106,107,5,8,0,0,107,108,
	3,22,11,0,108,110,1,0,0,0,109,82,1,0,0,0,109,88,1,0,0,0,109,97,1,0,0,0,
	110,7,1,0,0,0,111,112,5,53,0,0,112,113,3,30,15,0,113,114,5,8,0,0,114,115,
	3,22,11,0,115,9,1,0,0,0,116,117,5,55,0,0,117,118,3,26,13,0,118,119,5,72,
	0,0,119,11,1,0,0,0,120,121,5,57,0,0,121,122,5,72,0,0,122,13,1,0,0,0,123,
	124,5,58,0,0,124,125,5,72,0,0,125,15,1,0,0,0,126,127,5,54,0,0,127,128,5,
	71,0,0,128,129,3,20,10,0,129,130,5,8,0,0,130,131,3,22,11,0,131,17,1,0,0,
	0,132,133,5,59,0,0,133,142,5,11,0,0,134,139,3,26,13,0,135,136,5,10,0,0,
	136,138,3,26,13,0,137,135,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,
	1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,142,134,1,0,0,0,142,143,1,0,0,0,
	143,144,1,0,0,0,144,145,5,12,0,0,145,146,5,72,0,0,146,19,1,0,0,0,147,156,
	5,11,0,0,148,153,5,71,0,0,149,150,5,10,0,0,150,152,5,71,0,0,151,149,1,0,
	0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,157,1,0,0,0,155,
	153,1,0,0,0,156,148,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,5,12,
	0,0,159,21,1,0,0,0,160,161,5,72,0,0,161,162,3,2,1,0,162,23,1,0,0,0,163,
	164,3,26,13,0,164,165,5,72,0,0,165,25,1,0,0,0,166,167,6,13,-1,0,167,168,
	5,71,0,0,168,177,5,11,0,0,169,174,3,26,13,0,170,171,5,10,0,0,171,173,3,
	26,13,0,172,170,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,
	175,178,1,0,0,0,176,174,1,0,0,0,177,169,1,0,0,0,177,178,1,0,0,0,178,179,
	1,0,0,0,179,201,5,12,0,0,180,181,5,11,0,0,181,182,3,26,13,0,182,183,5,12,
	0,0,183,201,1,0,0,0,184,193,5,13,0,0,185,190,3,26,13,0,186,187,5,10,0,0,
	187,189,3,26,13,0,188,186,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,
	1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,193,185,1,0,0,0,193,194,1,0,0,0,
	194,195,1,0,0,0,195,201,5,14,0,0,196,201,5,3,0,0,197,201,5,4,0,0,198,201,
	5,71,0,0,199,201,3,28,14,0,200,166,1,0,0,0,200,180,1,0,0,0,200,184,1,0,
	0,0,200,196,1,0,0,0,200,197,1,0,0,0,200,198,1,0,0,0,200,199,1,0,0,0,201,
	210,1,0,0,0,202,203,10,9,0,0,203,204,7,0,0,0,204,209,3,26,13,10,205,206,
	10,8,0,0,206,207,7,1,0,0,207,209,3,26,13,9,208,202,1,0,0,0,208,205,1,0,
	0,0,209,212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,27,1,0,0,0,212,
	210,1,0,0,0,213,214,7,2,0,0,214,29,1,0,0,0,215,216,6,15,-1,0,216,217,3,
	32,16,0,217,223,1,0,0,0,218,219,10,2,0,0,219,220,5,39,0,0,220,222,3,32,
	16,0,221,218,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,
	31,1,0,0,0,225,223,1,0,0,0,226,227,6,16,-1,0,227,228,3,34,17,0,228,234,
	1,0,0,0,229,230,10,2,0,0,230,231,5,38,0,0,231,233,3,34,17,0,232,229,1,0,
	0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,33,1,0,0,0,236,
	234,1,0,0,0,237,238,5,40,0,0,238,241,3,34,17,0,239,241,3,36,18,0,240,237,
	1,0,0,0,240,239,1,0,0,0,241,35,1,0,0,0,242,243,3,26,13,0,243,244,3,38,19,
	0,244,245,3,26,13,0,245,252,1,0,0,0,246,252,3,26,13,0,247,248,5,11,0,0,
	248,249,3,30,15,0,249,250,5,12,0,0,250,252,1,0,0,0,251,242,1,0,0,0,251,
	246,1,0,0,0,251,247,1,0,0,0,252,37,1,0,0,0,253,254,7,3,0,0,254,39,1,0,0,
	0,255,256,5,71,0,0,256,257,5,22,0,0,257,258,3,26,13,0,258,41,1,0,0,0,20,
	45,61,74,80,109,139,142,153,156,174,177,190,193,200,208,210,223,234,240,
	251];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MiniPythonParser.__ATN) {
			MiniPythonParser.__ATN = new ATNDeserializer().deserialize(MiniPythonParser._serializedATN);
		}

		return MiniPythonParser.__ATN;
	}


	static DecisionsToDFA = MiniPythonParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MiniPythonParser.EOF, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_program;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public if_stmt(): If_stmtContext {
		return this.getTypedRuleContext(If_stmtContext, 0) as If_stmtContext;
	}
	public for_stmt(): For_stmtContext {
		return this.getTypedRuleContext(For_stmtContext, 0) as For_stmtContext;
	}
	public while_stmt(): While_stmtContext {
		return this.getTypedRuleContext(While_stmtContext, 0) as While_stmtContext;
	}
	public funcdef(): FuncdefContext {
		return this.getTypedRuleContext(FuncdefContext, 0) as FuncdefContext;
	}
	public return_stmt(): Return_stmtContext {
		return this.getTypedRuleContext(Return_stmtContext, 0) as Return_stmtContext;
	}
	public break_stmt(): Break_stmtContext {
		return this.getTypedRuleContext(Break_stmtContext, 0) as Break_stmtContext;
	}
	public continue_stmt(): Continue_stmtContext {
		return this.getTypedRuleContext(Continue_stmtContext, 0) as Continue_stmtContext;
	}
	public expr_stmt(): Expr_stmtContext {
		return this.getTypedRuleContext(Expr_stmtContext, 0) as Expr_stmtContext;
	}
	public print_stmt(): Print_stmtContext {
		return this.getTypedRuleContext(Print_stmtContext, 0) as Print_stmtContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(MiniPythonParser.IF, 0);
	}
	public condition_list(): ConditionContext[] {
		return this.getTypedRuleContexts(ConditionContext) as ConditionContext[];
	}
	public condition(i: number): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, i) as ConditionContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.COLON, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELIF_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.ELIF);
	}
	public ELIF(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.ELIF, i);
	}
	public ELSE(): TerminalNode {
		return this.getToken(MiniPythonParser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_if_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterIf_stmt) {
	 		listener.enterIf_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitIf_stmt) {
	 		listener.exitIf_stmt(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MiniPythonParser.FOR, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.ID, i);
	}
	public IN(): TerminalNode {
		return this.getToken(MiniPythonParser.IN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MiniPythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.INT, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.DOT, i);
	}
	public RANGE(): TerminalNode {
		return this.getToken(MiniPythonParser.RANGE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.LPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MiniPythonParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_for_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterFor_stmt) {
	 		listener.enterFor_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitFor_stmt) {
	 		listener.exitFor_stmt(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(MiniPythonParser.WHILE, 0);
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MiniPythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_while_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterWhile_stmt) {
	 		listener.enterWhile_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitWhile_stmt) {
	 		listener.exitWhile_stmt(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MiniPythonParser.RETURN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_return_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterReturn_stmt) {
	 		listener.enterReturn_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitReturn_stmt) {
	 		listener.exitReturn_stmt(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MiniPythonParser.BREAK, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_break_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterBreak_stmt) {
	 		listener.enterBreak_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitBreak_stmt) {
	 		listener.exitBreak_stmt(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(MiniPythonParser.CONTINUE, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_continue_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterContinue_stmt) {
	 		listener.enterContinue_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitContinue_stmt) {
	 		listener.exitContinue_stmt(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MiniPythonParser.DEF, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MiniPythonParser.ID, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MiniPythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_funcdef;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterFuncdef) {
	 		listener.enterFuncdef(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitFuncdef) {
	 		listener.exitFuncdef(this);
		}
	}
}


export class Print_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRINT(): TerminalNode {
		return this.getToken(MiniPythonParser.PRINT, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.RPAREN, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_print_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterPrint_stmt) {
	 		listener.enterPrint_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitPrint_stmt) {
	 		listener.exitPrint_stmt(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.RPAREN, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.ID, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_parameters;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_block;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MiniPythonParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_expr_stmt;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterExpr_stmt) {
	 		listener.enterExpr_stmt(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitExpr_stmt) {
	 		listener.exitExpr_stmt(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MiniPythonParser.ID, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MiniPythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MiniPythonParser.COMMA, i);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(MiniPythonParser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(MiniPythonParser.RBRACK, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(MiniPythonParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(MiniPythonParser.FLOAT, 0);
	}
	public boolean_(): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, 0) as BooleanContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(MiniPythonParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(MiniPythonParser.SUB, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(MiniPythonParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(MiniPythonParser.DIV, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_expr;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(MiniPythonParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(MiniPythonParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_boolean;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public and_condition(): And_conditionContext {
		return this.getTypedRuleContext(And_conditionContext, 0) as And_conditionContext;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(MiniPythonParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_condition;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterCondition) {
	 		listener.enterCondition(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitCondition) {
	 		listener.exitCondition(this);
		}
	}
}


export class And_conditionContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public not_condition(): Not_conditionContext {
		return this.getTypedRuleContext(Not_conditionContext, 0) as Not_conditionContext;
	}
	public and_condition(): And_conditionContext {
		return this.getTypedRuleContext(And_conditionContext, 0) as And_conditionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(MiniPythonParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_and_condition;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterAnd_condition) {
	 		listener.enterAnd_condition(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitAnd_condition) {
	 		listener.exitAnd_condition(this);
		}
	}
}


export class Not_conditionContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(MiniPythonParser.NOT, 0);
	}
	public not_condition(): Not_conditionContext {
		return this.getTypedRuleContext(Not_conditionContext, 0) as Not_conditionContext;
	}
	public comparison(): ComparisonContext {
		return this.getTypedRuleContext(ComparisonContext, 0) as ComparisonContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_not_condition;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterNot_condition) {
	 		listener.enterNot_condition(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitNot_condition) {
	 		listener.exitNot_condition(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public comparison_op(): Comparison_opContext {
		return this.getTypedRuleContext(Comparison_opContext, 0) as Comparison_opContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.LPAREN, 0);
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MiniPythonParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_comparison;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
}


export class Comparison_opContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MiniPythonParser.EQUALS, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(MiniPythonParser.LESS_THAN, 0);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(MiniPythonParser.GREATER_THAN, 0);
	}
	public GT_EQ(): TerminalNode {
		return this.getToken(MiniPythonParser.GT_EQ, 0);
	}
	public LT_EQ(): TerminalNode {
		return this.getToken(MiniPythonParser.LT_EQ, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(MiniPythonParser.NOT_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_comparison_op;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterComparison_op) {
	 		listener.enterComparison_op(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitComparison_op) {
	 		listener.exitComparison_op(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	constructor(parser?: MiniPythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MiniPythonParser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(MiniPythonParser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return MiniPythonParser.RULE_assign;
	}
	public enterRule(listener: MiniPythonParserListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: MiniPythonParserListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
}
