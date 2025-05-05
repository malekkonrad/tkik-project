// Generated from PythonParser.g4 by ANTLR 4.13.2
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
import PythonParserListener from "./PythonParserListener.js";
import PythonParserVisitor from "./PythonParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PythonParser extends Parser {
	public static readonly ENCODING = 1;
	public static readonly INDENT = 2;
	public static readonly DEDENT = 3;
	public static readonly FSTRING_START = 4;
	public static readonly FSTRING_MIDDLE = 5;
	public static readonly FSTRING_END = 6;
	public static readonly LPAR = 7;
	public static readonly LSQB = 8;
	public static readonly LBRACE = 9;
	public static readonly RPAR = 10;
	public static readonly RSQB = 11;
	public static readonly RBRACE = 12;
	public static readonly DOT = 13;
	public static readonly COLON = 14;
	public static readonly COMMA = 15;
	public static readonly SEMI = 16;
	public static readonly PLUS = 17;
	public static readonly MINUS = 18;
	public static readonly STAR = 19;
	public static readonly SLASH = 20;
	public static readonly VBAR = 21;
	public static readonly AMPER = 22;
	public static readonly LESS = 23;
	public static readonly GREATER = 24;
	public static readonly EQUAL = 25;
	public static readonly PERCENT = 26;
	public static readonly EQEQUAL = 27;
	public static readonly NOTEQUAL = 28;
	public static readonly LESSEQUAL = 29;
	public static readonly GREATEREQUAL = 30;
	public static readonly TILDE = 31;
	public static readonly CIRCUMFLEX = 32;
	public static readonly LEFTSHIFT = 33;
	public static readonly RIGHTSHIFT = 34;
	public static readonly DOUBLESTAR = 35;
	public static readonly PLUSEQUAL = 36;
	public static readonly MINEQUAL = 37;
	public static readonly STAREQUAL = 38;
	public static readonly SLASHEQUAL = 39;
	public static readonly PERCENTEQUAL = 40;
	public static readonly AMPEREQUAL = 41;
	public static readonly VBAREQUAL = 42;
	public static readonly CIRCUMFLEXEQUAL = 43;
	public static readonly LEFTSHIFTEQUAL = 44;
	public static readonly RIGHTSHIFTEQUAL = 45;
	public static readonly DOUBLESTAREQUAL = 46;
	public static readonly DOUBLESLASH = 47;
	public static readonly DOUBLESLASHEQUAL = 48;
	public static readonly AT = 49;
	public static readonly ATEQUAL = 50;
	public static readonly RARROW = 51;
	public static readonly ELLIPSIS = 52;
	public static readonly COLONEQUAL = 53;
	public static readonly EXCLAMATION = 54;
	public static readonly FALSE = 55;
	public static readonly AWAIT = 56;
	public static readonly ELSE = 57;
	public static readonly IMPORT = 58;
	public static readonly PASS = 59;
	public static readonly NONE = 60;
	public static readonly BREAK = 61;
	public static readonly EXCEPT = 62;
	public static readonly IN = 63;
	public static readonly RAISE = 64;
	public static readonly TRUE = 65;
	public static readonly CLASS = 66;
	public static readonly FINALLY = 67;
	public static readonly IS = 68;
	public static readonly RETURN = 69;
	public static readonly AND = 70;
	public static readonly CONTINUE = 71;
	public static readonly FOR = 72;
	public static readonly LAMBDA = 73;
	public static readonly TRY = 74;
	public static readonly AS = 75;
	public static readonly DEF = 76;
	public static readonly FROM = 77;
	public static readonly NONLOCAL = 78;
	public static readonly WHILE = 79;
	public static readonly ASSERT = 80;
	public static readonly DEL = 81;
	public static readonly GLOBAL = 82;
	public static readonly NOT = 83;
	public static readonly WITH = 84;
	public static readonly ASYNC = 85;
	public static readonly ELIF = 86;
	public static readonly IF = 87;
	public static readonly OR = 88;
	public static readonly YIELD = 89;
	public static readonly NAME_OR_TYPE = 90;
	public static readonly NAME_OR_MATCH = 91;
	public static readonly NAME_OR_CASE = 92;
	public static readonly NAME_OR_WILDCARD = 93;
	public static readonly NAME = 94;
	public static readonly NUMBER = 95;
	public static readonly STRING = 96;
	public static readonly NEWLINE = 97;
	public static readonly COMMENT = 98;
	public static readonly WS = 99;
	public static readonly EXPLICIT_LINE_JOINING = 100;
	public static readonly ERRORTOKEN = 101;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_simple_stmts = 3;
	public static readonly RULE_simple_stmt = 4;
	public static readonly RULE_compound_stmt = 5;
	public static readonly RULE_assignment = 6;
	public static readonly RULE_annotated_rhs = 7;
	public static readonly RULE_augassign = 8;
	public static readonly RULE_return_stmt = 9;
	public static readonly RULE_raise_stmt = 10;
	public static readonly RULE_global_stmt = 11;
	public static readonly RULE_nonlocal_stmt = 12;
	public static readonly RULE_del_stmt = 13;
	public static readonly RULE_yield_stmt = 14;
	public static readonly RULE_assert_stmt = 15;
	public static readonly RULE_import_stmt = 16;
	public static readonly RULE_import_name = 17;
	public static readonly RULE_import_from = 18;
	public static readonly RULE_import_from_targets = 19;
	public static readonly RULE_import_from_as_names = 20;
	public static readonly RULE_import_from_as_name = 21;
	public static readonly RULE_dotted_as_names = 22;
	public static readonly RULE_dotted_as_name = 23;
	public static readonly RULE_dotted_name = 24;
	public static readonly RULE_block = 25;
	public static readonly RULE_decorators = 26;
	public static readonly RULE_class_def = 27;
	public static readonly RULE_class_def_raw = 28;
	public static readonly RULE_function_def = 29;
	public static readonly RULE_function_def_raw = 30;
	public static readonly RULE_params = 31;
	public static readonly RULE_parameters = 32;
	public static readonly RULE_slash_no_default = 33;
	public static readonly RULE_slash_with_default = 34;
	public static readonly RULE_star_etc = 35;
	public static readonly RULE_kwds = 36;
	public static readonly RULE_param_no_default = 37;
	public static readonly RULE_param_no_default_star_annotation = 38;
	public static readonly RULE_param_with_default = 39;
	public static readonly RULE_param_maybe_default = 40;
	public static readonly RULE_param = 41;
	public static readonly RULE_param_star_annotation = 42;
	public static readonly RULE_annotation = 43;
	public static readonly RULE_star_annotation = 44;
	public static readonly RULE_default_assignment = 45;
	public static readonly RULE_if_stmt = 46;
	public static readonly RULE_elif_stmt = 47;
	public static readonly RULE_else_block = 48;
	public static readonly RULE_while_stmt = 49;
	public static readonly RULE_for_stmt = 50;
	public static readonly RULE_with_stmt = 51;
	public static readonly RULE_with_item = 52;
	public static readonly RULE_try_stmt = 53;
	public static readonly RULE_except_block = 54;
	public static readonly RULE_except_star_block = 55;
	public static readonly RULE_finally_block = 56;
	public static readonly RULE_match_stmt = 57;
	public static readonly RULE_subject_expr = 58;
	public static readonly RULE_case_block = 59;
	public static readonly RULE_guard = 60;
	public static readonly RULE_patterns = 61;
	public static readonly RULE_pattern = 62;
	public static readonly RULE_as_pattern = 63;
	public static readonly RULE_or_pattern = 64;
	public static readonly RULE_closed_pattern = 65;
	public static readonly RULE_literal_pattern = 66;
	public static readonly RULE_literal_expr = 67;
	public static readonly RULE_complex_number = 68;
	public static readonly RULE_signed_number = 69;
	public static readonly RULE_signed_real_number = 70;
	public static readonly RULE_real_number = 71;
	public static readonly RULE_imaginary_number = 72;
	public static readonly RULE_capture_pattern = 73;
	public static readonly RULE_pattern_capture_target = 74;
	public static readonly RULE_wildcard_pattern = 75;
	public static readonly RULE_value_pattern = 76;
	public static readonly RULE_attr = 77;
	public static readonly RULE_name_or_attr = 78;
	public static readonly RULE_group_pattern = 79;
	public static readonly RULE_sequence_pattern = 80;
	public static readonly RULE_open_sequence_pattern = 81;
	public static readonly RULE_maybe_sequence_pattern = 82;
	public static readonly RULE_maybe_star_pattern = 83;
	public static readonly RULE_star_pattern = 84;
	public static readonly RULE_mapping_pattern = 85;
	public static readonly RULE_items_pattern = 86;
	public static readonly RULE_key_value_pattern = 87;
	public static readonly RULE_double_star_pattern = 88;
	public static readonly RULE_class_pattern = 89;
	public static readonly RULE_positional_patterns = 90;
	public static readonly RULE_keyword_patterns = 91;
	public static readonly RULE_keyword_pattern = 92;
	public static readonly RULE_type_alias = 93;
	public static readonly RULE_type_params = 94;
	public static readonly RULE_type_param_seq = 95;
	public static readonly RULE_type_param = 96;
	public static readonly RULE_type_param_bound = 97;
	public static readonly RULE_type_param_default = 98;
	public static readonly RULE_type_param_starred_default = 99;
	public static readonly RULE_expressions = 100;
	public static readonly RULE_expression = 101;
	public static readonly RULE_yield_expr = 102;
	public static readonly RULE_star_expressions = 103;
	public static readonly RULE_star_expression = 104;
	public static readonly RULE_star_named_expressions = 105;
	public static readonly RULE_star_named_expression = 106;
	public static readonly RULE_assignment_expression = 107;
	public static readonly RULE_named_expression = 108;
	public static readonly RULE_disjunction = 109;
	public static readonly RULE_conjunction = 110;
	public static readonly RULE_inversion = 111;
	public static readonly RULE_comparison = 112;
	public static readonly RULE_compare_op_bitwise_or_pair = 113;
	public static readonly RULE_eq_bitwise_or = 114;
	public static readonly RULE_noteq_bitwise_or = 115;
	public static readonly RULE_lte_bitwise_or = 116;
	public static readonly RULE_lt_bitwise_or = 117;
	public static readonly RULE_gte_bitwise_or = 118;
	public static readonly RULE_gt_bitwise_or = 119;
	public static readonly RULE_notin_bitwise_or = 120;
	public static readonly RULE_in_bitwise_or = 121;
	public static readonly RULE_isnot_bitwise_or = 122;
	public static readonly RULE_is_bitwise_or = 123;
	public static readonly RULE_bitwise_or = 124;
	public static readonly RULE_bitwise_xor = 125;
	public static readonly RULE_bitwise_and = 126;
	public static readonly RULE_shift_expr = 127;
	public static readonly RULE_sum = 128;
	public static readonly RULE_term = 129;
	public static readonly RULE_factor = 130;
	public static readonly RULE_power = 131;
	public static readonly RULE_await_primary = 132;
	public static readonly RULE_primary = 133;
	public static readonly RULE_slices = 134;
	public static readonly RULE_slice = 135;
	public static readonly RULE_atom = 136;
	public static readonly RULE_group = 137;
	public static readonly RULE_lambdef = 138;
	public static readonly RULE_lambda_params = 139;
	public static readonly RULE_lambda_parameters = 140;
	public static readonly RULE_lambda_slash_no_default = 141;
	public static readonly RULE_lambda_slash_with_default = 142;
	public static readonly RULE_lambda_star_etc = 143;
	public static readonly RULE_lambda_kwds = 144;
	public static readonly RULE_lambda_param_no_default = 145;
	public static readonly RULE_lambda_param_with_default = 146;
	public static readonly RULE_lambda_param_maybe_default = 147;
	public static readonly RULE_lambda_param = 148;
	public static readonly RULE_fstring_middle = 149;
	public static readonly RULE_fstring_replacement_field = 150;
	public static readonly RULE_fstring_conversion = 151;
	public static readonly RULE_fstring_full_format_spec = 152;
	public static readonly RULE_fstring_format_spec = 153;
	public static readonly RULE_fstring = 154;
	public static readonly RULE_string = 155;
	public static readonly RULE_strings = 156;
	public static readonly RULE_list = 157;
	public static readonly RULE_tuple = 158;
	public static readonly RULE_set = 159;
	public static readonly RULE_dict = 160;
	public static readonly RULE_double_starred_kvpairs = 161;
	public static readonly RULE_double_starred_kvpair = 162;
	public static readonly RULE_kvpair = 163;
	public static readonly RULE_for_if_clauses = 164;
	public static readonly RULE_for_if_clause = 165;
	public static readonly RULE_listcomp = 166;
	public static readonly RULE_setcomp = 167;
	public static readonly RULE_genexp = 168;
	public static readonly RULE_dictcomp = 169;
	public static readonly RULE_arguments = 170;
	public static readonly RULE_args = 171;
	public static readonly RULE_kwargs = 172;
	public static readonly RULE_starred_expression = 173;
	public static readonly RULE_kwarg_or_starred = 174;
	public static readonly RULE_kwarg_or_double_starred = 175;
	public static readonly RULE_star_targets = 176;
	public static readonly RULE_star_targets_list_seq = 177;
	public static readonly RULE_star_targets_tuple_seq = 178;
	public static readonly RULE_star_target = 179;
	public static readonly RULE_target_with_star_atom = 180;
	public static readonly RULE_star_atom = 181;
	public static readonly RULE_single_target = 182;
	public static readonly RULE_single_subscript_attribute_target = 183;
	public static readonly RULE_t_primary = 184;
	public static readonly RULE_del_targets = 185;
	public static readonly RULE_del_target = 186;
	public static readonly RULE_del_t_atom = 187;
	public static readonly RULE_type_expressions = 188;
	public static readonly RULE_name_except_underscore = 189;
	public static readonly RULE_name = 190;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'('", 
                                                            "'['", null, 
                                                            "')'", "']'", 
                                                            null, "'.'", 
                                                            "':'", "','", 
                                                            "';'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'|'", 
                                                            "'&'", "'<'", 
                                                            "'>'", "'='", 
                                                            "'%'", "'=='", 
                                                            "'!='", "'<='", 
                                                            "'>='", "'~'", 
                                                            "'^'", "'<<'", 
                                                            "'>>'", "'**'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'%='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'<<='", "'>>='", 
                                                            "'**='", "'//'", 
                                                            "'//='", "'@'", 
                                                            "'@='", "'->'", 
                                                            "'...'", "':='", 
                                                            "'!'", "'False'", 
                                                            "'await'", "'else'", 
                                                            "'import'", 
                                                            "'pass'", "'None'", 
                                                            "'break'", "'except'", 
                                                            "'in'", "'raise'", 
                                                            "'True'", "'class'", 
                                                            "'finally'", 
                                                            "'is'", "'return'", 
                                                            "'and'", "'continue'", 
                                                            "'for'", "'lambda'", 
                                                            "'try'", "'as'", 
                                                            "'def'", "'from'", 
                                                            "'nonlocal'", 
                                                            "'while'", "'assert'", 
                                                            "'del'", "'global'", 
                                                            "'not'", "'with'", 
                                                            "'async'", "'elif'", 
                                                            "'if'", "'or'", 
                                                            "'yield'", "'type'", 
                                                            "'match'", "'case'", 
                                                            "'_'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ENCODING", 
                                                             "INDENT", "DEDENT", 
                                                             "FSTRING_START", 
                                                             "FSTRING_MIDDLE", 
                                                             "FSTRING_END", 
                                                             "LPAR", "LSQB", 
                                                             "LBRACE", "RPAR", 
                                                             "RSQB", "RBRACE", 
                                                             "DOT", "COLON", 
                                                             "COMMA", "SEMI", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "SLASH", 
                                                             "VBAR", "AMPER", 
                                                             "LESS", "GREATER", 
                                                             "EQUAL", "PERCENT", 
                                                             "EQEQUAL", 
                                                             "NOTEQUAL", 
                                                             "LESSEQUAL", 
                                                             "GREATEREQUAL", 
                                                             "TILDE", "CIRCUMFLEX", 
                                                             "LEFTSHIFT", 
                                                             "RIGHTSHIFT", 
                                                             "DOUBLESTAR", 
                                                             "PLUSEQUAL", 
                                                             "MINEQUAL", 
                                                             "STAREQUAL", 
                                                             "SLASHEQUAL", 
                                                             "PERCENTEQUAL", 
                                                             "AMPEREQUAL", 
                                                             "VBAREQUAL", 
                                                             "CIRCUMFLEXEQUAL", 
                                                             "LEFTSHIFTEQUAL", 
                                                             "RIGHTSHIFTEQUAL", 
                                                             "DOUBLESTAREQUAL", 
                                                             "DOUBLESLASH", 
                                                             "DOUBLESLASHEQUAL", 
                                                             "AT", "ATEQUAL", 
                                                             "RARROW", "ELLIPSIS", 
                                                             "COLONEQUAL", 
                                                             "EXCLAMATION", 
                                                             "FALSE", "AWAIT", 
                                                             "ELSE", "IMPORT", 
                                                             "PASS", "NONE", 
                                                             "BREAK", "EXCEPT", 
                                                             "IN", "RAISE", 
                                                             "TRUE", "CLASS", 
                                                             "FINALLY", 
                                                             "IS", "RETURN", 
                                                             "AND", "CONTINUE", 
                                                             "FOR", "LAMBDA", 
                                                             "TRY", "AS", 
                                                             "DEF", "FROM", 
                                                             "NONLOCAL", 
                                                             "WHILE", "ASSERT", 
                                                             "DEL", "GLOBAL", 
                                                             "NOT", "WITH", 
                                                             "ASYNC", "ELIF", 
                                                             "IF", "OR", 
                                                             "YIELD", "NAME_OR_TYPE", 
                                                             "NAME_OR_MATCH", 
                                                             "NAME_OR_CASE", 
                                                             "NAME_OR_WILDCARD", 
                                                             "NAME", "NUMBER", 
                                                             "STRING", "NEWLINE", 
                                                             "COMMENT", 
                                                             "WS", "EXPLICIT_LINE_JOINING", 
                                                             "ERRORTOKEN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statements", "statement", "simple_stmts", "simple_stmt", "compound_stmt", 
		"assignment", "annotated_rhs", "augassign", "return_stmt", "raise_stmt", 
		"global_stmt", "nonlocal_stmt", "del_stmt", "yield_stmt", "assert_stmt", 
		"import_stmt", "import_name", "import_from", "import_from_targets", "import_from_as_names", 
		"import_from_as_name", "dotted_as_names", "dotted_as_name", "dotted_name", 
		"block", "decorators", "class_def", "class_def_raw", "function_def", "function_def_raw", 
		"params", "parameters", "slash_no_default", "slash_with_default", "star_etc", 
		"kwds", "param_no_default", "param_no_default_star_annotation", "param_with_default", 
		"param_maybe_default", "param", "param_star_annotation", "annotation", 
		"star_annotation", "default_assignment", "if_stmt", "elif_stmt", "else_block", 
		"while_stmt", "for_stmt", "with_stmt", "with_item", "try_stmt", "except_block", 
		"except_star_block", "finally_block", "match_stmt", "subject_expr", "case_block", 
		"guard", "patterns", "pattern", "as_pattern", "or_pattern", "closed_pattern", 
		"literal_pattern", "literal_expr", "complex_number", "signed_number", 
		"signed_real_number", "real_number", "imaginary_number", "capture_pattern", 
		"pattern_capture_target", "wildcard_pattern", "value_pattern", "attr", 
		"name_or_attr", "group_pattern", "sequence_pattern", "open_sequence_pattern", 
		"maybe_sequence_pattern", "maybe_star_pattern", "star_pattern", "mapping_pattern", 
		"items_pattern", "key_value_pattern", "double_star_pattern", "class_pattern", 
		"positional_patterns", "keyword_patterns", "keyword_pattern", "type_alias", 
		"type_params", "type_param_seq", "type_param", "type_param_bound", "type_param_default", 
		"type_param_starred_default", "expressions", "expression", "yield_expr", 
		"star_expressions", "star_expression", "star_named_expressions", "star_named_expression", 
		"assignment_expression", "named_expression", "disjunction", "conjunction", 
		"inversion", "comparison", "compare_op_bitwise_or_pair", "eq_bitwise_or", 
		"noteq_bitwise_or", "lte_bitwise_or", "lt_bitwise_or", "gte_bitwise_or", 
		"gt_bitwise_or", "notin_bitwise_or", "in_bitwise_or", "isnot_bitwise_or", 
		"is_bitwise_or", "bitwise_or", "bitwise_xor", "bitwise_and", "shift_expr", 
		"sum", "term", "factor", "power", "await_primary", "primary", "slices", 
		"slice", "atom", "group", "lambdef", "lambda_params", "lambda_parameters", 
		"lambda_slash_no_default", "lambda_slash_with_default", "lambda_star_etc", 
		"lambda_kwds", "lambda_param_no_default", "lambda_param_with_default", 
		"lambda_param_maybe_default", "lambda_param", "fstring_middle", "fstring_replacement_field", 
		"fstring_conversion", "fstring_full_format_spec", "fstring_format_spec", 
		"fstring", "string", "strings", "list", "tuple", "set", "dict", "double_starred_kvpairs", 
		"double_starred_kvpair", "kvpair", "for_if_clauses", "for_if_clause", 
		"listcomp", "setcomp", "genexp", "dictcomp", "arguments", "args", "kwargs", 
		"starred_expression", "kwarg_or_starred", "kwarg_or_double_starred", "star_targets", 
		"star_targets_list_seq", "star_targets_tuple_seq", "star_target", "target_with_star_atom", 
		"star_atom", "single_target", "single_subscript_attribute_target", "t_primary", 
		"del_targets", "del_target", "del_t_atom", "type_expressions", "name_except_underscore", 
		"name",
	];
	public get grammarFileName(): string { return "PythonParser.g4"; }
	public get literalNames(): (string | null)[] { return PythonParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PythonParser.symbolicNames; }
	public get ruleNames(): string[] { return PythonParser.ruleNames; }
	public get serializedATN(): number[] { return PythonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PythonParser._ATN, PythonParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PythonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4224949961) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 65375) !== 0)) {
				{
				this.state = 382;
				this.statements();
				}
			}

			this.state = 385;
			this.match(PythonParser.EOF);
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
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PythonParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 387;
				this.statement();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4224949961) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 65375) !== 0));
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PythonParser.RULE_statement);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 392;
				this.compound_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 393;
				this.simple_stmts();
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
	public simple_stmts(): Simple_stmtsContext {
		let localctx: Simple_stmtsContext = new Simple_stmtsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PythonParser.RULE_simple_stmts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.simple_stmt();
			this.state = 401;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 397;
					this.match(PythonParser.SEMI);
					this.state = 398;
					this.simple_stmt();
					}
					}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 404;
				this.match(PythonParser.SEMI);
				}
			}

			this.state = 407;
			this.match(PythonParser.NEWLINE);
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
	public simple_stmt(): Simple_stmtContext {
		let localctx: Simple_stmtContext = new Simple_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PythonParser.RULE_simple_stmt);
		try {
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 409;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 410;
				this.type_alias();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 411;
				this.star_expressions();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 412;
				this.return_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 413;
				this.import_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 414;
				this.raise_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 415;
				this.match(PythonParser.PASS);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 416;
				this.del_stmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 417;
				this.yield_stmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 418;
				this.assert_stmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 419;
				this.match(PythonParser.BREAK);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 420;
				this.match(PythonParser.CONTINUE);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 421;
				this.global_stmt();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 422;
				this.nonlocal_stmt();
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
	public compound_stmt(): Compound_stmtContext {
		let localctx: Compound_stmtContext = new Compound_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PythonParser.RULE_compound_stmt);
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 425;
				this.function_def();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 426;
				this.if_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 427;
				this.class_def();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 428;
				this.with_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 429;
				this.for_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 430;
				this.try_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 431;
				this.while_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 432;
				this.match_stmt();
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
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PythonParser.RULE_assignment);
		let _la: number;
		try {
			let _alt: number;
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 435;
				this.name();
				this.state = 436;
				this.match(PythonParser.COLON);
				this.state = 437;
				this.expression();
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 438;
					this.match(PythonParser.EQUAL);
					this.state = 439;
					this.annotated_rhs();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 447;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 442;
					this.match(PythonParser.LPAR);
					this.state = 443;
					this.single_target();
					this.state = 444;
					this.match(PythonParser.RPAR);
					}
					break;
				case 2:
					{
					this.state = 446;
					this.single_subscript_attribute_target();
					}
					break;
				}
				this.state = 449;
				this.match(PythonParser.COLON);
				this.state = 450;
				this.expression();
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 451;
					this.match(PythonParser.EQUAL);
					this.state = 452;
					this.annotated_rhs();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 458;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 455;
						this.star_targets();
						this.state = 456;
						this.match(PythonParser.EQUAL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 460;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 464;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 89:
					{
					this.state = 462;
					this.yield_expr();
					}
					break;
				case 4:
				case 7:
				case 8:
				case 9:
				case 17:
				case 18:
				case 19:
				case 31:
				case 52:
				case 55:
				case 56:
				case 60:
				case 65:
				case 73:
				case 83:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					{
					this.state = 463;
					this.star_expressions();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 466;
				this.single_target();
				this.state = 467;
				this.augassign();
				this.state = 470;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 89:
					{
					this.state = 468;
					this.yield_expr();
					}
					break;
				case 4:
				case 7:
				case 8:
				case 9:
				case 17:
				case 18:
				case 19:
				case 31:
				case 52:
				case 55:
				case 56:
				case 60:
				case 65:
				case 73:
				case 83:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					{
					this.state = 469;
					this.star_expressions();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public annotated_rhs(): Annotated_rhsContext {
		let localctx: Annotated_rhsContext = new Annotated_rhsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PythonParser.RULE_annotated_rhs);
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 474;
				this.yield_expr();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 19:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 475;
				this.star_expressions();
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
	public augassign(): AugassignContext {
		let localctx: AugassignContext = new AugassignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PythonParser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 478;
			_la = this._input.LA(1);
			if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 22527) !== 0))) {
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
	public return_stmt(): Return_stmtContext {
		let localctx: Return_stmtContext = new Return_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, PythonParser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 480;
			this.match(PythonParser.RETURN);
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 481;
				this.star_expressions();
				}
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
	public raise_stmt(): Raise_stmtContext {
		let localctx: Raise_stmtContext = new Raise_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, PythonParser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 484;
			this.match(PythonParser.RAISE);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 485;
				this.expression();
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===77) {
					{
					this.state = 486;
					this.match(PythonParser.FROM);
					this.state = 487;
					this.expression();
					}
				}

				}
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
	public global_stmt(): Global_stmtContext {
		let localctx: Global_stmtContext = new Global_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PythonParser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 492;
			this.match(PythonParser.GLOBAL);
			this.state = 493;
			this.name();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 494;
				this.match(PythonParser.COMMA);
				this.state = 495;
				this.name();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, PythonParser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 501;
			this.match(PythonParser.NONLOCAL);
			this.state = 502;
			this.name();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 503;
				this.match(PythonParser.COMMA);
				this.state = 504;
				this.name();
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public del_stmt(): Del_stmtContext {
		let localctx: Del_stmtContext = new Del_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PythonParser.RULE_del_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 510;
			this.match(PythonParser.DEL);
			this.state = 511;
			this.del_targets();
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
	public yield_stmt(): Yield_stmtContext {
		let localctx: Yield_stmtContext = new Yield_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, PythonParser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this.yield_expr();
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
	public assert_stmt(): Assert_stmtContext {
		let localctx: Assert_stmtContext = new Assert_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, PythonParser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			this.match(PythonParser.ASSERT);
			this.state = 516;
			this.expression();
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 517;
				this.match(PythonParser.COMMA);
				this.state = 518;
				this.expression();
				}
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
	public import_stmt(): Import_stmtContext {
		let localctx: Import_stmtContext = new Import_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, PythonParser.RULE_import_stmt);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 58:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 521;
				this.import_name();
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 522;
				this.import_from();
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
	public import_name(): Import_nameContext {
		let localctx: Import_nameContext = new Import_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, PythonParser.RULE_import_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 525;
			this.match(PythonParser.IMPORT);
			this.state = 526;
			this.dotted_as_names();
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
	public import_from(): Import_fromContext {
		let localctx: Import_fromContext = new Import_fromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, PythonParser.RULE_import_from);
		let _la: number;
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 528;
				this.match(PythonParser.FROM);
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===13 || _la===52) {
					{
					{
					this.state = 529;
					_la = this._input.LA(1);
					if(!(_la===13 || _la===52)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 535;
				this.dotted_name(0);
				this.state = 536;
				this.match(PythonParser.IMPORT);
				this.state = 537;
				this.import_from_targets();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 539;
				this.match(PythonParser.FROM);
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 540;
					_la = this._input.LA(1);
					if(!(_la===13 || _la===52)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 543;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===13 || _la===52);
				this.state = 545;
				this.match(PythonParser.IMPORT);
				this.state = 546;
				this.import_from_targets();
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
	public import_from_targets(): Import_from_targetsContext {
		let localctx: Import_from_targetsContext = new Import_from_targetsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, PythonParser.RULE_import_from_targets);
		let _la: number;
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 549;
				this.match(PythonParser.LPAR);
				this.state = 550;
				this.import_from_as_names();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 551;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 554;
				this.match(PythonParser.RPAR);
				}
				break;
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 556;
				this.import_from_as_names();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 557;
				this.match(PythonParser.STAR);
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
	public import_from_as_names(): Import_from_as_namesContext {
		let localctx: Import_from_as_namesContext = new Import_from_as_namesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, PythonParser.RULE_import_from_as_names);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 560;
			this.import_from_as_name();
			this.state = 565;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 561;
					this.match(PythonParser.COMMA);
					this.state = 562;
					this.import_from_as_name();
					}
					}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
	public import_from_as_name(): Import_from_as_nameContext {
		let localctx: Import_from_as_nameContext = new Import_from_as_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, PythonParser.RULE_import_from_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.name();
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 569;
				this.match(PythonParser.AS);
				this.state = 570;
				this.name();
				}
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
	public dotted_as_names(): Dotted_as_namesContext {
		let localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, PythonParser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this.dotted_as_name();
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 574;
				this.match(PythonParser.COMMA);
				this.state = 575;
				this.dotted_as_name();
				}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public dotted_as_name(): Dotted_as_nameContext {
		let localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, PythonParser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 581;
			this.dotted_name(0);
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 582;
				this.match(PythonParser.AS);
				this.state = 583;
				this.name();
				}
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

	public dotted_name(): Dotted_nameContext;
	public dotted_name(_p: number): Dotted_nameContext;
	// @RuleVersion(0)
	public dotted_name(_p?: number): Dotted_nameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Dotted_nameContext = new Dotted_nameContext(this, this._ctx, _parentState);
		let _prevctx: Dotted_nameContext = localctx;
		let _startState: number = 48;
		this.enterRecursionRule(localctx, 48, PythonParser.RULE_dotted_name, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 587;
			this.name();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 594;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Dotted_nameContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_dotted_name);
					this.state = 589;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 590;
					this.match(PythonParser.DOT);
					this.state = 591;
					this.name();
					}
					}
				}
				this.state = 596;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, PythonParser.RULE_block);
		try {
			this.state = 603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 97:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 597;
				this.match(PythonParser.NEWLINE);
				this.state = 598;
				this.match(PythonParser.INDENT);
				this.state = 599;
				this.statements();
				this.state = 600;
				this.match(PythonParser.DEDENT);
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 19:
			case 31:
			case 52:
			case 55:
			case 56:
			case 58:
			case 59:
			case 60:
			case 61:
			case 64:
			case 65:
			case 69:
			case 71:
			case 73:
			case 77:
			case 78:
			case 80:
			case 81:
			case 82:
			case 83:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 602;
				this.simple_stmts();
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
	public decorators(): DecoratorsContext {
		let localctx: DecoratorsContext = new DecoratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, PythonParser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 605;
				this.match(PythonParser.AT);
				this.state = 606;
				this.named_expression();
				this.state = 607;
				this.match(PythonParser.NEWLINE);
				}
				}
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===49);
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
	public class_def(): Class_defContext {
		let localctx: Class_defContext = new Class_defContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, PythonParser.RULE_class_def);
		try {
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 613;
				this.decorators();
				this.state = 614;
				this.class_def_raw();
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 616;
				this.class_def_raw();
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
	public class_def_raw(): Class_def_rawContext {
		let localctx: Class_def_rawContext = new Class_def_rawContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, PythonParser.RULE_class_def_raw);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			this.match(PythonParser.CLASS);
			this.state = 620;
			this.name();
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 621;
				this.type_params();
				}
			}

			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 624;
				this.match(PythonParser.LPAR);
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1110573057) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 16647169) !== 0)) {
					{
					this.state = 625;
					this.arguments();
					}
				}

				this.state = 628;
				this.match(PythonParser.RPAR);
				}
			}

			this.state = 631;
			this.match(PythonParser.COLON);
			this.state = 632;
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
	public function_def(): Function_defContext {
		let localctx: Function_defContext = new Function_defContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, PythonParser.RULE_function_def);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 634;
				this.decorators();
				this.state = 635;
				this.function_def_raw();
				}
				break;
			case 76:
			case 85:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 637;
				this.function_def_raw();
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
	public function_def_raw(): Function_def_rawContext {
		let localctx: Function_def_rawContext = new Function_def_rawContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, PythonParser.RULE_function_def_raw);
		let _la: number;
		try {
			this.state = 675;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 640;
				this.match(PythonParser.DEF);
				this.state = 641;
				this.name();
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 642;
					this.type_params();
					}
				}

				this.state = 645;
				this.match(PythonParser.LPAR);
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35 || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					this.state = 646;
					this.params();
					}
				}

				this.state = 649;
				this.match(PythonParser.RPAR);
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 650;
					this.match(PythonParser.RARROW);
					this.state = 651;
					this.expression();
					}
				}

				this.state = 654;
				this.match(PythonParser.COLON);
				this.state = 655;
				this.block();
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 657;
				this.match(PythonParser.ASYNC);
				this.state = 658;
				this.match(PythonParser.DEF);
				this.state = 659;
				this.name();
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 660;
					this.type_params();
					}
				}

				this.state = 663;
				this.match(PythonParser.LPAR);
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35 || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					this.state = 664;
					this.params();
					}
				}

				this.state = 667;
				this.match(PythonParser.RPAR);
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 668;
					this.match(PythonParser.RARROW);
					this.state = 669;
					this.expression();
					}
				}

				this.state = 672;
				this.match(PythonParser.COLON);
				this.state = 673;
				this.block();
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
	public params(): ParamsContext {
		let localctx: ParamsContext = new ParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, PythonParser.RULE_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 677;
			this.parameters();
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
		this.enterRule(localctx, 64, PythonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.state = 728;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 679;
				this.slash_no_default();
				this.state = 683;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 680;
						this.param_no_default();
						}
						}
					}
					this.state = 685;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				}
				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 686;
					this.param_with_default();
					}
					}
					this.state = 691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 692;
					this.star_etc();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 695;
				this.slash_with_default();
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 696;
					this.param_with_default();
					}
					}
					this.state = 701;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 702;
					this.star_etc();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 706;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 705;
						this.param_no_default();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 708;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 710;
					this.param_with_default();
					}
					}
					this.state = 715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 716;
					this.star_etc();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 719;
					this.param_with_default();
					}
					}
					this.state = 722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 724;
					this.star_etc();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 727;
				this.star_etc();
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
	public slash_no_default(): Slash_no_defaultContext {
		let localctx: Slash_no_defaultContext = new Slash_no_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, PythonParser.RULE_slash_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 730;
				this.param_no_default();
				}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
			this.state = 735;
			this.match(PythonParser.SLASH);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 736;
				this.match(PythonParser.COMMA);
				}
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
	public slash_with_default(): Slash_with_defaultContext {
		let localctx: Slash_with_defaultContext = new Slash_with_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, PythonParser.RULE_slash_with_default);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 742;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 739;
					this.param_no_default();
					}
					}
				}
				this.state = 744;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 745;
				this.param_with_default();
				}
				}
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
			this.state = 750;
			this.match(PythonParser.SLASH);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 751;
				this.match(PythonParser.COMMA);
				}
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
	public star_etc(): Star_etcContext {
		let localctx: Star_etcContext = new Star_etcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, PythonParser.RULE_star_etc);
		let _la: number;
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 754;
				this.match(PythonParser.STAR);
				this.state = 755;
				this.param_no_default();
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 756;
					this.param_maybe_default();
					}
					}
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 762;
					this.kwds();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 765;
				this.match(PythonParser.STAR);
				this.state = 766;
				this.param_no_default_star_annotation();
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 767;
					this.param_maybe_default();
					}
					}
					this.state = 772;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 773;
					this.kwds();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 776;
				this.match(PythonParser.STAR);
				this.state = 777;
				this.match(PythonParser.COMMA);
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 778;
					this.param_maybe_default();
					}
					}
					this.state = 781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 783;
					this.kwds();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 786;
				this.kwds();
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
	public kwds(): KwdsContext {
		let localctx: KwdsContext = new KwdsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, PythonParser.RULE_kwds);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 789;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 790;
			this.param_no_default();
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
	public param_no_default(): Param_no_defaultContext {
		let localctx: Param_no_defaultContext = new Param_no_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, PythonParser.RULE_param_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this.param();
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 793;
				this.match(PythonParser.COMMA);
				}
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
	public param_no_default_star_annotation(): Param_no_default_star_annotationContext {
		let localctx: Param_no_default_star_annotationContext = new Param_no_default_star_annotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, PythonParser.RULE_param_no_default_star_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 796;
			this.param_star_annotation();
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 797;
				this.match(PythonParser.COMMA);
				}
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
	public param_with_default(): Param_with_defaultContext {
		let localctx: Param_with_defaultContext = new Param_with_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, PythonParser.RULE_param_with_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 800;
			this.param();
			this.state = 801;
			this.default_assignment();
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 802;
				this.match(PythonParser.COMMA);
				}
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
	public param_maybe_default(): Param_maybe_defaultContext {
		let localctx: Param_maybe_defaultContext = new Param_maybe_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, PythonParser.RULE_param_maybe_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 805;
			this.param();
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 806;
				this.default_assignment();
				}
			}

			this.state = 810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 809;
				this.match(PythonParser.COMMA);
				}
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
	public param(): ParamContext {
		let localctx: ParamContext = new ParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, PythonParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 812;
			this.name();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 813;
				this.annotation();
				}
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
	public param_star_annotation(): Param_star_annotationContext {
		let localctx: Param_star_annotationContext = new Param_star_annotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, PythonParser.RULE_param_star_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 816;
			this.name();
			this.state = 817;
			this.star_annotation();
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
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, PythonParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this.match(PythonParser.COLON);
			this.state = 820;
			this.expression();
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
	public star_annotation(): Star_annotationContext {
		let localctx: Star_annotationContext = new Star_annotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, PythonParser.RULE_star_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			this.match(PythonParser.COLON);
			this.state = 823;
			this.star_expression();
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
	public default_assignment(): Default_assignmentContext {
		let localctx: Default_assignmentContext = new Default_assignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, PythonParser.RULE_default_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 825;
			this.match(PythonParser.EQUAL);
			this.state = 826;
			this.expression();
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
		this.enterRule(localctx, 92, PythonParser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this.match(PythonParser.IF);
			this.state = 829;
			this.named_expression();
			this.state = 830;
			this.match(PythonParser.COLON);
			this.state = 831;
			this.block();
			this.state = 836;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				{
				this.state = 832;
				this.elif_stmt();
				}
				break;
			case -1:
			case 3:
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 19:
			case 31:
			case 49:
			case 52:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 64:
			case 65:
			case 66:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				{
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 833;
					this.else_block();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public elif_stmt(): Elif_stmtContext {
		let localctx: Elif_stmtContext = new Elif_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, PythonParser.RULE_elif_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 838;
			this.match(PythonParser.ELIF);
			this.state = 839;
			this.named_expression();
			this.state = 840;
			this.match(PythonParser.COLON);
			this.state = 841;
			this.block();
			this.state = 846;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				{
				this.state = 842;
				this.elif_stmt();
				}
				break;
			case -1:
			case 3:
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 19:
			case 31:
			case 49:
			case 52:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 64:
			case 65:
			case 66:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				{
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 843;
					this.else_block();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public else_block(): Else_blockContext {
		let localctx: Else_blockContext = new Else_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, PythonParser.RULE_else_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 848;
			this.match(PythonParser.ELSE);
			this.state = 849;
			this.match(PythonParser.COLON);
			this.state = 850;
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
	public while_stmt(): While_stmtContext {
		let localctx: While_stmtContext = new While_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, PythonParser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 852;
			this.match(PythonParser.WHILE);
			this.state = 853;
			this.named_expression();
			this.state = 854;
			this.match(PythonParser.COLON);
			this.state = 855;
			this.block();
			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 856;
				this.else_block();
				}
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
		this.enterRule(localctx, 100, PythonParser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===85) {
				{
				this.state = 859;
				this.match(PythonParser.ASYNC);
				}
			}

			this.state = 862;
			this.match(PythonParser.FOR);
			this.state = 863;
			this.star_targets();
			this.state = 864;
			this.match(PythonParser.IN);
			this.state = 865;
			this.star_expressions();
			this.state = 866;
			this.match(PythonParser.COLON);
			this.state = 867;
			this.block();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 868;
				this.else_block();
				}
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
	public with_stmt(): With_stmtContext {
		let localctx: With_stmtContext = new With_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, PythonParser.RULE_with_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 871;
				this.match(PythonParser.WITH);
				this.state = 872;
				this.match(PythonParser.LPAR);
				this.state = 873;
				this.with_item();
				this.state = 878;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 874;
						this.match(PythonParser.COMMA);
						this.state = 875;
						this.with_item();
						}
						}
					}
					this.state = 880;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
				}
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 881;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 884;
				this.match(PythonParser.RPAR);
				this.state = 885;
				this.match(PythonParser.COLON);
				this.state = 886;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 888;
				this.match(PythonParser.ASYNC);
				this.state = 889;
				this.match(PythonParser.WITH);
				this.state = 890;
				this.match(PythonParser.LPAR);
				this.state = 891;
				this.with_item();
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 892;
						this.match(PythonParser.COMMA);
						this.state = 893;
						this.with_item();
						}
						}
					}
					this.state = 898;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
				}
				this.state = 900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 899;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 902;
				this.match(PythonParser.RPAR);
				this.state = 903;
				this.match(PythonParser.COLON);
				this.state = 904;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 906;
					this.match(PythonParser.ASYNC);
					}
				}

				this.state = 909;
				this.match(PythonParser.WITH);
				this.state = 910;
				this.with_item();
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 911;
					this.match(PythonParser.COMMA);
					this.state = 912;
					this.with_item();
					}
					}
					this.state = 917;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 918;
				this.match(PythonParser.COLON);
				this.state = 919;
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
	public with_item(): With_itemContext {
		let localctx: With_itemContext = new With_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, PythonParser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this.expression();
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 924;
				this.match(PythonParser.AS);
				this.state = 925;
				this.star_target();
				}
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
	public try_stmt(): Try_stmtContext {
		let localctx: Try_stmtContext = new Try_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, PythonParser.RULE_try_stmt);
		let _la: number;
		try {
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 928;
				this.match(PythonParser.TRY);
				this.state = 929;
				this.match(PythonParser.COLON);
				this.state = 930;
				this.block();
				this.state = 931;
				this.finally_block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 933;
				this.match(PythonParser.TRY);
				this.state = 934;
				this.match(PythonParser.COLON);
				this.state = 935;
				this.block();
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 936;
					this.except_block();
					}
					}
					this.state = 939;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===62);
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 941;
					this.else_block();
					}
				}

				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===67) {
					{
					this.state = 944;
					this.finally_block();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 947;
				this.match(PythonParser.TRY);
				this.state = 948;
				this.match(PythonParser.COLON);
				this.state = 949;
				this.block();
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 950;
					this.except_star_block();
					}
					}
					this.state = 953;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===62);
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 955;
					this.else_block();
					}
				}

				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===67) {
					{
					this.state = 958;
					this.finally_block();
					}
				}

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
	public except_block(): Except_blockContext {
		let localctx: Except_blockContext = new Except_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, PythonParser.RULE_except_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 963;
			this.match(PythonParser.EXCEPT);
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 964;
				this.expression();
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===75) {
					{
					this.state = 965;
					this.match(PythonParser.AS);
					this.state = 966;
					this.name();
					}
				}

				}
			}

			this.state = 971;
			this.match(PythonParser.COLON);
			this.state = 972;
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
	public except_star_block(): Except_star_blockContext {
		let localctx: Except_star_blockContext = new Except_star_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, PythonParser.RULE_except_star_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 974;
			this.match(PythonParser.EXCEPT);
			this.state = 975;
			this.match(PythonParser.STAR);
			this.state = 976;
			this.expression();
			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 977;
				this.match(PythonParser.AS);
				this.state = 978;
				this.name();
				}
			}

			this.state = 981;
			this.match(PythonParser.COLON);
			this.state = 982;
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
	public finally_block(): Finally_blockContext {
		let localctx: Finally_blockContext = new Finally_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, PythonParser.RULE_finally_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 984;
			this.match(PythonParser.FINALLY);
			this.state = 985;
			this.match(PythonParser.COLON);
			this.state = 986;
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
	public match_stmt(): Match_stmtContext {
		let localctx: Match_stmtContext = new Match_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, PythonParser.RULE_match_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 988;
			this.match(PythonParser.NAME_OR_MATCH);
			this.state = 989;
			this.subject_expr();
			this.state = 990;
			this.match(PythonParser.COLON);
			this.state = 991;
			this.match(PythonParser.NEWLINE);
			this.state = 992;
			this.match(PythonParser.INDENT);
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 993;
				this.case_block();
				}
				}
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===92);
			this.state = 998;
			this.match(PythonParser.DEDENT);
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
	public subject_expr(): Subject_exprContext {
		let localctx: Subject_exprContext = new Subject_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, PythonParser.RULE_subject_expr);
		let _la: number;
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1000;
				this.star_named_expression();
				this.state = 1001;
				this.match(PythonParser.COMMA);
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1002;
					this.star_named_expressions();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
				this.named_expression();
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
	public case_block(): Case_blockContext {
		let localctx: Case_blockContext = new Case_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, PythonParser.RULE_case_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1008;
			this.match(PythonParser.NAME_OR_CASE);
			this.state = 1009;
			this.patterns();
			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===87) {
				{
				this.state = 1010;
				this.guard();
				}
			}

			this.state = 1013;
			this.match(PythonParser.COLON);
			this.state = 1014;
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
	public guard(): GuardContext {
		let localctx: GuardContext = new GuardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, PythonParser.RULE_guard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1016;
			this.match(PythonParser.IF);
			this.state = 1017;
			this.named_expression();
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
	public patterns(): PatternsContext {
		let localctx: PatternsContext = new PatternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, PythonParser.RULE_patterns);
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1019;
				this.open_sequence_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1020;
				this.pattern();
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
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, PythonParser.RULE_pattern);
		try {
			this.state = 1025;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1023;
				this.as_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1024;
				this.or_pattern();
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
	public as_pattern(): As_patternContext {
		let localctx: As_patternContext = new As_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, PythonParser.RULE_as_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1027;
			this.or_pattern();
			this.state = 1028;
			this.match(PythonParser.AS);
			this.state = 1029;
			this.pattern_capture_target();
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
	public or_pattern(): Or_patternContext {
		let localctx: Or_patternContext = new Or_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, PythonParser.RULE_or_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1031;
			this.closed_pattern();
			this.state = 1036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 1032;
				this.match(PythonParser.VBAR);
				this.state = 1033;
				this.closed_pattern();
				}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public closed_pattern(): Closed_patternContext {
		let localctx: Closed_patternContext = new Closed_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, PythonParser.RULE_closed_pattern);
		try {
			this.state = 1047;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1039;
				this.literal_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1040;
				this.capture_pattern();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1041;
				this.wildcard_pattern();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1042;
				this.value_pattern();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1043;
				this.group_pattern();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1044;
				this.sequence_pattern();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1045;
				this.mapping_pattern();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1046;
				this.class_pattern();
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
	public literal_pattern(): Literal_patternContext {
		let localctx: Literal_patternContext = new Literal_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, PythonParser.RULE_literal_pattern);
		try {
			this.state = 1055;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1049;
				this.signed_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1050;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1051;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1052;
				this.match(PythonParser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1053;
				this.match(PythonParser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1054;
				this.match(PythonParser.FALSE);
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
	public literal_expr(): Literal_exprContext {
		let localctx: Literal_exprContext = new Literal_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, PythonParser.RULE_literal_expr);
		try {
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1057;
				this.signed_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1058;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1059;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1060;
				this.match(PythonParser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1061;
				this.match(PythonParser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1062;
				this.match(PythonParser.FALSE);
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
	public complex_number(): Complex_numberContext {
		let localctx: Complex_numberContext = new Complex_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, PythonParser.RULE_complex_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1065;
			this.signed_real_number();
			this.state = 1066;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===18)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1067;
			this.imaginary_number();
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
	public signed_number(): Signed_numberContext {
		let localctx: Signed_numberContext = new Signed_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, PythonParser.RULE_signed_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1069;
				this.match(PythonParser.MINUS);
				}
			}

			this.state = 1072;
			this.match(PythonParser.NUMBER);
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
	public signed_real_number(): Signed_real_numberContext {
		let localctx: Signed_real_numberContext = new Signed_real_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, PythonParser.RULE_signed_real_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1075;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1074;
				this.match(PythonParser.MINUS);
				}
			}

			this.state = 1077;
			this.real_number();
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
	public real_number(): Real_numberContext {
		let localctx: Real_numberContext = new Real_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, PythonParser.RULE_real_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1079;
			this.match(PythonParser.NUMBER);
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
	public imaginary_number(): Imaginary_numberContext {
		let localctx: Imaginary_numberContext = new Imaginary_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, PythonParser.RULE_imaginary_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1081;
			this.match(PythonParser.NUMBER);
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
	public capture_pattern(): Capture_patternContext {
		let localctx: Capture_patternContext = new Capture_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, PythonParser.RULE_capture_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1083;
			this.pattern_capture_target();
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
	public pattern_capture_target(): Pattern_capture_targetContext {
		let localctx: Pattern_capture_targetContext = new Pattern_capture_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, PythonParser.RULE_pattern_capture_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1085;
			this.name_except_underscore();
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
	public wildcard_pattern(): Wildcard_patternContext {
		let localctx: Wildcard_patternContext = new Wildcard_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, PythonParser.RULE_wildcard_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1087;
			this.match(PythonParser.NAME_OR_WILDCARD);
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
	public value_pattern(): Value_patternContext {
		let localctx: Value_patternContext = new Value_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, PythonParser.RULE_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1089;
			this.attr();
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
	public attr(): AttrContext {
		let localctx: AttrContext = new AttrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, PythonParser.RULE_attr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1091;
			this.name();
			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1092;
				this.match(PythonParser.DOT);
				this.state = 1093;
				this.name();
				}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===13);
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
	public name_or_attr(): Name_or_attrContext {
		let localctx: Name_or_attrContext = new Name_or_attrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, PythonParser.RULE_name_or_attr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1098;
			this.name();
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 1099;
				this.match(PythonParser.DOT);
				this.state = 1100;
				this.name();
				}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public group_pattern(): Group_patternContext {
		let localctx: Group_patternContext = new Group_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, PythonParser.RULE_group_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this.match(PythonParser.LPAR);
			this.state = 1107;
			this.pattern();
			this.state = 1108;
			this.match(PythonParser.RPAR);
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
	public sequence_pattern(): Sequence_patternContext {
		let localctx: Sequence_patternContext = new Sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, PythonParser.RULE_sequence_pattern);
		let _la: number;
		try {
			this.state = 1120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1110;
				this.match(PythonParser.LSQB);
				this.state = 1112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 787344) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 1057) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1111;
					this.maybe_sequence_pattern();
					}
				}

				this.state = 1114;
				this.match(PythonParser.RSQB);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1115;
				this.match(PythonParser.LPAR);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 787344) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 1057) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1116;
					this.open_sequence_pattern();
					}
				}

				this.state = 1119;
				this.match(PythonParser.RPAR);
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
	public open_sequence_pattern(): Open_sequence_patternContext {
		let localctx: Open_sequence_patternContext = new Open_sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, PythonParser.RULE_open_sequence_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1122;
			this.maybe_star_pattern();
			this.state = 1123;
			this.match(PythonParser.COMMA);
			this.state = 1125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 787344) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 1057) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 1124;
				this.maybe_sequence_pattern();
				}
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
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		let localctx: Maybe_sequence_patternContext = new Maybe_sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, PythonParser.RULE_maybe_sequence_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1127;
			this.maybe_star_pattern();
			this.state = 1132;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1128;
					this.match(PythonParser.COMMA);
					this.state = 1129;
					this.maybe_star_pattern();
					}
					}
				}
				this.state = 1134;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
			}
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1135;
				this.match(PythonParser.COMMA);
				}
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
	public maybe_star_pattern(): Maybe_star_patternContext {
		let localctx: Maybe_star_patternContext = new Maybe_star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, PythonParser.RULE_maybe_star_pattern);
		try {
			this.state = 1140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1138;
				this.star_pattern();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 18:
			case 55:
			case 60:
			case 65:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1139;
				this.pattern();
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
	public star_pattern(): Star_patternContext {
		let localctx: Star_patternContext = new Star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, PythonParser.RULE_star_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1142;
			this.match(PythonParser.STAR);
			this.state = 1143;
			this.name();
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
	public mapping_pattern(): Mapping_patternContext {
		let localctx: Mapping_patternContext = new Mapping_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, PythonParser.RULE_mapping_pattern);
		let _la: number;
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1145;
				this.match(PythonParser.LBRACE);
				this.state = 1146;
				this.match(PythonParser.RBRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1147;
				this.match(PythonParser.LBRACE);
				this.state = 1148;
				this.double_star_pattern();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1149;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 1152;
				this.match(PythonParser.RBRACE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1154;
				this.match(PythonParser.LBRACE);
				this.state = 1155;
				this.items_pattern();
				this.state = 1158;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1156;
					this.match(PythonParser.COMMA);
					this.state = 1157;
					this.double_star_pattern();
					}
					break;
				}
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1160;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 1163;
				this.match(PythonParser.RBRACE);
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
	public items_pattern(): Items_patternContext {
		let localctx: Items_patternContext = new Items_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, PythonParser.RULE_items_pattern);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1167;
			this.key_value_pattern();
			this.state = 1172;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1168;
					this.match(PythonParser.COMMA);
					this.state = 1169;
					this.key_value_pattern();
					}
					}
				}
				this.state = 1174;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
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
	public key_value_pattern(): Key_value_patternContext {
		let localctx: Key_value_patternContext = new Key_value_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, PythonParser.RULE_key_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 18:
			case 55:
			case 60:
			case 65:
			case 95:
			case 96:
				{
				this.state = 1175;
				this.literal_expr();
				}
				break;
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 1176;
				this.attr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1179;
			this.match(PythonParser.COLON);
			this.state = 1180;
			this.pattern();
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
	public double_star_pattern(): Double_star_patternContext {
		let localctx: Double_star_patternContext = new Double_star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, PythonParser.RULE_double_star_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1182;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 1183;
			this.pattern_capture_target();
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
	public class_pattern(): Class_patternContext {
		let localctx: Class_patternContext = new Class_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, PythonParser.RULE_class_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1185;
			this.name_or_attr();
			this.state = 1186;
			this.match(PythonParser.LPAR);
			this.state = 1198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 263056) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 1057) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 1193;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1187;
					this.positional_patterns();
					this.state = 1190;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						this.state = 1188;
						this.match(PythonParser.COMMA);
						this.state = 1189;
						this.keyword_patterns();
						}
						break;
					}
					}
					break;
				case 2:
					{
					this.state = 1192;
					this.keyword_patterns();
					}
					break;
				}
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1195;
					this.match(PythonParser.COMMA);
					}
				}

				}
			}

			this.state = 1200;
			this.match(PythonParser.RPAR);
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
	public positional_patterns(): Positional_patternsContext {
		let localctx: Positional_patternsContext = new Positional_patternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, PythonParser.RULE_positional_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1202;
			this.pattern();
			this.state = 1207;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1203;
					this.match(PythonParser.COMMA);
					this.state = 1204;
					this.pattern();
					}
					}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
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
	public keyword_patterns(): Keyword_patternsContext {
		let localctx: Keyword_patternsContext = new Keyword_patternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, PythonParser.RULE_keyword_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1210;
			this.keyword_pattern();
			this.state = 1215;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1211;
					this.match(PythonParser.COMMA);
					this.state = 1212;
					this.keyword_pattern();
					}
					}
				}
				this.state = 1217;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
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
	public keyword_pattern(): Keyword_patternContext {
		let localctx: Keyword_patternContext = new Keyword_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, PythonParser.RULE_keyword_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1218;
			this.name();
			this.state = 1219;
			this.match(PythonParser.EQUAL);
			this.state = 1220;
			this.pattern();
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
	public type_alias(): Type_aliasContext {
		let localctx: Type_aliasContext = new Type_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, PythonParser.RULE_type_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1222;
			this.match(PythonParser.NAME_OR_TYPE);
			this.state = 1223;
			this.name();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 1224;
				this.type_params();
				}
			}

			this.state = 1227;
			this.match(PythonParser.EQUAL);
			this.state = 1228;
			this.expression();
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
	public type_params(): Type_paramsContext {
		let localctx: Type_paramsContext = new Type_paramsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, PythonParser.RULE_type_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1230;
			this.match(PythonParser.LSQB);
			this.state = 1231;
			this.type_param_seq();
			this.state = 1232;
			this.match(PythonParser.RSQB);
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
	public type_param_seq(): Type_param_seqContext {
		let localctx: Type_param_seqContext = new Type_param_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, PythonParser.RULE_type_param_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1234;
			this.type_param();
			this.state = 1239;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1235;
					this.match(PythonParser.COMMA);
					this.state = 1236;
					this.type_param();
					}
					}
				}
				this.state = 1241;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			}
			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1242;
				this.match(PythonParser.COMMA);
				}
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
	public type_param(): Type_paramContext {
		let localctx: Type_paramContext = new Type_paramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, PythonParser.RULE_type_param);
		let _la: number;
		try {
			this.state = 1262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1245;
				this.name();
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 1246;
					this.type_param_bound();
					}
				}

				this.state = 1250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1249;
					this.type_param_default();
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1252;
				this.match(PythonParser.STAR);
				this.state = 1253;
				this.name();
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1254;
					this.type_param_starred_default();
					}
				}

				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1257;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1258;
				this.name();
				this.state = 1260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1259;
					this.type_param_default();
					}
				}

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
	public type_param_bound(): Type_param_boundContext {
		let localctx: Type_param_boundContext = new Type_param_boundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, PythonParser.RULE_type_param_bound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1264;
			this.match(PythonParser.COLON);
			this.state = 1265;
			this.expression();
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
	public type_param_default(): Type_param_defaultContext {
		let localctx: Type_param_defaultContext = new Type_param_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, PythonParser.RULE_type_param_default);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1267;
			this.match(PythonParser.EQUAL);
			this.state = 1268;
			this.expression();
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
	public type_param_starred_default(): Type_param_starred_defaultContext {
		let localctx: Type_param_starred_defaultContext = new Type_param_starred_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, PythonParser.RULE_type_param_starred_default);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1270;
			this.match(PythonParser.EQUAL);
			this.state = 1271;
			this.star_expression();
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
	public expressions(): ExpressionsContext {
		let localctx: ExpressionsContext = new ExpressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, PythonParser.RULE_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1273;
			this.expression();
			this.state = 1278;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1274;
					this.match(PythonParser.COMMA);
					this.state = 1275;
					this.expression();
					}
					}
				}
				this.state = 1280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 1282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1281;
				this.match(PythonParser.COMMA);
				}
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, PythonParser.RULE_expression);
		let _la: number;
		try {
			this.state = 1293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1284;
				this.disjunction();
				this.state = 1290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87) {
					{
					this.state = 1285;
					this.match(PythonParser.IF);
					this.state = 1286;
					this.disjunction();
					this.state = 1287;
					this.match(PythonParser.ELSE);
					this.state = 1288;
					this.expression();
					}
				}

				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1292;
				this.lambdef();
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
	public yield_expr(): Yield_exprContext {
		let localctx: Yield_exprContext = new Yield_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, PythonParser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1295;
			this.match(PythonParser.YIELD);
			this.state = 1301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 77:
				{
				this.state = 1296;
				this.match(PythonParser.FROM);
				this.state = 1297;
				this.expression();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 10:
			case 12:
			case 14:
			case 16:
			case 17:
			case 18:
			case 19:
			case 25:
			case 31:
			case 52:
			case 54:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				{
				this.state = 1299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1298;
					this.star_expressions();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public star_expressions(): Star_expressionsContext {
		let localctx: Star_expressionsContext = new Star_expressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, PythonParser.RULE_star_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1303;
			this.star_expression();
			this.state = 1308;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1304;
					this.match(PythonParser.COMMA);
					this.state = 1305;
					this.star_expression();
					}
					}
				}
				this.state = 1310;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			}
			this.state = 1312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1311;
				this.match(PythonParser.COMMA);
				}
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
	public star_expression(): Star_expressionContext {
		let localctx: Star_expressionContext = new Star_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, PythonParser.RULE_star_expression);
		try {
			this.state = 1317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1314;
				this.match(PythonParser.STAR);
				this.state = 1315;
				this.bitwise_or(0);
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1316;
				this.expression();
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
	public star_named_expressions(): Star_named_expressionsContext {
		let localctx: Star_named_expressionsContext = new Star_named_expressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, PythonParser.RULE_star_named_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1319;
			this.star_named_expression();
			this.state = 1324;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1320;
					this.match(PythonParser.COMMA);
					this.state = 1321;
					this.star_named_expression();
					}
					}
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			}
			this.state = 1328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1327;
				this.match(PythonParser.COMMA);
				}
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
	public star_named_expression(): Star_named_expressionContext {
		let localctx: Star_named_expressionContext = new Star_named_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, PythonParser.RULE_star_named_expression);
		try {
			this.state = 1333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1330;
				this.match(PythonParser.STAR);
				this.state = 1331;
				this.bitwise_or(0);
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1332;
				this.named_expression();
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
	public assignment_expression(): Assignment_expressionContext {
		let localctx: Assignment_expressionContext = new Assignment_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, PythonParser.RULE_assignment_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1335;
			this.name();
			this.state = 1336;
			this.match(PythonParser.COLONEQUAL);
			this.state = 1337;
			this.expression();
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
	public named_expression(): Named_expressionContext {
		let localctx: Named_expressionContext = new Named_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, PythonParser.RULE_named_expression);
		try {
			this.state = 1341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1339;
				this.assignment_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1340;
				this.expression();
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
	public disjunction(): DisjunctionContext {
		let localctx: DisjunctionContext = new DisjunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, PythonParser.RULE_disjunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1343;
			this.conjunction();
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===88) {
				{
				{
				this.state = 1344;
				this.match(PythonParser.OR);
				this.state = 1345;
				this.conjunction();
				}
				}
				this.state = 1350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public conjunction(): ConjunctionContext {
		let localctx: ConjunctionContext = new ConjunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, PythonParser.RULE_conjunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1351;
			this.inversion();
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===70) {
				{
				{
				this.state = 1352;
				this.match(PythonParser.AND);
				this.state = 1353;
				this.inversion();
				}
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public inversion(): InversionContext {
		let localctx: InversionContext = new InversionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, PythonParser.RULE_inversion);
		try {
			this.state = 1362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1359;
				this.match(PythonParser.NOT);
				this.state = 1360;
				this.inversion();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1361;
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
		this.enterRule(localctx, 224, PythonParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1364;
			this.bitwise_or(0);
			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2038431744) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 1048609) !== 0)) {
				{
				{
				this.state = 1365;
				this.compare_op_bitwise_or_pair();
				}
				}
				this.state = 1370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public compare_op_bitwise_or_pair(): Compare_op_bitwise_or_pairContext {
		let localctx: Compare_op_bitwise_or_pairContext = new Compare_op_bitwise_or_pairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, PythonParser.RULE_compare_op_bitwise_or_pair);
		try {
			this.state = 1381;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1371;
				this.eq_bitwise_or();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1372;
				this.noteq_bitwise_or();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1373;
				this.lte_bitwise_or();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1374;
				this.lt_bitwise_or();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1375;
				this.gte_bitwise_or();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1376;
				this.gt_bitwise_or();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1377;
				this.notin_bitwise_or();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1378;
				this.in_bitwise_or();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1379;
				this.isnot_bitwise_or();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1380;
				this.is_bitwise_or();
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
	public eq_bitwise_or(): Eq_bitwise_orContext {
		let localctx: Eq_bitwise_orContext = new Eq_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, PythonParser.RULE_eq_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1383;
			this.match(PythonParser.EQEQUAL);
			this.state = 1384;
			this.bitwise_or(0);
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
	public noteq_bitwise_or(): Noteq_bitwise_orContext {
		let localctx: Noteq_bitwise_orContext = new Noteq_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, PythonParser.RULE_noteq_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1386;
			this.match(PythonParser.NOTEQUAL);
			}
			this.state = 1387;
			this.bitwise_or(0);
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
	public lte_bitwise_or(): Lte_bitwise_orContext {
		let localctx: Lte_bitwise_orContext = new Lte_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, PythonParser.RULE_lte_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1389;
			this.match(PythonParser.LESSEQUAL);
			this.state = 1390;
			this.bitwise_or(0);
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
	public lt_bitwise_or(): Lt_bitwise_orContext {
		let localctx: Lt_bitwise_orContext = new Lt_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, PythonParser.RULE_lt_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1392;
			this.match(PythonParser.LESS);
			this.state = 1393;
			this.bitwise_or(0);
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
	public gte_bitwise_or(): Gte_bitwise_orContext {
		let localctx: Gte_bitwise_orContext = new Gte_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, PythonParser.RULE_gte_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1395;
			this.match(PythonParser.GREATEREQUAL);
			this.state = 1396;
			this.bitwise_or(0);
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
	public gt_bitwise_or(): Gt_bitwise_orContext {
		let localctx: Gt_bitwise_orContext = new Gt_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, PythonParser.RULE_gt_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1398;
			this.match(PythonParser.GREATER);
			this.state = 1399;
			this.bitwise_or(0);
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
	public notin_bitwise_or(): Notin_bitwise_orContext {
		let localctx: Notin_bitwise_orContext = new Notin_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, PythonParser.RULE_notin_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1401;
			this.match(PythonParser.NOT);
			this.state = 1402;
			this.match(PythonParser.IN);
			this.state = 1403;
			this.bitwise_or(0);
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
	public in_bitwise_or(): In_bitwise_orContext {
		let localctx: In_bitwise_orContext = new In_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, PythonParser.RULE_in_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1405;
			this.match(PythonParser.IN);
			this.state = 1406;
			this.bitwise_or(0);
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
	public isnot_bitwise_or(): Isnot_bitwise_orContext {
		let localctx: Isnot_bitwise_orContext = new Isnot_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, PythonParser.RULE_isnot_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1408;
			this.match(PythonParser.IS);
			this.state = 1409;
			this.match(PythonParser.NOT);
			this.state = 1410;
			this.bitwise_or(0);
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
	public is_bitwise_or(): Is_bitwise_orContext {
		let localctx: Is_bitwise_orContext = new Is_bitwise_orContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, PythonParser.RULE_is_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1412;
			this.match(PythonParser.IS);
			this.state = 1413;
			this.bitwise_or(0);
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

	public bitwise_or(): Bitwise_orContext;
	public bitwise_or(_p: number): Bitwise_orContext;
	// @RuleVersion(0)
	public bitwise_or(_p?: number): Bitwise_orContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Bitwise_orContext = new Bitwise_orContext(this, this._ctx, _parentState);
		let _prevctx: Bitwise_orContext = localctx;
		let _startState: number = 248;
		this.enterRecursionRule(localctx, 248, PythonParser.RULE_bitwise_or, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1416;
			this.bitwise_xor(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Bitwise_orContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_bitwise_or);
					this.state = 1418;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1419;
					this.match(PythonParser.VBAR);
					this.state = 1420;
					this.bitwise_xor(0);
					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
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

	public bitwise_xor(): Bitwise_xorContext;
	public bitwise_xor(_p: number): Bitwise_xorContext;
	// @RuleVersion(0)
	public bitwise_xor(_p?: number): Bitwise_xorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Bitwise_xorContext = new Bitwise_xorContext(this, this._ctx, _parentState);
		let _prevctx: Bitwise_xorContext = localctx;
		let _startState: number = 250;
		this.enterRecursionRule(localctx, 250, PythonParser.RULE_bitwise_xor, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1427;
			this.bitwise_and(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1434;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Bitwise_xorContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_bitwise_xor);
					this.state = 1429;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1430;
					this.match(PythonParser.CIRCUMFLEX);
					this.state = 1431;
					this.bitwise_and(0);
					}
					}
				}
				this.state = 1436;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
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

	public bitwise_and(): Bitwise_andContext;
	public bitwise_and(_p: number): Bitwise_andContext;
	// @RuleVersion(0)
	public bitwise_and(_p?: number): Bitwise_andContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Bitwise_andContext = new Bitwise_andContext(this, this._ctx, _parentState);
		let _prevctx: Bitwise_andContext = localctx;
		let _startState: number = 252;
		this.enterRecursionRule(localctx, 252, PythonParser.RULE_bitwise_and, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1438;
			this.shift_expr(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1445;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Bitwise_andContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_bitwise_and);
					this.state = 1440;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1441;
					this.match(PythonParser.AMPER);
					this.state = 1442;
					this.shift_expr(0);
					}
					}
				}
				this.state = 1447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
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

	public shift_expr(): Shift_exprContext;
	public shift_expr(_p: number): Shift_exprContext;
	// @RuleVersion(0)
	public shift_expr(_p?: number): Shift_exprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Shift_exprContext = new Shift_exprContext(this, this._ctx, _parentState);
		let _prevctx: Shift_exprContext = localctx;
		let _startState: number = 254;
		this.enterRecursionRule(localctx, 254, PythonParser.RULE_shift_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1449;
			this.sum(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1456;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Shift_exprContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_shift_expr);
					this.state = 1451;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1452;
					_la = this._input.LA(1);
					if(!(_la===33 || _la===34)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1453;
					this.sum(0);
					}
					}
				}
				this.state = 1458;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
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

	public sum(): SumContext;
	public sum(_p: number): SumContext;
	// @RuleVersion(0)
	public sum(_p?: number): SumContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SumContext = new SumContext(this, this._ctx, _parentState);
		let _prevctx: SumContext = localctx;
		let _startState: number = 256;
		this.enterRecursionRule(localctx, 256, PythonParser.RULE_sum, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1460;
			this.term(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1467;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new SumContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_sum);
					this.state = 1462;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1463;
					_la = this._input.LA(1);
					if(!(_la===17 || _la===18)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1464;
					this.term(0);
					}
					}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
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

	public term(): TermContext;
	public term(_p: number): TermContext;
	// @RuleVersion(0)
	public term(_p?: number): TermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TermContext = new TermContext(this, this._ctx, _parentState);
		let _prevctx: TermContext = localctx;
		let _startState: number = 258;
		this.enterRecursionRule(localctx, 258, PythonParser.RULE_term, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1471;
			this.factor();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1478;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TermContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_term);
					this.state = 1473;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1474;
					_la = this._input.LA(1);
					if(!(((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 1342177411) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1475;
					this.factor();
					}
					}
				}
				this.state = 1480;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
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
	public factor(): FactorContext {
		let localctx: FactorContext = new FactorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, PythonParser.RULE_factor);
		try {
			this.state = 1488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1481;
				this.match(PythonParser.PLUS);
				this.state = 1482;
				this.factor();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1483;
				this.match(PythonParser.MINUS);
				this.state = 1484;
				this.factor();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1485;
				this.match(PythonParser.TILDE);
				this.state = 1486;
				this.factor();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1487;
				this.power();
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
	public power(): PowerContext {
		let localctx: PowerContext = new PowerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, PythonParser.RULE_power);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1490;
			this.await_primary();
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1491;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1492;
				this.factor();
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
	public await_primary(): Await_primaryContext {
		let localctx: Await_primaryContext = new Await_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, PythonParser.RULE_await_primary);
		try {
			this.state = 1498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1495;
				this.match(PythonParser.AWAIT);
				this.state = 1496;
				this.primary(0);
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 52:
			case 55:
			case 60:
			case 65:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1497;
				this.primary(0);
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

	public primary(): PrimaryContext;
	public primary(_p: number): PrimaryContext;
	// @RuleVersion(0)
	public primary(_p?: number): PrimaryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryContext = localctx;
		let _startState: number = 266;
		this.enterRecursionRule(localctx, 266, PythonParser.RULE_primary, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1501;
			this.atom();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1520;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PrimaryContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_primary);
					this.state = 1503;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1516;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
					case 1:
						{
						this.state = 1504;
						this.match(PythonParser.DOT);
						this.state = 1505;
						this.name();
						}
						break;
					case 2:
						{
						this.state = 1506;
						this.genexp();
						}
						break;
					case 3:
						{
						this.state = 1507;
						this.match(PythonParser.LPAR);
						this.state = 1509;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1110573057) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 16647169) !== 0)) {
							{
							this.state = 1508;
							this.arguments();
							}
						}

						this.state = 1511;
						this.match(PythonParser.RPAR);
						}
						break;
					case 4:
						{
						this.state = 1512;
						this.match(PythonParser.LSQB);
						this.state = 1513;
						this.slices();
						this.state = 1514;
						this.match(PythonParser.RSQB);
						}
						break;
					}
					}
					}
				}
				this.state = 1522;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
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
	public slices(): SlicesContext {
		let localctx: SlicesContext = new SlicesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, PythonParser.RULE_slices);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1541;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1523;
				this.slice();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1526;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 7:
				case 8:
				case 9:
				case 14:
				case 17:
				case 18:
				case 31:
				case 52:
				case 55:
				case 56:
				case 60:
				case 65:
				case 73:
				case 83:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					{
					this.state = 1524;
					this.slice();
					}
					break;
				case 19:
					{
					this.state = 1525;
					this.starred_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1535;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1528;
						this.match(PythonParser.COMMA);
						this.state = 1531;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 4:
						case 7:
						case 8:
						case 9:
						case 14:
						case 17:
						case 18:
						case 31:
						case 52:
						case 55:
						case 56:
						case 60:
						case 65:
						case 73:
						case 83:
						case 90:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
							{
							this.state = 1529;
							this.slice();
							}
							break;
						case 19:
							{
							this.state = 1530;
							this.starred_expression();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 1537;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
				}
				this.state = 1539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1538;
					this.match(PythonParser.COMMA);
					}
				}

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
	public slice(): SliceContext {
		let localctx: SliceContext = new SliceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, PythonParser.RULE_slice);
		let _la: number;
		try {
			this.state = 1557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1543;
					this.expression();
					}
				}

				this.state = 1546;
				this.match(PythonParser.COLON);
				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1547;
					this.expression();
					}
				}

				this.state = 1554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 1550;
					this.match(PythonParser.COLON);
					this.state = 1552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
						{
						this.state = 1551;
						this.expression();
						}
					}

					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1556;
				this.named_expression();
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
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, PythonParser.RULE_atom);
		try {
			this.state = 1581;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1559;
				this.name();
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1560;
				this.match(PythonParser.TRUE);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1561;
				this.match(PythonParser.FALSE);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1562;
				this.match(PythonParser.NONE);
				}
				break;
			case 4:
			case 96:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1563;
				this.strings();
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1564;
				this.match(PythonParser.NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1568;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1565;
					this.tuple();
					}
					break;
				case 2:
					{
					this.state = 1566;
					this.group();
					}
					break;
				case 3:
					{
					this.state = 1567;
					this.genexp();
					}
					break;
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1572;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1570;
					this.list();
					}
					break;
				case 2:
					{
					this.state = 1571;
					this.listcomp();
					}
					break;
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1578;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1574;
					this.dict();
					}
					break;
				case 2:
					{
					this.state = 1575;
					this.set_();
					}
					break;
				case 3:
					{
					this.state = 1576;
					this.dictcomp();
					}
					break;
				case 4:
					{
					this.state = 1577;
					this.setcomp();
					}
					break;
				}
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1580;
				this.match(PythonParser.ELLIPSIS);
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
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, PythonParser.RULE_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1583;
			this.match(PythonParser.LPAR);
			this.state = 1586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
				{
				this.state = 1584;
				this.yield_expr();
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				{
				this.state = 1585;
				this.named_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1588;
			this.match(PythonParser.RPAR);
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
	public lambdef(): LambdefContext {
		let localctx: LambdefContext = new LambdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, PythonParser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1590;
			this.match(PythonParser.LAMBDA);
			this.state = 1592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19 || _la===35 || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
				{
				this.state = 1591;
				this.lambda_params();
				}
			}

			this.state = 1594;
			this.match(PythonParser.COLON);
			this.state = 1595;
			this.expression();
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
	public lambda_params(): Lambda_paramsContext {
		let localctx: Lambda_paramsContext = new Lambda_paramsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, PythonParser.RULE_lambda_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1597;
			this.lambda_parameters();
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
	public lambda_parameters(): Lambda_parametersContext {
		let localctx: Lambda_parametersContext = new Lambda_parametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, PythonParser.RULE_lambda_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1648;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1599;
				this.lambda_slash_no_default();
				this.state = 1603;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1600;
						this.lambda_param_no_default();
						}
						}
					}
					this.state = 1605;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
				}
				this.state = 1609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 1606;
					this.lambda_param_with_default();
					}
					}
					this.state = 1611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 1612;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1615;
				this.lambda_slash_with_default();
				this.state = 1619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 1616;
					this.lambda_param_with_default();
					}
					}
					this.state = 1621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 1622;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1626;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1625;
						this.lambda_param_no_default();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1628;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 1630;
					this.lambda_param_with_default();
					}
					}
					this.state = 1635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 1636;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1639;
					this.lambda_param_with_default();
					}
					}
					this.state = 1642;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
				this.state = 1645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===35) {
					{
					this.state = 1644;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1647;
				this.lambda_star_etc();
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
	public lambda_slash_no_default(): Lambda_slash_no_defaultContext {
		let localctx: Lambda_slash_no_defaultContext = new Lambda_slash_no_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, PythonParser.RULE_lambda_slash_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1650;
				this.lambda_param_no_default();
				}
				}
				this.state = 1653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
			this.state = 1655;
			this.match(PythonParser.SLASH);
			this.state = 1657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1656;
				this.match(PythonParser.COMMA);
				}
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
	public lambda_slash_with_default(): Lambda_slash_with_defaultContext {
		let localctx: Lambda_slash_with_defaultContext = new Lambda_slash_with_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, PythonParser.RULE_lambda_slash_with_default);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1662;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1659;
					this.lambda_param_no_default();
					}
					}
				}
				this.state = 1664;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
			}
			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1665;
				this.lambda_param_with_default();
				}
				}
				this.state = 1668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
			this.state = 1670;
			this.match(PythonParser.SLASH);
			this.state = 1672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1671;
				this.match(PythonParser.COMMA);
				}
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
	public lambda_star_etc(): Lambda_star_etcContext {
		let localctx: Lambda_star_etcContext = new Lambda_star_etcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, PythonParser.RULE_lambda_star_etc);
		let _la: number;
		try {
			this.state = 1696;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1674;
				this.match(PythonParser.STAR);
				this.state = 1675;
				this.lambda_param_no_default();
				this.state = 1679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0)) {
					{
					{
					this.state = 1676;
					this.lambda_param_maybe_default();
					}
					}
					this.state = 1681;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 1682;
					this.lambda_kwds();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1685;
				this.match(PythonParser.STAR);
				this.state = 1686;
				this.match(PythonParser.COMMA);
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1687;
					this.lambda_param_maybe_default();
					}
					}
					this.state = 1690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 31) !== 0));
				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 1692;
					this.lambda_kwds();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1695;
				this.lambda_kwds();
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
	public lambda_kwds(): Lambda_kwdsContext {
		let localctx: Lambda_kwdsContext = new Lambda_kwdsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, PythonParser.RULE_lambda_kwds);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1698;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 1699;
			this.lambda_param_no_default();
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
	public lambda_param_no_default(): Lambda_param_no_defaultContext {
		let localctx: Lambda_param_no_defaultContext = new Lambda_param_no_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, PythonParser.RULE_lambda_param_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1701;
			this.lambda_param();
			this.state = 1703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1702;
				this.match(PythonParser.COMMA);
				}
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
	public lambda_param_with_default(): Lambda_param_with_defaultContext {
		let localctx: Lambda_param_with_defaultContext = new Lambda_param_with_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, PythonParser.RULE_lambda_param_with_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1705;
			this.lambda_param();
			this.state = 1706;
			this.default_assignment();
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1707;
				this.match(PythonParser.COMMA);
				}
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
	public lambda_param_maybe_default(): Lambda_param_maybe_defaultContext {
		let localctx: Lambda_param_maybe_defaultContext = new Lambda_param_maybe_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, PythonParser.RULE_lambda_param_maybe_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1710;
			this.lambda_param();
			this.state = 1712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1711;
				this.default_assignment();
				}
			}

			this.state = 1715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1714;
				this.match(PythonParser.COMMA);
				}
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
	public lambda_param(): Lambda_paramContext {
		let localctx: Lambda_paramContext = new Lambda_paramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, PythonParser.RULE_lambda_param);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1717;
			this.name();
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
	public fstring_middle(): Fstring_middleContext {
		let localctx: Fstring_middleContext = new Fstring_middleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, PythonParser.RULE_fstring_middle);
		try {
			this.state = 1721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1719;
				this.fstring_replacement_field();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1720;
				this.match(PythonParser.FSTRING_MIDDLE);
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
	public fstring_replacement_field(): Fstring_replacement_fieldContext {
		let localctx: Fstring_replacement_fieldContext = new Fstring_replacement_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, PythonParser.RULE_fstring_replacement_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1723;
			this.match(PythonParser.LBRACE);
			this.state = 1724;
			this.annotated_rhs();
			this.state = 1726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1725;
				this.match(PythonParser.EQUAL);
				}
			}

			this.state = 1729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 1728;
				this.fstring_conversion();
				}
			}

			this.state = 1732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 1731;
				this.fstring_full_format_spec();
				}
			}

			this.state = 1734;
			this.match(PythonParser.RBRACE);
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
	public fstring_conversion(): Fstring_conversionContext {
		let localctx: Fstring_conversionContext = new Fstring_conversionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, PythonParser.RULE_fstring_conversion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1736;
			this.match(PythonParser.EXCLAMATION);
			this.state = 1737;
			this.name();
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
	public fstring_full_format_spec(): Fstring_full_format_specContext {
		let localctx: Fstring_full_format_specContext = new Fstring_full_format_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, PythonParser.RULE_fstring_full_format_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1739;
			this.match(PythonParser.COLON);
			this.state = 1743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5 || _la===9) {
				{
				{
				this.state = 1740;
				this.fstring_format_spec();
				}
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public fstring_format_spec(): Fstring_format_specContext {
		let localctx: Fstring_format_specContext = new Fstring_format_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, PythonParser.RULE_fstring_format_spec);
		try {
			this.state = 1748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1746;
				this.match(PythonParser.FSTRING_MIDDLE);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1747;
				this.fstring_replacement_field();
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
	public fstring(): FstringContext {
		let localctx: FstringContext = new FstringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, PythonParser.RULE_fstring);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1750;
			this.match(PythonParser.FSTRING_START);
			this.state = 1754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5 || _la===9) {
				{
				{
				this.state = 1751;
				this.fstring_middle();
				}
				}
				this.state = 1756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1757;
			this.match(PythonParser.FSTRING_END);
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
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, PythonParser.RULE_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1759;
			this.match(PythonParser.STRING);
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
	public strings(): StringsContext {
		let localctx: StringsContext = new StringsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, PythonParser.RULE_strings);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1763;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1763;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 4:
						{
						this.state = 1761;
						this.fstring();
						}
						break;
					case 96:
						{
						this.state = 1762;
						this.string_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1765;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public list(): ListContext {
		let localctx: ListContext = new ListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, PythonParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1767;
			this.match(PythonParser.LSQB);
			this.state = 1769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 1768;
				this.star_named_expressions();
				}
			}

			this.state = 1771;
			this.match(PythonParser.RSQB);
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
	public tuple(): TupleContext {
		let localctx: TupleContext = new TupleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, PythonParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1773;
			this.match(PythonParser.LPAR);
			this.state = 1779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
				{
				this.state = 1774;
				this.star_named_expression();
				this.state = 1775;
				this.match(PythonParser.COMMA);
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 2149589273) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1776;
					this.star_named_expressions();
					}
				}

				}
			}

			this.state = 1781;
			this.match(PythonParser.RPAR);
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
	public set_(): SetContext {
		let localctx: SetContext = new SetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, PythonParser.RULE_set);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1783;
			this.match(PythonParser.LBRACE);
			this.state = 1784;
			this.star_named_expressions();
			this.state = 1785;
			this.match(PythonParser.RBRACE);
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
	public dict(): DictContext {
		let localctx: DictContext = new DictContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, PythonParser.RULE_dict);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1787;
			this.match(PythonParser.LBRACE);
			this.state = 1789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147877776) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1110573057) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 16647169) !== 0)) {
				{
				this.state = 1788;
				this.double_starred_kvpairs();
				}
			}

			this.state = 1791;
			this.match(PythonParser.RBRACE);
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
	public double_starred_kvpairs(): Double_starred_kvpairsContext {
		let localctx: Double_starred_kvpairsContext = new Double_starred_kvpairsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, PythonParser.RULE_double_starred_kvpairs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1793;
			this.double_starred_kvpair();
			this.state = 1798;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1794;
					this.match(PythonParser.COMMA);
					this.state = 1795;
					this.double_starred_kvpair();
					}
					}
				}
				this.state = 1800;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
			}
			this.state = 1802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1801;
				this.match(PythonParser.COMMA);
				}
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
	public double_starred_kvpair(): Double_starred_kvpairContext {
		let localctx: Double_starred_kvpairContext = new Double_starred_kvpairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, PythonParser.RULE_double_starred_kvpair);
		try {
			this.state = 1807;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1804;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1805;
				this.bitwise_or(0);
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1806;
				this.kvpair();
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
	public kvpair(): KvpairContext {
		let localctx: KvpairContext = new KvpairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, PythonParser.RULE_kvpair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1809;
			this.expression();
			this.state = 1810;
			this.match(PythonParser.COLON);
			this.state = 1811;
			this.expression();
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
	public for_if_clauses(): For_if_clausesContext {
		let localctx: For_if_clausesContext = new For_if_clausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, PythonParser.RULE_for_if_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1813;
				this.for_if_clause();
				}
				}
				this.state = 1816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===72 || _la===85);
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
	public for_if_clause(): For_if_clauseContext {
		let localctx: For_if_clauseContext = new For_if_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, PythonParser.RULE_for_if_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===85) {
				{
				this.state = 1818;
				this.match(PythonParser.ASYNC);
				}
			}

			this.state = 1821;
			this.match(PythonParser.FOR);
			this.state = 1822;
			this.star_targets();
			this.state = 1823;
			this.match(PythonParser.IN);
			this.state = 1824;
			this.disjunction();
			this.state = 1829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===87) {
				{
				{
				this.state = 1825;
				this.match(PythonParser.IF);
				this.state = 1826;
				this.disjunction();
				}
				}
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public listcomp(): ListcompContext {
		let localctx: ListcompContext = new ListcompContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, PythonParser.RULE_listcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1832;
			this.match(PythonParser.LSQB);
			this.state = 1833;
			this.named_expression();
			this.state = 1834;
			this.for_if_clauses();
			this.state = 1835;
			this.match(PythonParser.RSQB);
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
	public setcomp(): SetcompContext {
		let localctx: SetcompContext = new SetcompContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, PythonParser.RULE_setcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1837;
			this.match(PythonParser.LBRACE);
			this.state = 1838;
			this.named_expression();
			this.state = 1839;
			this.for_if_clauses();
			this.state = 1840;
			this.match(PythonParser.RBRACE);
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
	public genexp(): GenexpContext {
		let localctx: GenexpContext = new GenexpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, PythonParser.RULE_genexp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1842;
			this.match(PythonParser.LPAR);
			this.state = 1845;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 1843;
				this.assignment_expression();
				}
				break;
			case 2:
				{
				this.state = 1844;
				this.expression();
				}
				break;
			}
			this.state = 1847;
			this.for_if_clauses();
			this.state = 1848;
			this.match(PythonParser.RPAR);
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
	public dictcomp(): DictcompContext {
		let localctx: DictcompContext = new DictcompContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, PythonParser.RULE_dictcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1850;
			this.match(PythonParser.LBRACE);
			this.state = 1851;
			this.kvpair();
			this.state = 1852;
			this.for_if_clauses();
			this.state = 1853;
			this.match(PythonParser.RBRACE);
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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, PythonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1855;
			this.args();
			this.state = 1857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1856;
				this.match(PythonParser.COMMA);
				}
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
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, PythonParser.RULE_args);
		try {
			let _alt: number;
			this.state = 1884;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1864;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 19:
					{
					this.state = 1859;
					this.starred_expression();
					}
					break;
				case 4:
				case 7:
				case 8:
				case 9:
				case 17:
				case 18:
				case 31:
				case 52:
				case 55:
				case 56:
				case 60:
				case 65:
				case 73:
				case 83:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					{
					this.state = 1862;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
					case 1:
						{
						this.state = 1860;
						this.assignment_expression();
						}
						break;
					case 2:
						{
						this.state = 1861;
						this.expression();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1876;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1866;
						this.match(PythonParser.COMMA);
						this.state = 1872;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 19:
							{
							this.state = 1867;
							this.starred_expression();
							}
							break;
						case 4:
						case 7:
						case 8:
						case 9:
						case 17:
						case 18:
						case 31:
						case 52:
						case 55:
						case 56:
						case 60:
						case 65:
						case 73:
						case 83:
						case 90:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
							{
							this.state = 1870;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
							case 1:
								{
								this.state = 1868;
								this.assignment_expression();
								}
								break;
							case 2:
								{
								this.state = 1869;
								this.expression();
								}
								break;
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 1878;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
				}
				this.state = 1881;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1879;
					this.match(PythonParser.COMMA);
					this.state = 1880;
					this.kwargs();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1883;
				this.kwargs();
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
	public kwargs(): KwargsContext {
		let localctx: KwargsContext = new KwargsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, PythonParser.RULE_kwargs);
		try {
			let _alt: number;
			this.state = 1913;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1886;
				this.kwarg_or_starred();
				this.state = 1891;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1887;
						this.match(PythonParser.COMMA);
						this.state = 1888;
						this.kwarg_or_starred();
						}
						}
					}
					this.state = 1893;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
				}
				this.state = 1903;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 1894;
					this.match(PythonParser.COMMA);
					this.state = 1895;
					this.kwarg_or_double_starred();
					this.state = 1900;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1896;
							this.match(PythonParser.COMMA);
							this.state = 1897;
							this.kwarg_or_double_starred();
							}
							}
						}
						this.state = 1902;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1905;
				this.kwarg_or_double_starred();
				this.state = 1910;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1906;
						this.match(PythonParser.COMMA);
						this.state = 1907;
						this.kwarg_or_double_starred();
						}
						}
					}
					this.state = 1912;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
				}
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
	public starred_expression(): Starred_expressionContext {
		let localctx: Starred_expressionContext = new Starred_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, PythonParser.RULE_starred_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1915;
			this.match(PythonParser.STAR);
			this.state = 1916;
			this.expression();
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
	public kwarg_or_starred(): Kwarg_or_starredContext {
		let localctx: Kwarg_or_starredContext = new Kwarg_or_starredContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, PythonParser.RULE_kwarg_or_starred);
		try {
			this.state = 1923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1918;
				this.name();
				this.state = 1919;
				this.match(PythonParser.EQUAL);
				this.state = 1920;
				this.expression();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1922;
				this.starred_expression();
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
	public kwarg_or_double_starred(): Kwarg_or_double_starredContext {
		let localctx: Kwarg_or_double_starredContext = new Kwarg_or_double_starredContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, PythonParser.RULE_kwarg_or_double_starred);
		try {
			this.state = 1931;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1925;
				this.name();
				this.state = 1926;
				this.match(PythonParser.EQUAL);
				this.state = 1927;
				this.expression();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1929;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1930;
				this.expression();
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
	public star_targets(): Star_targetsContext {
		let localctx: Star_targetsContext = new Star_targetsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, PythonParser.RULE_star_targets);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1933;
			this.star_target();
			this.state = 1938;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1934;
					this.match(PythonParser.COMMA);
					this.state = 1935;
					this.star_target();
					}
					}
				}
				this.state = 1940;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
			}
			this.state = 1942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1941;
				this.match(PythonParser.COMMA);
				}
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
	public star_targets_list_seq(): Star_targets_list_seqContext {
		let localctx: Star_targets_list_seqContext = new Star_targets_list_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, PythonParser.RULE_star_targets_list_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1944;
			this.star_target();
			this.state = 1949;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1945;
					this.match(PythonParser.COMMA);
					this.state = 1946;
					this.star_target();
					}
					}
				}
				this.state = 1951;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			}
			this.state = 1953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1952;
				this.match(PythonParser.COMMA);
				}
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
	public star_targets_tuple_seq(): Star_targets_tuple_seqContext {
		let localctx: Star_targets_tuple_seqContext = new Star_targets_tuple_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, PythonParser.RULE_star_targets_tuple_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1955;
			this.star_target();
			this.state = 1966;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				{
				this.state = 1956;
				this.match(PythonParser.COMMA);
				}
				break;
			case 2:
				{
				this.state = 1959;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1957;
						this.match(PythonParser.COMMA);
						this.state = 1958;
						this.star_target();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1961;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1963;
					this.match(PythonParser.COMMA);
					}
				}

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
	public star_target(): Star_targetContext {
		let localctx: Star_targetContext = new Star_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, PythonParser.RULE_star_target);
		try {
			this.state = 1971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1968;
				this.match(PythonParser.STAR);
				{
				this.state = 1969;
				this.star_target();
				}
				}
				break;
			case 4:
			case 7:
			case 8:
			case 9:
			case 52:
			case 55:
			case 60:
			case 65:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1970;
				this.target_with_star_atom();
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
	public target_with_star_atom(): Target_with_star_atomContext {
		let localctx: Target_with_star_atomContext = new Target_with_star_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, PythonParser.RULE_target_with_star_atom);
		try {
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1973;
				this.t_primary(0);
				this.state = 1980;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
					{
					this.state = 1974;
					this.match(PythonParser.DOT);
					this.state = 1975;
					this.name();
					}
					break;
				case 8:
					{
					this.state = 1976;
					this.match(PythonParser.LSQB);
					this.state = 1977;
					this.slices();
					this.state = 1978;
					this.match(PythonParser.RSQB);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1982;
				this.star_atom();
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
	public star_atom(): Star_atomContext {
		let localctx: Star_atomContext = new Star_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, PythonParser.RULE_star_atom);
		let _la: number;
		try {
			this.state = 2000;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1985;
				this.name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1986;
				this.match(PythonParser.LPAR);
				this.state = 1987;
				this.target_with_star_atom();
				this.state = 1988;
				this.match(PythonParser.RPAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1990;
				this.match(PythonParser.LPAR);
				this.state = 1992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 525200) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 8457) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1991;
					this.star_targets_tuple_seq();
					}
				}

				this.state = 1994;
				this.match(PythonParser.RPAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1995;
				this.match(PythonParser.LSQB);
				this.state = 1997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 525200) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 8457) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 1996;
					this.star_targets_list_seq();
					}
				}

				this.state = 1999;
				this.match(PythonParser.RSQB);
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
	public single_target(): Single_targetContext {
		let localctx: Single_targetContext = new Single_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, PythonParser.RULE_single_target);
		try {
			this.state = 2008;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2002;
				this.single_subscript_attribute_target();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2003;
				this.name();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2004;
				this.match(PythonParser.LPAR);
				this.state = 2005;
				this.single_target();
				this.state = 2006;
				this.match(PythonParser.RPAR);
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
	public single_subscript_attribute_target(): Single_subscript_attribute_targetContext {
		let localctx: Single_subscript_attribute_targetContext = new Single_subscript_attribute_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, PythonParser.RULE_single_subscript_attribute_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2010;
			this.t_primary(0);
			this.state = 2017;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				{
				this.state = 2011;
				this.match(PythonParser.DOT);
				this.state = 2012;
				this.name();
				}
				break;
			case 8:
				{
				this.state = 2013;
				this.match(PythonParser.LSQB);
				this.state = 2014;
				this.slices();
				this.state = 2015;
				this.match(PythonParser.RSQB);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public t_primary(): T_primaryContext;
	public t_primary(_p: number): T_primaryContext;
	// @RuleVersion(0)
	public t_primary(_p?: number): T_primaryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: T_primaryContext = new T_primaryContext(this, this._ctx, _parentState);
		let _prevctx: T_primaryContext = localctx;
		let _startState: number = 368;
		this.enterRecursionRule(localctx, 368, PythonParser.RULE_t_primary, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2020;
			this.atom();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2039;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new T_primaryContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_t_primary);
					this.state = 2022;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2035;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 263, this._ctx) ) {
					case 1:
						{
						this.state = 2023;
						this.match(PythonParser.DOT);
						this.state = 2024;
						this.name();
						}
						break;
					case 2:
						{
						this.state = 2025;
						this.match(PythonParser.LSQB);
						this.state = 2026;
						this.slices();
						this.state = 2027;
						this.match(PythonParser.RSQB);
						}
						break;
					case 3:
						{
						this.state = 2029;
						this.genexp();
						}
						break;
					case 4:
						{
						this.state = 2030;
						this.match(PythonParser.LPAR);
						this.state = 2032;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2148402064) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1110573057) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 16647169) !== 0)) {
							{
							this.state = 2031;
							this.arguments();
							}
						}

						this.state = 2034;
						this.match(PythonParser.RPAR);
						}
						break;
					}
					}
					}
				}
				this.state = 2041;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
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
	public del_targets(): Del_targetsContext {
		let localctx: Del_targetsContext = new Del_targetsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, PythonParser.RULE_del_targets);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2042;
			this.del_target();
			this.state = 2047;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2043;
					this.match(PythonParser.COMMA);
					this.state = 2044;
					this.del_target();
					}
					}
				}
				this.state = 2049;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
			}
			this.state = 2051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 2050;
				this.match(PythonParser.COMMA);
				}
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
	public del_target(): Del_targetContext {
		let localctx: Del_targetContext = new Del_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, PythonParser.RULE_del_target);
		try {
			this.state = 2063;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2053;
				this.t_primary(0);
				this.state = 2060;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
					{
					this.state = 2054;
					this.match(PythonParser.DOT);
					this.state = 2055;
					this.name();
					}
					break;
				case 8:
					{
					this.state = 2056;
					this.match(PythonParser.LSQB);
					this.state = 2057;
					this.slices();
					this.state = 2058;
					this.match(PythonParser.RSQB);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2062;
				this.del_t_atom();
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
	public del_t_atom(): Del_t_atomContext {
		let localctx: Del_t_atomContext = new Del_t_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, PythonParser.RULE_del_t_atom);
		let _la: number;
		try {
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2065;
				this.name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2066;
				this.match(PythonParser.LPAR);
				this.state = 2067;
				this.del_target();
				this.state = 2068;
				this.match(PythonParser.RPAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2070;
				this.match(PythonParser.LPAR);
				this.state = 2072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 912) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 8457) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 2071;
					this.del_targets();
					}
				}

				this.state = 2074;
				this.match(PythonParser.RPAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2075;
				this.match(PythonParser.LSQB);
				this.state = 2077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 912) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 8457) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 127) !== 0)) {
					{
					this.state = 2076;
					this.del_targets();
					}
				}

				this.state = 2079;
				this.match(PythonParser.RSQB);
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
	public type_expressions(): Type_expressionsContext {
		let localctx: Type_expressionsContext = new Type_expressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, PythonParser.RULE_type_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 7:
			case 8:
			case 9:
			case 17:
			case 18:
			case 31:
			case 52:
			case 55:
			case 56:
			case 60:
			case 65:
			case 73:
			case 83:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2082;
				this.expression();
				this.state = 2087;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 272, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2083;
						this.match(PythonParser.COMMA);
						this.state = 2084;
						this.expression();
						}
						}
					}
					this.state = 2089;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 272, this._ctx);
				}
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 2090;
					this.match(PythonParser.COMMA);
					this.state = 2100;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 19:
						{
						this.state = 2091;
						this.match(PythonParser.STAR);
						this.state = 2092;
						this.expression();
						this.state = 2096;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===15) {
							{
							this.state = 2093;
							this.match(PythonParser.COMMA);
							this.state = 2094;
							this.match(PythonParser.DOUBLESTAR);
							this.state = 2095;
							this.expression();
							}
						}

						}
						break;
					case 35:
						{
						this.state = 2098;
						this.match(PythonParser.DOUBLESTAR);
						this.state = 2099;
						this.expression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2104;
				this.match(PythonParser.STAR);
				this.state = 2105;
				this.expression();
				this.state = 2109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 2106;
					this.match(PythonParser.COMMA);
					this.state = 2107;
					this.match(PythonParser.DOUBLESTAR);
					this.state = 2108;
					this.expression();
					}
				}

				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2111;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 2112;
				this.expression();
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
	public name_except_underscore(): Name_except_underscoreContext {
		let localctx: Name_except_underscoreContext = new Name_except_underscoreContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, PythonParser.RULE_name_except_underscore);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2115;
			_la = this._input.LA(1);
			if(!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 23) !== 0))) {
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
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, PythonParser.RULE_name);
		try {
			this.state = 2119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2117;
				this.match(PythonParser.NAME_OR_WILDCARD);
				}
				break;
			case 90:
			case 91:
			case 92:
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2118;
				this.name_except_underscore();
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 24:
			return this.dotted_name_sempred(localctx as Dotted_nameContext, predIndex);
		case 124:
			return this.bitwise_or_sempred(localctx as Bitwise_orContext, predIndex);
		case 125:
			return this.bitwise_xor_sempred(localctx as Bitwise_xorContext, predIndex);
		case 126:
			return this.bitwise_and_sempred(localctx as Bitwise_andContext, predIndex);
		case 127:
			return this.shift_expr_sempred(localctx as Shift_exprContext, predIndex);
		case 128:
			return this.sum_sempred(localctx as SumContext, predIndex);
		case 129:
			return this.term_sempred(localctx as TermContext, predIndex);
		case 133:
			return this.primary_sempred(localctx as PrimaryContext, predIndex);
		case 184:
			return this.t_primary_sempred(localctx as T_primaryContext, predIndex);
		}
		return true;
	}
	private dotted_name_sempred(localctx: Dotted_nameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private bitwise_or_sempred(localctx: Bitwise_orContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private bitwise_xor_sempred(localctx: Bitwise_xorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private bitwise_and_sempred(localctx: Bitwise_andContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private shift_expr_sempred(localctx: Shift_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private sum_sempred(localctx: SumContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private term_sempred(localctx: TermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primary_sempred(localctx: PrimaryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private t_primary_sempred(localctx: T_primaryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,101,2122,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,1,0,3,0,384,8,0,1,0,1,0,1,1,4,
	1,389,8,1,11,1,12,1,390,1,2,1,2,3,2,395,8,2,1,3,1,3,1,3,5,3,400,8,3,10,
	3,12,3,403,9,3,1,3,3,3,406,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,3,4,424,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
	434,8,5,1,6,1,6,1,6,1,6,1,6,3,6,441,8,6,1,6,1,6,1,6,1,6,1,6,3,6,448,8,6,
	1,6,1,6,1,6,1,6,3,6,454,8,6,1,6,1,6,1,6,4,6,459,8,6,11,6,12,6,460,1,6,1,
	6,3,6,465,8,6,1,6,1,6,1,6,1,6,3,6,471,8,6,3,6,473,8,6,1,7,1,7,3,7,477,8,
	7,1,8,1,8,1,9,1,9,3,9,483,8,9,1,10,1,10,1,10,1,10,3,10,489,8,10,3,10,491,
	8,10,1,11,1,11,1,11,1,11,5,11,497,8,11,10,11,12,11,500,9,11,1,12,1,12,1,
	12,1,12,5,12,506,8,12,10,12,12,12,509,9,12,1,13,1,13,1,13,1,14,1,14,1,15,
	1,15,1,15,1,15,3,15,520,8,15,1,16,1,16,3,16,524,8,16,1,17,1,17,1,17,1,18,
	1,18,5,18,531,8,18,10,18,12,18,534,9,18,1,18,1,18,1,18,1,18,1,18,1,18,4,
	18,542,8,18,11,18,12,18,543,1,18,1,18,3,18,548,8,18,1,19,1,19,1,19,3,19,
	553,8,19,1,19,1,19,1,19,1,19,3,19,559,8,19,1,20,1,20,1,20,5,20,564,8,20,
	10,20,12,20,567,9,20,1,21,1,21,1,21,3,21,572,8,21,1,22,1,22,1,22,5,22,577,
	8,22,10,22,12,22,580,9,22,1,23,1,23,1,23,3,23,585,8,23,1,24,1,24,1,24,1,
	24,1,24,1,24,5,24,593,8,24,10,24,12,24,596,9,24,1,25,1,25,1,25,1,25,1,25,
	1,25,3,25,604,8,25,1,26,1,26,1,26,1,26,4,26,610,8,26,11,26,12,26,611,1,
	27,1,27,1,27,1,27,3,27,618,8,27,1,28,1,28,1,28,3,28,623,8,28,1,28,1,28,
	3,28,627,8,28,1,28,3,28,630,8,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,
	639,8,29,1,30,1,30,1,30,3,30,644,8,30,1,30,1,30,3,30,648,8,30,1,30,1,30,
	1,30,3,30,653,8,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,662,8,30,1,30,
	1,30,3,30,666,8,30,1,30,1,30,1,30,3,30,671,8,30,1,30,1,30,1,30,3,30,676,
	8,30,1,31,1,31,1,32,1,32,5,32,682,8,32,10,32,12,32,685,9,32,1,32,5,32,688,
	8,32,10,32,12,32,691,9,32,1,32,3,32,694,8,32,1,32,1,32,5,32,698,8,32,10,
	32,12,32,701,9,32,1,32,3,32,704,8,32,1,32,4,32,707,8,32,11,32,12,32,708,
	1,32,5,32,712,8,32,10,32,12,32,715,9,32,1,32,3,32,718,8,32,1,32,4,32,721,
	8,32,11,32,12,32,722,1,32,3,32,726,8,32,1,32,3,32,729,8,32,1,33,4,33,732,
	8,33,11,33,12,33,733,1,33,1,33,3,33,738,8,33,1,34,5,34,741,8,34,10,34,12,
	34,744,9,34,1,34,4,34,747,8,34,11,34,12,34,748,1,34,1,34,3,34,753,8,34,
	1,35,1,35,1,35,5,35,758,8,35,10,35,12,35,761,9,35,1,35,3,35,764,8,35,1,
	35,1,35,1,35,5,35,769,8,35,10,35,12,35,772,9,35,1,35,3,35,775,8,35,1,35,
	1,35,1,35,4,35,780,8,35,11,35,12,35,781,1,35,3,35,785,8,35,1,35,3,35,788,
	8,35,1,36,1,36,1,36,1,37,1,37,3,37,795,8,37,1,38,1,38,3,38,799,8,38,1,39,
	1,39,1,39,3,39,804,8,39,1,40,1,40,3,40,808,8,40,1,40,3,40,811,8,40,1,41,
	1,41,3,41,815,8,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,
	45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,3,46,835,8,46,3,46,837,8,46,1,47,
	1,47,1,47,1,47,1,47,1,47,3,47,845,8,47,3,47,847,8,47,1,48,1,48,1,48,1,48,
	1,49,1,49,1,49,1,49,1,49,3,49,858,8,49,1,50,3,50,861,8,50,1,50,1,50,1,50,
	1,50,1,50,1,50,1,50,3,50,870,8,50,1,51,1,51,1,51,1,51,1,51,5,51,877,8,51,
	10,51,12,51,880,9,51,1,51,3,51,883,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,51,1,51,5,51,895,8,51,10,51,12,51,898,9,51,1,51,3,51,901,8,51,
	1,51,1,51,1,51,1,51,1,51,3,51,908,8,51,1,51,1,51,1,51,1,51,5,51,914,8,51,
	10,51,12,51,917,9,51,1,51,1,51,1,51,3,51,922,8,51,1,52,1,52,1,52,3,52,927,
	8,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,4,53,938,8,53,11,53,12,
	53,939,1,53,3,53,943,8,53,1,53,3,53,946,8,53,1,53,1,53,1,53,1,53,4,53,952,
	8,53,11,53,12,53,953,1,53,3,53,957,8,53,1,53,3,53,960,8,53,3,53,962,8,53,
	1,54,1,54,1,54,1,54,3,54,968,8,54,3,54,970,8,54,1,54,1,54,1,54,1,55,1,55,
	1,55,1,55,1,55,3,55,980,8,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,57,1,
	57,1,57,1,57,1,57,1,57,4,57,995,8,57,11,57,12,57,996,1,57,1,57,1,58,1,58,
	1,58,3,58,1004,8,58,1,58,3,58,1007,8,58,1,59,1,59,1,59,3,59,1012,8,59,1,
	59,1,59,1,59,1,60,1,60,1,60,1,61,1,61,3,61,1022,8,61,1,62,1,62,3,62,1026,
	8,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,5,64,1035,8,64,10,64,12,64,1038,
	9,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1048,8,65,1,66,1,66,1,
	66,1,66,1,66,1,66,3,66,1056,8,66,1,67,1,67,1,67,1,67,1,67,1,67,3,67,1064,
	8,67,1,68,1,68,1,68,1,68,1,69,3,69,1071,8,69,1,69,1,69,1,70,3,70,1076,8,
	70,1,70,1,70,1,71,1,71,1,72,1,72,1,73,1,73,1,74,1,74,1,75,1,75,1,76,1,76,
	1,77,1,77,1,77,4,77,1095,8,77,11,77,12,77,1096,1,78,1,78,1,78,5,78,1102,
	8,78,10,78,12,78,1105,9,78,1,79,1,79,1,79,1,79,1,80,1,80,3,80,1113,8,80,
	1,80,1,80,1,80,3,80,1118,8,80,1,80,3,80,1121,8,80,1,81,1,81,1,81,3,81,1126,
	8,81,1,82,1,82,1,82,5,82,1131,8,82,10,82,12,82,1134,9,82,1,82,3,82,1137,
	8,82,1,83,1,83,3,83,1141,8,83,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,3,
	85,1151,8,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1159,8,85,1,85,3,85,1162,
	8,85,1,85,1,85,3,85,1166,8,85,1,86,1,86,1,86,5,86,1171,8,86,10,86,12,86,
	1174,9,86,1,87,1,87,3,87,1178,8,87,1,87,1,87,1,87,1,88,1,88,1,88,1,89,1,
	89,1,89,1,89,1,89,3,89,1191,8,89,1,89,3,89,1194,8,89,1,89,3,89,1197,8,89,
	3,89,1199,8,89,1,89,1,89,1,90,1,90,1,90,5,90,1206,8,90,10,90,12,90,1209,
	9,90,1,91,1,91,1,91,5,91,1214,8,91,10,91,12,91,1217,9,91,1,92,1,92,1,92,
	1,92,1,93,1,93,1,93,3,93,1226,8,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,
	95,1,95,1,95,5,95,1238,8,95,10,95,12,95,1241,9,95,1,95,3,95,1244,8,95,1,
	96,1,96,3,96,1248,8,96,1,96,3,96,1251,8,96,1,96,1,96,1,96,3,96,1256,8,96,
	1,96,1,96,1,96,3,96,1261,8,96,3,96,1263,8,96,1,97,1,97,1,97,1,98,1,98,1,
	98,1,99,1,99,1,99,1,100,1,100,1,100,5,100,1277,8,100,10,100,12,100,1280,
	9,100,1,100,3,100,1283,8,100,1,101,1,101,1,101,1,101,1,101,1,101,3,101,
	1291,8,101,1,101,3,101,1294,8,101,1,102,1,102,1,102,1,102,3,102,1300,8,
	102,3,102,1302,8,102,1,103,1,103,1,103,5,103,1307,8,103,10,103,12,103,1310,
	9,103,1,103,3,103,1313,8,103,1,104,1,104,1,104,3,104,1318,8,104,1,105,1,
	105,1,105,5,105,1323,8,105,10,105,12,105,1326,9,105,1,105,3,105,1329,8,
	105,1,106,1,106,1,106,3,106,1334,8,106,1,107,1,107,1,107,1,107,1,108,1,
	108,3,108,1342,8,108,1,109,1,109,1,109,5,109,1347,8,109,10,109,12,109,1350,
	9,109,1,110,1,110,1,110,5,110,1355,8,110,10,110,12,110,1358,9,110,1,111,
	1,111,1,111,3,111,1363,8,111,1,112,1,112,5,112,1367,8,112,10,112,12,112,
	1370,9,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,
	3,113,1382,8,113,1,114,1,114,1,114,1,115,1,115,1,115,1,116,1,116,1,116,
	1,117,1,117,1,117,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,1,120,
	1,120,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,124,
	1,124,1,124,1,124,1,124,1,124,5,124,1422,8,124,10,124,12,124,1425,9,124,
	1,125,1,125,1,125,1,125,1,125,1,125,5,125,1433,8,125,10,125,12,125,1436,
	9,125,1,126,1,126,1,126,1,126,1,126,1,126,5,126,1444,8,126,10,126,12,126,
	1447,9,126,1,127,1,127,1,127,1,127,1,127,1,127,5,127,1455,8,127,10,127,
	12,127,1458,9,127,1,128,1,128,1,128,1,128,1,128,1,128,5,128,1466,8,128,
	10,128,12,128,1469,9,128,1,129,1,129,1,129,1,129,1,129,1,129,5,129,1477,
	8,129,10,129,12,129,1480,9,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
	3,130,1489,8,130,1,131,1,131,1,131,3,131,1494,8,131,1,132,1,132,1,132,3,
	132,1499,8,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,
	133,1510,8,133,1,133,1,133,1,133,1,133,1,133,3,133,1517,8,133,5,133,1519,
	8,133,10,133,12,133,1522,9,133,1,134,1,134,1,134,3,134,1527,8,134,1,134,
	1,134,1,134,3,134,1532,8,134,5,134,1534,8,134,10,134,12,134,1537,9,134,
	1,134,3,134,1540,8,134,3,134,1542,8,134,1,135,3,135,1545,8,135,1,135,1,
	135,3,135,1549,8,135,1,135,1,135,3,135,1553,8,135,3,135,1555,8,135,1,135,
	3,135,1558,8,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
	3,136,1569,8,136,1,136,1,136,3,136,1573,8,136,1,136,1,136,1,136,1,136,3,
	136,1579,8,136,1,136,3,136,1582,8,136,1,137,1,137,1,137,3,137,1587,8,137,
	1,137,1,137,1,138,1,138,3,138,1593,8,138,1,138,1,138,1,138,1,139,1,139,
	1,140,1,140,5,140,1602,8,140,10,140,12,140,1605,9,140,1,140,5,140,1608,
	8,140,10,140,12,140,1611,9,140,1,140,3,140,1614,8,140,1,140,1,140,5,140,
	1618,8,140,10,140,12,140,1621,9,140,1,140,3,140,1624,8,140,1,140,4,140,
	1627,8,140,11,140,12,140,1628,1,140,5,140,1632,8,140,10,140,12,140,1635,
	9,140,1,140,3,140,1638,8,140,1,140,4,140,1641,8,140,11,140,12,140,1642,
	1,140,3,140,1646,8,140,1,140,3,140,1649,8,140,1,141,4,141,1652,8,141,11,
	141,12,141,1653,1,141,1,141,3,141,1658,8,141,1,142,5,142,1661,8,142,10,
	142,12,142,1664,9,142,1,142,4,142,1667,8,142,11,142,12,142,1668,1,142,1,
	142,3,142,1673,8,142,1,143,1,143,1,143,5,143,1678,8,143,10,143,12,143,1681,
	9,143,1,143,3,143,1684,8,143,1,143,1,143,1,143,4,143,1689,8,143,11,143,
	12,143,1690,1,143,3,143,1694,8,143,1,143,3,143,1697,8,143,1,144,1,144,1,
	144,1,145,1,145,3,145,1704,8,145,1,146,1,146,1,146,3,146,1709,8,146,1,147,
	1,147,3,147,1713,8,147,1,147,3,147,1716,8,147,1,148,1,148,1,149,1,149,3,
	149,1722,8,149,1,150,1,150,1,150,3,150,1727,8,150,1,150,3,150,1730,8,150,
	1,150,3,150,1733,8,150,1,150,1,150,1,151,1,151,1,151,1,152,1,152,5,152,
	1742,8,152,10,152,12,152,1745,9,152,1,153,1,153,3,153,1749,8,153,1,154,
	1,154,5,154,1753,8,154,10,154,12,154,1756,9,154,1,154,1,154,1,155,1,155,
	1,156,1,156,4,156,1764,8,156,11,156,12,156,1765,1,157,1,157,3,157,1770,
	8,157,1,157,1,157,1,158,1,158,1,158,1,158,3,158,1778,8,158,3,158,1780,8,
	158,1,158,1,158,1,159,1,159,1,159,1,159,1,160,1,160,3,160,1790,8,160,1,
	160,1,160,1,161,1,161,1,161,5,161,1797,8,161,10,161,12,161,1800,9,161,1,
	161,3,161,1803,8,161,1,162,1,162,1,162,3,162,1808,8,162,1,163,1,163,1,163,
	1,163,1,164,4,164,1815,8,164,11,164,12,164,1816,1,165,3,165,1820,8,165,
	1,165,1,165,1,165,1,165,1,165,1,165,5,165,1828,8,165,10,165,12,165,1831,
	9,165,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,168,
	1,168,1,168,3,168,1846,8,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,
	1,169,1,170,1,170,3,170,1858,8,170,1,171,1,171,1,171,3,171,1863,8,171,3,
	171,1865,8,171,1,171,1,171,1,171,1,171,3,171,1871,8,171,3,171,1873,8,171,
	5,171,1875,8,171,10,171,12,171,1878,9,171,1,171,1,171,3,171,1882,8,171,
	1,171,3,171,1885,8,171,1,172,1,172,1,172,5,172,1890,8,172,10,172,12,172,
	1893,9,172,1,172,1,172,1,172,1,172,5,172,1899,8,172,10,172,12,172,1902,
	9,172,3,172,1904,8,172,1,172,1,172,1,172,5,172,1909,8,172,10,172,12,172,
	1912,9,172,3,172,1914,8,172,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,
	174,3,174,1924,8,174,1,175,1,175,1,175,1,175,1,175,1,175,3,175,1932,8,175,
	1,176,1,176,1,176,5,176,1937,8,176,10,176,12,176,1940,9,176,1,176,3,176,
	1943,8,176,1,177,1,177,1,177,5,177,1948,8,177,10,177,12,177,1951,9,177,
	1,177,3,177,1954,8,177,1,178,1,178,1,178,1,178,4,178,1960,8,178,11,178,
	12,178,1961,1,178,3,178,1965,8,178,3,178,1967,8,178,1,179,1,179,1,179,3,
	179,1972,8,179,1,180,1,180,1,180,1,180,1,180,1,180,1,180,3,180,1981,8,180,
	1,180,3,180,1984,8,180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,3,181,
	1993,8,181,1,181,1,181,1,181,3,181,1998,8,181,1,181,3,181,2001,8,181,1,
	182,1,182,1,182,1,182,1,182,1,182,3,182,2009,8,182,1,183,1,183,1,183,1,
	183,1,183,1,183,1,183,3,183,2018,8,183,1,184,1,184,1,184,1,184,1,184,1,
	184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,3,184,2033,8,184,1,184,3,
	184,2036,8,184,5,184,2038,8,184,10,184,12,184,2041,9,184,1,185,1,185,1,
	185,5,185,2046,8,185,10,185,12,185,2049,9,185,1,185,3,185,2052,8,185,1,
	186,1,186,1,186,1,186,1,186,1,186,1,186,3,186,2061,8,186,1,186,3,186,2064,
	8,186,1,187,1,187,1,187,1,187,1,187,1,187,1,187,3,187,2073,8,187,1,187,
	1,187,1,187,3,187,2078,8,187,1,187,3,187,2081,8,187,1,188,1,188,1,188,5,
	188,2086,8,188,10,188,12,188,2089,9,188,1,188,1,188,1,188,1,188,1,188,1,
	188,3,188,2097,8,188,1,188,1,188,3,188,2101,8,188,3,188,2103,8,188,1,188,
	1,188,1,188,1,188,1,188,3,188,2110,8,188,1,188,1,188,3,188,2114,8,188,1,
	189,1,189,1,190,1,190,3,190,2120,8,190,1,190,0,9,48,248,250,252,254,256,
	258,266,368,191,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,
	164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,
	200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
	236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,
	272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,
	308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,
	344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,
	380,0,6,3,0,36,46,48,48,50,50,2,0,13,13,52,52,1,0,17,18,1,0,33,34,4,0,19,
	20,26,26,47,47,49,49,2,0,90,92,94,94,2288,0,383,1,0,0,0,2,388,1,0,0,0,4,
	394,1,0,0,0,6,396,1,0,0,0,8,423,1,0,0,0,10,433,1,0,0,0,12,472,1,0,0,0,14,
	476,1,0,0,0,16,478,1,0,0,0,18,480,1,0,0,0,20,484,1,0,0,0,22,492,1,0,0,0,
	24,501,1,0,0,0,26,510,1,0,0,0,28,513,1,0,0,0,30,515,1,0,0,0,32,523,1,0,
	0,0,34,525,1,0,0,0,36,547,1,0,0,0,38,558,1,0,0,0,40,560,1,0,0,0,42,568,
	1,0,0,0,44,573,1,0,0,0,46,581,1,0,0,0,48,586,1,0,0,0,50,603,1,0,0,0,52,
	609,1,0,0,0,54,617,1,0,0,0,56,619,1,0,0,0,58,638,1,0,0,0,60,675,1,0,0,0,
	62,677,1,0,0,0,64,728,1,0,0,0,66,731,1,0,0,0,68,742,1,0,0,0,70,787,1,0,
	0,0,72,789,1,0,0,0,74,792,1,0,0,0,76,796,1,0,0,0,78,800,1,0,0,0,80,805,
	1,0,0,0,82,812,1,0,0,0,84,816,1,0,0,0,86,819,1,0,0,0,88,822,1,0,0,0,90,
	825,1,0,0,0,92,828,1,0,0,0,94,838,1,0,0,0,96,848,1,0,0,0,98,852,1,0,0,0,
	100,860,1,0,0,0,102,921,1,0,0,0,104,923,1,0,0,0,106,961,1,0,0,0,108,963,
	1,0,0,0,110,974,1,0,0,0,112,984,1,0,0,0,114,988,1,0,0,0,116,1006,1,0,0,
	0,118,1008,1,0,0,0,120,1016,1,0,0,0,122,1021,1,0,0,0,124,1025,1,0,0,0,126,
	1027,1,0,0,0,128,1031,1,0,0,0,130,1047,1,0,0,0,132,1055,1,0,0,0,134,1063,
	1,0,0,0,136,1065,1,0,0,0,138,1070,1,0,0,0,140,1075,1,0,0,0,142,1079,1,0,
	0,0,144,1081,1,0,0,0,146,1083,1,0,0,0,148,1085,1,0,0,0,150,1087,1,0,0,0,
	152,1089,1,0,0,0,154,1091,1,0,0,0,156,1098,1,0,0,0,158,1106,1,0,0,0,160,
	1120,1,0,0,0,162,1122,1,0,0,0,164,1127,1,0,0,0,166,1140,1,0,0,0,168,1142,
	1,0,0,0,170,1165,1,0,0,0,172,1167,1,0,0,0,174,1177,1,0,0,0,176,1182,1,0,
	0,0,178,1185,1,0,0,0,180,1202,1,0,0,0,182,1210,1,0,0,0,184,1218,1,0,0,0,
	186,1222,1,0,0,0,188,1230,1,0,0,0,190,1234,1,0,0,0,192,1262,1,0,0,0,194,
	1264,1,0,0,0,196,1267,1,0,0,0,198,1270,1,0,0,0,200,1273,1,0,0,0,202,1293,
	1,0,0,0,204,1295,1,0,0,0,206,1303,1,0,0,0,208,1317,1,0,0,0,210,1319,1,0,
	0,0,212,1333,1,0,0,0,214,1335,1,0,0,0,216,1341,1,0,0,0,218,1343,1,0,0,0,
	220,1351,1,0,0,0,222,1362,1,0,0,0,224,1364,1,0,0,0,226,1381,1,0,0,0,228,
	1383,1,0,0,0,230,1386,1,0,0,0,232,1389,1,0,0,0,234,1392,1,0,0,0,236,1395,
	1,0,0,0,238,1398,1,0,0,0,240,1401,1,0,0,0,242,1405,1,0,0,0,244,1408,1,0,
	0,0,246,1412,1,0,0,0,248,1415,1,0,0,0,250,1426,1,0,0,0,252,1437,1,0,0,0,
	254,1448,1,0,0,0,256,1459,1,0,0,0,258,1470,1,0,0,0,260,1488,1,0,0,0,262,
	1490,1,0,0,0,264,1498,1,0,0,0,266,1500,1,0,0,0,268,1541,1,0,0,0,270,1557,
	1,0,0,0,272,1581,1,0,0,0,274,1583,1,0,0,0,276,1590,1,0,0,0,278,1597,1,0,
	0,0,280,1648,1,0,0,0,282,1651,1,0,0,0,284,1662,1,0,0,0,286,1696,1,0,0,0,
	288,1698,1,0,0,0,290,1701,1,0,0,0,292,1705,1,0,0,0,294,1710,1,0,0,0,296,
	1717,1,0,0,0,298,1721,1,0,0,0,300,1723,1,0,0,0,302,1736,1,0,0,0,304,1739,
	1,0,0,0,306,1748,1,0,0,0,308,1750,1,0,0,0,310,1759,1,0,0,0,312,1763,1,0,
	0,0,314,1767,1,0,0,0,316,1773,1,0,0,0,318,1783,1,0,0,0,320,1787,1,0,0,0,
	322,1793,1,0,0,0,324,1807,1,0,0,0,326,1809,1,0,0,0,328,1814,1,0,0,0,330,
	1819,1,0,0,0,332,1832,1,0,0,0,334,1837,1,0,0,0,336,1842,1,0,0,0,338,1850,
	1,0,0,0,340,1855,1,0,0,0,342,1884,1,0,0,0,344,1913,1,0,0,0,346,1915,1,0,
	0,0,348,1923,1,0,0,0,350,1931,1,0,0,0,352,1933,1,0,0,0,354,1944,1,0,0,0,
	356,1955,1,0,0,0,358,1971,1,0,0,0,360,1983,1,0,0,0,362,2000,1,0,0,0,364,
	2008,1,0,0,0,366,2010,1,0,0,0,368,2019,1,0,0,0,370,2042,1,0,0,0,372,2063,
	1,0,0,0,374,2080,1,0,0,0,376,2113,1,0,0,0,378,2115,1,0,0,0,380,2119,1,0,
	0,0,382,384,3,2,1,0,383,382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,
	386,5,0,0,1,386,1,1,0,0,0,387,389,3,4,2,0,388,387,1,0,0,0,389,390,1,0,0,
	0,390,388,1,0,0,0,390,391,1,0,0,0,391,3,1,0,0,0,392,395,3,10,5,0,393,395,
	3,6,3,0,394,392,1,0,0,0,394,393,1,0,0,0,395,5,1,0,0,0,396,401,3,8,4,0,397,
	398,5,16,0,0,398,400,3,8,4,0,399,397,1,0,0,0,400,403,1,0,0,0,401,399,1,
	0,0,0,401,402,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,404,406,5,16,0,0,
	405,404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,5,97,0,0,408,7,
	1,0,0,0,409,424,3,12,6,0,410,424,3,186,93,0,411,424,3,206,103,0,412,424,
	3,18,9,0,413,424,3,32,16,0,414,424,3,20,10,0,415,424,5,59,0,0,416,424,3,
	26,13,0,417,424,3,28,14,0,418,424,3,30,15,0,419,424,5,61,0,0,420,424,5,
	71,0,0,421,424,3,22,11,0,422,424,3,24,12,0,423,409,1,0,0,0,423,410,1,0,
	0,0,423,411,1,0,0,0,423,412,1,0,0,0,423,413,1,0,0,0,423,414,1,0,0,0,423,
	415,1,0,0,0,423,416,1,0,0,0,423,417,1,0,0,0,423,418,1,0,0,0,423,419,1,0,
	0,0,423,420,1,0,0,0,423,421,1,0,0,0,423,422,1,0,0,0,424,9,1,0,0,0,425,434,
	3,58,29,0,426,434,3,92,46,0,427,434,3,54,27,0,428,434,3,102,51,0,429,434,
	3,100,50,0,430,434,3,106,53,0,431,434,3,98,49,0,432,434,3,114,57,0,433,
	425,1,0,0,0,433,426,1,0,0,0,433,427,1,0,0,0,433,428,1,0,0,0,433,429,1,0,
	0,0,433,430,1,0,0,0,433,431,1,0,0,0,433,432,1,0,0,0,434,11,1,0,0,0,435,
	436,3,380,190,0,436,437,5,14,0,0,437,440,3,202,101,0,438,439,5,25,0,0,439,
	441,3,14,7,0,440,438,1,0,0,0,440,441,1,0,0,0,441,473,1,0,0,0,442,443,5,
	7,0,0,443,444,3,364,182,0,444,445,5,10,0,0,445,448,1,0,0,0,446,448,3,366,
	183,0,447,442,1,0,0,0,447,446,1,0,0,0,448,449,1,0,0,0,449,450,5,14,0,0,
	450,453,3,202,101,0,451,452,5,25,0,0,452,454,3,14,7,0,453,451,1,0,0,0,453,
	454,1,0,0,0,454,473,1,0,0,0,455,456,3,352,176,0,456,457,5,25,0,0,457,459,
	1,0,0,0,458,455,1,0,0,0,459,460,1,0,0,0,460,458,1,0,0,0,460,461,1,0,0,0,
	461,464,1,0,0,0,462,465,3,204,102,0,463,465,3,206,103,0,464,462,1,0,0,0,
	464,463,1,0,0,0,465,473,1,0,0,0,466,467,3,364,182,0,467,470,3,16,8,0,468,
	471,3,204,102,0,469,471,3,206,103,0,470,468,1,0,0,0,470,469,1,0,0,0,471,
	473,1,0,0,0,472,435,1,0,0,0,472,447,1,0,0,0,472,458,1,0,0,0,472,466,1,0,
	0,0,473,13,1,0,0,0,474,477,3,204,102,0,475,477,3,206,103,0,476,474,1,0,
	0,0,476,475,1,0,0,0,477,15,1,0,0,0,478,479,7,0,0,0,479,17,1,0,0,0,480,482,
	5,69,0,0,481,483,3,206,103,0,482,481,1,0,0,0,482,483,1,0,0,0,483,19,1,0,
	0,0,484,490,5,64,0,0,485,488,3,202,101,0,486,487,5,77,0,0,487,489,3,202,
	101,0,488,486,1,0,0,0,488,489,1,0,0,0,489,491,1,0,0,0,490,485,1,0,0,0,490,
	491,1,0,0,0,491,21,1,0,0,0,492,493,5,82,0,0,493,498,3,380,190,0,494,495,
	5,15,0,0,495,497,3,380,190,0,496,494,1,0,0,0,497,500,1,0,0,0,498,496,1,
	0,0,0,498,499,1,0,0,0,499,23,1,0,0,0,500,498,1,0,0,0,501,502,5,78,0,0,502,
	507,3,380,190,0,503,504,5,15,0,0,504,506,3,380,190,0,505,503,1,0,0,0,506,
	509,1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,25,1,0,0,0,509,507,1,0,
	0,0,510,511,5,81,0,0,511,512,3,370,185,0,512,27,1,0,0,0,513,514,3,204,102,
	0,514,29,1,0,0,0,515,516,5,80,0,0,516,519,3,202,101,0,517,518,5,15,0,0,
	518,520,3,202,101,0,519,517,1,0,0,0,519,520,1,0,0,0,520,31,1,0,0,0,521,
	524,3,34,17,0,522,524,3,36,18,0,523,521,1,0,0,0,523,522,1,0,0,0,524,33,
	1,0,0,0,525,526,5,58,0,0,526,527,3,44,22,0,527,35,1,0,0,0,528,532,5,77,
	0,0,529,531,7,1,0,0,530,529,1,0,0,0,531,534,1,0,0,0,532,530,1,0,0,0,532,
	533,1,0,0,0,533,535,1,0,0,0,534,532,1,0,0,0,535,536,3,48,24,0,536,537,5,
	58,0,0,537,538,3,38,19,0,538,548,1,0,0,0,539,541,5,77,0,0,540,542,7,1,0,
	0,541,540,1,0,0,0,542,543,1,0,0,0,543,541,1,0,0,0,543,544,1,0,0,0,544,545,
	1,0,0,0,545,546,5,58,0,0,546,548,3,38,19,0,547,528,1,0,0,0,547,539,1,0,
	0,0,548,37,1,0,0,0,549,550,5,7,0,0,550,552,3,40,20,0,551,553,5,15,0,0,552,
	551,1,0,0,0,552,553,1,0,0,0,553,554,1,0,0,0,554,555,5,10,0,0,555,559,1,
	0,0,0,556,559,3,40,20,0,557,559,5,19,0,0,558,549,1,0,0,0,558,556,1,0,0,
	0,558,557,1,0,0,0,559,39,1,0,0,0,560,565,3,42,21,0,561,562,5,15,0,0,562,
	564,3,42,21,0,563,561,1,0,0,0,564,567,1,0,0,0,565,563,1,0,0,0,565,566,1,
	0,0,0,566,41,1,0,0,0,567,565,1,0,0,0,568,571,3,380,190,0,569,570,5,75,0,
	0,570,572,3,380,190,0,571,569,1,0,0,0,571,572,1,0,0,0,572,43,1,0,0,0,573,
	578,3,46,23,0,574,575,5,15,0,0,575,577,3,46,23,0,576,574,1,0,0,0,577,580,
	1,0,0,0,578,576,1,0,0,0,578,579,1,0,0,0,579,45,1,0,0,0,580,578,1,0,0,0,
	581,584,3,48,24,0,582,583,5,75,0,0,583,585,3,380,190,0,584,582,1,0,0,0,
	584,585,1,0,0,0,585,47,1,0,0,0,586,587,6,24,-1,0,587,588,3,380,190,0,588,
	594,1,0,0,0,589,590,10,2,0,0,590,591,5,13,0,0,591,593,3,380,190,0,592,589,
	1,0,0,0,593,596,1,0,0,0,594,592,1,0,0,0,594,595,1,0,0,0,595,49,1,0,0,0,
	596,594,1,0,0,0,597,598,5,97,0,0,598,599,5,2,0,0,599,600,3,2,1,0,600,601,
	5,3,0,0,601,604,1,0,0,0,602,604,3,6,3,0,603,597,1,0,0,0,603,602,1,0,0,0,
	604,51,1,0,0,0,605,606,5,49,0,0,606,607,3,216,108,0,607,608,5,97,0,0,608,
	610,1,0,0,0,609,605,1,0,0,0,610,611,1,0,0,0,611,609,1,0,0,0,611,612,1,0,
	0,0,612,53,1,0,0,0,613,614,3,52,26,0,614,615,3,56,28,0,615,618,1,0,0,0,
	616,618,3,56,28,0,617,613,1,0,0,0,617,616,1,0,0,0,618,55,1,0,0,0,619,620,
	5,66,0,0,620,622,3,380,190,0,621,623,3,188,94,0,622,621,1,0,0,0,622,623,
	1,0,0,0,623,629,1,0,0,0,624,626,5,7,0,0,625,627,3,340,170,0,626,625,1,0,
	0,0,626,627,1,0,0,0,627,628,1,0,0,0,628,630,5,10,0,0,629,624,1,0,0,0,629,
	630,1,0,0,0,630,631,1,0,0,0,631,632,5,14,0,0,632,633,3,50,25,0,633,57,1,
	0,0,0,634,635,3,52,26,0,635,636,3,60,30,0,636,639,1,0,0,0,637,639,3,60,
	30,0,638,634,1,0,0,0,638,637,1,0,0,0,639,59,1,0,0,0,640,641,5,76,0,0,641,
	643,3,380,190,0,642,644,3,188,94,0,643,642,1,0,0,0,643,644,1,0,0,0,644,
	645,1,0,0,0,645,647,5,7,0,0,646,648,3,62,31,0,647,646,1,0,0,0,647,648,1,
	0,0,0,648,649,1,0,0,0,649,652,5,10,0,0,650,651,5,51,0,0,651,653,3,202,101,
	0,652,650,1,0,0,0,652,653,1,0,0,0,653,654,1,0,0,0,654,655,5,14,0,0,655,
	656,3,50,25,0,656,676,1,0,0,0,657,658,5,85,0,0,658,659,5,76,0,0,659,661,
	3,380,190,0,660,662,3,188,94,0,661,660,1,0,0,0,661,662,1,0,0,0,662,663,
	1,0,0,0,663,665,5,7,0,0,664,666,3,62,31,0,665,664,1,0,0,0,665,666,1,0,0,
	0,666,667,1,0,0,0,667,670,5,10,0,0,668,669,5,51,0,0,669,671,3,202,101,0,
	670,668,1,0,0,0,670,671,1,0,0,0,671,672,1,0,0,0,672,673,5,14,0,0,673,674,
	3,50,25,0,674,676,1,0,0,0,675,640,1,0,0,0,675,657,1,0,0,0,676,61,1,0,0,
	0,677,678,3,64,32,0,678,63,1,0,0,0,679,683,3,66,33,0,680,682,3,74,37,0,
	681,680,1,0,0,0,682,685,1,0,0,0,683,681,1,0,0,0,683,684,1,0,0,0,684,689,
	1,0,0,0,685,683,1,0,0,0,686,688,3,78,39,0,687,686,1,0,0,0,688,691,1,0,0,
	0,689,687,1,0,0,0,689,690,1,0,0,0,690,693,1,0,0,0,691,689,1,0,0,0,692,694,
	3,70,35,0,693,692,1,0,0,0,693,694,1,0,0,0,694,729,1,0,0,0,695,699,3,68,
	34,0,696,698,3,78,39,0,697,696,1,0,0,0,698,701,1,0,0,0,699,697,1,0,0,0,
	699,700,1,0,0,0,700,703,1,0,0,0,701,699,1,0,0,0,702,704,3,70,35,0,703,702,
	1,0,0,0,703,704,1,0,0,0,704,729,1,0,0,0,705,707,3,74,37,0,706,705,1,0,0,
	0,707,708,1,0,0,0,708,706,1,0,0,0,708,709,1,0,0,0,709,713,1,0,0,0,710,712,
	3,78,39,0,711,710,1,0,0,0,712,715,1,0,0,0,713,711,1,0,0,0,713,714,1,0,0,
	0,714,717,1,0,0,0,715,713,1,0,0,0,716,718,3,70,35,0,717,716,1,0,0,0,717,
	718,1,0,0,0,718,729,1,0,0,0,719,721,3,78,39,0,720,719,1,0,0,0,721,722,1,
	0,0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,725,1,0,0,0,724,726,3,70,35,0,
	725,724,1,0,0,0,725,726,1,0,0,0,726,729,1,0,0,0,727,729,3,70,35,0,728,679,
	1,0,0,0,728,695,1,0,0,0,728,706,1,0,0,0,728,720,1,0,0,0,728,727,1,0,0,0,
	729,65,1,0,0,0,730,732,3,74,37,0,731,730,1,0,0,0,732,733,1,0,0,0,733,731,
	1,0,0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,737,5,20,0,0,736,738,5,15,0,
	0,737,736,1,0,0,0,737,738,1,0,0,0,738,67,1,0,0,0,739,741,3,74,37,0,740,
	739,1,0,0,0,741,744,1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,746,1,0,
	0,0,744,742,1,0,0,0,745,747,3,78,39,0,746,745,1,0,0,0,747,748,1,0,0,0,748,
	746,1,0,0,0,748,749,1,0,0,0,749,750,1,0,0,0,750,752,5,20,0,0,751,753,5,
	15,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,69,1,0,0,0,754,755,5,19,0,0,
	755,759,3,74,37,0,756,758,3,80,40,0,757,756,1,0,0,0,758,761,1,0,0,0,759,
	757,1,0,0,0,759,760,1,0,0,0,760,763,1,0,0,0,761,759,1,0,0,0,762,764,3,72,
	36,0,763,762,1,0,0,0,763,764,1,0,0,0,764,788,1,0,0,0,765,766,5,19,0,0,766,
	770,3,76,38,0,767,769,3,80,40,0,768,767,1,0,0,0,769,772,1,0,0,0,770,768,
	1,0,0,0,770,771,1,0,0,0,771,774,1,0,0,0,772,770,1,0,0,0,773,775,3,72,36,
	0,774,773,1,0,0,0,774,775,1,0,0,0,775,788,1,0,0,0,776,777,5,19,0,0,777,
	779,5,15,0,0,778,780,3,80,40,0,779,778,1,0,0,0,780,781,1,0,0,0,781,779,
	1,0,0,0,781,782,1,0,0,0,782,784,1,0,0,0,783,785,3,72,36,0,784,783,1,0,0,
	0,784,785,1,0,0,0,785,788,1,0,0,0,786,788,3,72,36,0,787,754,1,0,0,0,787,
	765,1,0,0,0,787,776,1,0,0,0,787,786,1,0,0,0,788,71,1,0,0,0,789,790,5,35,
	0,0,790,791,3,74,37,0,791,73,1,0,0,0,792,794,3,82,41,0,793,795,5,15,0,0,
	794,793,1,0,0,0,794,795,1,0,0,0,795,75,1,0,0,0,796,798,3,84,42,0,797,799,
	5,15,0,0,798,797,1,0,0,0,798,799,1,0,0,0,799,77,1,0,0,0,800,801,3,82,41,
	0,801,803,3,90,45,0,802,804,5,15,0,0,803,802,1,0,0,0,803,804,1,0,0,0,804,
	79,1,0,0,0,805,807,3,82,41,0,806,808,3,90,45,0,807,806,1,0,0,0,807,808,
	1,0,0,0,808,810,1,0,0,0,809,811,5,15,0,0,810,809,1,0,0,0,810,811,1,0,0,
	0,811,81,1,0,0,0,812,814,3,380,190,0,813,815,3,86,43,0,814,813,1,0,0,0,
	814,815,1,0,0,0,815,83,1,0,0,0,816,817,3,380,190,0,817,818,3,88,44,0,818,
	85,1,0,0,0,819,820,5,14,0,0,820,821,3,202,101,0,821,87,1,0,0,0,822,823,
	5,14,0,0,823,824,3,208,104,0,824,89,1,0,0,0,825,826,5,25,0,0,826,827,3,
	202,101,0,827,91,1,0,0,0,828,829,5,87,0,0,829,830,3,216,108,0,830,831,5,
	14,0,0,831,836,3,50,25,0,832,837,3,94,47,0,833,835,3,96,48,0,834,833,1,
	0,0,0,834,835,1,0,0,0,835,837,1,0,0,0,836,832,1,0,0,0,836,834,1,0,0,0,837,
	93,1,0,0,0,838,839,5,86,0,0,839,840,3,216,108,0,840,841,5,14,0,0,841,846,
	3,50,25,0,842,847,3,94,47,0,843,845,3,96,48,0,844,843,1,0,0,0,844,845,1,
	0,0,0,845,847,1,0,0,0,846,842,1,0,0,0,846,844,1,0,0,0,847,95,1,0,0,0,848,
	849,5,57,0,0,849,850,5,14,0,0,850,851,3,50,25,0,851,97,1,0,0,0,852,853,
	5,79,0,0,853,854,3,216,108,0,854,855,5,14,0,0,855,857,3,50,25,0,856,858,
	3,96,48,0,857,856,1,0,0,0,857,858,1,0,0,0,858,99,1,0,0,0,859,861,5,85,0,
	0,860,859,1,0,0,0,860,861,1,0,0,0,861,862,1,0,0,0,862,863,5,72,0,0,863,
	864,3,352,176,0,864,865,5,63,0,0,865,866,3,206,103,0,866,867,5,14,0,0,867,
	869,3,50,25,0,868,870,3,96,48,0,869,868,1,0,0,0,869,870,1,0,0,0,870,101,
	1,0,0,0,871,872,5,84,0,0,872,873,5,7,0,0,873,878,3,104,52,0,874,875,5,15,
	0,0,875,877,3,104,52,0,876,874,1,0,0,0,877,880,1,0,0,0,878,876,1,0,0,0,
	878,879,1,0,0,0,879,882,1,0,0,0,880,878,1,0,0,0,881,883,5,15,0,0,882,881,
	1,0,0,0,882,883,1,0,0,0,883,884,1,0,0,0,884,885,5,10,0,0,885,886,5,14,0,
	0,886,887,3,50,25,0,887,922,1,0,0,0,888,889,5,85,0,0,889,890,5,84,0,0,890,
	891,5,7,0,0,891,896,3,104,52,0,892,893,5,15,0,0,893,895,3,104,52,0,894,
	892,1,0,0,0,895,898,1,0,0,0,896,894,1,0,0,0,896,897,1,0,0,0,897,900,1,0,
	0,0,898,896,1,0,0,0,899,901,5,15,0,0,900,899,1,0,0,0,900,901,1,0,0,0,901,
	902,1,0,0,0,902,903,5,10,0,0,903,904,5,14,0,0,904,905,3,50,25,0,905,922,
	1,0,0,0,906,908,5,85,0,0,907,906,1,0,0,0,907,908,1,0,0,0,908,909,1,0,0,
	0,909,910,5,84,0,0,910,915,3,104,52,0,911,912,5,15,0,0,912,914,3,104,52,
	0,913,911,1,0,0,0,914,917,1,0,0,0,915,913,1,0,0,0,915,916,1,0,0,0,916,918,
	1,0,0,0,917,915,1,0,0,0,918,919,5,14,0,0,919,920,3,50,25,0,920,922,1,0,
	0,0,921,871,1,0,0,0,921,888,1,0,0,0,921,907,1,0,0,0,922,103,1,0,0,0,923,
	926,3,202,101,0,924,925,5,75,0,0,925,927,3,358,179,0,926,924,1,0,0,0,926,
	927,1,0,0,0,927,105,1,0,0,0,928,929,5,74,0,0,929,930,5,14,0,0,930,931,3,
	50,25,0,931,932,3,112,56,0,932,962,1,0,0,0,933,934,5,74,0,0,934,935,5,14,
	0,0,935,937,3,50,25,0,936,938,3,108,54,0,937,936,1,0,0,0,938,939,1,0,0,
	0,939,937,1,0,0,0,939,940,1,0,0,0,940,942,1,0,0,0,941,943,3,96,48,0,942,
	941,1,0,0,0,942,943,1,0,0,0,943,945,1,0,0,0,944,946,3,112,56,0,945,944,
	1,0,0,0,945,946,1,0,0,0,946,962,1,0,0,0,947,948,5,74,0,0,948,949,5,14,0,
	0,949,951,3,50,25,0,950,952,3,110,55,0,951,950,1,0,0,0,952,953,1,0,0,0,
	953,951,1,0,0,0,953,954,1,0,0,0,954,956,1,0,0,0,955,957,3,96,48,0,956,955,
	1,0,0,0,956,957,1,0,0,0,957,959,1,0,0,0,958,960,3,112,56,0,959,958,1,0,
	0,0,959,960,1,0,0,0,960,962,1,0,0,0,961,928,1,0,0,0,961,933,1,0,0,0,961,
	947,1,0,0,0,962,107,1,0,0,0,963,969,5,62,0,0,964,967,3,202,101,0,965,966,
	5,75,0,0,966,968,3,380,190,0,967,965,1,0,0,0,967,968,1,0,0,0,968,970,1,
	0,0,0,969,964,1,0,0,0,969,970,1,0,0,0,970,971,1,0,0,0,971,972,5,14,0,0,
	972,973,3,50,25,0,973,109,1,0,0,0,974,975,5,62,0,0,975,976,5,19,0,0,976,
	979,3,202,101,0,977,978,5,75,0,0,978,980,3,380,190,0,979,977,1,0,0,0,979,
	980,1,0,0,0,980,981,1,0,0,0,981,982,5,14,0,0,982,983,3,50,25,0,983,111,
	1,0,0,0,984,985,5,67,0,0,985,986,5,14,0,0,986,987,3,50,25,0,987,113,1,0,
	0,0,988,989,5,91,0,0,989,990,3,116,58,0,990,991,5,14,0,0,991,992,5,97,0,
	0,992,994,5,2,0,0,993,995,3,118,59,0,994,993,1,0,0,0,995,996,1,0,0,0,996,
	994,1,0,0,0,996,997,1,0,0,0,997,998,1,0,0,0,998,999,5,3,0,0,999,115,1,0,
	0,0,1000,1001,3,212,106,0,1001,1003,5,15,0,0,1002,1004,3,210,105,0,1003,
	1002,1,0,0,0,1003,1004,1,0,0,0,1004,1007,1,0,0,0,1005,1007,3,216,108,0,
	1006,1000,1,0,0,0,1006,1005,1,0,0,0,1007,117,1,0,0,0,1008,1009,5,92,0,0,
	1009,1011,3,122,61,0,1010,1012,3,120,60,0,1011,1010,1,0,0,0,1011,1012,1,
	0,0,0,1012,1013,1,0,0,0,1013,1014,5,14,0,0,1014,1015,3,50,25,0,1015,119,
	1,0,0,0,1016,1017,5,87,0,0,1017,1018,3,216,108,0,1018,121,1,0,0,0,1019,
	1022,3,162,81,0,1020,1022,3,124,62,0,1021,1019,1,0,0,0,1021,1020,1,0,0,
	0,1022,123,1,0,0,0,1023,1026,3,126,63,0,1024,1026,3,128,64,0,1025,1023,
	1,0,0,0,1025,1024,1,0,0,0,1026,125,1,0,0,0,1027,1028,3,128,64,0,1028,1029,
	5,75,0,0,1029,1030,3,148,74,0,1030,127,1,0,0,0,1031,1036,3,130,65,0,1032,
	1033,5,21,0,0,1033,1035,3,130,65,0,1034,1032,1,0,0,0,1035,1038,1,0,0,0,
	1036,1034,1,0,0,0,1036,1037,1,0,0,0,1037,129,1,0,0,0,1038,1036,1,0,0,0,
	1039,1048,3,132,66,0,1040,1048,3,146,73,0,1041,1048,3,150,75,0,1042,1048,
	3,152,76,0,1043,1048,3,158,79,0,1044,1048,3,160,80,0,1045,1048,3,170,85,
	0,1046,1048,3,178,89,0,1047,1039,1,0,0,0,1047,1040,1,0,0,0,1047,1041,1,
	0,0,0,1047,1042,1,0,0,0,1047,1043,1,0,0,0,1047,1044,1,0,0,0,1047,1045,1,
	0,0,0,1047,1046,1,0,0,0,1048,131,1,0,0,0,1049,1056,3,138,69,0,1050,1056,
	3,136,68,0,1051,1056,3,312,156,0,1052,1056,5,60,0,0,1053,1056,5,65,0,0,
	1054,1056,5,55,0,0,1055,1049,1,0,0,0,1055,1050,1,0,0,0,1055,1051,1,0,0,
	0,1055,1052,1,0,0,0,1055,1053,1,0,0,0,1055,1054,1,0,0,0,1056,133,1,0,0,
	0,1057,1064,3,138,69,0,1058,1064,3,136,68,0,1059,1064,3,312,156,0,1060,
	1064,5,60,0,0,1061,1064,5,65,0,0,1062,1064,5,55,0,0,1063,1057,1,0,0,0,1063,
	1058,1,0,0,0,1063,1059,1,0,0,0,1063,1060,1,0,0,0,1063,1061,1,0,0,0,1063,
	1062,1,0,0,0,1064,135,1,0,0,0,1065,1066,3,140,70,0,1066,1067,7,2,0,0,1067,
	1068,3,144,72,0,1068,137,1,0,0,0,1069,1071,5,18,0,0,1070,1069,1,0,0,0,1070,
	1071,1,0,0,0,1071,1072,1,0,0,0,1072,1073,5,95,0,0,1073,139,1,0,0,0,1074,
	1076,5,18,0,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,1077,1,0,0,0,1077,
	1078,3,142,71,0,1078,141,1,0,0,0,1079,1080,5,95,0,0,1080,143,1,0,0,0,1081,
	1082,5,95,0,0,1082,145,1,0,0,0,1083,1084,3,148,74,0,1084,147,1,0,0,0,1085,
	1086,3,378,189,0,1086,149,1,0,0,0,1087,1088,5,93,0,0,1088,151,1,0,0,0,1089,
	1090,3,154,77,0,1090,153,1,0,0,0,1091,1094,3,380,190,0,1092,1093,5,13,0,
	0,1093,1095,3,380,190,0,1094,1092,1,0,0,0,1095,1096,1,0,0,0,1096,1094,1,
	0,0,0,1096,1097,1,0,0,0,1097,155,1,0,0,0,1098,1103,3,380,190,0,1099,1100,
	5,13,0,0,1100,1102,3,380,190,0,1101,1099,1,0,0,0,1102,1105,1,0,0,0,1103,
	1101,1,0,0,0,1103,1104,1,0,0,0,1104,157,1,0,0,0,1105,1103,1,0,0,0,1106,
	1107,5,7,0,0,1107,1108,3,124,62,0,1108,1109,5,10,0,0,1109,159,1,0,0,0,1110,
	1112,5,8,0,0,1111,1113,3,164,82,0,1112,1111,1,0,0,0,1112,1113,1,0,0,0,1113,
	1114,1,0,0,0,1114,1121,5,11,0,0,1115,1117,5,7,0,0,1116,1118,3,162,81,0,
	1117,1116,1,0,0,0,1117,1118,1,0,0,0,1118,1119,1,0,0,0,1119,1121,5,10,0,
	0,1120,1110,1,0,0,0,1120,1115,1,0,0,0,1121,161,1,0,0,0,1122,1123,3,166,
	83,0,1123,1125,5,15,0,0,1124,1126,3,164,82,0,1125,1124,1,0,0,0,1125,1126,
	1,0,0,0,1126,163,1,0,0,0,1127,1132,3,166,83,0,1128,1129,5,15,0,0,1129,1131,
	3,166,83,0,1130,1128,1,0,0,0,1131,1134,1,0,0,0,1132,1130,1,0,0,0,1132,1133,
	1,0,0,0,1133,1136,1,0,0,0,1134,1132,1,0,0,0,1135,1137,5,15,0,0,1136,1135,
	1,0,0,0,1136,1137,1,0,0,0,1137,165,1,0,0,0,1138,1141,3,168,84,0,1139,1141,
	3,124,62,0,1140,1138,1,0,0,0,1140,1139,1,0,0,0,1141,167,1,0,0,0,1142,1143,
	5,19,0,0,1143,1144,3,380,190,0,1144,169,1,0,0,0,1145,1146,5,9,0,0,1146,
	1166,5,12,0,0,1147,1148,5,9,0,0,1148,1150,3,176,88,0,1149,1151,5,15,0,0,
	1150,1149,1,0,0,0,1150,1151,1,0,0,0,1151,1152,1,0,0,0,1152,1153,5,12,0,
	0,1153,1166,1,0,0,0,1154,1155,5,9,0,0,1155,1158,3,172,86,0,1156,1157,5,
	15,0,0,1157,1159,3,176,88,0,1158,1156,1,0,0,0,1158,1159,1,0,0,0,1159,1161,
	1,0,0,0,1160,1162,5,15,0,0,1161,1160,1,0,0,0,1161,1162,1,0,0,0,1162,1163,
	1,0,0,0,1163,1164,5,12,0,0,1164,1166,1,0,0,0,1165,1145,1,0,0,0,1165,1147,
	1,0,0,0,1165,1154,1,0,0,0,1166,171,1,0,0,0,1167,1172,3,174,87,0,1168,1169,
	5,15,0,0,1169,1171,3,174,87,0,1170,1168,1,0,0,0,1171,1174,1,0,0,0,1172,
	1170,1,0,0,0,1172,1173,1,0,0,0,1173,173,1,0,0,0,1174,1172,1,0,0,0,1175,
	1178,3,134,67,0,1176,1178,3,154,77,0,1177,1175,1,0,0,0,1177,1176,1,0,0,
	0,1178,1179,1,0,0,0,1179,1180,5,14,0,0,1180,1181,3,124,62,0,1181,175,1,
	0,0,0,1182,1183,5,35,0,0,1183,1184,3,148,74,0,1184,177,1,0,0,0,1185,1186,
	3,156,78,0,1186,1198,5,7,0,0,1187,1190,3,180,90,0,1188,1189,5,15,0,0,1189,
	1191,3,182,91,0,1190,1188,1,0,0,0,1190,1191,1,0,0,0,1191,1194,1,0,0,0,1192,
	1194,3,182,91,0,1193,1187,1,0,0,0,1193,1192,1,0,0,0,1194,1196,1,0,0,0,1195,
	1197,5,15,0,0,1196,1195,1,0,0,0,1196,1197,1,0,0,0,1197,1199,1,0,0,0,1198,
	1193,1,0,0,0,1198,1199,1,0,0,0,1199,1200,1,0,0,0,1200,1201,5,10,0,0,1201,
	179,1,0,0,0,1202,1207,3,124,62,0,1203,1204,5,15,0,0,1204,1206,3,124,62,
	0,1205,1203,1,0,0,0,1206,1209,1,0,0,0,1207,1205,1,0,0,0,1207,1208,1,0,0,
	0,1208,181,1,0,0,0,1209,1207,1,0,0,0,1210,1215,3,184,92,0,1211,1212,5,15,
	0,0,1212,1214,3,184,92,0,1213,1211,1,0,0,0,1214,1217,1,0,0,0,1215,1213,
	1,0,0,0,1215,1216,1,0,0,0,1216,183,1,0,0,0,1217,1215,1,0,0,0,1218,1219,
	3,380,190,0,1219,1220,5,25,0,0,1220,1221,3,124,62,0,1221,185,1,0,0,0,1222,
	1223,5,90,0,0,1223,1225,3,380,190,0,1224,1226,3,188,94,0,1225,1224,1,0,
	0,0,1225,1226,1,0,0,0,1226,1227,1,0,0,0,1227,1228,5,25,0,0,1228,1229,3,
	202,101,0,1229,187,1,0,0,0,1230,1231,5,8,0,0,1231,1232,3,190,95,0,1232,
	1233,5,11,0,0,1233,189,1,0,0,0,1234,1239,3,192,96,0,1235,1236,5,15,0,0,
	1236,1238,3,192,96,0,1237,1235,1,0,0,0,1238,1241,1,0,0,0,1239,1237,1,0,
	0,0,1239,1240,1,0,0,0,1240,1243,1,0,0,0,1241,1239,1,0,0,0,1242,1244,5,15,
	0,0,1243,1242,1,0,0,0,1243,1244,1,0,0,0,1244,191,1,0,0,0,1245,1247,3,380,
	190,0,1246,1248,3,194,97,0,1247,1246,1,0,0,0,1247,1248,1,0,0,0,1248,1250,
	1,0,0,0,1249,1251,3,196,98,0,1250,1249,1,0,0,0,1250,1251,1,0,0,0,1251,1263,
	1,0,0,0,1252,1253,5,19,0,0,1253,1255,3,380,190,0,1254,1256,3,198,99,0,1255,
	1254,1,0,0,0,1255,1256,1,0,0,0,1256,1263,1,0,0,0,1257,1258,5,35,0,0,1258,
	1260,3,380,190,0,1259,1261,3,196,98,0,1260,1259,1,0,0,0,1260,1261,1,0,0,
	0,1261,1263,1,0,0,0,1262,1245,1,0,0,0,1262,1252,1,0,0,0,1262,1257,1,0,0,
	0,1263,193,1,0,0,0,1264,1265,5,14,0,0,1265,1266,3,202,101,0,1266,195,1,
	0,0,0,1267,1268,5,25,0,0,1268,1269,3,202,101,0,1269,197,1,0,0,0,1270,1271,
	5,25,0,0,1271,1272,3,208,104,0,1272,199,1,0,0,0,1273,1278,3,202,101,0,1274,
	1275,5,15,0,0,1275,1277,3,202,101,0,1276,1274,1,0,0,0,1277,1280,1,0,0,0,
	1278,1276,1,0,0,0,1278,1279,1,0,0,0,1279,1282,1,0,0,0,1280,1278,1,0,0,0,
	1281,1283,5,15,0,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,1283,201,1,0,0,0,
	1284,1290,3,218,109,0,1285,1286,5,87,0,0,1286,1287,3,218,109,0,1287,1288,
	5,57,0,0,1288,1289,3,202,101,0,1289,1291,1,0,0,0,1290,1285,1,0,0,0,1290,
	1291,1,0,0,0,1291,1294,1,0,0,0,1292,1294,3,276,138,0,1293,1284,1,0,0,0,
	1293,1292,1,0,0,0,1294,203,1,0,0,0,1295,1301,5,89,0,0,1296,1297,5,77,0,
	0,1297,1302,3,202,101,0,1298,1300,3,206,103,0,1299,1298,1,0,0,0,1299,1300,
	1,0,0,0,1300,1302,1,0,0,0,1301,1296,1,0,0,0,1301,1299,1,0,0,0,1302,205,
	1,0,0,0,1303,1308,3,208,104,0,1304,1305,5,15,0,0,1305,1307,3,208,104,0,
	1306,1304,1,0,0,0,1307,1310,1,0,0,0,1308,1306,1,0,0,0,1308,1309,1,0,0,0,
	1309,1312,1,0,0,0,1310,1308,1,0,0,0,1311,1313,5,15,0,0,1312,1311,1,0,0,
	0,1312,1313,1,0,0,0,1313,207,1,0,0,0,1314,1315,5,19,0,0,1315,1318,3,248,
	124,0,1316,1318,3,202,101,0,1317,1314,1,0,0,0,1317,1316,1,0,0,0,1318,209,
	1,0,0,0,1319,1324,3,212,106,0,1320,1321,5,15,0,0,1321,1323,3,212,106,0,
	1322,1320,1,0,0,0,1323,1326,1,0,0,0,1324,1322,1,0,0,0,1324,1325,1,0,0,0,
	1325,1328,1,0,0,0,1326,1324,1,0,0,0,1327,1329,5,15,0,0,1328,1327,1,0,0,
	0,1328,1329,1,0,0,0,1329,211,1,0,0,0,1330,1331,5,19,0,0,1331,1334,3,248,
	124,0,1332,1334,3,216,108,0,1333,1330,1,0,0,0,1333,1332,1,0,0,0,1334,213,
	1,0,0,0,1335,1336,3,380,190,0,1336,1337,5,53,0,0,1337,1338,3,202,101,0,
	1338,215,1,0,0,0,1339,1342,3,214,107,0,1340,1342,3,202,101,0,1341,1339,
	1,0,0,0,1341,1340,1,0,0,0,1342,217,1,0,0,0,1343,1348,3,220,110,0,1344,1345,
	5,88,0,0,1345,1347,3,220,110,0,1346,1344,1,0,0,0,1347,1350,1,0,0,0,1348,
	1346,1,0,0,0,1348,1349,1,0,0,0,1349,219,1,0,0,0,1350,1348,1,0,0,0,1351,
	1356,3,222,111,0,1352,1353,5,70,0,0,1353,1355,3,222,111,0,1354,1352,1,0,
	0,0,1355,1358,1,0,0,0,1356,1354,1,0,0,0,1356,1357,1,0,0,0,1357,221,1,0,
	0,0,1358,1356,1,0,0,0,1359,1360,5,83,0,0,1360,1363,3,222,111,0,1361,1363,
	3,224,112,0,1362,1359,1,0,0,0,1362,1361,1,0,0,0,1363,223,1,0,0,0,1364,1368,
	3,248,124,0,1365,1367,3,226,113,0,1366,1365,1,0,0,0,1367,1370,1,0,0,0,1368,
	1366,1,0,0,0,1368,1369,1,0,0,0,1369,225,1,0,0,0,1370,1368,1,0,0,0,1371,
	1382,3,228,114,0,1372,1382,3,230,115,0,1373,1382,3,232,116,0,1374,1382,
	3,234,117,0,1375,1382,3,236,118,0,1376,1382,3,238,119,0,1377,1382,3,240,
	120,0,1378,1382,3,242,121,0,1379,1382,3,244,122,0,1380,1382,3,246,123,0,
	1381,1371,1,0,0,0,1381,1372,1,0,0,0,1381,1373,1,0,0,0,1381,1374,1,0,0,0,
	1381,1375,1,0,0,0,1381,1376,1,0,0,0,1381,1377,1,0,0,0,1381,1378,1,0,0,0,
	1381,1379,1,0,0,0,1381,1380,1,0,0,0,1382,227,1,0,0,0,1383,1384,5,27,0,0,
	1384,1385,3,248,124,0,1385,229,1,0,0,0,1386,1387,5,28,0,0,1387,1388,3,248,
	124,0,1388,231,1,0,0,0,1389,1390,5,29,0,0,1390,1391,3,248,124,0,1391,233,
	1,0,0,0,1392,1393,5,23,0,0,1393,1394,3,248,124,0,1394,235,1,0,0,0,1395,
	1396,5,30,0,0,1396,1397,3,248,124,0,1397,237,1,0,0,0,1398,1399,5,24,0,0,
	1399,1400,3,248,124,0,1400,239,1,0,0,0,1401,1402,5,83,0,0,1402,1403,5,63,
	0,0,1403,1404,3,248,124,0,1404,241,1,0,0,0,1405,1406,5,63,0,0,1406,1407,
	3,248,124,0,1407,243,1,0,0,0,1408,1409,5,68,0,0,1409,1410,5,83,0,0,1410,
	1411,3,248,124,0,1411,245,1,0,0,0,1412,1413,5,68,0,0,1413,1414,3,248,124,
	0,1414,247,1,0,0,0,1415,1416,6,124,-1,0,1416,1417,3,250,125,0,1417,1423,
	1,0,0,0,1418,1419,10,2,0,0,1419,1420,5,21,0,0,1420,1422,3,250,125,0,1421,
	1418,1,0,0,0,1422,1425,1,0,0,0,1423,1421,1,0,0,0,1423,1424,1,0,0,0,1424,
	249,1,0,0,0,1425,1423,1,0,0,0,1426,1427,6,125,-1,0,1427,1428,3,252,126,
	0,1428,1434,1,0,0,0,1429,1430,10,2,0,0,1430,1431,5,32,0,0,1431,1433,3,252,
	126,0,1432,1429,1,0,0,0,1433,1436,1,0,0,0,1434,1432,1,0,0,0,1434,1435,1,
	0,0,0,1435,251,1,0,0,0,1436,1434,1,0,0,0,1437,1438,6,126,-1,0,1438,1439,
	3,254,127,0,1439,1445,1,0,0,0,1440,1441,10,2,0,0,1441,1442,5,22,0,0,1442,
	1444,3,254,127,0,1443,1440,1,0,0,0,1444,1447,1,0,0,0,1445,1443,1,0,0,0,
	1445,1446,1,0,0,0,1446,253,1,0,0,0,1447,1445,1,0,0,0,1448,1449,6,127,-1,
	0,1449,1450,3,256,128,0,1450,1456,1,0,0,0,1451,1452,10,2,0,0,1452,1453,
	7,3,0,0,1453,1455,3,256,128,0,1454,1451,1,0,0,0,1455,1458,1,0,0,0,1456,
	1454,1,0,0,0,1456,1457,1,0,0,0,1457,255,1,0,0,0,1458,1456,1,0,0,0,1459,
	1460,6,128,-1,0,1460,1461,3,258,129,0,1461,1467,1,0,0,0,1462,1463,10,2,
	0,0,1463,1464,7,2,0,0,1464,1466,3,258,129,0,1465,1462,1,0,0,0,1466,1469,
	1,0,0,0,1467,1465,1,0,0,0,1467,1468,1,0,0,0,1468,257,1,0,0,0,1469,1467,
	1,0,0,0,1470,1471,6,129,-1,0,1471,1472,3,260,130,0,1472,1478,1,0,0,0,1473,
	1474,10,2,0,0,1474,1475,7,4,0,0,1475,1477,3,260,130,0,1476,1473,1,0,0,0,
	1477,1480,1,0,0,0,1478,1476,1,0,0,0,1478,1479,1,0,0,0,1479,259,1,0,0,0,
	1480,1478,1,0,0,0,1481,1482,5,17,0,0,1482,1489,3,260,130,0,1483,1484,5,
	18,0,0,1484,1489,3,260,130,0,1485,1486,5,31,0,0,1486,1489,3,260,130,0,1487,
	1489,3,262,131,0,1488,1481,1,0,0,0,1488,1483,1,0,0,0,1488,1485,1,0,0,0,
	1488,1487,1,0,0,0,1489,261,1,0,0,0,1490,1493,3,264,132,0,1491,1492,5,35,
	0,0,1492,1494,3,260,130,0,1493,1491,1,0,0,0,1493,1494,1,0,0,0,1494,263,
	1,0,0,0,1495,1496,5,56,0,0,1496,1499,3,266,133,0,1497,1499,3,266,133,0,
	1498,1495,1,0,0,0,1498,1497,1,0,0,0,1499,265,1,0,0,0,1500,1501,6,133,-1,
	0,1501,1502,3,272,136,0,1502,1520,1,0,0,0,1503,1516,10,2,0,0,1504,1505,
	5,13,0,0,1505,1517,3,380,190,0,1506,1517,3,336,168,0,1507,1509,5,7,0,0,
	1508,1510,3,340,170,0,1509,1508,1,0,0,0,1509,1510,1,0,0,0,1510,1511,1,0,
	0,0,1511,1517,5,10,0,0,1512,1513,5,8,0,0,1513,1514,3,268,134,0,1514,1515,
	5,11,0,0,1515,1517,1,0,0,0,1516,1504,1,0,0,0,1516,1506,1,0,0,0,1516,1507,
	1,0,0,0,1516,1512,1,0,0,0,1517,1519,1,0,0,0,1518,1503,1,0,0,0,1519,1522,
	1,0,0,0,1520,1518,1,0,0,0,1520,1521,1,0,0,0,1521,267,1,0,0,0,1522,1520,
	1,0,0,0,1523,1542,3,270,135,0,1524,1527,3,270,135,0,1525,1527,3,346,173,
	0,1526,1524,1,0,0,0,1526,1525,1,0,0,0,1527,1535,1,0,0,0,1528,1531,5,15,
	0,0,1529,1532,3,270,135,0,1530,1532,3,346,173,0,1531,1529,1,0,0,0,1531,
	1530,1,0,0,0,1532,1534,1,0,0,0,1533,1528,1,0,0,0,1534,1537,1,0,0,0,1535,
	1533,1,0,0,0,1535,1536,1,0,0,0,1536,1539,1,0,0,0,1537,1535,1,0,0,0,1538,
	1540,5,15,0,0,1539,1538,1,0,0,0,1539,1540,1,0,0,0,1540,1542,1,0,0,0,1541,
	1523,1,0,0,0,1541,1526,1,0,0,0,1542,269,1,0,0,0,1543,1545,3,202,101,0,1544,
	1543,1,0,0,0,1544,1545,1,0,0,0,1545,1546,1,0,0,0,1546,1548,5,14,0,0,1547,
	1549,3,202,101,0,1548,1547,1,0,0,0,1548,1549,1,0,0,0,1549,1554,1,0,0,0,
	1550,1552,5,14,0,0,1551,1553,3,202,101,0,1552,1551,1,0,0,0,1552,1553,1,
	0,0,0,1553,1555,1,0,0,0,1554,1550,1,0,0,0,1554,1555,1,0,0,0,1555,1558,1,
	0,0,0,1556,1558,3,216,108,0,1557,1544,1,0,0,0,1557,1556,1,0,0,0,1558,271,
	1,0,0,0,1559,1582,3,380,190,0,1560,1582,5,65,0,0,1561,1582,5,55,0,0,1562,
	1582,5,60,0,0,1563,1582,3,312,156,0,1564,1582,5,95,0,0,1565,1569,3,316,
	158,0,1566,1569,3,274,137,0,1567,1569,3,336,168,0,1568,1565,1,0,0,0,1568,
	1566,1,0,0,0,1568,1567,1,0,0,0,1569,1582,1,0,0,0,1570,1573,3,314,157,0,
	1571,1573,3,332,166,0,1572,1570,1,0,0,0,1572,1571,1,0,0,0,1573,1582,1,0,
	0,0,1574,1579,3,320,160,0,1575,1579,3,318,159,0,1576,1579,3,338,169,0,1577,
	1579,3,334,167,0,1578,1574,1,0,0,0,1578,1575,1,0,0,0,1578,1576,1,0,0,0,
	1578,1577,1,0,0,0,1579,1582,1,0,0,0,1580,1582,5,52,0,0,1581,1559,1,0,0,
	0,1581,1560,1,0,0,0,1581,1561,1,0,0,0,1581,1562,1,0,0,0,1581,1563,1,0,0,
	0,1581,1564,1,0,0,0,1581,1568,1,0,0,0,1581,1572,1,0,0,0,1581,1578,1,0,0,
	0,1581,1580,1,0,0,0,1582,273,1,0,0,0,1583,1586,5,7,0,0,1584,1587,3,204,
	102,0,1585,1587,3,216,108,0,1586,1584,1,0,0,0,1586,1585,1,0,0,0,1587,1588,
	1,0,0,0,1588,1589,5,10,0,0,1589,275,1,0,0,0,1590,1592,5,73,0,0,1591,1593,
	3,278,139,0,1592,1591,1,0,0,0,1592,1593,1,0,0,0,1593,1594,1,0,0,0,1594,
	1595,5,14,0,0,1595,1596,3,202,101,0,1596,277,1,0,0,0,1597,1598,3,280,140,
	0,1598,279,1,0,0,0,1599,1603,3,282,141,0,1600,1602,3,290,145,0,1601,1600,
	1,0,0,0,1602,1605,1,0,0,0,1603,1601,1,0,0,0,1603,1604,1,0,0,0,1604,1609,
	1,0,0,0,1605,1603,1,0,0,0,1606,1608,3,292,146,0,1607,1606,1,0,0,0,1608,
	1611,1,0,0,0,1609,1607,1,0,0,0,1609,1610,1,0,0,0,1610,1613,1,0,0,0,1611,
	1609,1,0,0,0,1612,1614,3,286,143,0,1613,1612,1,0,0,0,1613,1614,1,0,0,0,
	1614,1649,1,0,0,0,1615,1619,3,284,142,0,1616,1618,3,292,146,0,1617,1616,
	1,0,0,0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,1620,1,0,0,0,1620,1623,
	1,0,0,0,1621,1619,1,0,0,0,1622,1624,3,286,143,0,1623,1622,1,0,0,0,1623,
	1624,1,0,0,0,1624,1649,1,0,0,0,1625,1627,3,290,145,0,1626,1625,1,0,0,0,
	1627,1628,1,0,0,0,1628,1626,1,0,0,0,1628,1629,1,0,0,0,1629,1633,1,0,0,0,
	1630,1632,3,292,146,0,1631,1630,1,0,0,0,1632,1635,1,0,0,0,1633,1631,1,0,
	0,0,1633,1634,1,0,0,0,1634,1637,1,0,0,0,1635,1633,1,0,0,0,1636,1638,3,286,
	143,0,1637,1636,1,0,0,0,1637,1638,1,0,0,0,1638,1649,1,0,0,0,1639,1641,3,
	292,146,0,1640,1639,1,0,0,0,1641,1642,1,0,0,0,1642,1640,1,0,0,0,1642,1643,
	1,0,0,0,1643,1645,1,0,0,0,1644,1646,3,286,143,0,1645,1644,1,0,0,0,1645,
	1646,1,0,0,0,1646,1649,1,0,0,0,1647,1649,3,286,143,0,1648,1599,1,0,0,0,
	1648,1615,1,0,0,0,1648,1626,1,0,0,0,1648,1640,1,0,0,0,1648,1647,1,0,0,0,
	1649,281,1,0,0,0,1650,1652,3,290,145,0,1651,1650,1,0,0,0,1652,1653,1,0,
	0,0,1653,1651,1,0,0,0,1653,1654,1,0,0,0,1654,1655,1,0,0,0,1655,1657,5,20,
	0,0,1656,1658,5,15,0,0,1657,1656,1,0,0,0,1657,1658,1,0,0,0,1658,283,1,0,
	0,0,1659,1661,3,290,145,0,1660,1659,1,0,0,0,1661,1664,1,0,0,0,1662,1660,
	1,0,0,0,1662,1663,1,0,0,0,1663,1666,1,0,0,0,1664,1662,1,0,0,0,1665,1667,
	3,292,146,0,1666,1665,1,0,0,0,1667,1668,1,0,0,0,1668,1666,1,0,0,0,1668,
	1669,1,0,0,0,1669,1670,1,0,0,0,1670,1672,5,20,0,0,1671,1673,5,15,0,0,1672,
	1671,1,0,0,0,1672,1673,1,0,0,0,1673,285,1,0,0,0,1674,1675,5,19,0,0,1675,
	1679,3,290,145,0,1676,1678,3,294,147,0,1677,1676,1,0,0,0,1678,1681,1,0,
	0,0,1679,1677,1,0,0,0,1679,1680,1,0,0,0,1680,1683,1,0,0,0,1681,1679,1,0,
	0,0,1682,1684,3,288,144,0,1683,1682,1,0,0,0,1683,1684,1,0,0,0,1684,1697,
	1,0,0,0,1685,1686,5,19,0,0,1686,1688,5,15,0,0,1687,1689,3,294,147,0,1688,
	1687,1,0,0,0,1689,1690,1,0,0,0,1690,1688,1,0,0,0,1690,1691,1,0,0,0,1691,
	1693,1,0,0,0,1692,1694,3,288,144,0,1693,1692,1,0,0,0,1693,1694,1,0,0,0,
	1694,1697,1,0,0,0,1695,1697,3,288,144,0,1696,1674,1,0,0,0,1696,1685,1,0,
	0,0,1696,1695,1,0,0,0,1697,287,1,0,0,0,1698,1699,5,35,0,0,1699,1700,3,290,
	145,0,1700,289,1,0,0,0,1701,1703,3,296,148,0,1702,1704,5,15,0,0,1703,1702,
	1,0,0,0,1703,1704,1,0,0,0,1704,291,1,0,0,0,1705,1706,3,296,148,0,1706,1708,
	3,90,45,0,1707,1709,5,15,0,0,1708,1707,1,0,0,0,1708,1709,1,0,0,0,1709,293,
	1,0,0,0,1710,1712,3,296,148,0,1711,1713,3,90,45,0,1712,1711,1,0,0,0,1712,
	1713,1,0,0,0,1713,1715,1,0,0,0,1714,1716,5,15,0,0,1715,1714,1,0,0,0,1715,
	1716,1,0,0,0,1716,295,1,0,0,0,1717,1718,3,380,190,0,1718,297,1,0,0,0,1719,
	1722,3,300,150,0,1720,1722,5,5,0,0,1721,1719,1,0,0,0,1721,1720,1,0,0,0,
	1722,299,1,0,0,0,1723,1724,5,9,0,0,1724,1726,3,14,7,0,1725,1727,5,25,0,
	0,1726,1725,1,0,0,0,1726,1727,1,0,0,0,1727,1729,1,0,0,0,1728,1730,3,302,
	151,0,1729,1728,1,0,0,0,1729,1730,1,0,0,0,1730,1732,1,0,0,0,1731,1733,3,
	304,152,0,1732,1731,1,0,0,0,1732,1733,1,0,0,0,1733,1734,1,0,0,0,1734,1735,
	5,12,0,0,1735,301,1,0,0,0,1736,1737,5,54,0,0,1737,1738,3,380,190,0,1738,
	303,1,0,0,0,1739,1743,5,14,0,0,1740,1742,3,306,153,0,1741,1740,1,0,0,0,
	1742,1745,1,0,0,0,1743,1741,1,0,0,0,1743,1744,1,0,0,0,1744,305,1,0,0,0,
	1745,1743,1,0,0,0,1746,1749,5,5,0,0,1747,1749,3,300,150,0,1748,1746,1,0,
	0,0,1748,1747,1,0,0,0,1749,307,1,0,0,0,1750,1754,5,4,0,0,1751,1753,3,298,
	149,0,1752,1751,1,0,0,0,1753,1756,1,0,0,0,1754,1752,1,0,0,0,1754,1755,1,
	0,0,0,1755,1757,1,0,0,0,1756,1754,1,0,0,0,1757,1758,5,6,0,0,1758,309,1,
	0,0,0,1759,1760,5,96,0,0,1760,311,1,0,0,0,1761,1764,3,308,154,0,1762,1764,
	3,310,155,0,1763,1761,1,0,0,0,1763,1762,1,0,0,0,1764,1765,1,0,0,0,1765,
	1763,1,0,0,0,1765,1766,1,0,0,0,1766,313,1,0,0,0,1767,1769,5,8,0,0,1768,
	1770,3,210,105,0,1769,1768,1,0,0,0,1769,1770,1,0,0,0,1770,1771,1,0,0,0,
	1771,1772,5,11,0,0,1772,315,1,0,0,0,1773,1779,5,7,0,0,1774,1775,3,212,106,
	0,1775,1777,5,15,0,0,1776,1778,3,210,105,0,1777,1776,1,0,0,0,1777,1778,
	1,0,0,0,1778,1780,1,0,0,0,1779,1774,1,0,0,0,1779,1780,1,0,0,0,1780,1781,
	1,0,0,0,1781,1782,5,10,0,0,1782,317,1,0,0,0,1783,1784,5,9,0,0,1784,1785,
	3,210,105,0,1785,1786,5,12,0,0,1786,319,1,0,0,0,1787,1789,5,9,0,0,1788,
	1790,3,322,161,0,1789,1788,1,0,0,0,1789,1790,1,0,0,0,1790,1791,1,0,0,0,
	1791,1792,5,12,0,0,1792,321,1,0,0,0,1793,1798,3,324,162,0,1794,1795,5,15,
	0,0,1795,1797,3,324,162,0,1796,1794,1,0,0,0,1797,1800,1,0,0,0,1798,1796,
	1,0,0,0,1798,1799,1,0,0,0,1799,1802,1,0,0,0,1800,1798,1,0,0,0,1801,1803,
	5,15,0,0,1802,1801,1,0,0,0,1802,1803,1,0,0,0,1803,323,1,0,0,0,1804,1805,
	5,35,0,0,1805,1808,3,248,124,0,1806,1808,3,326,163,0,1807,1804,1,0,0,0,
	1807,1806,1,0,0,0,1808,325,1,0,0,0,1809,1810,3,202,101,0,1810,1811,5,14,
	0,0,1811,1812,3,202,101,0,1812,327,1,0,0,0,1813,1815,3,330,165,0,1814,1813,
	1,0,0,0,1815,1816,1,0,0,0,1816,1814,1,0,0,0,1816,1817,1,0,0,0,1817,329,
	1,0,0,0,1818,1820,5,85,0,0,1819,1818,1,0,0,0,1819,1820,1,0,0,0,1820,1821,
	1,0,0,0,1821,1822,5,72,0,0,1822,1823,3,352,176,0,1823,1824,5,63,0,0,1824,
	1829,3,218,109,0,1825,1826,5,87,0,0,1826,1828,3,218,109,0,1827,1825,1,0,
	0,0,1828,1831,1,0,0,0,1829,1827,1,0,0,0,1829,1830,1,0,0,0,1830,331,1,0,
	0,0,1831,1829,1,0,0,0,1832,1833,5,8,0,0,1833,1834,3,216,108,0,1834,1835,
	3,328,164,0,1835,1836,5,11,0,0,1836,333,1,0,0,0,1837,1838,5,9,0,0,1838,
	1839,3,216,108,0,1839,1840,3,328,164,0,1840,1841,5,12,0,0,1841,335,1,0,
	0,0,1842,1845,5,7,0,0,1843,1846,3,214,107,0,1844,1846,3,202,101,0,1845,
	1843,1,0,0,0,1845,1844,1,0,0,0,1846,1847,1,0,0,0,1847,1848,3,328,164,0,
	1848,1849,5,10,0,0,1849,337,1,0,0,0,1850,1851,5,9,0,0,1851,1852,3,326,163,
	0,1852,1853,3,328,164,0,1853,1854,5,12,0,0,1854,339,1,0,0,0,1855,1857,3,
	342,171,0,1856,1858,5,15,0,0,1857,1856,1,0,0,0,1857,1858,1,0,0,0,1858,341,
	1,0,0,0,1859,1865,3,346,173,0,1860,1863,3,214,107,0,1861,1863,3,202,101,
	0,1862,1860,1,0,0,0,1862,1861,1,0,0,0,1863,1865,1,0,0,0,1864,1859,1,0,0,
	0,1864,1862,1,0,0,0,1865,1876,1,0,0,0,1866,1872,5,15,0,0,1867,1873,3,346,
	173,0,1868,1871,3,214,107,0,1869,1871,3,202,101,0,1870,1868,1,0,0,0,1870,
	1869,1,0,0,0,1871,1873,1,0,0,0,1872,1867,1,0,0,0,1872,1870,1,0,0,0,1873,
	1875,1,0,0,0,1874,1866,1,0,0,0,1875,1878,1,0,0,0,1876,1874,1,0,0,0,1876,
	1877,1,0,0,0,1877,1881,1,0,0,0,1878,1876,1,0,0,0,1879,1880,5,15,0,0,1880,
	1882,3,344,172,0,1881,1879,1,0,0,0,1881,1882,1,0,0,0,1882,1885,1,0,0,0,
	1883,1885,3,344,172,0,1884,1864,1,0,0,0,1884,1883,1,0,0,0,1885,343,1,0,
	0,0,1886,1891,3,348,174,0,1887,1888,5,15,0,0,1888,1890,3,348,174,0,1889,
	1887,1,0,0,0,1890,1893,1,0,0,0,1891,1889,1,0,0,0,1891,1892,1,0,0,0,1892,
	1903,1,0,0,0,1893,1891,1,0,0,0,1894,1895,5,15,0,0,1895,1900,3,350,175,0,
	1896,1897,5,15,0,0,1897,1899,3,350,175,0,1898,1896,1,0,0,0,1899,1902,1,
	0,0,0,1900,1898,1,0,0,0,1900,1901,1,0,0,0,1901,1904,1,0,0,0,1902,1900,1,
	0,0,0,1903,1894,1,0,0,0,1903,1904,1,0,0,0,1904,1914,1,0,0,0,1905,1910,3,
	350,175,0,1906,1907,5,15,0,0,1907,1909,3,350,175,0,1908,1906,1,0,0,0,1909,
	1912,1,0,0,0,1910,1908,1,0,0,0,1910,1911,1,0,0,0,1911,1914,1,0,0,0,1912,
	1910,1,0,0,0,1913,1886,1,0,0,0,1913,1905,1,0,0,0,1914,345,1,0,0,0,1915,
	1916,5,19,0,0,1916,1917,3,202,101,0,1917,347,1,0,0,0,1918,1919,3,380,190,
	0,1919,1920,5,25,0,0,1920,1921,3,202,101,0,1921,1924,1,0,0,0,1922,1924,
	3,346,173,0,1923,1918,1,0,0,0,1923,1922,1,0,0,0,1924,349,1,0,0,0,1925,1926,
	3,380,190,0,1926,1927,5,25,0,0,1927,1928,3,202,101,0,1928,1932,1,0,0,0,
	1929,1930,5,35,0,0,1930,1932,3,202,101,0,1931,1925,1,0,0,0,1931,1929,1,
	0,0,0,1932,351,1,0,0,0,1933,1938,3,358,179,0,1934,1935,5,15,0,0,1935,1937,
	3,358,179,0,1936,1934,1,0,0,0,1937,1940,1,0,0,0,1938,1936,1,0,0,0,1938,
	1939,1,0,0,0,1939,1942,1,0,0,0,1940,1938,1,0,0,0,1941,1943,5,15,0,0,1942,
	1941,1,0,0,0,1942,1943,1,0,0,0,1943,353,1,0,0,0,1944,1949,3,358,179,0,1945,
	1946,5,15,0,0,1946,1948,3,358,179,0,1947,1945,1,0,0,0,1948,1951,1,0,0,0,
	1949,1947,1,0,0,0,1949,1950,1,0,0,0,1950,1953,1,0,0,0,1951,1949,1,0,0,0,
	1952,1954,5,15,0,0,1953,1952,1,0,0,0,1953,1954,1,0,0,0,1954,355,1,0,0,0,
	1955,1966,3,358,179,0,1956,1967,5,15,0,0,1957,1958,5,15,0,0,1958,1960,3,
	358,179,0,1959,1957,1,0,0,0,1960,1961,1,0,0,0,1961,1959,1,0,0,0,1961,1962,
	1,0,0,0,1962,1964,1,0,0,0,1963,1965,5,15,0,0,1964,1963,1,0,0,0,1964,1965,
	1,0,0,0,1965,1967,1,0,0,0,1966,1956,1,0,0,0,1966,1959,1,0,0,0,1967,357,
	1,0,0,0,1968,1969,5,19,0,0,1969,1972,3,358,179,0,1970,1972,3,360,180,0,
	1971,1968,1,0,0,0,1971,1970,1,0,0,0,1972,359,1,0,0,0,1973,1980,3,368,184,
	0,1974,1975,5,13,0,0,1975,1981,3,380,190,0,1976,1977,5,8,0,0,1977,1978,
	3,268,134,0,1978,1979,5,11,0,0,1979,1981,1,0,0,0,1980,1974,1,0,0,0,1980,
	1976,1,0,0,0,1981,1984,1,0,0,0,1982,1984,3,362,181,0,1983,1973,1,0,0,0,
	1983,1982,1,0,0,0,1984,361,1,0,0,0,1985,2001,3,380,190,0,1986,1987,5,7,
	0,0,1987,1988,3,360,180,0,1988,1989,5,10,0,0,1989,2001,1,0,0,0,1990,1992,
	5,7,0,0,1991,1993,3,356,178,0,1992,1991,1,0,0,0,1992,1993,1,0,0,0,1993,
	1994,1,0,0,0,1994,2001,5,10,0,0,1995,1997,5,8,0,0,1996,1998,3,354,177,0,
	1997,1996,1,0,0,0,1997,1998,1,0,0,0,1998,1999,1,0,0,0,1999,2001,5,11,0,
	0,2000,1985,1,0,0,0,2000,1986,1,0,0,0,2000,1990,1,0,0,0,2000,1995,1,0,0,
	0,2001,363,1,0,0,0,2002,2009,3,366,183,0,2003,2009,3,380,190,0,2004,2005,
	5,7,0,0,2005,2006,3,364,182,0,2006,2007,5,10,0,0,2007,2009,1,0,0,0,2008,
	2002,1,0,0,0,2008,2003,1,0,0,0,2008,2004,1,0,0,0,2009,365,1,0,0,0,2010,
	2017,3,368,184,0,2011,2012,5,13,0,0,2012,2018,3,380,190,0,2013,2014,5,8,
	0,0,2014,2015,3,268,134,0,2015,2016,5,11,0,0,2016,2018,1,0,0,0,2017,2011,
	1,0,0,0,2017,2013,1,0,0,0,2018,367,1,0,0,0,2019,2020,6,184,-1,0,2020,2021,
	3,272,136,0,2021,2039,1,0,0,0,2022,2035,10,2,0,0,2023,2024,5,13,0,0,2024,
	2036,3,380,190,0,2025,2026,5,8,0,0,2026,2027,3,268,134,0,2027,2028,5,11,
	0,0,2028,2036,1,0,0,0,2029,2036,3,336,168,0,2030,2032,5,7,0,0,2031,2033,
	3,340,170,0,2032,2031,1,0,0,0,2032,2033,1,0,0,0,2033,2034,1,0,0,0,2034,
	2036,5,10,0,0,2035,2023,1,0,0,0,2035,2025,1,0,0,0,2035,2029,1,0,0,0,2035,
	2030,1,0,0,0,2036,2038,1,0,0,0,2037,2022,1,0,0,0,2038,2041,1,0,0,0,2039,
	2037,1,0,0,0,2039,2040,1,0,0,0,2040,369,1,0,0,0,2041,2039,1,0,0,0,2042,
	2047,3,372,186,0,2043,2044,5,15,0,0,2044,2046,3,372,186,0,2045,2043,1,0,
	0,0,2046,2049,1,0,0,0,2047,2045,1,0,0,0,2047,2048,1,0,0,0,2048,2051,1,0,
	0,0,2049,2047,1,0,0,0,2050,2052,5,15,0,0,2051,2050,1,0,0,0,2051,2052,1,
	0,0,0,2052,371,1,0,0,0,2053,2060,3,368,184,0,2054,2055,5,13,0,0,2055,2061,
	3,380,190,0,2056,2057,5,8,0,0,2057,2058,3,268,134,0,2058,2059,5,11,0,0,
	2059,2061,1,0,0,0,2060,2054,1,0,0,0,2060,2056,1,0,0,0,2061,2064,1,0,0,0,
	2062,2064,3,374,187,0,2063,2053,1,0,0,0,2063,2062,1,0,0,0,2064,373,1,0,
	0,0,2065,2081,3,380,190,0,2066,2067,5,7,0,0,2067,2068,3,372,186,0,2068,
	2069,5,10,0,0,2069,2081,1,0,0,0,2070,2072,5,7,0,0,2071,2073,3,370,185,0,
	2072,2071,1,0,0,0,2072,2073,1,0,0,0,2073,2074,1,0,0,0,2074,2081,5,10,0,
	0,2075,2077,5,8,0,0,2076,2078,3,370,185,0,2077,2076,1,0,0,0,2077,2078,1,
	0,0,0,2078,2079,1,0,0,0,2079,2081,5,11,0,0,2080,2065,1,0,0,0,2080,2066,
	1,0,0,0,2080,2070,1,0,0,0,2080,2075,1,0,0,0,2081,375,1,0,0,0,2082,2087,
	3,202,101,0,2083,2084,5,15,0,0,2084,2086,3,202,101,0,2085,2083,1,0,0,0,
	2086,2089,1,0,0,0,2087,2085,1,0,0,0,2087,2088,1,0,0,0,2088,2102,1,0,0,0,
	2089,2087,1,0,0,0,2090,2100,5,15,0,0,2091,2092,5,19,0,0,2092,2096,3,202,
	101,0,2093,2094,5,15,0,0,2094,2095,5,35,0,0,2095,2097,3,202,101,0,2096,
	2093,1,0,0,0,2096,2097,1,0,0,0,2097,2101,1,0,0,0,2098,2099,5,35,0,0,2099,
	2101,3,202,101,0,2100,2091,1,0,0,0,2100,2098,1,0,0,0,2101,2103,1,0,0,0,
	2102,2090,1,0,0,0,2102,2103,1,0,0,0,2103,2114,1,0,0,0,2104,2105,5,19,0,
	0,2105,2109,3,202,101,0,2106,2107,5,15,0,0,2107,2108,5,35,0,0,2108,2110,
	3,202,101,0,2109,2106,1,0,0,0,2109,2110,1,0,0,0,2110,2114,1,0,0,0,2111,
	2112,5,35,0,0,2112,2114,3,202,101,0,2113,2082,1,0,0,0,2113,2104,1,0,0,0,
	2113,2111,1,0,0,0,2114,377,1,0,0,0,2115,2116,7,5,0,0,2116,379,1,0,0,0,2117,
	2120,5,93,0,0,2118,2120,3,378,189,0,2119,2117,1,0,0,0,2119,2118,1,0,0,0,
	2120,381,1,0,0,0,279,383,390,394,401,405,423,433,440,447,453,460,464,470,
	472,476,482,488,490,498,507,519,523,532,543,547,552,558,565,571,578,584,
	594,603,611,617,622,626,629,638,643,647,652,661,665,670,675,683,689,693,
	699,703,708,713,717,722,725,728,733,737,742,748,752,759,763,770,774,781,
	784,787,794,798,803,807,810,814,834,836,844,846,857,860,869,878,882,896,
	900,907,915,921,926,939,942,945,953,956,959,961,967,969,979,996,1003,1006,
	1011,1021,1025,1036,1047,1055,1063,1070,1075,1096,1103,1112,1117,1120,1125,
	1132,1136,1140,1150,1158,1161,1165,1172,1177,1190,1193,1196,1198,1207,1215,
	1225,1239,1243,1247,1250,1255,1260,1262,1278,1282,1290,1293,1299,1301,1308,
	1312,1317,1324,1328,1333,1341,1348,1356,1362,1368,1381,1423,1434,1445,1456,
	1467,1478,1488,1493,1498,1509,1516,1520,1526,1531,1535,1539,1541,1544,1548,
	1552,1554,1557,1568,1572,1578,1581,1586,1592,1603,1609,1613,1619,1623,1628,
	1633,1637,1642,1645,1648,1653,1657,1662,1668,1672,1679,1683,1690,1693,1696,
	1703,1708,1712,1715,1721,1726,1729,1732,1743,1748,1754,1763,1765,1769,1777,
	1779,1789,1798,1802,1807,1816,1819,1829,1845,1857,1862,1864,1870,1872,1876,
	1881,1884,1891,1900,1903,1910,1913,1923,1931,1938,1942,1949,1953,1961,1964,
	1966,1971,1980,1983,1992,1997,2000,2008,2017,2032,2035,2039,2047,2051,2060,
	2063,2072,2077,2080,2087,2096,2100,2102,2109,2113,2119];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PythonParser.__ATN) {
			PythonParser.__ATN = new ATNDeserializer().deserialize(PythonParser._serializedATN);
		}

		return PythonParser.__ATN;
	}


	static DecisionsToDFA = PythonParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(PythonParser.EOF, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_program;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_statements;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public compound_stmt(): Compound_stmtContext {
		return this.getTypedRuleContext(Compound_stmtContext, 0) as Compound_stmtContext;
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_statement;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_stmt_list(): Simple_stmtContext[] {
		return this.getTypedRuleContexts(Simple_stmtContext) as Simple_stmtContext[];
	}
	public simple_stmt(i: number): Simple_stmtContext {
		return this.getTypedRuleContext(Simple_stmtContext, i) as Simple_stmtContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(PythonParser.SEMI, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_simple_stmts;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSimple_stmts) {
	 		listener.enterSimple_stmts(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSimple_stmts) {
	 		listener.exitSimple_stmts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSimple_stmts) {
			return visitor.visitSimple_stmts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public type_alias(): Type_aliasContext {
		return this.getTypedRuleContext(Type_aliasContext, 0) as Type_aliasContext;
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
	public return_stmt(): Return_stmtContext {
		return this.getTypedRuleContext(Return_stmtContext, 0) as Return_stmtContext;
	}
	public import_stmt(): Import_stmtContext {
		return this.getTypedRuleContext(Import_stmtContext, 0) as Import_stmtContext;
	}
	public raise_stmt(): Raise_stmtContext {
		return this.getTypedRuleContext(Raise_stmtContext, 0) as Raise_stmtContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(PythonParser.PASS, 0);
	}
	public del_stmt(): Del_stmtContext {
		return this.getTypedRuleContext(Del_stmtContext, 0) as Del_stmtContext;
	}
	public yield_stmt(): Yield_stmtContext {
		return this.getTypedRuleContext(Yield_stmtContext, 0) as Yield_stmtContext;
	}
	public assert_stmt(): Assert_stmtContext {
		return this.getTypedRuleContext(Assert_stmtContext, 0) as Assert_stmtContext;
	}
	public BREAK(): TerminalNode {
		return this.getToken(PythonParser.BREAK, 0);
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(PythonParser.CONTINUE, 0);
	}
	public global_stmt(): Global_stmtContext {
		return this.getTypedRuleContext(Global_stmtContext, 0) as Global_stmtContext;
	}
	public nonlocal_stmt(): Nonlocal_stmtContext {
		return this.getTypedRuleContext(Nonlocal_stmtContext, 0) as Nonlocal_stmtContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_simple_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSimple_stmt) {
	 		listener.enterSimple_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSimple_stmt) {
	 		listener.exitSimple_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSimple_stmt) {
			return visitor.visitSimple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_def(): Function_defContext {
		return this.getTypedRuleContext(Function_defContext, 0) as Function_defContext;
	}
	public if_stmt(): If_stmtContext {
		return this.getTypedRuleContext(If_stmtContext, 0) as If_stmtContext;
	}
	public class_def(): Class_defContext {
		return this.getTypedRuleContext(Class_defContext, 0) as Class_defContext;
	}
	public with_stmt(): With_stmtContext {
		return this.getTypedRuleContext(With_stmtContext, 0) as With_stmtContext;
	}
	public for_stmt(): For_stmtContext {
		return this.getTypedRuleContext(For_stmtContext, 0) as For_stmtContext;
	}
	public try_stmt(): Try_stmtContext {
		return this.getTypedRuleContext(Try_stmtContext, 0) as Try_stmtContext;
	}
	public while_stmt(): While_stmtContext {
		return this.getTypedRuleContext(While_stmtContext, 0) as While_stmtContext;
	}
	public match_stmt(): Match_stmtContext {
		return this.getTypedRuleContext(Match_stmtContext, 0) as Match_stmtContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_compound_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterCompound_stmt) {
	 		listener.enterCompound_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitCompound_stmt) {
	 		listener.exitCompound_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitCompound_stmt) {
			return visitor.visitCompound_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EQUAL_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.EQUAL);
	}
	public EQUAL(i: number): TerminalNode {
		return this.getToken(PythonParser.EQUAL, i);
	}
	public annotated_rhs(): Annotated_rhsContext {
		return this.getTypedRuleContext(Annotated_rhsContext, 0) as Annotated_rhsContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public single_target(): Single_targetContext {
		return this.getTypedRuleContext(Single_targetContext, 0) as Single_targetContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public single_subscript_attribute_target(): Single_subscript_attribute_targetContext {
		return this.getTypedRuleContext(Single_subscript_attribute_targetContext, 0) as Single_subscript_attribute_targetContext;
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
	public star_targets_list(): Star_targetsContext[] {
		return this.getTypedRuleContexts(Star_targetsContext) as Star_targetsContext[];
	}
	public star_targets(i: number): Star_targetsContext {
		return this.getTypedRuleContext(Star_targetsContext, i) as Star_targetsContext;
	}
	public augassign(): AugassignContext {
		return this.getTypedRuleContext(AugassignContext, 0) as AugassignContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_assignment;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotated_rhsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_annotated_rhs;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAnnotated_rhs) {
	 		listener.enterAnnotated_rhs(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAnnotated_rhs) {
	 		listener.exitAnnotated_rhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAnnotated_rhs) {
			return visitor.visitAnnotated_rhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AugassignContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUSEQUAL(): TerminalNode {
		return this.getToken(PythonParser.PLUSEQUAL, 0);
	}
	public MINEQUAL(): TerminalNode {
		return this.getToken(PythonParser.MINEQUAL, 0);
	}
	public STAREQUAL(): TerminalNode {
		return this.getToken(PythonParser.STAREQUAL, 0);
	}
	public ATEQUAL(): TerminalNode {
		return this.getToken(PythonParser.ATEQUAL, 0);
	}
	public SLASHEQUAL(): TerminalNode {
		return this.getToken(PythonParser.SLASHEQUAL, 0);
	}
	public PERCENTEQUAL(): TerminalNode {
		return this.getToken(PythonParser.PERCENTEQUAL, 0);
	}
	public AMPEREQUAL(): TerminalNode {
		return this.getToken(PythonParser.AMPEREQUAL, 0);
	}
	public VBAREQUAL(): TerminalNode {
		return this.getToken(PythonParser.VBAREQUAL, 0);
	}
	public CIRCUMFLEXEQUAL(): TerminalNode {
		return this.getToken(PythonParser.CIRCUMFLEXEQUAL, 0);
	}
	public LEFTSHIFTEQUAL(): TerminalNode {
		return this.getToken(PythonParser.LEFTSHIFTEQUAL, 0);
	}
	public RIGHTSHIFTEQUAL(): TerminalNode {
		return this.getToken(PythonParser.RIGHTSHIFTEQUAL, 0);
	}
	public DOUBLESTAREQUAL(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAREQUAL, 0);
	}
	public DOUBLESLASHEQUAL(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESLASHEQUAL, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_augassign;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAugassign) {
	 		listener.enterAugassign(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAugassign) {
	 		listener.exitAugassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAugassign) {
			return visitor.visitAugassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(PythonParser.RETURN, 0);
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_return_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterReturn_stmt) {
	 		listener.enterReturn_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitReturn_stmt) {
	 		listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISE(): TerminalNode {
		return this.getToken(PythonParser.RAISE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(PythonParser.FROM, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_raise_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterRaise_stmt) {
	 		listener.enterRaise_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitRaise_stmt) {
	 		listener.exitRaise_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitRaise_stmt) {
			return visitor.visitRaise_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(PythonParser.GLOBAL, 0);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_global_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGlobal_stmt) {
	 		listener.enterGlobal_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGlobal_stmt) {
	 		listener.exitGlobal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGlobal_stmt) {
			return visitor.visitGlobal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NONLOCAL(): TerminalNode {
		return this.getToken(PythonParser.NONLOCAL, 0);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_nonlocal_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterNonlocal_stmt) {
	 		listener.enterNonlocal_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitNonlocal_stmt) {
	 		listener.exitNonlocal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitNonlocal_stmt) {
			return visitor.visitNonlocal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEL(): TerminalNode {
		return this.getToken(PythonParser.DEL, 0);
	}
	public del_targets(): Del_targetsContext {
		return this.getTypedRuleContext(Del_targetsContext, 0) as Del_targetsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_del_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDel_stmt) {
	 		listener.enterDel_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDel_stmt) {
	 		listener.exitDel_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDel_stmt) {
			return visitor.visitDel_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_yield_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterYield_stmt) {
	 		listener.enterYield_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitYield_stmt) {
	 		listener.exitYield_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitYield_stmt) {
			return visitor.visitYield_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(PythonParser.ASSERT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_assert_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAssert_stmt) {
	 		listener.enterAssert_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAssert_stmt) {
	 		listener.exitAssert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAssert_stmt) {
			return visitor.visitAssert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_name(): Import_nameContext {
		return this.getTypedRuleContext(Import_nameContext, 0) as Import_nameContext;
	}
	public import_from(): Import_fromContext {
		return this.getTypedRuleContext(Import_fromContext, 0) as Import_fromContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_stmt) {
	 		listener.enterImport_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_stmt) {
	 		listener.exitImport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_stmt) {
			return visitor.visitImport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(PythonParser.IMPORT, 0);
	}
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getTypedRuleContext(Dotted_as_namesContext, 0) as Dotted_as_namesContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_name;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_name) {
	 		listener.enterImport_name(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_name) {
	 		listener.exitImport_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_name) {
			return visitor.visitImport_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_fromContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(PythonParser.FROM, 0);
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(PythonParser.IMPORT, 0);
	}
	public import_from_targets(): Import_from_targetsContext {
		return this.getTypedRuleContext(Import_from_targetsContext, 0) as Import_from_targetsContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(PythonParser.DOT, i);
	}
	public ELLIPSIS_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.ELLIPSIS);
	}
	public ELLIPSIS(i: number): TerminalNode {
		return this.getToken(PythonParser.ELLIPSIS, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_from;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_from) {
	 		listener.enterImport_from(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_from) {
	 		listener.exitImport_from(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_from) {
			return visitor.visitImport_from(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_from_targetsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public import_from_as_names(): Import_from_as_namesContext {
		return this.getTypedRuleContext(Import_from_as_namesContext, 0) as Import_from_as_namesContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_from_targets;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_from_targets) {
	 		listener.enterImport_from_targets(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_from_targets) {
	 		listener.exitImport_from_targets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_from_targets) {
			return visitor.visitImport_from_targets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_from_as_namesContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_from_as_name_list(): Import_from_as_nameContext[] {
		return this.getTypedRuleContexts(Import_from_as_nameContext) as Import_from_as_nameContext[];
	}
	public import_from_as_name(i: number): Import_from_as_nameContext {
		return this.getTypedRuleContext(Import_from_as_nameContext, i) as Import_from_as_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_from_as_names;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_from_as_names) {
	 		listener.enterImport_from_as_names(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_from_as_names) {
	 		listener.exitImport_from_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_from_as_names) {
			return visitor.visitImport_from_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_from_as_nameContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_import_from_as_name;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImport_from_as_name) {
	 		listener.enterImport_from_as_name(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImport_from_as_name) {
	 		listener.exitImport_from_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImport_from_as_name) {
			return visitor.visitImport_from_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dotted_as_name_list(): Dotted_as_nameContext[] {
		return this.getTypedRuleContexts(Dotted_as_nameContext) as Dotted_as_nameContext[];
	}
	public dotted_as_name(i: number): Dotted_as_nameContext {
		return this.getTypedRuleContext(Dotted_as_nameContext, i) as Dotted_as_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_dotted_as_names;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDotted_as_names) {
	 		listener.enterDotted_as_names(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDotted_as_names) {
	 		listener.exitDotted_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDotted_as_names) {
			return visitor.visitDotted_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_dotted_as_name;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDotted_as_name) {
	 		listener.enterDotted_as_name(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDotted_as_name) {
	 		listener.exitDotted_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDotted_as_name) {
			return visitor.visitDotted_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_dotted_name;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDotted_name) {
	 		listener.enterDotted_name(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDotted_name) {
	 		listener.exitDotted_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDotted_name) {
			return visitor.visitDotted_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, 0);
	}
	public INDENT(): TerminalNode {
		return this.getToken(PythonParser.INDENT, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public DEDENT(): TerminalNode {
		return this.getToken(PythonParser.DEDENT, 0);
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.AT);
	}
	public AT(i: number): TerminalNode {
		return this.getToken(PythonParser.AT, i);
	}
	public named_expression_list(): Named_expressionContext[] {
		return this.getTypedRuleContexts(Named_expressionContext) as Named_expressionContext[];
	}
	public named_expression(i: number): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, i) as Named_expressionContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_decorators;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDecorators) {
	 		listener.enterDecorators(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDecorators) {
	 		listener.exitDecorators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDecorators) {
			return visitor.visitDecorators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_defContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decorators(): DecoratorsContext {
		return this.getTypedRuleContext(DecoratorsContext, 0) as DecoratorsContext;
	}
	public class_def_raw(): Class_def_rawContext {
		return this.getTypedRuleContext(Class_def_rawContext, 0) as Class_def_rawContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_class_def;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterClass_def) {
	 		listener.enterClass_def(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitClass_def) {
	 		listener.exitClass_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitClass_def) {
			return visitor.visitClass_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_def_rawContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(PythonParser.CLASS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public type_params(): Type_paramsContext {
		return this.getTypedRuleContext(Type_paramsContext, 0) as Type_paramsContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_class_def_raw;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterClass_def_raw) {
	 		listener.enterClass_def_raw(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitClass_def_raw) {
	 		listener.exitClass_def_raw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitClass_def_raw) {
			return visitor.visitClass_def_raw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_defContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decorators(): DecoratorsContext {
		return this.getTypedRuleContext(DecoratorsContext, 0) as DecoratorsContext;
	}
	public function_def_raw(): Function_def_rawContext {
		return this.getTypedRuleContext(Function_def_rawContext, 0) as Function_def_rawContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_function_def;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFunction_def) {
	 		listener.enterFunction_def(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFunction_def) {
	 		listener.exitFunction_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFunction_def) {
			return visitor.visitFunction_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_def_rawContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(PythonParser.DEF, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public type_params(): Type_paramsContext {
		return this.getTypedRuleContext(Type_paramsContext, 0) as Type_paramsContext;
	}
	public params(): ParamsContext {
		return this.getTypedRuleContext(ParamsContext, 0) as ParamsContext;
	}
	public RARROW(): TerminalNode {
		return this.getToken(PythonParser.RARROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(PythonParser.ASYNC, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_function_def_raw;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFunction_def_raw) {
	 		listener.enterFunction_def_raw(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFunction_def_raw) {
	 		listener.exitFunction_def_raw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFunction_def_raw) {
			return visitor.visitFunction_def_raw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_params;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParams) {
	 		listener.enterParams(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParams) {
	 		listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public slash_no_default(): Slash_no_defaultContext {
		return this.getTypedRuleContext(Slash_no_defaultContext, 0) as Slash_no_defaultContext;
	}
	public param_no_default_list(): Param_no_defaultContext[] {
		return this.getTypedRuleContexts(Param_no_defaultContext) as Param_no_defaultContext[];
	}
	public param_no_default(i: number): Param_no_defaultContext {
		return this.getTypedRuleContext(Param_no_defaultContext, i) as Param_no_defaultContext;
	}
	public param_with_default_list(): Param_with_defaultContext[] {
		return this.getTypedRuleContexts(Param_with_defaultContext) as Param_with_defaultContext[];
	}
	public param_with_default(i: number): Param_with_defaultContext {
		return this.getTypedRuleContext(Param_with_defaultContext, i) as Param_with_defaultContext;
	}
	public star_etc(): Star_etcContext {
		return this.getTypedRuleContext(Star_etcContext, 0) as Star_etcContext;
	}
	public slash_with_default(): Slash_with_defaultContext {
		return this.getTypedRuleContext(Slash_with_defaultContext, 0) as Slash_with_defaultContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_parameters;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Slash_no_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(PythonParser.SLASH, 0);
	}
	public param_no_default_list(): Param_no_defaultContext[] {
		return this.getTypedRuleContexts(Param_no_defaultContext) as Param_no_defaultContext[];
	}
	public param_no_default(i: number): Param_no_defaultContext {
		return this.getTypedRuleContext(Param_no_defaultContext, i) as Param_no_defaultContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_slash_no_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSlash_no_default) {
	 		listener.enterSlash_no_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSlash_no_default) {
	 		listener.exitSlash_no_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSlash_no_default) {
			return visitor.visitSlash_no_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Slash_with_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(PythonParser.SLASH, 0);
	}
	public param_no_default_list(): Param_no_defaultContext[] {
		return this.getTypedRuleContexts(Param_no_defaultContext) as Param_no_defaultContext[];
	}
	public param_no_default(i: number): Param_no_defaultContext {
		return this.getTypedRuleContext(Param_no_defaultContext, i) as Param_no_defaultContext;
	}
	public param_with_default_list(): Param_with_defaultContext[] {
		return this.getTypedRuleContexts(Param_with_defaultContext) as Param_with_defaultContext[];
	}
	public param_with_default(i: number): Param_with_defaultContext {
		return this.getTypedRuleContext(Param_with_defaultContext, i) as Param_with_defaultContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_slash_with_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSlash_with_default) {
	 		listener.enterSlash_with_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSlash_with_default) {
	 		listener.exitSlash_with_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSlash_with_default) {
			return visitor.visitSlash_with_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_etcContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public param_no_default(): Param_no_defaultContext {
		return this.getTypedRuleContext(Param_no_defaultContext, 0) as Param_no_defaultContext;
	}
	public param_maybe_default_list(): Param_maybe_defaultContext[] {
		return this.getTypedRuleContexts(Param_maybe_defaultContext) as Param_maybe_defaultContext[];
	}
	public param_maybe_default(i: number): Param_maybe_defaultContext {
		return this.getTypedRuleContext(Param_maybe_defaultContext, i) as Param_maybe_defaultContext;
	}
	public kwds(): KwdsContext {
		return this.getTypedRuleContext(KwdsContext, 0) as KwdsContext;
	}
	public param_no_default_star_annotation(): Param_no_default_star_annotationContext {
		return this.getTypedRuleContext(Param_no_default_star_annotationContext, 0) as Param_no_default_star_annotationContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_etc;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_etc) {
	 		listener.enterStar_etc(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_etc) {
	 		listener.exitStar_etc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_etc) {
			return visitor.visitStar_etc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KwdsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
	public param_no_default(): Param_no_defaultContext {
		return this.getTypedRuleContext(Param_no_defaultContext, 0) as Param_no_defaultContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_kwds;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKwds) {
	 		listener.enterKwds(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKwds) {
	 		listener.exitKwds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKwds) {
			return visitor.visitKwds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_no_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public param(): ParamContext {
		return this.getTypedRuleContext(ParamContext, 0) as ParamContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param_no_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam_no_default) {
	 		listener.enterParam_no_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam_no_default) {
	 		listener.exitParam_no_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam_no_default) {
			return visitor.visitParam_no_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_no_default_star_annotationContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public param_star_annotation(): Param_star_annotationContext {
		return this.getTypedRuleContext(Param_star_annotationContext, 0) as Param_star_annotationContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param_no_default_star_annotation;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam_no_default_star_annotation) {
	 		listener.enterParam_no_default_star_annotation(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam_no_default_star_annotation) {
	 		listener.exitParam_no_default_star_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam_no_default_star_annotation) {
			return visitor.visitParam_no_default_star_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_with_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public param(): ParamContext {
		return this.getTypedRuleContext(ParamContext, 0) as ParamContext;
	}
	public default_assignment(): Default_assignmentContext {
		return this.getTypedRuleContext(Default_assignmentContext, 0) as Default_assignmentContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param_with_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam_with_default) {
	 		listener.enterParam_with_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam_with_default) {
	 		listener.exitParam_with_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam_with_default) {
			return visitor.visitParam_with_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_maybe_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public param(): ParamContext {
		return this.getTypedRuleContext(ParamContext, 0) as ParamContext;
	}
	public default_assignment(): Default_assignmentContext {
		return this.getTypedRuleContext(Default_assignmentContext, 0) as Default_assignmentContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param_maybe_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam_maybe_default) {
	 		listener.enterParam_maybe_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam_maybe_default) {
	 		listener.exitParam_maybe_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam_maybe_default) {
			return visitor.visitParam_maybe_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam) {
	 		listener.enterParam(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam) {
	 		listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_star_annotationContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public star_annotation(): Star_annotationContext {
		return this.getTypedRuleContext(Star_annotationContext, 0) as Star_annotationContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_param_star_annotation;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterParam_star_annotation) {
	 		listener.enterParam_star_annotation(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitParam_star_annotation) {
	 		listener.exitParam_star_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitParam_star_annotation) {
			return visitor.visitParam_star_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_annotation;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_annotationContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public star_expression(): Star_expressionContext {
		return this.getTypedRuleContext(Star_expressionContext, 0) as Star_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_annotation;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_annotation) {
	 		listener.enterStar_annotation(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_annotation) {
	 		listener.exitStar_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_annotation) {
			return visitor.visitStar_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_assignmentContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_default_assignment;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDefault_assignment) {
	 		listener.enterDefault_assignment(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDefault_assignment) {
	 		listener.exitDefault_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDefault_assignment) {
			return visitor.visitDefault_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(PythonParser.IF, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public elif_stmt(): Elif_stmtContext {
		return this.getTypedRuleContext(Elif_stmtContext, 0) as Elif_stmtContext;
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_if_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterIf_stmt) {
	 		listener.enterIf_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitIf_stmt) {
	 		listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elif_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELIF(): TerminalNode {
		return this.getToken(PythonParser.ELIF, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public elif_stmt(): Elif_stmtContext {
		return this.getTypedRuleContext(Elif_stmtContext, 0) as Elif_stmtContext;
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_elif_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterElif_stmt) {
	 		listener.enterElif_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitElif_stmt) {
	 		listener.exitElif_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitElif_stmt) {
			return visitor.visitElif_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_blockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(PythonParser.ELSE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_else_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterElse_block) {
	 		listener.enterElse_block(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitElse_block) {
	 		listener.exitElse_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitElse_block) {
			return visitor.visitElse_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(PythonParser.WHILE, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_while_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterWhile_stmt) {
	 		listener.enterWhile_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitWhile_stmt) {
	 		listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(PythonParser.FOR, 0);
	}
	public star_targets(): Star_targetsContext {
		return this.getTypedRuleContext(Star_targetsContext, 0) as Star_targetsContext;
	}
	public IN(): TerminalNode {
		return this.getToken(PythonParser.IN, 0);
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(PythonParser.ASYNC, 0);
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_for_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFor_stmt) {
	 		listener.enterFor_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFor_stmt) {
	 		listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(PythonParser.WITH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public with_item_list(): With_itemContext[] {
		return this.getTypedRuleContexts(With_itemContext) as With_itemContext[];
	}
	public with_item(i: number): With_itemContext {
		return this.getTypedRuleContext(With_itemContext, i) as With_itemContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
	public ASYNC(): TerminalNode {
		return this.getToken(PythonParser.ASYNC, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_with_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterWith_stmt) {
	 		listener.enterWith_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitWith_stmt) {
	 		listener.exitWith_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitWith_stmt) {
			return visitor.visitWith_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
	public star_target(): Star_targetContext {
		return this.getTypedRuleContext(Star_targetContext, 0) as Star_targetContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_with_item;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterWith_item) {
	 		listener.enterWith_item(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitWith_item) {
	 		listener.exitWith_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitWith_item) {
			return visitor.visitWith_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(PythonParser.TRY, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public finally_block(): Finally_blockContext {
		return this.getTypedRuleContext(Finally_blockContext, 0) as Finally_blockContext;
	}
	public except_block_list(): Except_blockContext[] {
		return this.getTypedRuleContexts(Except_blockContext) as Except_blockContext[];
	}
	public except_block(i: number): Except_blockContext {
		return this.getTypedRuleContext(Except_blockContext, i) as Except_blockContext;
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
	public except_star_block_list(): Except_star_blockContext[] {
		return this.getTypedRuleContexts(Except_star_blockContext) as Except_star_blockContext[];
	}
	public except_star_block(i: number): Except_star_blockContext {
		return this.getTypedRuleContext(Except_star_blockContext, i) as Except_star_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_try_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterTry_stmt) {
	 		listener.enterTry_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitTry_stmt) {
	 		listener.exitTry_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitTry_stmt) {
			return visitor.visitTry_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_blockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(PythonParser.EXCEPT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_except_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterExcept_block) {
	 		listener.enterExcept_block(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitExcept_block) {
	 		listener.exitExcept_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitExcept_block) {
			return visitor.visitExcept_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_star_blockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(PythonParser.EXCEPT, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_except_star_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterExcept_star_block) {
	 		listener.enterExcept_star_block(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitExcept_star_block) {
	 		listener.exitExcept_star_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitExcept_star_block) {
			return visitor.visitExcept_star_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_blockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(PythonParser.FINALLY, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_finally_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFinally_block) {
	 		listener.enterFinally_block(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFinally_block) {
	 		listener.exitFinally_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFinally_block) {
			return visitor.visitFinally_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_stmtContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_OR_MATCH(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_MATCH, 0);
	}
	public subject_expr(): Subject_exprContext {
		return this.getTypedRuleContext(Subject_exprContext, 0) as Subject_exprContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, 0);
	}
	public INDENT(): TerminalNode {
		return this.getToken(PythonParser.INDENT, 0);
	}
	public DEDENT(): TerminalNode {
		return this.getToken(PythonParser.DEDENT, 0);
	}
	public case_block_list(): Case_blockContext[] {
		return this.getTypedRuleContexts(Case_blockContext) as Case_blockContext[];
	}
	public case_block(i: number): Case_blockContext {
		return this.getTypedRuleContext(Case_blockContext, i) as Case_blockContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_match_stmt;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterMatch_stmt) {
	 		listener.enterMatch_stmt(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitMatch_stmt) {
	 		listener.exitMatch_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitMatch_stmt) {
			return visitor.visitMatch_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subject_exprContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_named_expression(): Star_named_expressionContext {
		return this.getTypedRuleContext(Star_named_expressionContext, 0) as Star_named_expressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
	public star_named_expressions(): Star_named_expressionsContext {
		return this.getTypedRuleContext(Star_named_expressionsContext, 0) as Star_named_expressionsContext;
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_subject_expr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSubject_expr) {
	 		listener.enterSubject_expr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSubject_expr) {
	 		listener.exitSubject_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSubject_expr) {
			return visitor.visitSubject_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_blockContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_OR_CASE(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_CASE, 0);
	}
	public patterns(): PatternsContext {
		return this.getTypedRuleContext(PatternsContext, 0) as PatternsContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public guard(): GuardContext {
		return this.getTypedRuleContext(GuardContext, 0) as GuardContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_case_block;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterCase_block) {
	 		listener.enterCase_block(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitCase_block) {
	 		listener.exitCase_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitCase_block) {
			return visitor.visitCase_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GuardContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(PythonParser.IF, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_guard;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGuard) {
	 		listener.enterGuard(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGuard) {
	 		listener.exitGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGuard) {
			return visitor.visitGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public open_sequence_pattern(): Open_sequence_patternContext {
		return this.getTypedRuleContext(Open_sequence_patternContext, 0) as Open_sequence_patternContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_patterns;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPatterns) {
	 		listener.enterPatterns(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPatterns) {
	 		listener.exitPatterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPatterns) {
			return visitor.visitPatterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public as_pattern(): As_patternContext {
		return this.getTypedRuleContext(As_patternContext, 0) as As_patternContext;
	}
	public or_pattern(): Or_patternContext {
		return this.getTypedRuleContext(Or_patternContext, 0) as Or_patternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class As_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public or_pattern(): Or_patternContext {
		return this.getTypedRuleContext(Or_patternContext, 0) as Or_patternContext;
	}
	public AS(): TerminalNode {
		return this.getToken(PythonParser.AS, 0);
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_as_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAs_pattern) {
	 		listener.enterAs_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAs_pattern) {
	 		listener.exitAs_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAs_pattern) {
			return visitor.visitAs_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public closed_pattern_list(): Closed_patternContext[] {
		return this.getTypedRuleContexts(Closed_patternContext) as Closed_patternContext[];
	}
	public closed_pattern(i: number): Closed_patternContext {
		return this.getTypedRuleContext(Closed_patternContext, i) as Closed_patternContext;
	}
	public VBAR_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.VBAR);
	}
	public VBAR(i: number): TerminalNode {
		return this.getToken(PythonParser.VBAR, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_or_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterOr_pattern) {
	 		listener.enterOr_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitOr_pattern) {
	 		listener.exitOr_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitOr_pattern) {
			return visitor.visitOr_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Closed_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_pattern(): Literal_patternContext {
		return this.getTypedRuleContext(Literal_patternContext, 0) as Literal_patternContext;
	}
	public capture_pattern(): Capture_patternContext {
		return this.getTypedRuleContext(Capture_patternContext, 0) as Capture_patternContext;
	}
	public wildcard_pattern(): Wildcard_patternContext {
		return this.getTypedRuleContext(Wildcard_patternContext, 0) as Wildcard_patternContext;
	}
	public value_pattern(): Value_patternContext {
		return this.getTypedRuleContext(Value_patternContext, 0) as Value_patternContext;
	}
	public group_pattern(): Group_patternContext {
		return this.getTypedRuleContext(Group_patternContext, 0) as Group_patternContext;
	}
	public sequence_pattern(): Sequence_patternContext {
		return this.getTypedRuleContext(Sequence_patternContext, 0) as Sequence_patternContext;
	}
	public mapping_pattern(): Mapping_patternContext {
		return this.getTypedRuleContext(Mapping_patternContext, 0) as Mapping_patternContext;
	}
	public class_pattern(): Class_patternContext {
		return this.getTypedRuleContext(Class_patternContext, 0) as Class_patternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_closed_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterClosed_pattern) {
	 		listener.enterClosed_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitClosed_pattern) {
	 		listener.exitClosed_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitClosed_pattern) {
			return visitor.visitClosed_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public complex_number(): Complex_numberContext {
		return this.getTypedRuleContext(Complex_numberContext, 0) as Complex_numberContext;
	}
	public strings(): StringsContext {
		return this.getTypedRuleContext(StringsContext, 0) as StringsContext;
	}
	public NONE(): TerminalNode {
		return this.getToken(PythonParser.NONE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(PythonParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(PythonParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_literal_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLiteral_pattern) {
	 		listener.enterLiteral_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLiteral_pattern) {
	 		listener.exitLiteral_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLiteral_pattern) {
			return visitor.visitLiteral_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_exprContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public complex_number(): Complex_numberContext {
		return this.getTypedRuleContext(Complex_numberContext, 0) as Complex_numberContext;
	}
	public strings(): StringsContext {
		return this.getTypedRuleContext(StringsContext, 0) as StringsContext;
	}
	public NONE(): TerminalNode {
		return this.getToken(PythonParser.NONE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(PythonParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(PythonParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_literal_expr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLiteral_expr) {
	 		listener.enterLiteral_expr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLiteral_expr) {
	 		listener.exitLiteral_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLiteral_expr) {
			return visitor.visitLiteral_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Complex_numberContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_real_number(): Signed_real_numberContext {
		return this.getTypedRuleContext(Signed_real_numberContext, 0) as Signed_real_numberContext;
	}
	public imaginary_number(): Imaginary_numberContext {
		return this.getTypedRuleContext(Imaginary_numberContext, 0) as Imaginary_numberContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(PythonParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(PythonParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_complex_number;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterComplex_number) {
	 		listener.enterComplex_number(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitComplex_number) {
	 		listener.exitComplex_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitComplex_number) {
			return visitor.visitComplex_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_numberContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(PythonParser.NUMBER, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(PythonParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_signed_number;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSigned_number) {
	 		listener.enterSigned_number(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSigned_number) {
	 		listener.exitSigned_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSigned_number) {
			return visitor.visitSigned_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_real_numberContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public real_number(): Real_numberContext {
		return this.getTypedRuleContext(Real_numberContext, 0) as Real_numberContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(PythonParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_signed_real_number;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSigned_real_number) {
	 		listener.enterSigned_real_number(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSigned_real_number) {
	 		listener.exitSigned_real_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSigned_real_number) {
			return visitor.visitSigned_real_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Real_numberContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(PythonParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_real_number;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterReal_number) {
	 		listener.enterReal_number(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitReal_number) {
	 		listener.exitReal_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitReal_number) {
			return visitor.visitReal_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imaginary_numberContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(PythonParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_imaginary_number;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterImaginary_number) {
	 		listener.enterImaginary_number(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitImaginary_number) {
	 		listener.exitImaginary_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitImaginary_number) {
			return visitor.visitImaginary_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_capture_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterCapture_pattern) {
	 		listener.enterCapture_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitCapture_pattern) {
	 		listener.exitCapture_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitCapture_pattern) {
			return visitor.visitCapture_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pattern_capture_targetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_except_underscore(): Name_except_underscoreContext {
		return this.getTypedRuleContext(Name_except_underscoreContext, 0) as Name_except_underscoreContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_pattern_capture_target;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPattern_capture_target) {
	 		listener.enterPattern_capture_target(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPattern_capture_target) {
	 		listener.exitPattern_capture_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPattern_capture_target) {
			return visitor.visitPattern_capture_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wildcard_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_OR_WILDCARD(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_WILDCARD, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_wildcard_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterWildcard_pattern) {
	 		listener.enterWildcard_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitWildcard_pattern) {
	 		listener.exitWildcard_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitWildcard_pattern) {
			return visitor.visitWildcard_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attr(): AttrContext {
		return this.getTypedRuleContext(AttrContext, 0) as AttrContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_value_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterValue_pattern) {
	 		listener.enterValue_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitValue_pattern) {
	 		listener.exitValue_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitValue_pattern) {
			return visitor.visitValue_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(PythonParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_attr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAttr) {
	 		listener.enterAttr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAttr) {
	 		listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Name_or_attrContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(PythonParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_name_or_attr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterName_or_attr) {
	 		listener.enterName_or_attr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitName_or_attr) {
	 		listener.exitName_or_attr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitName_or_attr) {
			return visitor.visitName_or_attr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_group_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGroup_pattern) {
	 		listener.enterGroup_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGroup_pattern) {
	 		listener.exitGroup_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGroup_pattern) {
			return visitor.visitGroup_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sequence_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		return this.getTypedRuleContext(Maybe_sequence_patternContext, 0) as Maybe_sequence_patternContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public open_sequence_pattern(): Open_sequence_patternContext {
		return this.getTypedRuleContext(Open_sequence_patternContext, 0) as Open_sequence_patternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_sequence_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSequence_pattern) {
	 		listener.enterSequence_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSequence_pattern) {
	 		listener.exitSequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSequence_pattern) {
			return visitor.visitSequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Open_sequence_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public maybe_star_pattern(): Maybe_star_patternContext {
		return this.getTypedRuleContext(Maybe_star_patternContext, 0) as Maybe_star_patternContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		return this.getTypedRuleContext(Maybe_sequence_patternContext, 0) as Maybe_sequence_patternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_open_sequence_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterOpen_sequence_pattern) {
	 		listener.enterOpen_sequence_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitOpen_sequence_pattern) {
	 		listener.exitOpen_sequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitOpen_sequence_pattern) {
			return visitor.visitOpen_sequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Maybe_sequence_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public maybe_star_pattern_list(): Maybe_star_patternContext[] {
		return this.getTypedRuleContexts(Maybe_star_patternContext) as Maybe_star_patternContext[];
	}
	public maybe_star_pattern(i: number): Maybe_star_patternContext {
		return this.getTypedRuleContext(Maybe_star_patternContext, i) as Maybe_star_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_maybe_sequence_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterMaybe_sequence_pattern) {
	 		listener.enterMaybe_sequence_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitMaybe_sequence_pattern) {
	 		listener.exitMaybe_sequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitMaybe_sequence_pattern) {
			return visitor.visitMaybe_sequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Maybe_star_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_pattern(): Star_patternContext {
		return this.getTypedRuleContext(Star_patternContext, 0) as Star_patternContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_maybe_star_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterMaybe_star_pattern) {
	 		listener.enterMaybe_star_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitMaybe_star_pattern) {
	 		listener.exitMaybe_star_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitMaybe_star_pattern) {
			return visitor.visitMaybe_star_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_pattern) {
	 		listener.enterStar_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_pattern) {
	 		listener.exitStar_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_pattern) {
			return visitor.visitStar_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mapping_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
	public double_star_pattern(): Double_star_patternContext {
		return this.getTypedRuleContext(Double_star_patternContext, 0) as Double_star_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
	public items_pattern(): Items_patternContext {
		return this.getTypedRuleContext(Items_patternContext, 0) as Items_patternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_mapping_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterMapping_pattern) {
	 		listener.enterMapping_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitMapping_pattern) {
	 		listener.exitMapping_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitMapping_pattern) {
			return visitor.visitMapping_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Items_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public key_value_pattern_list(): Key_value_patternContext[] {
		return this.getTypedRuleContexts(Key_value_patternContext) as Key_value_patternContext[];
	}
	public key_value_pattern(i: number): Key_value_patternContext {
		return this.getTypedRuleContext(Key_value_patternContext, i) as Key_value_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_items_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterItems_pattern) {
	 		listener.enterItems_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitItems_pattern) {
	 		listener.exitItems_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitItems_pattern) {
			return visitor.visitItems_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Key_value_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public literal_expr(): Literal_exprContext {
		return this.getTypedRuleContext(Literal_exprContext, 0) as Literal_exprContext;
	}
	public attr(): AttrContext {
		return this.getTypedRuleContext(AttrContext, 0) as AttrContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_key_value_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKey_value_pattern) {
	 		listener.enterKey_value_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKey_value_pattern) {
	 		listener.exitKey_value_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKey_value_pattern) {
			return visitor.visitKey_value_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Double_star_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_double_star_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDouble_star_pattern) {
	 		listener.enterDouble_star_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDouble_star_pattern) {
	 		listener.exitDouble_star_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDouble_star_pattern) {
			return visitor.visitDouble_star_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_or_attr(): Name_or_attrContext {
		return this.getTypedRuleContext(Name_or_attrContext, 0) as Name_or_attrContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public positional_patterns(): Positional_patternsContext {
		return this.getTypedRuleContext(Positional_patternsContext, 0) as Positional_patternsContext;
	}
	public keyword_patterns(): Keyword_patternsContext {
		return this.getTypedRuleContext(Keyword_patternsContext, 0) as Keyword_patternsContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_class_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterClass_pattern) {
	 		listener.enterClass_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitClass_pattern) {
	 		listener.exitClass_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitClass_pattern) {
			return visitor.visitClass_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Positional_patternsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_positional_patterns;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPositional_patterns) {
	 		listener.enterPositional_patterns(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPositional_patterns) {
	 		listener.exitPositional_patterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPositional_patterns) {
			return visitor.visitPositional_patterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Keyword_patternsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyword_pattern_list(): Keyword_patternContext[] {
		return this.getTypedRuleContexts(Keyword_patternContext) as Keyword_patternContext[];
	}
	public keyword_pattern(i: number): Keyword_patternContext {
		return this.getTypedRuleContext(Keyword_patternContext, i) as Keyword_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_keyword_patterns;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKeyword_patterns) {
	 		listener.enterKeyword_patterns(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKeyword_patterns) {
	 		listener.exitKeyword_patterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKeyword_patterns) {
			return visitor.visitKeyword_patterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Keyword_patternContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_keyword_pattern;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKeyword_pattern) {
	 		listener.enterKeyword_pattern(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKeyword_pattern) {
	 		listener.exitKeyword_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKeyword_pattern) {
			return visitor.visitKeyword_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_aliasContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_OR_TYPE(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_TYPE, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public type_params(): Type_paramsContext {
		return this.getTypedRuleContext(Type_paramsContext, 0) as Type_paramsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_alias;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_alias) {
	 		listener.enterType_alias(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_alias) {
	 		listener.exitType_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_alias) {
			return visitor.visitType_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_paramsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public type_param_seq(): Type_param_seqContext {
		return this.getTypedRuleContext(Type_param_seqContext, 0) as Type_param_seqContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_params;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_params) {
	 		listener.enterType_params(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_params) {
	 		listener.exitType_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_params) {
			return visitor.visitType_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_param_seqContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_param_list(): Type_paramContext[] {
		return this.getTypedRuleContexts(Type_paramContext) as Type_paramContext[];
	}
	public type_param(i: number): Type_paramContext {
		return this.getTypedRuleContext(Type_paramContext, i) as Type_paramContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_param_seq;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_param_seq) {
	 		listener.enterType_param_seq(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_param_seq) {
	 		listener.exitType_param_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_param_seq) {
			return visitor.visitType_param_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_paramContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public type_param_bound(): Type_param_boundContext {
		return this.getTypedRuleContext(Type_param_boundContext, 0) as Type_param_boundContext;
	}
	public type_param_default(): Type_param_defaultContext {
		return this.getTypedRuleContext(Type_param_defaultContext, 0) as Type_param_defaultContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public type_param_starred_default(): Type_param_starred_defaultContext {
		return this.getTypedRuleContext(Type_param_starred_defaultContext, 0) as Type_param_starred_defaultContext;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_param;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_param) {
	 		listener.enterType_param(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_param) {
	 		listener.exitType_param(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_param) {
			return visitor.visitType_param(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_param_boundContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_param_bound;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_param_bound) {
	 		listener.enterType_param_bound(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_param_bound) {
	 		listener.exitType_param_bound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_param_bound) {
			return visitor.visitType_param_bound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_param_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_param_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_param_default) {
	 		listener.enterType_param_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_param_default) {
	 		listener.exitType_param_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_param_default) {
			return visitor.visitType_param_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_param_starred_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public star_expression(): Star_expressionContext {
		return this.getTypedRuleContext(Star_expressionContext, 0) as Star_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_param_starred_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_param_starred_default) {
	 		listener.enterType_param_starred_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_param_starred_default) {
	 		listener.exitType_param_starred_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_param_starred_default) {
			return visitor.visitType_param_starred_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_expressions;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterExpressions) {
	 		listener.enterExpressions(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitExpressions) {
	 		listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public disjunction_list(): DisjunctionContext[] {
		return this.getTypedRuleContexts(DisjunctionContext) as DisjunctionContext[];
	}
	public disjunction(i: number): DisjunctionContext {
		return this.getTypedRuleContext(DisjunctionContext, i) as DisjunctionContext;
	}
	public IF(): TerminalNode {
		return this.getToken(PythonParser.IF, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(PythonParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public lambdef(): LambdefContext {
		return this.getTypedRuleContext(LambdefContext, 0) as LambdefContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YIELD(): TerminalNode {
		return this.getToken(PythonParser.YIELD, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(PythonParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public star_expressions(): Star_expressionsContext {
		return this.getTypedRuleContext(Star_expressionsContext, 0) as Star_expressionsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_yield_expr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterYield_expr) {
	 		listener.enterYield_expr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitYield_expr) {
	 		listener.exitYield_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitYield_expr) {
			return visitor.visitYield_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_expressionsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_expression_list(): Star_expressionContext[] {
		return this.getTypedRuleContexts(Star_expressionContext) as Star_expressionContext[];
	}
	public star_expression(i: number): Star_expressionContext {
		return this.getTypedRuleContext(Star_expressionContext, i) as Star_expressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_expressions;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_expressions) {
	 		listener.enterStar_expressions(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_expressions) {
	 		listener.exitStar_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_expressions) {
			return visitor.visitStar_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_expressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_expression) {
	 		listener.enterStar_expression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_expression) {
	 		listener.exitStar_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_expression) {
			return visitor.visitStar_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_named_expressionsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_named_expression_list(): Star_named_expressionContext[] {
		return this.getTypedRuleContexts(Star_named_expressionContext) as Star_named_expressionContext[];
	}
	public star_named_expression(i: number): Star_named_expressionContext {
		return this.getTypedRuleContext(Star_named_expressionContext, i) as Star_named_expressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_named_expressions;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_named_expressions) {
	 		listener.enterStar_named_expressions(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_named_expressions) {
	 		listener.exitStar_named_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_named_expressions) {
			return visitor.visitStar_named_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_named_expressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_named_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_named_expression) {
	 		listener.enterStar_named_expression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_named_expression) {
	 		listener.exitStar_named_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_named_expression) {
			return visitor.visitStar_named_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_expressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public COLONEQUAL(): TerminalNode {
		return this.getToken(PythonParser.COLONEQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_assignment_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAssignment_expression) {
	 		listener.enterAssignment_expression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAssignment_expression) {
	 		listener.exitAssignment_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAssignment_expression) {
			return visitor.visitAssignment_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Named_expressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_expression(): Assignment_expressionContext {
		return this.getTypedRuleContext(Assignment_expressionContext, 0) as Assignment_expressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_named_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterNamed_expression) {
	 		listener.enterNamed_expression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitNamed_expression) {
	 		listener.exitNamed_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitNamed_expression) {
			return visitor.visitNamed_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisjunctionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conjunction_list(): ConjunctionContext[] {
		return this.getTypedRuleContexts(ConjunctionContext) as ConjunctionContext[];
	}
	public conjunction(i: number): ConjunctionContext {
		return this.getTypedRuleContext(ConjunctionContext, i) as ConjunctionContext;
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(PythonParser.OR, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_disjunction;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDisjunction) {
	 		listener.enterDisjunction(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDisjunction) {
	 		listener.exitDisjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDisjunction) {
			return visitor.visitDisjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjunctionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inversion_list(): InversionContext[] {
		return this.getTypedRuleContexts(InversionContext) as InversionContext[];
	}
	public inversion(i: number): InversionContext {
		return this.getTypedRuleContext(InversionContext, i) as InversionContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(PythonParser.AND, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_conjunction;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterConjunction) {
	 		listener.enterConjunction(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitConjunction) {
	 		listener.exitConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InversionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(PythonParser.NOT, 0);
	}
	public inversion(): InversionContext {
		return this.getTypedRuleContext(InversionContext, 0) as InversionContext;
	}
	public comparison(): ComparisonContext {
		return this.getTypedRuleContext(ComparisonContext, 0) as ComparisonContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_inversion;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterInversion) {
	 		listener.enterInversion(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitInversion) {
	 		listener.exitInversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitInversion) {
			return visitor.visitInversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public compare_op_bitwise_or_pair_list(): Compare_op_bitwise_or_pairContext[] {
		return this.getTypedRuleContexts(Compare_op_bitwise_or_pairContext) as Compare_op_bitwise_or_pairContext[];
	}
	public compare_op_bitwise_or_pair(i: number): Compare_op_bitwise_or_pairContext {
		return this.getTypedRuleContext(Compare_op_bitwise_or_pairContext, i) as Compare_op_bitwise_or_pairContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_comparison;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compare_op_bitwise_or_pairContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eq_bitwise_or(): Eq_bitwise_orContext {
		return this.getTypedRuleContext(Eq_bitwise_orContext, 0) as Eq_bitwise_orContext;
	}
	public noteq_bitwise_or(): Noteq_bitwise_orContext {
		return this.getTypedRuleContext(Noteq_bitwise_orContext, 0) as Noteq_bitwise_orContext;
	}
	public lte_bitwise_or(): Lte_bitwise_orContext {
		return this.getTypedRuleContext(Lte_bitwise_orContext, 0) as Lte_bitwise_orContext;
	}
	public lt_bitwise_or(): Lt_bitwise_orContext {
		return this.getTypedRuleContext(Lt_bitwise_orContext, 0) as Lt_bitwise_orContext;
	}
	public gte_bitwise_or(): Gte_bitwise_orContext {
		return this.getTypedRuleContext(Gte_bitwise_orContext, 0) as Gte_bitwise_orContext;
	}
	public gt_bitwise_or(): Gt_bitwise_orContext {
		return this.getTypedRuleContext(Gt_bitwise_orContext, 0) as Gt_bitwise_orContext;
	}
	public notin_bitwise_or(): Notin_bitwise_orContext {
		return this.getTypedRuleContext(Notin_bitwise_orContext, 0) as Notin_bitwise_orContext;
	}
	public in_bitwise_or(): In_bitwise_orContext {
		return this.getTypedRuleContext(In_bitwise_orContext, 0) as In_bitwise_orContext;
	}
	public isnot_bitwise_or(): Isnot_bitwise_orContext {
		return this.getTypedRuleContext(Isnot_bitwise_orContext, 0) as Isnot_bitwise_orContext;
	}
	public is_bitwise_or(): Is_bitwise_orContext {
		return this.getTypedRuleContext(Is_bitwise_orContext, 0) as Is_bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_compare_op_bitwise_or_pair;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterCompare_op_bitwise_or_pair) {
	 		listener.enterCompare_op_bitwise_or_pair(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitCompare_op_bitwise_or_pair) {
	 		listener.exitCompare_op_bitwise_or_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitCompare_op_bitwise_or_pair) {
			return visitor.visitCompare_op_bitwise_or_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eq_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQEQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQEQUAL, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_eq_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterEq_bitwise_or) {
	 		listener.enterEq_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitEq_bitwise_or) {
	 		listener.exitEq_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitEq_bitwise_or) {
			return visitor.visitEq_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Noteq_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public NOTEQUAL(): TerminalNode {
		return this.getToken(PythonParser.NOTEQUAL, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_noteq_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterNoteq_bitwise_or) {
	 		listener.enterNoteq_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitNoteq_bitwise_or) {
	 		listener.exitNoteq_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitNoteq_bitwise_or) {
			return visitor.visitNoteq_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lte_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESSEQUAL(): TerminalNode {
		return this.getToken(PythonParser.LESSEQUAL, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lte_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLte_bitwise_or) {
	 		listener.enterLte_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLte_bitwise_or) {
	 		listener.exitLte_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLte_bitwise_or) {
			return visitor.visitLte_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lt_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS(): TerminalNode {
		return this.getToken(PythonParser.LESS, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lt_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLt_bitwise_or) {
	 		listener.enterLt_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLt_bitwise_or) {
	 		listener.exitLt_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLt_bitwise_or) {
			return visitor.visitLt_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Gte_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GREATEREQUAL(): TerminalNode {
		return this.getToken(PythonParser.GREATEREQUAL, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_gte_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGte_bitwise_or) {
	 		listener.enterGte_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGte_bitwise_or) {
	 		listener.exitGte_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGte_bitwise_or) {
			return visitor.visitGte_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Gt_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GREATER(): TerminalNode {
		return this.getToken(PythonParser.GREATER, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_gt_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGt_bitwise_or) {
	 		listener.enterGt_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGt_bitwise_or) {
	 		listener.exitGt_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGt_bitwise_or) {
			return visitor.visitGt_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Notin_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(PythonParser.NOT, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(PythonParser.IN, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_notin_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterNotin_bitwise_or) {
	 		listener.enterNotin_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitNotin_bitwise_or) {
	 		listener.exitNotin_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitNotin_bitwise_or) {
			return visitor.visitNotin_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class In_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(PythonParser.IN, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_in_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterIn_bitwise_or) {
	 		listener.enterIn_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitIn_bitwise_or) {
	 		listener.exitIn_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitIn_bitwise_or) {
			return visitor.visitIn_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Isnot_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS(): TerminalNode {
		return this.getToken(PythonParser.IS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(PythonParser.NOT, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_isnot_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterIsnot_bitwise_or) {
	 		listener.enterIsnot_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitIsnot_bitwise_or) {
	 		listener.exitIsnot_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitIsnot_bitwise_or) {
			return visitor.visitIsnot_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Is_bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS(): TerminalNode {
		return this.getToken(PythonParser.IS, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_is_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterIs_bitwise_or) {
	 		listener.enterIs_bitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitIs_bitwise_or) {
	 		listener.exitIs_bitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitIs_bitwise_or) {
			return visitor.visitIs_bitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_orContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitwise_xor(): Bitwise_xorContext {
		return this.getTypedRuleContext(Bitwise_xorContext, 0) as Bitwise_xorContext;
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public VBAR(): TerminalNode {
		return this.getToken(PythonParser.VBAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_bitwise_or;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterBitwise_or) {
	 		listener.enterBitwise_or(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitBitwise_or) {
	 		listener.exitBitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitBitwise_or) {
			return visitor.visitBitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_xorContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitwise_and(): Bitwise_andContext {
		return this.getTypedRuleContext(Bitwise_andContext, 0) as Bitwise_andContext;
	}
	public bitwise_xor(): Bitwise_xorContext {
		return this.getTypedRuleContext(Bitwise_xorContext, 0) as Bitwise_xorContext;
	}
	public CIRCUMFLEX(): TerminalNode {
		return this.getToken(PythonParser.CIRCUMFLEX, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_bitwise_xor;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterBitwise_xor) {
	 		listener.enterBitwise_xor(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitBitwise_xor) {
	 		listener.exitBitwise_xor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitBitwise_xor) {
			return visitor.visitBitwise_xor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_andContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shift_expr(): Shift_exprContext {
		return this.getTypedRuleContext(Shift_exprContext, 0) as Shift_exprContext;
	}
	public bitwise_and(): Bitwise_andContext {
		return this.getTypedRuleContext(Bitwise_andContext, 0) as Bitwise_andContext;
	}
	public AMPER(): TerminalNode {
		return this.getToken(PythonParser.AMPER, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_bitwise_and;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterBitwise_and) {
	 		listener.enterBitwise_and(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitBitwise_and) {
	 		listener.exitBitwise_and(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitBitwise_and) {
			return visitor.visitBitwise_and(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_exprContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sum(): SumContext {
		return this.getTypedRuleContext(SumContext, 0) as SumContext;
	}
	public shift_expr(): Shift_exprContext {
		return this.getTypedRuleContext(Shift_exprContext, 0) as Shift_exprContext;
	}
	public LEFTSHIFT(): TerminalNode {
		return this.getToken(PythonParser.LEFTSHIFT, 0);
	}
	public RIGHTSHIFT(): TerminalNode {
		return this.getToken(PythonParser.RIGHTSHIFT, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_shift_expr;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterShift_expr) {
	 		listener.enterShift_expr(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitShift_expr) {
	 		listener.exitShift_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitShift_expr) {
			return visitor.visitShift_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SumContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term(): TermContext {
		return this.getTypedRuleContext(TermContext, 0) as TermContext;
	}
	public sum(): SumContext {
		return this.getTypedRuleContext(SumContext, 0) as SumContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(PythonParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(PythonParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_sum;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSum) {
	 		listener.enterSum(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSum) {
	 		listener.exitSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSum) {
			return visitor.visitSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public factor(): FactorContext {
		return this.getTypedRuleContext(FactorContext, 0) as FactorContext;
	}
	public term(): TermContext {
		return this.getTypedRuleContext(TermContext, 0) as TermContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(PythonParser.SLASH, 0);
	}
	public DOUBLESLASH(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(PythonParser.PERCENT, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(PythonParser.AT, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_term;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterTerm) {
	 		listener.enterTerm(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitTerm) {
	 		listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(PythonParser.PLUS, 0);
	}
	public factor(): FactorContext {
		return this.getTypedRuleContext(FactorContext, 0) as FactorContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(PythonParser.MINUS, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(PythonParser.TILDE, 0);
	}
	public power(): PowerContext {
		return this.getTypedRuleContext(PowerContext, 0) as PowerContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_factor;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFactor) {
	 		listener.enterFactor(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFactor) {
	 		listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public await_primary(): Await_primaryContext {
		return this.getTypedRuleContext(Await_primaryContext, 0) as Await_primaryContext;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
	public factor(): FactorContext {
		return this.getTypedRuleContext(FactorContext, 0) as FactorContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_power;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPower) {
	 		listener.enterPower(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPower) {
	 		listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Await_primaryContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AWAIT(): TerminalNode {
		return this.getToken(PythonParser.AWAIT, 0);
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_await_primary;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAwait_primary) {
	 		listener.enterAwait_primary(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAwait_primary) {
	 		listener.exitAwait_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAwait_primary) {
			return visitor.visitAwait_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public genexp(): GenexpContext {
		return this.getTypedRuleContext(GenexpContext, 0) as GenexpContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public slices(): SlicesContext {
		return this.getTypedRuleContext(SlicesContext, 0) as SlicesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_primary;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SlicesContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public slice_list(): SliceContext[] {
		return this.getTypedRuleContexts(SliceContext) as SliceContext[];
	}
	public slice(i: number): SliceContext {
		return this.getTypedRuleContext(SliceContext, i) as SliceContext;
	}
	public starred_expression_list(): Starred_expressionContext[] {
		return this.getTypedRuleContexts(Starred_expressionContext) as Starred_expressionContext[];
	}
	public starred_expression(i: number): Starred_expressionContext {
		return this.getTypedRuleContext(Starred_expressionContext, i) as Starred_expressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_slices;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSlices) {
	 		listener.enterSlices(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSlices) {
	 		listener.exitSlices(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSlices) {
			return visitor.visitSlices(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(PythonParser.COLON, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_slice;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSlice) {
	 		listener.enterSlice(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSlice) {
	 		listener.exitSlice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSlice) {
			return visitor.visitSlice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public TRUE(): TerminalNode {
		return this.getToken(PythonParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(PythonParser.FALSE, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(PythonParser.NONE, 0);
	}
	public strings(): StringsContext {
		return this.getTypedRuleContext(StringsContext, 0) as StringsContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(PythonParser.NUMBER, 0);
	}
	public tuple(): TupleContext {
		return this.getTypedRuleContext(TupleContext, 0) as TupleContext;
	}
	public group(): GroupContext {
		return this.getTypedRuleContext(GroupContext, 0) as GroupContext;
	}
	public genexp(): GenexpContext {
		return this.getTypedRuleContext(GenexpContext, 0) as GenexpContext;
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}
	public listcomp(): ListcompContext {
		return this.getTypedRuleContext(ListcompContext, 0) as ListcompContext;
	}
	public dict(): DictContext {
		return this.getTypedRuleContext(DictContext, 0) as DictContext;
	}
	public set_(): SetContext {
		return this.getTypedRuleContext(SetContext, 0) as SetContext;
	}
	public dictcomp(): DictcompContext {
		return this.getTypedRuleContext(DictcompContext, 0) as DictcompContext;
	}
	public setcomp(): SetcompContext {
		return this.getTypedRuleContext(SetcompContext, 0) as SetcompContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(PythonParser.ELLIPSIS, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_atom;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_group;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdefContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LAMBDA(): TerminalNode {
		return this.getToken(PythonParser.LAMBDA, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public lambda_params(): Lambda_paramsContext {
		return this.getTypedRuleContext(Lambda_paramsContext, 0) as Lambda_paramsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambdef;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambdef) {
	 		listener.enterLambdef(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambdef) {
	 		listener.exitLambdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambdef) {
			return visitor.visitLambdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_paramsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambda_parameters(): Lambda_parametersContext {
		return this.getTypedRuleContext(Lambda_parametersContext, 0) as Lambda_parametersContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_params;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_params) {
	 		listener.enterLambda_params(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_params) {
	 		listener.exitLambda_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_params) {
			return visitor.visitLambda_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_parametersContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambda_slash_no_default(): Lambda_slash_no_defaultContext {
		return this.getTypedRuleContext(Lambda_slash_no_defaultContext, 0) as Lambda_slash_no_defaultContext;
	}
	public lambda_param_no_default_list(): Lambda_param_no_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_no_defaultContext) as Lambda_param_no_defaultContext[];
	}
	public lambda_param_no_default(i: number): Lambda_param_no_defaultContext {
		return this.getTypedRuleContext(Lambda_param_no_defaultContext, i) as Lambda_param_no_defaultContext;
	}
	public lambda_param_with_default_list(): Lambda_param_with_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_with_defaultContext) as Lambda_param_with_defaultContext[];
	}
	public lambda_param_with_default(i: number): Lambda_param_with_defaultContext {
		return this.getTypedRuleContext(Lambda_param_with_defaultContext, i) as Lambda_param_with_defaultContext;
	}
	public lambda_star_etc(): Lambda_star_etcContext {
		return this.getTypedRuleContext(Lambda_star_etcContext, 0) as Lambda_star_etcContext;
	}
	public lambda_slash_with_default(): Lambda_slash_with_defaultContext {
		return this.getTypedRuleContext(Lambda_slash_with_defaultContext, 0) as Lambda_slash_with_defaultContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_parameters;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_parameters) {
	 		listener.enterLambda_parameters(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_parameters) {
	 		listener.exitLambda_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_parameters) {
			return visitor.visitLambda_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_slash_no_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(PythonParser.SLASH, 0);
	}
	public lambda_param_no_default_list(): Lambda_param_no_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_no_defaultContext) as Lambda_param_no_defaultContext[];
	}
	public lambda_param_no_default(i: number): Lambda_param_no_defaultContext {
		return this.getTypedRuleContext(Lambda_param_no_defaultContext, i) as Lambda_param_no_defaultContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_slash_no_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_slash_no_default) {
	 		listener.enterLambda_slash_no_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_slash_no_default) {
	 		listener.exitLambda_slash_no_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_slash_no_default) {
			return visitor.visitLambda_slash_no_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_slash_with_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(PythonParser.SLASH, 0);
	}
	public lambda_param_no_default_list(): Lambda_param_no_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_no_defaultContext) as Lambda_param_no_defaultContext[];
	}
	public lambda_param_no_default(i: number): Lambda_param_no_defaultContext {
		return this.getTypedRuleContext(Lambda_param_no_defaultContext, i) as Lambda_param_no_defaultContext;
	}
	public lambda_param_with_default_list(): Lambda_param_with_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_with_defaultContext) as Lambda_param_with_defaultContext[];
	}
	public lambda_param_with_default(i: number): Lambda_param_with_defaultContext {
		return this.getTypedRuleContext(Lambda_param_with_defaultContext, i) as Lambda_param_with_defaultContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_slash_with_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_slash_with_default) {
	 		listener.enterLambda_slash_with_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_slash_with_default) {
	 		listener.exitLambda_slash_with_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_slash_with_default) {
			return visitor.visitLambda_slash_with_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_star_etcContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public lambda_param_no_default(): Lambda_param_no_defaultContext {
		return this.getTypedRuleContext(Lambda_param_no_defaultContext, 0) as Lambda_param_no_defaultContext;
	}
	public lambda_param_maybe_default_list(): Lambda_param_maybe_defaultContext[] {
		return this.getTypedRuleContexts(Lambda_param_maybe_defaultContext) as Lambda_param_maybe_defaultContext[];
	}
	public lambda_param_maybe_default(i: number): Lambda_param_maybe_defaultContext {
		return this.getTypedRuleContext(Lambda_param_maybe_defaultContext, i) as Lambda_param_maybe_defaultContext;
	}
	public lambda_kwds(): Lambda_kwdsContext {
		return this.getTypedRuleContext(Lambda_kwdsContext, 0) as Lambda_kwdsContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_star_etc;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_star_etc) {
	 		listener.enterLambda_star_etc(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_star_etc) {
	 		listener.exitLambda_star_etc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_star_etc) {
			return visitor.visitLambda_star_etc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_kwdsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
	public lambda_param_no_default(): Lambda_param_no_defaultContext {
		return this.getTypedRuleContext(Lambda_param_no_defaultContext, 0) as Lambda_param_no_defaultContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_kwds;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_kwds) {
	 		listener.enterLambda_kwds(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_kwds) {
	 		listener.exitLambda_kwds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_kwds) {
			return visitor.visitLambda_kwds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_param_no_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambda_param(): Lambda_paramContext {
		return this.getTypedRuleContext(Lambda_paramContext, 0) as Lambda_paramContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_param_no_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_param_no_default) {
	 		listener.enterLambda_param_no_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_param_no_default) {
	 		listener.exitLambda_param_no_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_param_no_default) {
			return visitor.visitLambda_param_no_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_param_with_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambda_param(): Lambda_paramContext {
		return this.getTypedRuleContext(Lambda_paramContext, 0) as Lambda_paramContext;
	}
	public default_assignment(): Default_assignmentContext {
		return this.getTypedRuleContext(Default_assignmentContext, 0) as Default_assignmentContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_param_with_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_param_with_default) {
	 		listener.enterLambda_param_with_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_param_with_default) {
	 		listener.exitLambda_param_with_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_param_with_default) {
			return visitor.visitLambda_param_with_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_param_maybe_defaultContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambda_param(): Lambda_paramContext {
		return this.getTypedRuleContext(Lambda_paramContext, 0) as Lambda_paramContext;
	}
	public default_assignment(): Default_assignmentContext {
		return this.getTypedRuleContext(Default_assignmentContext, 0) as Default_assignmentContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_param_maybe_default;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_param_maybe_default) {
	 		listener.enterLambda_param_maybe_default(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_param_maybe_default) {
	 		listener.exitLambda_param_maybe_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_param_maybe_default) {
			return visitor.visitLambda_param_maybe_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_paramContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_lambda_param;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterLambda_param) {
	 		listener.enterLambda_param(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitLambda_param) {
	 		listener.exitLambda_param(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitLambda_param) {
			return visitor.visitLambda_param(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fstring_middleContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fstring_replacement_field(): Fstring_replacement_fieldContext {
		return this.getTypedRuleContext(Fstring_replacement_fieldContext, 0) as Fstring_replacement_fieldContext;
	}
	public FSTRING_MIDDLE(): TerminalNode {
		return this.getToken(PythonParser.FSTRING_MIDDLE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring_middle;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring_middle) {
	 		listener.enterFstring_middle(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring_middle) {
	 		listener.exitFstring_middle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring_middle) {
			return visitor.visitFstring_middle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fstring_replacement_fieldContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public annotated_rhs(): Annotated_rhsContext {
		return this.getTypedRuleContext(Annotated_rhsContext, 0) as Annotated_rhsContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public fstring_conversion(): Fstring_conversionContext {
		return this.getTypedRuleContext(Fstring_conversionContext, 0) as Fstring_conversionContext;
	}
	public fstring_full_format_spec(): Fstring_full_format_specContext {
		return this.getTypedRuleContext(Fstring_full_format_specContext, 0) as Fstring_full_format_specContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring_replacement_field;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring_replacement_field) {
	 		listener.enterFstring_replacement_field(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring_replacement_field) {
	 		listener.exitFstring_replacement_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring_replacement_field) {
			return visitor.visitFstring_replacement_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fstring_conversionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(PythonParser.EXCLAMATION, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring_conversion;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring_conversion) {
	 		listener.enterFstring_conversion(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring_conversion) {
	 		listener.exitFstring_conversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring_conversion) {
			return visitor.visitFstring_conversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fstring_full_format_specContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
	public fstring_format_spec_list(): Fstring_format_specContext[] {
		return this.getTypedRuleContexts(Fstring_format_specContext) as Fstring_format_specContext[];
	}
	public fstring_format_spec(i: number): Fstring_format_specContext {
		return this.getTypedRuleContext(Fstring_format_specContext, i) as Fstring_format_specContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring_full_format_spec;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring_full_format_spec) {
	 		listener.enterFstring_full_format_spec(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring_full_format_spec) {
	 		listener.exitFstring_full_format_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring_full_format_spec) {
			return visitor.visitFstring_full_format_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fstring_format_specContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FSTRING_MIDDLE(): TerminalNode {
		return this.getToken(PythonParser.FSTRING_MIDDLE, 0);
	}
	public fstring_replacement_field(): Fstring_replacement_fieldContext {
		return this.getTypedRuleContext(Fstring_replacement_fieldContext, 0) as Fstring_replacement_fieldContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring_format_spec;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring_format_spec) {
	 		listener.enterFstring_format_spec(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring_format_spec) {
	 		listener.exitFstring_format_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring_format_spec) {
			return visitor.visitFstring_format_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FstringContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FSTRING_START(): TerminalNode {
		return this.getToken(PythonParser.FSTRING_START, 0);
	}
	public FSTRING_END(): TerminalNode {
		return this.getToken(PythonParser.FSTRING_END, 0);
	}
	public fstring_middle_list(): Fstring_middleContext[] {
		return this.getTypedRuleContexts(Fstring_middleContext) as Fstring_middleContext[];
	}
	public fstring_middle(i: number): Fstring_middleContext {
		return this.getTypedRuleContext(Fstring_middleContext, i) as Fstring_middleContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_fstring;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFstring) {
	 		listener.enterFstring(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFstring) {
	 		listener.exitFstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFstring) {
			return visitor.visitFstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(PythonParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_string;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fstring_list(): FstringContext[] {
		return this.getTypedRuleContexts(FstringContext) as FstringContext[];
	}
	public fstring(i: number): FstringContext {
		return this.getTypedRuleContext(FstringContext, i) as FstringContext;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_strings;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStrings) {
	 		listener.enterStrings(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStrings) {
	 		listener.exitStrings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStrings) {
			return visitor.visitStrings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public star_named_expressions(): Star_named_expressionsContext {
		return this.getTypedRuleContext(Star_named_expressionsContext, 0) as Star_named_expressionsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_list;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public star_named_expression(): Star_named_expressionContext {
		return this.getTypedRuleContext(Star_named_expressionContext, 0) as Star_named_expressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
	public star_named_expressions(): Star_named_expressionsContext {
		return this.getTypedRuleContext(Star_named_expressionsContext, 0) as Star_named_expressionsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_tuple;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterTuple) {
	 		listener.enterTuple(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitTuple) {
	 		listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public star_named_expressions(): Star_named_expressionsContext {
		return this.getTypedRuleContext(Star_named_expressionsContext, 0) as Star_named_expressionsContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_set;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSet) {
	 		listener.enterSet(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSet) {
	 		listener.exitSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
	public double_starred_kvpairs(): Double_starred_kvpairsContext {
		return this.getTypedRuleContext(Double_starred_kvpairsContext, 0) as Double_starred_kvpairsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_dict;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDict) {
	 		listener.enterDict(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDict) {
	 		listener.exitDict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDict) {
			return visitor.visitDict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Double_starred_kvpairsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public double_starred_kvpair_list(): Double_starred_kvpairContext[] {
		return this.getTypedRuleContexts(Double_starred_kvpairContext) as Double_starred_kvpairContext[];
	}
	public double_starred_kvpair(i: number): Double_starred_kvpairContext {
		return this.getTypedRuleContext(Double_starred_kvpairContext, i) as Double_starred_kvpairContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_double_starred_kvpairs;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDouble_starred_kvpairs) {
	 		listener.enterDouble_starred_kvpairs(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDouble_starred_kvpairs) {
	 		listener.exitDouble_starred_kvpairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDouble_starred_kvpairs) {
			return visitor.visitDouble_starred_kvpairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Double_starred_kvpairContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
	public bitwise_or(): Bitwise_orContext {
		return this.getTypedRuleContext(Bitwise_orContext, 0) as Bitwise_orContext;
	}
	public kvpair(): KvpairContext {
		return this.getTypedRuleContext(KvpairContext, 0) as KvpairContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_double_starred_kvpair;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDouble_starred_kvpair) {
	 		listener.enterDouble_starred_kvpair(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDouble_starred_kvpair) {
	 		listener.exitDouble_starred_kvpair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDouble_starred_kvpair) {
			return visitor.visitDouble_starred_kvpair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KvpairContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(PythonParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_kvpair;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKvpair) {
	 		listener.enterKvpair(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKvpair) {
	 		listener.exitKvpair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKvpair) {
			return visitor.visitKvpair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_if_clausesContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public for_if_clause_list(): For_if_clauseContext[] {
		return this.getTypedRuleContexts(For_if_clauseContext) as For_if_clauseContext[];
	}
	public for_if_clause(i: number): For_if_clauseContext {
		return this.getTypedRuleContext(For_if_clauseContext, i) as For_if_clauseContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_for_if_clauses;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFor_if_clauses) {
	 		listener.enterFor_if_clauses(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFor_if_clauses) {
	 		listener.exitFor_if_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFor_if_clauses) {
			return visitor.visitFor_if_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_if_clauseContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(PythonParser.FOR, 0);
	}
	public star_targets(): Star_targetsContext {
		return this.getTypedRuleContext(Star_targetsContext, 0) as Star_targetsContext;
	}
	public IN(): TerminalNode {
		return this.getToken(PythonParser.IN, 0);
	}
	public disjunction_list(): DisjunctionContext[] {
		return this.getTypedRuleContexts(DisjunctionContext) as DisjunctionContext[];
	}
	public disjunction(i: number): DisjunctionContext {
		return this.getTypedRuleContext(DisjunctionContext, i) as DisjunctionContext;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(PythonParser.ASYNC, 0);
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(PythonParser.IF, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_for_if_clause;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFor_if_clause) {
	 		listener.enterFor_if_clause(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFor_if_clause) {
	 		listener.exitFor_if_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFor_if_clause) {
			return visitor.visitFor_if_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListcompContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
	public for_if_clauses(): For_if_clausesContext {
		return this.getTypedRuleContext(For_if_clausesContext, 0) as For_if_clausesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_listcomp;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterListcomp) {
	 		listener.enterListcomp(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitListcomp) {
	 		listener.exitListcomp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitListcomp) {
			return visitor.visitListcomp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetcompContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public named_expression(): Named_expressionContext {
		return this.getTypedRuleContext(Named_expressionContext, 0) as Named_expressionContext;
	}
	public for_if_clauses(): For_if_clausesContext {
		return this.getTypedRuleContext(For_if_clausesContext, 0) as For_if_clausesContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_setcomp;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSetcomp) {
	 		listener.enterSetcomp(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSetcomp) {
	 		listener.exitSetcomp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSetcomp) {
			return visitor.visitSetcomp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenexpContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public for_if_clauses(): For_if_clausesContext {
		return this.getTypedRuleContext(For_if_clausesContext, 0) as For_if_clausesContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public assignment_expression(): Assignment_expressionContext {
		return this.getTypedRuleContext(Assignment_expressionContext, 0) as Assignment_expressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_genexp;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterGenexp) {
	 		listener.enterGenexp(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitGenexp) {
	 		listener.exitGenexp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitGenexp) {
			return visitor.visitGenexp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictcompContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PythonParser.LBRACE, 0);
	}
	public kvpair(): KvpairContext {
		return this.getTypedRuleContext(KvpairContext, 0) as KvpairContext;
	}
	public for_if_clauses(): For_if_clausesContext {
		return this.getTypedRuleContext(For_if_clausesContext, 0) as For_if_clausesContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PythonParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_dictcomp;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDictcomp) {
	 		listener.enterDictcomp(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDictcomp) {
	 		listener.exitDictcomp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDictcomp) {
			return visitor.visitDictcomp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PythonParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_arguments;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public starred_expression_list(): Starred_expressionContext[] {
		return this.getTypedRuleContexts(Starred_expressionContext) as Starred_expressionContext[];
	}
	public starred_expression(i: number): Starred_expressionContext {
		return this.getTypedRuleContext(Starred_expressionContext, i) as Starred_expressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
	public kwargs(): KwargsContext {
		return this.getTypedRuleContext(KwargsContext, 0) as KwargsContext;
	}
	public assignment_expression_list(): Assignment_expressionContext[] {
		return this.getTypedRuleContexts(Assignment_expressionContext) as Assignment_expressionContext[];
	}
	public assignment_expression(i: number): Assignment_expressionContext {
		return this.getTypedRuleContext(Assignment_expressionContext, i) as Assignment_expressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_args;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterArgs) {
	 		listener.enterArgs(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitArgs) {
	 		listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KwargsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public kwarg_or_starred_list(): Kwarg_or_starredContext[] {
		return this.getTypedRuleContexts(Kwarg_or_starredContext) as Kwarg_or_starredContext[];
	}
	public kwarg_or_starred(i: number): Kwarg_or_starredContext {
		return this.getTypedRuleContext(Kwarg_or_starredContext, i) as Kwarg_or_starredContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
	public kwarg_or_double_starred_list(): Kwarg_or_double_starredContext[] {
		return this.getTypedRuleContexts(Kwarg_or_double_starredContext) as Kwarg_or_double_starredContext[];
	}
	public kwarg_or_double_starred(i: number): Kwarg_or_double_starredContext {
		return this.getTypedRuleContext(Kwarg_or_double_starredContext, i) as Kwarg_or_double_starredContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_kwargs;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKwargs) {
	 		listener.enterKwargs(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKwargs) {
	 		listener.exitKwargs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKwargs) {
			return visitor.visitKwargs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Starred_expressionContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_starred_expression;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStarred_expression) {
	 		listener.enterStarred_expression(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStarred_expression) {
	 		listener.exitStarred_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStarred_expression) {
			return visitor.visitStarred_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Kwarg_or_starredContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public starred_expression(): Starred_expressionContext {
		return this.getTypedRuleContext(Starred_expressionContext, 0) as Starred_expressionContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_kwarg_or_starred;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKwarg_or_starred) {
	 		listener.enterKwarg_or_starred(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKwarg_or_starred) {
	 		listener.exitKwarg_or_starred(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKwarg_or_starred) {
			return visitor.visitKwarg_or_starred(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Kwarg_or_double_starredContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(PythonParser.EQUAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_kwarg_or_double_starred;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterKwarg_or_double_starred) {
	 		listener.enterKwarg_or_double_starred(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitKwarg_or_double_starred) {
	 		listener.exitKwarg_or_double_starred(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitKwarg_or_double_starred) {
			return visitor.visitKwarg_or_double_starred(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_targetsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_target_list(): Star_targetContext[] {
		return this.getTypedRuleContexts(Star_targetContext) as Star_targetContext[];
	}
	public star_target(i: number): Star_targetContext {
		return this.getTypedRuleContext(Star_targetContext, i) as Star_targetContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_targets;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_targets) {
	 		listener.enterStar_targets(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_targets) {
	 		listener.exitStar_targets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_targets) {
			return visitor.visitStar_targets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_targets_list_seqContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_target_list(): Star_targetContext[] {
		return this.getTypedRuleContexts(Star_targetContext) as Star_targetContext[];
	}
	public star_target(i: number): Star_targetContext {
		return this.getTypedRuleContext(Star_targetContext, i) as Star_targetContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_targets_list_seq;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_targets_list_seq) {
	 		listener.enterStar_targets_list_seq(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_targets_list_seq) {
	 		listener.exitStar_targets_list_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_targets_list_seq) {
			return visitor.visitStar_targets_list_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_targets_tuple_seqContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_target_list(): Star_targetContext[] {
		return this.getTypedRuleContexts(Star_targetContext) as Star_targetContext[];
	}
	public star_target(i: number): Star_targetContext {
		return this.getTypedRuleContext(Star_targetContext, i) as Star_targetContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_targets_tuple_seq;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_targets_tuple_seq) {
	 		listener.enterStar_targets_tuple_seq(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_targets_tuple_seq) {
	 		listener.exitStar_targets_tuple_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_targets_tuple_seq) {
			return visitor.visitStar_targets_tuple_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_targetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public star_target(): Star_targetContext {
		return this.getTypedRuleContext(Star_targetContext, 0) as Star_targetContext;
	}
	public target_with_star_atom(): Target_with_star_atomContext {
		return this.getTypedRuleContext(Target_with_star_atomContext, 0) as Target_with_star_atomContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_target;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_target) {
	 		listener.enterStar_target(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_target) {
	 		listener.exitStar_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_target) {
			return visitor.visitStar_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Target_with_star_atomContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public t_primary(): T_primaryContext {
		return this.getTypedRuleContext(T_primaryContext, 0) as T_primaryContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public slices(): SlicesContext {
		return this.getTypedRuleContext(SlicesContext, 0) as SlicesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public star_atom(): Star_atomContext {
		return this.getTypedRuleContext(Star_atomContext, 0) as Star_atomContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_target_with_star_atom;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterTarget_with_star_atom) {
	 		listener.enterTarget_with_star_atom(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitTarget_with_star_atom) {
	 		listener.exitTarget_with_star_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitTarget_with_star_atom) {
			return visitor.visitTarget_with_star_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_atomContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public target_with_star_atom(): Target_with_star_atomContext {
		return this.getTypedRuleContext(Target_with_star_atomContext, 0) as Target_with_star_atomContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public star_targets_tuple_seq(): Star_targets_tuple_seqContext {
		return this.getTypedRuleContext(Star_targets_tuple_seqContext, 0) as Star_targets_tuple_seqContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public star_targets_list_seq(): Star_targets_list_seqContext {
		return this.getTypedRuleContext(Star_targets_list_seqContext, 0) as Star_targets_list_seqContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_star_atom;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStar_atom) {
	 		listener.enterStar_atom(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStar_atom) {
	 		listener.exitStar_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStar_atom) {
			return visitor.visitStar_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_targetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_subscript_attribute_target(): Single_subscript_attribute_targetContext {
		return this.getTypedRuleContext(Single_subscript_attribute_targetContext, 0) as Single_subscript_attribute_targetContext;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public single_target(): Single_targetContext {
		return this.getTypedRuleContext(Single_targetContext, 0) as Single_targetContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_single_target;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSingle_target) {
	 		listener.enterSingle_target(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSingle_target) {
	 		listener.exitSingle_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSingle_target) {
			return visitor.visitSingle_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_subscript_attribute_targetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public t_primary(): T_primaryContext {
		return this.getTypedRuleContext(T_primaryContext, 0) as T_primaryContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public slices(): SlicesContext {
		return this.getTypedRuleContext(SlicesContext, 0) as SlicesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_single_subscript_attribute_target;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterSingle_subscript_attribute_target) {
	 		listener.enterSingle_subscript_attribute_target(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitSingle_subscript_attribute_target) {
	 		listener.exitSingle_subscript_attribute_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitSingle_subscript_attribute_target) {
			return visitor.visitSingle_subscript_attribute_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class T_primaryContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public t_primary(): T_primaryContext {
		return this.getTypedRuleContext(T_primaryContext, 0) as T_primaryContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public slices(): SlicesContext {
		return this.getTypedRuleContext(SlicesContext, 0) as SlicesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public genexp(): GenexpContext {
		return this.getTypedRuleContext(GenexpContext, 0) as GenexpContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_t_primary;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterT_primary) {
	 		listener.enterT_primary(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitT_primary) {
	 		listener.exitT_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitT_primary) {
			return visitor.visitT_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_targetsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public del_target_list(): Del_targetContext[] {
		return this.getTypedRuleContexts(Del_targetContext) as Del_targetContext[];
	}
	public del_target(i: number): Del_targetContext {
		return this.getTypedRuleContext(Del_targetContext, i) as Del_targetContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_del_targets;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDel_targets) {
	 		listener.enterDel_targets(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDel_targets) {
	 		listener.exitDel_targets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDel_targets) {
			return visitor.visitDel_targets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_targetContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public t_primary(): T_primaryContext {
		return this.getTypedRuleContext(T_primaryContext, 0) as T_primaryContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(PythonParser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public slices(): SlicesContext {
		return this.getTypedRuleContext(SlicesContext, 0) as SlicesContext;
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
	public del_t_atom(): Del_t_atomContext {
		return this.getTypedRuleContext(Del_t_atomContext, 0) as Del_t_atomContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_del_target;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDel_target) {
	 		listener.enterDel_target(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDel_target) {
	 		listener.exitDel_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDel_target) {
			return visitor.visitDel_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_t_atomContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(PythonParser.LPAR, 0);
	}
	public del_target(): Del_targetContext {
		return this.getTypedRuleContext(Del_targetContext, 0) as Del_targetContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(PythonParser.RPAR, 0);
	}
	public del_targets(): Del_targetsContext {
		return this.getTypedRuleContext(Del_targetsContext, 0) as Del_targetsContext;
	}
	public LSQB(): TerminalNode {
		return this.getToken(PythonParser.LSQB, 0);
	}
	public RSQB(): TerminalNode {
		return this.getToken(PythonParser.RSQB, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_del_t_atom;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterDel_t_atom) {
	 		listener.enterDel_t_atom(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitDel_t_atom) {
	 		listener.exitDel_t_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitDel_t_atom) {
			return visitor.visitDel_t_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_expressionsContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PythonParser.COMMA, i);
	}
	public STAR(): TerminalNode {
		return this.getToken(PythonParser.STAR, 0);
	}
	public DOUBLESTAR(): TerminalNode {
		return this.getToken(PythonParser.DOUBLESTAR, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_type_expressions;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterType_expressions) {
	 		listener.enterType_expressions(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitType_expressions) {
	 		listener.exitType_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitType_expressions) {
			return visitor.visitType_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Name_except_underscoreContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(PythonParser.NAME, 0);
	}
	public NAME_OR_TYPE(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_TYPE, 0);
	}
	public NAME_OR_MATCH(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_MATCH, 0);
	}
	public NAME_OR_CASE(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_CASE, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_name_except_underscore;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterName_except_underscore) {
	 		listener.enterName_except_underscore(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitName_except_underscore) {
	 		listener.exitName_except_underscore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitName_except_underscore) {
			return visitor.visitName_except_underscore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_OR_WILDCARD(): TerminalNode {
		return this.getToken(PythonParser.NAME_OR_WILDCARD, 0);
	}
	public name_except_underscore(): Name_except_underscoreContext {
		return this.getTypedRuleContext(Name_except_underscoreContext, 0) as Name_except_underscoreContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_name;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
