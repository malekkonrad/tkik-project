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
	public static readonly TYPE_COMMENT = 4;
	public static readonly FSTRING_START = 5;
	public static readonly FSTRING_MIDDLE = 6;
	public static readonly FSTRING_END = 7;
	public static readonly LPAR = 8;
	public static readonly LSQB = 9;
	public static readonly LBRACE = 10;
	public static readonly RPAR = 11;
	public static readonly RSQB = 12;
	public static readonly RBRACE = 13;
	public static readonly DOT = 14;
	public static readonly COLON = 15;
	public static readonly COMMA = 16;
	public static readonly SEMI = 17;
	public static readonly PLUS = 18;
	public static readonly MINUS = 19;
	public static readonly STAR = 20;
	public static readonly SLASH = 21;
	public static readonly VBAR = 22;
	public static readonly AMPER = 23;
	public static readonly LESS = 24;
	public static readonly GREATER = 25;
	public static readonly EQUAL = 26;
	public static readonly PERCENT = 27;
	public static readonly EQEQUAL = 28;
	public static readonly NOTEQUAL = 29;
	public static readonly LESSEQUAL = 30;
	public static readonly GREATEREQUAL = 31;
	public static readonly TILDE = 32;
	public static readonly CIRCUMFLEX = 33;
	public static readonly LEFTSHIFT = 34;
	public static readonly RIGHTSHIFT = 35;
	public static readonly DOUBLESTAR = 36;
	public static readonly PLUSEQUAL = 37;
	public static readonly MINEQUAL = 38;
	public static readonly STAREQUAL = 39;
	public static readonly SLASHEQUAL = 40;
	public static readonly PERCENTEQUAL = 41;
	public static readonly AMPEREQUAL = 42;
	public static readonly VBAREQUAL = 43;
	public static readonly CIRCUMFLEXEQUAL = 44;
	public static readonly LEFTSHIFTEQUAL = 45;
	public static readonly RIGHTSHIFTEQUAL = 46;
	public static readonly DOUBLESTAREQUAL = 47;
	public static readonly DOUBLESLASH = 48;
	public static readonly DOUBLESLASHEQUAL = 49;
	public static readonly AT = 50;
	public static readonly ATEQUAL = 51;
	public static readonly RARROW = 52;
	public static readonly ELLIPSIS = 53;
	public static readonly COLONEQUAL = 54;
	public static readonly EXCLAMATION = 55;
	public static readonly FALSE = 56;
	public static readonly AWAIT = 57;
	public static readonly ELSE = 58;
	public static readonly IMPORT = 59;
	public static readonly PASS = 60;
	public static readonly NONE = 61;
	public static readonly BREAK = 62;
	public static readonly EXCEPT = 63;
	public static readonly IN = 64;
	public static readonly RAISE = 65;
	public static readonly TRUE = 66;
	public static readonly CLASS = 67;
	public static readonly FINALLY = 68;
	public static readonly IS = 69;
	public static readonly RETURN = 70;
	public static readonly AND = 71;
	public static readonly CONTINUE = 72;
	public static readonly FOR = 73;
	public static readonly LAMBDA = 74;
	public static readonly TRY = 75;
	public static readonly AS = 76;
	public static readonly DEF = 77;
	public static readonly FROM = 78;
	public static readonly NONLOCAL = 79;
	public static readonly WHILE = 80;
	public static readonly ASSERT = 81;
	public static readonly DEL = 82;
	public static readonly GLOBAL = 83;
	public static readonly NOT = 84;
	public static readonly WITH = 85;
	public static readonly ASYNC = 86;
	public static readonly ELIF = 87;
	public static readonly IF = 88;
	public static readonly OR = 89;
	public static readonly YIELD = 90;
	public static readonly NAME_OR_TYPE = 91;
	public static readonly NAME_OR_MATCH = 92;
	public static readonly NAME_OR_CASE = 93;
	public static readonly NAME_OR_WILDCARD = 94;
	public static readonly NAME = 95;
	public static readonly NUMBER = 96;
	public static readonly STRING = 97;
	public static readonly NEWLINE = 98;
	public static readonly COMMENT = 99;
	public static readonly WS = 100;
	public static readonly EXPLICIT_LINE_JOINING = 101;
	public static readonly ERRORTOKEN = 102;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_interactive = 1;
	public static readonly RULE_eval = 2;
	public static readonly RULE_func_type = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_statement_newline = 6;
	public static readonly RULE_simple_stmts = 7;
	public static readonly RULE_simple_stmt = 8;
	public static readonly RULE_compound_stmt = 9;
	public static readonly RULE_assignment = 10;
	public static readonly RULE_annotated_rhs = 11;
	public static readonly RULE_augassign = 12;
	public static readonly RULE_return_stmt = 13;
	public static readonly RULE_raise_stmt = 14;
	public static readonly RULE_global_stmt = 15;
	public static readonly RULE_nonlocal_stmt = 16;
	public static readonly RULE_del_stmt = 17;
	public static readonly RULE_yield_stmt = 18;
	public static readonly RULE_assert_stmt = 19;
	public static readonly RULE_import_stmt = 20;
	public static readonly RULE_import_name = 21;
	public static readonly RULE_import_from = 22;
	public static readonly RULE_import_from_targets = 23;
	public static readonly RULE_import_from_as_names = 24;
	public static readonly RULE_import_from_as_name = 25;
	public static readonly RULE_dotted_as_names = 26;
	public static readonly RULE_dotted_as_name = 27;
	public static readonly RULE_dotted_name = 28;
	public static readonly RULE_block = 29;
	public static readonly RULE_decorators = 30;
	public static readonly RULE_class_def = 31;
	public static readonly RULE_class_def_raw = 32;
	public static readonly RULE_function_def = 33;
	public static readonly RULE_function_def_raw = 34;
	public static readonly RULE_params = 35;
	public static readonly RULE_parameters = 36;
	public static readonly RULE_slash_no_default = 37;
	public static readonly RULE_slash_with_default = 38;
	public static readonly RULE_star_etc = 39;
	public static readonly RULE_kwds = 40;
	public static readonly RULE_param_no_default = 41;
	public static readonly RULE_param_no_default_star_annotation = 42;
	public static readonly RULE_param_with_default = 43;
	public static readonly RULE_param_maybe_default = 44;
	public static readonly RULE_param = 45;
	public static readonly RULE_param_star_annotation = 46;
	public static readonly RULE_annotation = 47;
	public static readonly RULE_star_annotation = 48;
	public static readonly RULE_default_assignment = 49;
	public static readonly RULE_if_stmt = 50;
	public static readonly RULE_elif_stmt = 51;
	public static readonly RULE_else_block = 52;
	public static readonly RULE_while_stmt = 53;
	public static readonly RULE_for_stmt = 54;
	public static readonly RULE_with_stmt = 55;
	public static readonly RULE_with_item = 56;
	public static readonly RULE_try_stmt = 57;
	public static readonly RULE_except_block = 58;
	public static readonly RULE_except_star_block = 59;
	public static readonly RULE_finally_block = 60;
	public static readonly RULE_match_stmt = 61;
	public static readonly RULE_subject_expr = 62;
	public static readonly RULE_case_block = 63;
	public static readonly RULE_guard = 64;
	public static readonly RULE_patterns = 65;
	public static readonly RULE_pattern = 66;
	public static readonly RULE_as_pattern = 67;
	public static readonly RULE_or_pattern = 68;
	public static readonly RULE_closed_pattern = 69;
	public static readonly RULE_literal_pattern = 70;
	public static readonly RULE_literal_expr = 71;
	public static readonly RULE_complex_number = 72;
	public static readonly RULE_signed_number = 73;
	public static readonly RULE_signed_real_number = 74;
	public static readonly RULE_real_number = 75;
	public static readonly RULE_imaginary_number = 76;
	public static readonly RULE_capture_pattern = 77;
	public static readonly RULE_pattern_capture_target = 78;
	public static readonly RULE_wildcard_pattern = 79;
	public static readonly RULE_value_pattern = 80;
	public static readonly RULE_attr = 81;
	public static readonly RULE_name_or_attr = 82;
	public static readonly RULE_group_pattern = 83;
	public static readonly RULE_sequence_pattern = 84;
	public static readonly RULE_open_sequence_pattern = 85;
	public static readonly RULE_maybe_sequence_pattern = 86;
	public static readonly RULE_maybe_star_pattern = 87;
	public static readonly RULE_star_pattern = 88;
	public static readonly RULE_mapping_pattern = 89;
	public static readonly RULE_items_pattern = 90;
	public static readonly RULE_key_value_pattern = 91;
	public static readonly RULE_double_star_pattern = 92;
	public static readonly RULE_class_pattern = 93;
	public static readonly RULE_positional_patterns = 94;
	public static readonly RULE_keyword_patterns = 95;
	public static readonly RULE_keyword_pattern = 96;
	public static readonly RULE_type_alias = 97;
	public static readonly RULE_type_params = 98;
	public static readonly RULE_type_param_seq = 99;
	public static readonly RULE_type_param = 100;
	public static readonly RULE_type_param_bound = 101;
	public static readonly RULE_type_param_default = 102;
	public static readonly RULE_type_param_starred_default = 103;
	public static readonly RULE_expressions = 104;
	public static readonly RULE_expression = 105;
	public static readonly RULE_yield_expr = 106;
	public static readonly RULE_star_expressions = 107;
	public static readonly RULE_star_expression = 108;
	public static readonly RULE_star_named_expressions = 109;
	public static readonly RULE_star_named_expression = 110;
	public static readonly RULE_assignment_expression = 111;
	public static readonly RULE_named_expression = 112;
	public static readonly RULE_disjunction = 113;
	public static readonly RULE_conjunction = 114;
	public static readonly RULE_inversion = 115;
	public static readonly RULE_comparison = 116;
	public static readonly RULE_compare_op_bitwise_or_pair = 117;
	public static readonly RULE_eq_bitwise_or = 118;
	public static readonly RULE_noteq_bitwise_or = 119;
	public static readonly RULE_lte_bitwise_or = 120;
	public static readonly RULE_lt_bitwise_or = 121;
	public static readonly RULE_gte_bitwise_or = 122;
	public static readonly RULE_gt_bitwise_or = 123;
	public static readonly RULE_notin_bitwise_or = 124;
	public static readonly RULE_in_bitwise_or = 125;
	public static readonly RULE_isnot_bitwise_or = 126;
	public static readonly RULE_is_bitwise_or = 127;
	public static readonly RULE_bitwise_or = 128;
	public static readonly RULE_bitwise_xor = 129;
	public static readonly RULE_bitwise_and = 130;
	public static readonly RULE_shift_expr = 131;
	public static readonly RULE_sum = 132;
	public static readonly RULE_term = 133;
	public static readonly RULE_factor = 134;
	public static readonly RULE_power = 135;
	public static readonly RULE_await_primary = 136;
	public static readonly RULE_primary = 137;
	public static readonly RULE_slices = 138;
	public static readonly RULE_slice = 139;
	public static readonly RULE_atom = 140;
	public static readonly RULE_group = 141;
	public static readonly RULE_lambdef = 142;
	public static readonly RULE_lambda_params = 143;
	public static readonly RULE_lambda_parameters = 144;
	public static readonly RULE_lambda_slash_no_default = 145;
	public static readonly RULE_lambda_slash_with_default = 146;
	public static readonly RULE_lambda_star_etc = 147;
	public static readonly RULE_lambda_kwds = 148;
	public static readonly RULE_lambda_param_no_default = 149;
	public static readonly RULE_lambda_param_with_default = 150;
	public static readonly RULE_lambda_param_maybe_default = 151;
	public static readonly RULE_lambda_param = 152;
	public static readonly RULE_fstring_middle = 153;
	public static readonly RULE_fstring_replacement_field = 154;
	public static readonly RULE_fstring_conversion = 155;
	public static readonly RULE_fstring_full_format_spec = 156;
	public static readonly RULE_fstring_format_spec = 157;
	public static readonly RULE_fstring = 158;
	public static readonly RULE_string = 159;
	public static readonly RULE_strings = 160;
	public static readonly RULE_list = 161;
	public static readonly RULE_tuple = 162;
	public static readonly RULE_set = 163;
	public static readonly RULE_dict = 164;
	public static readonly RULE_double_starred_kvpairs = 165;
	public static readonly RULE_double_starred_kvpair = 166;
	public static readonly RULE_kvpair = 167;
	public static readonly RULE_for_if_clauses = 168;
	public static readonly RULE_for_if_clause = 169;
	public static readonly RULE_listcomp = 170;
	public static readonly RULE_setcomp = 171;
	public static readonly RULE_genexp = 172;
	public static readonly RULE_dictcomp = 173;
	public static readonly RULE_arguments = 174;
	public static readonly RULE_args = 175;
	public static readonly RULE_kwargs = 176;
	public static readonly RULE_starred_expression = 177;
	public static readonly RULE_kwarg_or_starred = 178;
	public static readonly RULE_kwarg_or_double_starred = 179;
	public static readonly RULE_star_targets = 180;
	public static readonly RULE_star_targets_list_seq = 181;
	public static readonly RULE_star_targets_tuple_seq = 182;
	public static readonly RULE_star_target = 183;
	public static readonly RULE_target_with_star_atom = 184;
	public static readonly RULE_star_atom = 185;
	public static readonly RULE_single_target = 186;
	public static readonly RULE_single_subscript_attribute_target = 187;
	public static readonly RULE_t_primary = 188;
	public static readonly RULE_del_targets = 189;
	public static readonly RULE_del_target = 190;
	public static readonly RULE_del_t_atom = 191;
	public static readonly RULE_type_expressions = 192;
	public static readonly RULE_func_type_comment = 193;
	public static readonly RULE_name_except_underscore = 194;
	public static readonly RULE_name = 195;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'('", "'['", 
                                                            null, "')'", 
                                                            "']'", null, 
                                                            "'.'", "':'", 
                                                            "','", "';'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'|'", "'&'", 
                                                            "'<'", "'>'", 
                                                            "'='", "'%'", 
                                                            "'=='", "'!='", 
                                                            "'<='", "'>='", 
                                                            "'~'", "'^'", 
                                                            "'<<'", "'>>'", 
                                                            "'**'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'&='", "'|='", 
                                                            "'^='", "'<<='", 
                                                            "'>>='", "'**='", 
                                                            "'//'", "'//='", 
                                                            "'@'", "'@='", 
                                                            "'->'", "'...'", 
                                                            "':='", "'!'", 
                                                            "'False'", "'await'", 
                                                            "'else'", "'import'", 
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
                                                             "TYPE_COMMENT", 
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
		"program", "interactive", "eval", "func_type", "statements", "statement", 
		"statement_newline", "simple_stmts", "simple_stmt", "compound_stmt", "assignment", 
		"annotated_rhs", "augassign", "return_stmt", "raise_stmt", "global_stmt", 
		"nonlocal_stmt", "del_stmt", "yield_stmt", "assert_stmt", "import_stmt", 
		"import_name", "import_from", "import_from_targets", "import_from_as_names", 
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
		"del_targets", "del_target", "del_t_atom", "type_expressions", "func_type_comment", 
		"name_except_underscore", "name",
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
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 134275129) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 4224949961) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 65375) !== 0)) {
				{
				this.state = 392;
				this.statements();
				}
			}

			this.state = 395;
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
	public interactive(): InteractiveContext {
		let localctx: InteractiveContext = new InteractiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PythonParser.RULE_interactive);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			this.statement_newline();
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
	public eval(): EvalContext {
		let localctx: EvalContext = new EvalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PythonParser.RULE_eval);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 399;
			this.expressions();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===98) {
				{
				{
				this.state = 400;
				this.match(PythonParser.NEWLINE);
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 406;
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
	public func_type(): Func_typeContext {
		let localctx: Func_typeContext = new Func_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PythonParser.RULE_func_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this.match(PythonParser.LPAR);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299729) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 409;
				this.type_expressions();
				}
			}

			this.state = 412;
			this.match(PythonParser.RPAR);
			this.state = 413;
			this.match(PythonParser.RARROW);
			this.state = 414;
			this.expression();
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===98) {
				{
				{
				this.state = 415;
				this.match(PythonParser.NEWLINE);
				}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 421;
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
		this.enterRule(localctx, 8, PythonParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 423;
				this.statement();
				}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 134275129) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 4224949961) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 65375) !== 0));
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
		this.enterRule(localctx, 10, PythonParser.RULE_statement);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 428;
				this.compound_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 429;
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
	public statement_newline(): Statement_newlineContext {
		let localctx: Statement_newlineContext = new Statement_newlineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PythonParser.RULE_statement_newline);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 432;
				this.compound_stmt();
				this.state = 433;
				this.match(PythonParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 435;
				this.simple_stmts();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 436;
				this.match(PythonParser.NEWLINE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 437;
				this.match(PythonParser.EOF);
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
		this.enterRule(localctx, 14, PythonParser.RULE_simple_stmts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			this.simple_stmt();
			this.state = 445;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 441;
					this.match(PythonParser.SEMI);
					this.state = 442;
					this.simple_stmt();
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 448;
				this.match(PythonParser.SEMI);
				}
			}

			this.state = 451;
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
		this.enterRule(localctx, 16, PythonParser.RULE_simple_stmt);
		try {
			this.state = 467;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 453;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 454;
				this.type_alias();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 455;
				this.star_expressions();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 456;
				this.return_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 457;
				this.import_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 458;
				this.raise_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 459;
				this.match(PythonParser.PASS);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 460;
				this.del_stmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 461;
				this.yield_stmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 462;
				this.assert_stmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 463;
				this.match(PythonParser.BREAK);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 464;
				this.match(PythonParser.CONTINUE);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 465;
				this.global_stmt();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 466;
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
		this.enterRule(localctx, 18, PythonParser.RULE_compound_stmt);
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 469;
				this.function_def();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 470;
				this.if_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 471;
				this.class_def();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 472;
				this.with_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 473;
				this.for_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 474;
				this.try_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 475;
				this.while_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 476;
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
		this.enterRule(localctx, 20, PythonParser.RULE_assignment);
		let _la: number;
		try {
			let _alt: number;
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 479;
				this.name();
				this.state = 480;
				this.match(PythonParser.COLON);
				this.state = 481;
				this.expression();
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 482;
					this.match(PythonParser.EQUAL);
					this.state = 483;
					this.annotated_rhs();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 491;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 486;
					this.match(PythonParser.LPAR);
					this.state = 487;
					this.single_target();
					this.state = 488;
					this.match(PythonParser.RPAR);
					}
					break;
				case 2:
					{
					this.state = 490;
					this.single_subscript_attribute_target();
					}
					break;
				}
				this.state = 493;
				this.match(PythonParser.COLON);
				this.state = 494;
				this.expression();
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 495;
					this.match(PythonParser.EQUAL);
					this.state = 496;
					this.annotated_rhs();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 502;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 499;
						this.star_targets();
						this.state = 500;
						this.match(PythonParser.EQUAL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 504;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 508;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 90:
					{
					this.state = 506;
					this.yield_expr();
					}
					break;
				case 5:
				case 8:
				case 9:
				case 10:
				case 18:
				case 19:
				case 20:
				case 32:
				case 53:
				case 56:
				case 57:
				case 61:
				case 66:
				case 74:
				case 84:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					{
					this.state = 507;
					this.star_expressions();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 510;
					this.match(PythonParser.TYPE_COMMENT);
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 513;
				this.single_target();
				this.state = 514;
				this.augassign();
				this.state = 517;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 90:
					{
					this.state = 515;
					this.yield_expr();
					}
					break;
				case 5:
				case 8:
				case 9:
				case 10:
				case 18:
				case 19:
				case 20:
				case 32:
				case 53:
				case 56:
				case 57:
				case 61:
				case 66:
				case 74:
				case 84:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					{
					this.state = 516;
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
		this.enterRule(localctx, 22, PythonParser.RULE_annotated_rhs);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 521;
				this.yield_expr();
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 20:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 522;
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
		this.enterRule(localctx, 24, PythonParser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 525;
			_la = this._input.LA(1);
			if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 22527) !== 0))) {
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
		this.enterRule(localctx, 26, PythonParser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 527;
			this.match(PythonParser.RETURN);
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 528;
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
		this.enterRule(localctx, 28, PythonParser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			this.match(PythonParser.RAISE);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 532;
				this.expression();
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 533;
					this.match(PythonParser.FROM);
					this.state = 534;
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
		this.enterRule(localctx, 30, PythonParser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 539;
			this.match(PythonParser.GLOBAL);
			this.state = 540;
			this.name();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 541;
				this.match(PythonParser.COMMA);
				this.state = 542;
				this.name();
				}
				}
				this.state = 547;
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
		this.enterRule(localctx, 32, PythonParser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			this.match(PythonParser.NONLOCAL);
			this.state = 549;
			this.name();
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 550;
				this.match(PythonParser.COMMA);
				this.state = 551;
				this.name();
				}
				}
				this.state = 556;
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
		this.enterRule(localctx, 34, PythonParser.RULE_del_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 557;
			this.match(PythonParser.DEL);
			this.state = 558;
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
		this.enterRule(localctx, 36, PythonParser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 560;
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
		this.enterRule(localctx, 38, PythonParser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this.match(PythonParser.ASSERT);
			this.state = 563;
			this.expression();
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 564;
				this.match(PythonParser.COMMA);
				this.state = 565;
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
		this.enterRule(localctx, 40, PythonParser.RULE_import_stmt);
		try {
			this.state = 570;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 568;
				this.import_name();
				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 569;
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
		this.enterRule(localctx, 42, PythonParser.RULE_import_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 572;
			this.match(PythonParser.IMPORT);
			this.state = 573;
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
		this.enterRule(localctx, 44, PythonParser.RULE_import_from);
		let _la: number;
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 575;
				this.match(PythonParser.FROM);
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14 || _la===53) {
					{
					{
					this.state = 576;
					_la = this._input.LA(1);
					if(!(_la===14 || _la===53)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 582;
				this.dotted_name(0);
				this.state = 583;
				this.match(PythonParser.IMPORT);
				this.state = 584;
				this.import_from_targets();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 586;
				this.match(PythonParser.FROM);
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 587;
					_la = this._input.LA(1);
					if(!(_la===14 || _la===53)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===14 || _la===53);
				this.state = 592;
				this.match(PythonParser.IMPORT);
				this.state = 593;
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
		this.enterRule(localctx, 46, PythonParser.RULE_import_from_targets);
		let _la: number;
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 596;
				this.match(PythonParser.LPAR);
				this.state = 597;
				this.import_from_as_names();
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 598;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 601;
				this.match(PythonParser.RPAR);
				}
				break;
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 603;
				this.import_from_as_names();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 604;
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
		this.enterRule(localctx, 48, PythonParser.RULE_import_from_as_names);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 607;
			this.import_from_as_name();
			this.state = 612;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 608;
					this.match(PythonParser.COMMA);
					this.state = 609;
					this.import_from_as_name();
					}
					}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(localctx, 50, PythonParser.RULE_import_from_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 615;
			this.name();
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 616;
				this.match(PythonParser.AS);
				this.state = 617;
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
		this.enterRule(localctx, 52, PythonParser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this.dotted_as_name();
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 621;
				this.match(PythonParser.COMMA);
				this.state = 622;
				this.dotted_as_name();
				}
				}
				this.state = 627;
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
		this.enterRule(localctx, 54, PythonParser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this.dotted_name(0);
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 629;
				this.match(PythonParser.AS);
				this.state = 630;
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
		let _startState: number = 56;
		this.enterRecursionRule(localctx, 56, PythonParser.RULE_dotted_name, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 634;
			this.name();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 641;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
					this.state = 636;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 637;
					this.match(PythonParser.DOT);
					this.state = 638;
					this.name();
					}
					}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
		this.enterRule(localctx, 58, PythonParser.RULE_block);
		try {
			this.state = 650;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 644;
				this.match(PythonParser.NEWLINE);
				this.state = 645;
				this.match(PythonParser.INDENT);
				this.state = 646;
				this.statements();
				this.state = 647;
				this.match(PythonParser.DEDENT);
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 20:
			case 32:
			case 53:
			case 56:
			case 57:
			case 59:
			case 60:
			case 61:
			case 62:
			case 65:
			case 66:
			case 70:
			case 72:
			case 74:
			case 78:
			case 79:
			case 81:
			case 82:
			case 83:
			case 84:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 649;
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
		this.enterRule(localctx, 60, PythonParser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 652;
				this.match(PythonParser.AT);
				this.state = 653;
				this.named_expression();
				this.state = 654;
				this.match(PythonParser.NEWLINE);
				}
				}
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
		this.enterRule(localctx, 62, PythonParser.RULE_class_def);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 50:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 660;
				this.decorators();
				this.state = 661;
				this.class_def_raw();
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 663;
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
		this.enterRule(localctx, 64, PythonParser.RULE_class_def_raw);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 666;
			this.match(PythonParser.CLASS);
			this.state = 667;
			this.name();
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 668;
				this.type_params();
				}
			}

			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 671;
				this.match(PythonParser.LPAR);
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299729) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 672;
					this.arguments();
					}
				}

				this.state = 675;
				this.match(PythonParser.RPAR);
				}
			}

			this.state = 678;
			this.match(PythonParser.COLON);
			this.state = 679;
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
		this.enterRule(localctx, 66, PythonParser.RULE_function_def);
		try {
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 50:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 681;
				this.decorators();
				this.state = 682;
				this.function_def_raw();
				}
				break;
			case 77:
			case 86:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 684;
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
		this.enterRule(localctx, 68, PythonParser.RULE_function_def_raw);
		let _la: number;
		try {
			this.state = 728;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 77:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 687;
				this.match(PythonParser.DEF);
				this.state = 688;
				this.name();
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 689;
					this.type_params();
					}
				}

				this.state = 692;
				this.match(PythonParser.LPAR);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					this.state = 693;
					this.params();
					}
				}

				this.state = 696;
				this.match(PythonParser.RPAR);
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 697;
					this.match(PythonParser.RARROW);
					this.state = 698;
					this.expression();
					}
				}

				this.state = 701;
				this.match(PythonParser.COLON);
				this.state = 703;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 702;
					this.func_type_comment();
					}
					break;
				}
				this.state = 705;
				this.block();
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 707;
				this.match(PythonParser.ASYNC);
				this.state = 708;
				this.match(PythonParser.DEF);
				this.state = 709;
				this.name();
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 710;
					this.type_params();
					}
				}

				this.state = 713;
				this.match(PythonParser.LPAR);
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					this.state = 714;
					this.params();
					}
				}

				this.state = 717;
				this.match(PythonParser.RPAR);
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 718;
					this.match(PythonParser.RARROW);
					this.state = 719;
					this.expression();
					}
				}

				this.state = 722;
				this.match(PythonParser.COLON);
				this.state = 724;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 723;
					this.func_type_comment();
					}
					break;
				}
				this.state = 726;
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
		this.enterRule(localctx, 70, PythonParser.RULE_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 730;
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
		this.enterRule(localctx, 72, PythonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.state = 781;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 732;
				this.slash_no_default();
				this.state = 736;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 733;
						this.param_no_default();
						}
						}
					}
					this.state = 738;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				}
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 739;
					this.param_with_default();
					}
					}
					this.state = 744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 745;
					this.star_etc();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 748;
				this.slash_with_default();
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 749;
					this.param_with_default();
					}
					}
					this.state = 754;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 755;
					this.star_etc();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 759;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 758;
						this.param_no_default();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 761;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 763;
					this.param_with_default();
					}
					}
					this.state = 768;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 769;
					this.star_etc();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 772;
					this.param_with_default();
					}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 777;
					this.star_etc();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 780;
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
		this.enterRule(localctx, 74, PythonParser.RULE_slash_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 783;
				this.param_no_default();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
			this.state = 788;
			this.match(PythonParser.SLASH);
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 789;
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
		this.enterRule(localctx, 76, PythonParser.RULE_slash_with_default);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 795;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 792;
					this.param_no_default();
					}
					}
				}
				this.state = 797;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 798;
				this.param_with_default();
				}
				}
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
			this.state = 803;
			this.match(PythonParser.SLASH);
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 804;
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
		this.enterRule(localctx, 78, PythonParser.RULE_star_etc);
		let _la: number;
		try {
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 807;
				this.match(PythonParser.STAR);
				this.state = 808;
				this.param_no_default();
				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 809;
					this.param_maybe_default();
					}
					}
					this.state = 814;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 815;
					this.kwds();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 818;
				this.match(PythonParser.STAR);
				this.state = 819;
				this.param_no_default_star_annotation();
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 820;
					this.param_maybe_default();
					}
					}
					this.state = 825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 826;
					this.kwds();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 829;
				this.match(PythonParser.STAR);
				this.state = 830;
				this.match(PythonParser.COMMA);
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 831;
					this.param_maybe_default();
					}
					}
					this.state = 834;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 836;
					this.kwds();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 839;
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
		this.enterRule(localctx, 80, PythonParser.RULE_kwds);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 843;
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
		this.enterRule(localctx, 82, PythonParser.RULE_param_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.param();
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 846;
				this.match(PythonParser.COMMA);
				}
			}

			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 849;
				this.match(PythonParser.TYPE_COMMENT);
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
		this.enterRule(localctx, 84, PythonParser.RULE_param_no_default_star_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 852;
			this.param_star_annotation();
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 853;
				this.match(PythonParser.COMMA);
				}
			}

			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 856;
				this.match(PythonParser.TYPE_COMMENT);
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
		this.enterRule(localctx, 86, PythonParser.RULE_param_with_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 859;
			this.param();
			this.state = 860;
			this.default_assignment();
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 861;
				this.match(PythonParser.COMMA);
				}
			}

			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 864;
				this.match(PythonParser.TYPE_COMMENT);
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
		this.enterRule(localctx, 88, PythonParser.RULE_param_maybe_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 867;
			this.param();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 868;
				this.default_assignment();
				}
			}

			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 871;
				this.match(PythonParser.COMMA);
				}
			}

			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 874;
				this.match(PythonParser.TYPE_COMMENT);
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
		this.enterRule(localctx, 90, PythonParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 877;
			this.name();
			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 878;
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
		this.enterRule(localctx, 92, PythonParser.RULE_param_star_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 881;
			this.name();
			this.state = 882;
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
		this.enterRule(localctx, 94, PythonParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 884;
			this.match(PythonParser.COLON);
			this.state = 885;
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
		this.enterRule(localctx, 96, PythonParser.RULE_star_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 887;
			this.match(PythonParser.COLON);
			this.state = 888;
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
		this.enterRule(localctx, 98, PythonParser.RULE_default_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 890;
			this.match(PythonParser.EQUAL);
			this.state = 891;
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
		this.enterRule(localctx, 100, PythonParser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 893;
			this.match(PythonParser.IF);
			this.state = 894;
			this.named_expression();
			this.state = 895;
			this.match(PythonParser.COLON);
			this.state = 896;
			this.block();
			this.state = 901;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
				{
				this.state = 897;
				this.elif_stmt();
				}
				break;
			case -1:
			case 3:
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 20:
			case 32:
			case 50:
			case 53:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 65:
			case 66:
			case 67:
			case 70:
			case 72:
			case 73:
			case 74:
			case 75:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 88:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
				{
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 898;
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
		this.enterRule(localctx, 102, PythonParser.RULE_elif_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 903;
			this.match(PythonParser.ELIF);
			this.state = 904;
			this.named_expression();
			this.state = 905;
			this.match(PythonParser.COLON);
			this.state = 906;
			this.block();
			this.state = 911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
				{
				this.state = 907;
				this.elif_stmt();
				}
				break;
			case -1:
			case 3:
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 20:
			case 32:
			case 50:
			case 53:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 65:
			case 66:
			case 67:
			case 70:
			case 72:
			case 73:
			case 74:
			case 75:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 88:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
				{
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 908;
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
		this.enterRule(localctx, 104, PythonParser.RULE_else_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.match(PythonParser.ELSE);
			this.state = 914;
			this.match(PythonParser.COLON);
			this.state = 915;
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
		this.enterRule(localctx, 106, PythonParser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 917;
			this.match(PythonParser.WHILE);
			this.state = 918;
			this.named_expression();
			this.state = 919;
			this.match(PythonParser.COLON);
			this.state = 920;
			this.block();
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 921;
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
		this.enterRule(localctx, 108, PythonParser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===86) {
				{
				this.state = 924;
				this.match(PythonParser.ASYNC);
				}
			}

			this.state = 927;
			this.match(PythonParser.FOR);
			this.state = 928;
			this.star_targets();
			this.state = 929;
			this.match(PythonParser.IN);
			this.state = 930;
			this.star_expressions();
			this.state = 931;
			this.match(PythonParser.COLON);
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 932;
				this.match(PythonParser.TYPE_COMMENT);
				}
			}

			this.state = 935;
			this.block();
			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 936;
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
		this.enterRule(localctx, 110, PythonParser.RULE_with_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 939;
				this.match(PythonParser.WITH);
				this.state = 940;
				this.match(PythonParser.LPAR);
				this.state = 941;
				this.with_item();
				this.state = 946;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 942;
						this.match(PythonParser.COMMA);
						this.state = 943;
						this.with_item();
						}
						}
					}
					this.state = 948;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
				}
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 949;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 952;
				this.match(PythonParser.RPAR);
				this.state = 953;
				this.match(PythonParser.COLON);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 954;
					this.match(PythonParser.TYPE_COMMENT);
					}
				}

				this.state = 957;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 959;
				this.match(PythonParser.ASYNC);
				this.state = 960;
				this.match(PythonParser.WITH);
				this.state = 961;
				this.match(PythonParser.LPAR);
				this.state = 962;
				this.with_item();
				this.state = 967;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 963;
						this.match(PythonParser.COMMA);
						this.state = 964;
						this.with_item();
						}
						}
					}
					this.state = 969;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
				}
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 970;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 973;
				this.match(PythonParser.RPAR);
				this.state = 974;
				this.match(PythonParser.COLON);
				this.state = 975;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 977;
					this.match(PythonParser.ASYNC);
					}
				}

				this.state = 980;
				this.match(PythonParser.WITH);
				this.state = 981;
				this.with_item();
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 982;
					this.match(PythonParser.COMMA);
					this.state = 983;
					this.with_item();
					}
					}
					this.state = 988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 989;
				this.match(PythonParser.COLON);
				this.state = 991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 990;
					this.match(PythonParser.TYPE_COMMENT);
					}
				}

				this.state = 993;
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
		this.enterRule(localctx, 112, PythonParser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 997;
			this.expression();
			this.state = 1000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 998;
				this.match(PythonParser.AS);
				this.state = 999;
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
		this.enterRule(localctx, 114, PythonParser.RULE_try_stmt);
		let _la: number;
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1002;
				this.match(PythonParser.TRY);
				this.state = 1003;
				this.match(PythonParser.COLON);
				this.state = 1004;
				this.block();
				this.state = 1005;
				this.finally_block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1007;
				this.match(PythonParser.TRY);
				this.state = 1008;
				this.match(PythonParser.COLON);
				this.state = 1009;
				this.block();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1010;
					this.except_block();
					}
					}
					this.state = 1013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===63);
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 1015;
					this.else_block();
					}
				}

				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1018;
					this.finally_block();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1021;
				this.match(PythonParser.TRY);
				this.state = 1022;
				this.match(PythonParser.COLON);
				this.state = 1023;
				this.block();
				this.state = 1025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1024;
					this.except_star_block();
					}
					}
					this.state = 1027;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===63);
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 1029;
					this.else_block();
					}
				}

				this.state = 1033;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1032;
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
		this.enterRule(localctx, 116, PythonParser.RULE_except_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1037;
			this.match(PythonParser.EXCEPT);
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 1038;
				this.expression();
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===76) {
					{
					this.state = 1039;
					this.match(PythonParser.AS);
					this.state = 1040;
					this.name();
					}
				}

				}
			}

			this.state = 1045;
			this.match(PythonParser.COLON);
			this.state = 1046;
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
		this.enterRule(localctx, 118, PythonParser.RULE_except_star_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1048;
			this.match(PythonParser.EXCEPT);
			this.state = 1049;
			this.match(PythonParser.STAR);
			this.state = 1050;
			this.expression();
			this.state = 1053;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 1051;
				this.match(PythonParser.AS);
				this.state = 1052;
				this.name();
				}
			}

			this.state = 1055;
			this.match(PythonParser.COLON);
			this.state = 1056;
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
		this.enterRule(localctx, 120, PythonParser.RULE_finally_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1058;
			this.match(PythonParser.FINALLY);
			this.state = 1059;
			this.match(PythonParser.COLON);
			this.state = 1060;
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
		this.enterRule(localctx, 122, PythonParser.RULE_match_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1062;
			this.match(PythonParser.NAME_OR_MATCH);
			this.state = 1063;
			this.subject_expr();
			this.state = 1064;
			this.match(PythonParser.COLON);
			this.state = 1065;
			this.match(PythonParser.NEWLINE);
			this.state = 1066;
			this.match(PythonParser.INDENT);
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1067;
				this.case_block();
				}
				}
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===93);
			this.state = 1072;
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
		this.enterRule(localctx, 124, PythonParser.RULE_subject_expr);
		let _la: number;
		try {
			this.state = 1080;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1074;
				this.star_named_expression();
				this.state = 1075;
				this.match(PythonParser.COMMA);
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 1076;
					this.star_named_expressions();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1079;
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
		this.enterRule(localctx, 126, PythonParser.RULE_case_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1082;
			this.match(PythonParser.NAME_OR_CASE);
			this.state = 1083;
			this.patterns();
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===88) {
				{
				this.state = 1084;
				this.guard();
				}
			}

			this.state = 1087;
			this.match(PythonParser.COLON);
			this.state = 1088;
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
		this.enterRule(localctx, 128, PythonParser.RULE_guard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1090;
			this.match(PythonParser.IF);
			this.state = 1091;
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
		this.enterRule(localctx, 130, PythonParser.RULE_patterns);
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1093;
				this.open_sequence_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1094;
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
		this.enterRule(localctx, 132, PythonParser.RULE_pattern);
		try {
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1097;
				this.as_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1098;
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
		this.enterRule(localctx, 134, PythonParser.RULE_as_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1101;
			this.or_pattern();
			this.state = 1102;
			this.match(PythonParser.AS);
			this.state = 1103;
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
		this.enterRule(localctx, 136, PythonParser.RULE_or_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1105;
			this.closed_pattern();
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 1106;
				this.match(PythonParser.VBAR);
				this.state = 1107;
				this.closed_pattern();
				}
				}
				this.state = 1112;
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
		this.enterRule(localctx, 138, PythonParser.RULE_closed_pattern);
		try {
			this.state = 1121;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1113;
				this.literal_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1114;
				this.capture_pattern();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1115;
				this.wildcard_pattern();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1116;
				this.value_pattern();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1117;
				this.group_pattern();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1118;
				this.sequence_pattern();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1119;
				this.mapping_pattern();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1120;
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
		this.enterRule(localctx, 140, PythonParser.RULE_literal_pattern);
		try {
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1123;
				this.signed_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1124;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1125;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1126;
				this.match(PythonParser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1127;
				this.match(PythonParser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1128;
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
		this.enterRule(localctx, 142, PythonParser.RULE_literal_expr);
		try {
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1131;
				this.signed_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1132;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1133;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1134;
				this.match(PythonParser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1135;
				this.match(PythonParser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1136;
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
		this.enterRule(localctx, 144, PythonParser.RULE_complex_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1139;
			this.signed_real_number();
			this.state = 1140;
			_la = this._input.LA(1);
			if(!(_la===18 || _la===19)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1141;
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
		this.enterRule(localctx, 146, PythonParser.RULE_signed_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 1143;
				this.match(PythonParser.MINUS);
				}
			}

			this.state = 1146;
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
		this.enterRule(localctx, 148, PythonParser.RULE_signed_real_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 1148;
				this.match(PythonParser.MINUS);
				}
			}

			this.state = 1151;
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
		this.enterRule(localctx, 150, PythonParser.RULE_real_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1153;
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
		this.enterRule(localctx, 152, PythonParser.RULE_imaginary_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
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
		this.enterRule(localctx, 154, PythonParser.RULE_capture_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1157;
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
		this.enterRule(localctx, 156, PythonParser.RULE_pattern_capture_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
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
		this.enterRule(localctx, 158, PythonParser.RULE_wildcard_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1161;
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
		this.enterRule(localctx, 160, PythonParser.RULE_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1163;
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
		this.enterRule(localctx, 162, PythonParser.RULE_attr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1165;
			this.name();
			this.state = 1168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1166;
				this.match(PythonParser.DOT);
				this.state = 1167;
				this.name();
				}
				}
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===14);
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
		this.enterRule(localctx, 164, PythonParser.RULE_name_or_attr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1172;
			this.name();
			this.state = 1177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14) {
				{
				{
				this.state = 1173;
				this.match(PythonParser.DOT);
				this.state = 1174;
				this.name();
				}
				}
				this.state = 1179;
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
		this.enterRule(localctx, 166, PythonParser.RULE_group_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1180;
			this.match(PythonParser.LPAR);
			this.state = 1181;
			this.pattern();
			this.state = 1182;
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
		this.enterRule(localctx, 168, PythonParser.RULE_sequence_pattern);
		let _la: number;
		try {
			this.state = 1194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1184;
				this.match(PythonParser.LSQB);
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1574688) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1057) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 1185;
					this.maybe_sequence_pattern();
					}
				}

				this.state = 1188;
				this.match(PythonParser.RSQB);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1189;
				this.match(PythonParser.LPAR);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1574688) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1057) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 1190;
					this.open_sequence_pattern();
					}
				}

				this.state = 1193;
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
		this.enterRule(localctx, 170, PythonParser.RULE_open_sequence_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1196;
			this.maybe_star_pattern();
			this.state = 1197;
			this.match(PythonParser.COMMA);
			this.state = 1199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1574688) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1057) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
				{
				this.state = 1198;
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
		this.enterRule(localctx, 172, PythonParser.RULE_maybe_sequence_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1201;
			this.maybe_star_pattern();
			this.state = 1206;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1202;
					this.match(PythonParser.COMMA);
					this.state = 1203;
					this.maybe_star_pattern();
					}
					}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			}
			this.state = 1210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1209;
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
		this.enterRule(localctx, 174, PythonParser.RULE_maybe_star_pattern);
		try {
			this.state = 1214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1212;
				this.star_pattern();
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 19:
			case 56:
			case 61:
			case 66:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1213;
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
		this.enterRule(localctx, 176, PythonParser.RULE_star_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1216;
			this.match(PythonParser.STAR);
			this.state = 1217;
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
		this.enterRule(localctx, 178, PythonParser.RULE_mapping_pattern);
		let _la: number;
		try {
			this.state = 1239;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1219;
				this.match(PythonParser.LBRACE);
				this.state = 1220;
				this.match(PythonParser.RBRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1221;
				this.match(PythonParser.LBRACE);
				this.state = 1222;
				this.double_star_pattern();
				this.state = 1224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1223;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 1226;
				this.match(PythonParser.RBRACE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1228;
				this.match(PythonParser.LBRACE);
				this.state = 1229;
				this.items_pattern();
				this.state = 1232;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1230;
					this.match(PythonParser.COMMA);
					this.state = 1231;
					this.double_star_pattern();
					}
					break;
				}
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1234;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 1237;
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
		this.enterRule(localctx, 180, PythonParser.RULE_items_pattern);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1241;
			this.key_value_pattern();
			this.state = 1246;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1242;
					this.match(PythonParser.COMMA);
					this.state = 1243;
					this.key_value_pattern();
					}
					}
				}
				this.state = 1248;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
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
		this.enterRule(localctx, 182, PythonParser.RULE_key_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1251;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 19:
			case 56:
			case 61:
			case 66:
			case 96:
			case 97:
				{
				this.state = 1249;
				this.literal_expr();
				}
				break;
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				{
				this.state = 1250;
				this.attr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1253;
			this.match(PythonParser.COLON);
			this.state = 1254;
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
		this.enterRule(localctx, 184, PythonParser.RULE_double_star_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1256;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 1257;
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
		this.enterRule(localctx, 186, PythonParser.RULE_class_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1259;
			this.name_or_attr();
			this.state = 1260;
			this.match(PythonParser.LPAR);
			this.state = 1272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 526112) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1057) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
				{
				this.state = 1267;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 1261;
					this.positional_patterns();
					this.state = 1264;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
					case 1:
						{
						this.state = 1262;
						this.match(PythonParser.COMMA);
						this.state = 1263;
						this.keyword_patterns();
						}
						break;
					}
					}
					break;
				case 2:
					{
					this.state = 1266;
					this.keyword_patterns();
					}
					break;
				}
				this.state = 1270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1269;
					this.match(PythonParser.COMMA);
					}
				}

				}
			}

			this.state = 1274;
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
		this.enterRule(localctx, 188, PythonParser.RULE_positional_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1276;
			this.pattern();
			this.state = 1281;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1277;
					this.match(PythonParser.COMMA);
					this.state = 1278;
					this.pattern();
					}
					}
				}
				this.state = 1283;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
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
		this.enterRule(localctx, 190, PythonParser.RULE_keyword_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1284;
			this.keyword_pattern();
			this.state = 1289;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1285;
					this.match(PythonParser.COMMA);
					this.state = 1286;
					this.keyword_pattern();
					}
					}
				}
				this.state = 1291;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
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
		this.enterRule(localctx, 192, PythonParser.RULE_keyword_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1292;
			this.name();
			this.state = 1293;
			this.match(PythonParser.EQUAL);
			this.state = 1294;
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
		this.enterRule(localctx, 194, PythonParser.RULE_type_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1296;
			this.match(PythonParser.NAME_OR_TYPE);
			this.state = 1297;
			this.name();
			this.state = 1299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 1298;
				this.type_params();
				}
			}

			this.state = 1301;
			this.match(PythonParser.EQUAL);
			this.state = 1302;
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
		this.enterRule(localctx, 196, PythonParser.RULE_type_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1304;
			this.match(PythonParser.LSQB);
			this.state = 1305;
			this.type_param_seq();
			this.state = 1306;
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
		this.enterRule(localctx, 198, PythonParser.RULE_type_param_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1308;
			this.type_param();
			this.state = 1313;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1309;
					this.match(PythonParser.COMMA);
					this.state = 1310;
					this.type_param();
					}
					}
				}
				this.state = 1315;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
			}
			this.state = 1317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1316;
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
		this.enterRule(localctx, 200, PythonParser.RULE_type_param);
		let _la: number;
		try {
			this.state = 1336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1319;
				this.name();
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1320;
					this.type_param_bound();
					}
				}

				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1323;
					this.type_param_default();
					}
				}

				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1326;
				this.match(PythonParser.STAR);
				this.state = 1327;
				this.name();
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1328;
					this.type_param_starred_default();
					}
				}

				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1331;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1332;
				this.name();
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1333;
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
		this.enterRule(localctx, 202, PythonParser.RULE_type_param_bound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1338;
			this.match(PythonParser.COLON);
			this.state = 1339;
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
		this.enterRule(localctx, 204, PythonParser.RULE_type_param_default);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1341;
			this.match(PythonParser.EQUAL);
			this.state = 1342;
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
		this.enterRule(localctx, 206, PythonParser.RULE_type_param_starred_default);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1344;
			this.match(PythonParser.EQUAL);
			this.state = 1345;
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
		this.enterRule(localctx, 208, PythonParser.RULE_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1347;
			this.expression();
			this.state = 1352;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1348;
					this.match(PythonParser.COMMA);
					this.state = 1349;
					this.expression();
					}
					}
				}
				this.state = 1354;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 155, this._ctx);
			}
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1355;
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
		this.enterRule(localctx, 210, PythonParser.RULE_expression);
		let _la: number;
		try {
			this.state = 1367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1358;
				this.disjunction();
				this.state = 1364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88) {
					{
					this.state = 1359;
					this.match(PythonParser.IF);
					this.state = 1360;
					this.disjunction();
					this.state = 1361;
					this.match(PythonParser.ELSE);
					this.state = 1362;
					this.expression();
					}
				}

				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1366;
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
		this.enterRule(localctx, 212, PythonParser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1369;
			this.match(PythonParser.YIELD);
			this.state = 1375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				{
				this.state = 1370;
				this.match(PythonParser.FROM);
				this.state = 1371;
				this.expression();
				}
				break;
			case 4:
			case 5:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
			case 15:
			case 17:
			case 18:
			case 19:
			case 20:
			case 26:
			case 32:
			case 53:
			case 55:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
				{
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 1372;
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
		this.enterRule(localctx, 214, PythonParser.RULE_star_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1377;
			this.star_expression();
			this.state = 1382;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1378;
					this.match(PythonParser.COMMA);
					this.state = 1379;
					this.star_expression();
					}
					}
				}
				this.state = 1384;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			}
			this.state = 1386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1385;
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
		this.enterRule(localctx, 216, PythonParser.RULE_star_expression);
		try {
			this.state = 1391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1388;
				this.match(PythonParser.STAR);
				this.state = 1389;
				this.bitwise_or(0);
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1390;
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
		this.enterRule(localctx, 218, PythonParser.RULE_star_named_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1393;
			this.star_named_expression();
			this.state = 1398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1394;
					this.match(PythonParser.COMMA);
					this.state = 1395;
					this.star_named_expression();
					}
					}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
			}
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1401;
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
		this.enterRule(localctx, 220, PythonParser.RULE_star_named_expression);
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1404;
				this.match(PythonParser.STAR);
				this.state = 1405;
				this.bitwise_or(0);
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1406;
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
		this.enterRule(localctx, 222, PythonParser.RULE_assignment_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this.name();
			this.state = 1410;
			this.match(PythonParser.COLONEQUAL);
			this.state = 1411;
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
		this.enterRule(localctx, 224, PythonParser.RULE_named_expression);
		try {
			this.state = 1415;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1413;
				this.assignment_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1414;
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
		this.enterRule(localctx, 226, PythonParser.RULE_disjunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1417;
			this.conjunction();
			this.state = 1422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===89) {
				{
				{
				this.state = 1418;
				this.match(PythonParser.OR);
				this.state = 1419;
				this.conjunction();
				}
				}
				this.state = 1424;
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
		this.enterRule(localctx, 228, PythonParser.RULE_conjunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1425;
			this.inversion();
			this.state = 1430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 1426;
				this.match(PythonParser.AND);
				this.state = 1427;
				this.inversion();
				}
				}
				this.state = 1432;
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
		this.enterRule(localctx, 230, PythonParser.RULE_inversion);
		try {
			this.state = 1436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 84:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1433;
				this.match(PythonParser.NOT);
				this.state = 1434;
				this.inversion();
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1435;
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
		this.enterRule(localctx, 232, PythonParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1438;
			this.bitwise_or(0);
			this.state = 1442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4076863488) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1048609) !== 0)) {
				{
				{
				this.state = 1439;
				this.compare_op_bitwise_or_pair();
				}
				}
				this.state = 1444;
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
		this.enterRule(localctx, 234, PythonParser.RULE_compare_op_bitwise_or_pair);
		try {
			this.state = 1455;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1445;
				this.eq_bitwise_or();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1446;
				this.noteq_bitwise_or();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1447;
				this.lte_bitwise_or();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1448;
				this.lt_bitwise_or();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1449;
				this.gte_bitwise_or();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1450;
				this.gt_bitwise_or();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1451;
				this.notin_bitwise_or();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1452;
				this.in_bitwise_or();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1453;
				this.isnot_bitwise_or();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1454;
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
		this.enterRule(localctx, 236, PythonParser.RULE_eq_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1457;
			this.match(PythonParser.EQEQUAL);
			this.state = 1458;
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
		this.enterRule(localctx, 238, PythonParser.RULE_noteq_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1460;
			this.match(PythonParser.NOTEQUAL);
			}
			this.state = 1461;
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
		this.enterRule(localctx, 240, PythonParser.RULE_lte_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1463;
			this.match(PythonParser.LESSEQUAL);
			this.state = 1464;
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
		this.enterRule(localctx, 242, PythonParser.RULE_lt_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1466;
			this.match(PythonParser.LESS);
			this.state = 1467;
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
		this.enterRule(localctx, 244, PythonParser.RULE_gte_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1469;
			this.match(PythonParser.GREATEREQUAL);
			this.state = 1470;
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
		this.enterRule(localctx, 246, PythonParser.RULE_gt_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1472;
			this.match(PythonParser.GREATER);
			this.state = 1473;
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
		this.enterRule(localctx, 248, PythonParser.RULE_notin_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1475;
			this.match(PythonParser.NOT);
			this.state = 1476;
			this.match(PythonParser.IN);
			this.state = 1477;
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
		this.enterRule(localctx, 250, PythonParser.RULE_in_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1479;
			this.match(PythonParser.IN);
			this.state = 1480;
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
		this.enterRule(localctx, 252, PythonParser.RULE_isnot_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1482;
			this.match(PythonParser.IS);
			this.state = 1483;
			this.match(PythonParser.NOT);
			this.state = 1484;
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
		this.enterRule(localctx, 254, PythonParser.RULE_is_bitwise_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1486;
			this.match(PythonParser.IS);
			this.state = 1487;
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
		let _startState: number = 256;
		this.enterRecursionRule(localctx, 256, PythonParser.RULE_bitwise_or, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1490;
			this.bitwise_xor(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1497;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
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
					this.state = 1492;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1493;
					this.match(PythonParser.VBAR);
					this.state = 1494;
					this.bitwise_xor(0);
					}
					}
				}
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
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
		let _startState: number = 258;
		this.enterRecursionRule(localctx, 258, PythonParser.RULE_bitwise_xor, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1501;
			this.bitwise_and(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1508;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
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
					this.state = 1503;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1504;
					this.match(PythonParser.CIRCUMFLEX);
					this.state = 1505;
					this.bitwise_and(0);
					}
					}
				}
				this.state = 1510;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
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
		let _startState: number = 260;
		this.enterRecursionRule(localctx, 260, PythonParser.RULE_bitwise_and, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1512;
			this.shift_expr(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1519;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 175, this._ctx);
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
					this.state = 1514;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1515;
					this.match(PythonParser.AMPER);
					this.state = 1516;
					this.shift_expr(0);
					}
					}
				}
				this.state = 1521;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 175, this._ctx);
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
		let _startState: number = 262;
		this.enterRecursionRule(localctx, 262, PythonParser.RULE_shift_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1523;
			this.sum(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1530;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
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
					this.state = 1525;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1526;
					_la = this._input.LA(1);
					if(!(_la===34 || _la===35)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1527;
					this.sum(0);
					}
					}
				}
				this.state = 1532;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
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
		let _startState: number = 264;
		this.enterRecursionRule(localctx, 264, PythonParser.RULE_sum, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1534;
			this.term(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1541;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 177, this._ctx);
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
					this.state = 1536;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1537;
					_la = this._input.LA(1);
					if(!(_la===18 || _la===19)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1538;
					this.term(0);
					}
					}
				}
				this.state = 1543;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 177, this._ctx);
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
		let _startState: number = 266;
		this.enterRecursionRule(localctx, 266, PythonParser.RULE_term, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1545;
			this.factor();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1552;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
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
					this.state = 1547;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1548;
					_la = this._input.LA(1);
					if(!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 1342177411) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1549;
					this.factor();
					}
					}
				}
				this.state = 1554;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
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
		this.enterRule(localctx, 268, PythonParser.RULE_factor);
		try {
			this.state = 1562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1555;
				this.match(PythonParser.PLUS);
				this.state = 1556;
				this.factor();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1557;
				this.match(PythonParser.MINUS);
				this.state = 1558;
				this.factor();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1559;
				this.match(PythonParser.TILDE);
				this.state = 1560;
				this.factor();
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1561;
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
		this.enterRule(localctx, 270, PythonParser.RULE_power);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1564;
			this.await_primary();
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1565;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1566;
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
		this.enterRule(localctx, 272, PythonParser.RULE_await_primary);
		try {
			this.state = 1572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1569;
				this.match(PythonParser.AWAIT);
				this.state = 1570;
				this.primary(0);
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 53:
			case 56:
			case 61:
			case 66:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1571;
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
		let _startState: number = 274;
		this.enterRecursionRule(localctx, 274, PythonParser.RULE_primary, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1575;
			this.atom();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1594;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
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
					this.state = 1577;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1590;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
					case 1:
						{
						this.state = 1578;
						this.match(PythonParser.DOT);
						this.state = 1579;
						this.name();
						}
						break;
					case 2:
						{
						this.state = 1580;
						this.genexp();
						}
						break;
					case 3:
						{
						this.state = 1581;
						this.match(PythonParser.LPAR);
						this.state = 1583;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299729) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
							{
							this.state = 1582;
							this.arguments();
							}
						}

						this.state = 1585;
						this.match(PythonParser.RPAR);
						}
						break;
					case 4:
						{
						this.state = 1586;
						this.match(PythonParser.LSQB);
						this.state = 1587;
						this.slices();
						this.state = 1588;
						this.match(PythonParser.RSQB);
						}
						break;
					}
					}
					}
				}
				this.state = 1596;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
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
		this.enterRule(localctx, 276, PythonParser.RULE_slices);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1615;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1597;
				this.slice();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1600;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 5:
				case 8:
				case 9:
				case 10:
				case 15:
				case 18:
				case 19:
				case 32:
				case 53:
				case 56:
				case 57:
				case 61:
				case 66:
				case 74:
				case 84:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					{
					this.state = 1598;
					this.slice();
					}
					break;
				case 20:
					{
					this.state = 1599;
					this.starred_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1609;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1602;
						this.match(PythonParser.COMMA);
						this.state = 1605;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 5:
						case 8:
						case 9:
						case 10:
						case 15:
						case 18:
						case 19:
						case 32:
						case 53:
						case 56:
						case 57:
						case 61:
						case 66:
						case 74:
						case 84:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 97:
							{
							this.state = 1603;
							this.slice();
							}
							break;
						case 20:
							{
							this.state = 1604;
							this.starred_expression();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 1611;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
				}
				this.state = 1613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1612;
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
		this.enterRule(localctx, 278, PythonParser.RULE_slice);
		let _la: number;
		try {
			this.state = 1631;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 1617;
					this.expression();
					}
				}

				this.state = 1620;
				this.match(PythonParser.COLON);
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 1621;
					this.expression();
					}
				}

				this.state = 1628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 1624;
					this.match(PythonParser.COLON);
					this.state = 1626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
						{
						this.state = 1625;
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
				this.state = 1630;
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
		this.enterRule(localctx, 280, PythonParser.RULE_atom);
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1633;
				this.name();
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1634;
				this.match(PythonParser.TRUE);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1635;
				this.match(PythonParser.FALSE);
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1636;
				this.match(PythonParser.NONE);
				}
				break;
			case 5:
			case 97:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1637;
				this.strings();
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1638;
				this.match(PythonParser.NUMBER);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1642;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1639;
					this.tuple();
					}
					break;
				case 2:
					{
					this.state = 1640;
					this.group();
					}
					break;
				case 3:
					{
					this.state = 1641;
					this.genexp();
					}
					break;
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1646;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
				case 1:
					{
					this.state = 1644;
					this.list();
					}
					break;
				case 2:
					{
					this.state = 1645;
					this.listcomp();
					}
					break;
				}
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1652;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1648;
					this.dict();
					}
					break;
				case 2:
					{
					this.state = 1649;
					this.set_();
					}
					break;
				case 3:
					{
					this.state = 1650;
					this.dictcomp();
					}
					break;
				case 4:
					{
					this.state = 1651;
					this.setcomp();
					}
					break;
				}
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1654;
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
		this.enterRule(localctx, 282, PythonParser.RULE_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1657;
			this.match(PythonParser.LPAR);
			this.state = 1660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
				{
				this.state = 1658;
				this.yield_expr();
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				{
				this.state = 1659;
				this.named_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1662;
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
		this.enterRule(localctx, 284, PythonParser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1664;
			this.match(PythonParser.LAMBDA);
			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===36 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
				{
				this.state = 1665;
				this.lambda_params();
				}
			}

			this.state = 1668;
			this.match(PythonParser.COLON);
			this.state = 1669;
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
		this.enterRule(localctx, 286, PythonParser.RULE_lambda_params);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1671;
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
		this.enterRule(localctx, 288, PythonParser.RULE_lambda_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1722;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1673;
				this.lambda_slash_no_default();
				this.state = 1677;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1674;
						this.lambda_param_no_default();
						}
						}
					}
					this.state = 1679;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
				}
				this.state = 1683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 1680;
					this.lambda_param_with_default();
					}
					}
					this.state = 1685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 1686;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1689;
				this.lambda_slash_with_default();
				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 1690;
					this.lambda_param_with_default();
					}
					}
					this.state = 1695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 1696;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1700;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1699;
						this.lambda_param_no_default();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1702;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 1704;
					this.lambda_param_with_default();
					}
					}
					this.state = 1709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 1710;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1713;
					this.lambda_param_with_default();
					}
					}
					this.state = 1716;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
				this.state = 1719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===36) {
					{
					this.state = 1718;
					this.lambda_star_etc();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1721;
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
		this.enterRule(localctx, 290, PythonParser.RULE_lambda_slash_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1724;
				this.lambda_param_no_default();
				}
				}
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
			this.state = 1729;
			this.match(PythonParser.SLASH);
			this.state = 1731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1730;
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
		this.enterRule(localctx, 292, PythonParser.RULE_lambda_slash_with_default);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1736;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1733;
					this.lambda_param_no_default();
					}
					}
				}
				this.state = 1738;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
			}
			this.state = 1740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1739;
				this.lambda_param_with_default();
				}
				}
				this.state = 1742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
			this.state = 1744;
			this.match(PythonParser.SLASH);
			this.state = 1746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1745;
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
		this.enterRule(localctx, 294, PythonParser.RULE_lambda_star_etc);
		let _la: number;
		try {
			this.state = 1770;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1748;
				this.match(PythonParser.STAR);
				this.state = 1749;
				this.lambda_param_no_default();
				this.state = 1753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0)) {
					{
					{
					this.state = 1750;
					this.lambda_param_maybe_default();
					}
					}
					this.state = 1755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 1756;
					this.lambda_kwds();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1759;
				this.match(PythonParser.STAR);
				this.state = 1760;
				this.match(PythonParser.COMMA);
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1761;
					this.lambda_param_maybe_default();
					}
					}
					this.state = 1764;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 31) !== 0));
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 1766;
					this.lambda_kwds();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1769;
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
		this.enterRule(localctx, 296, PythonParser.RULE_lambda_kwds);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1772;
			this.match(PythonParser.DOUBLESTAR);
			this.state = 1773;
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
		this.enterRule(localctx, 298, PythonParser.RULE_lambda_param_no_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1775;
			this.lambda_param();
			this.state = 1777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1776;
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
		this.enterRule(localctx, 300, PythonParser.RULE_lambda_param_with_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1779;
			this.lambda_param();
			this.state = 1780;
			this.default_assignment();
			this.state = 1782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1781;
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
		this.enterRule(localctx, 302, PythonParser.RULE_lambda_param_maybe_default);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1784;
			this.lambda_param();
			this.state = 1786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 1785;
				this.default_assignment();
				}
			}

			this.state = 1789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1788;
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
		this.enterRule(localctx, 304, PythonParser.RULE_lambda_param);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1791;
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
		this.enterRule(localctx, 306, PythonParser.RULE_fstring_middle);
		try {
			this.state = 1795;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1793;
				this.fstring_replacement_field();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1794;
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
		this.enterRule(localctx, 308, PythonParser.RULE_fstring_replacement_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1797;
			this.match(PythonParser.LBRACE);
			this.state = 1798;
			this.annotated_rhs();
			this.state = 1800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 1799;
				this.match(PythonParser.EQUAL);
				}
			}

			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 1802;
				this.fstring_conversion();
				}
			}

			this.state = 1806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 1805;
				this.fstring_full_format_spec();
				}
			}

			this.state = 1808;
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
		this.enterRule(localctx, 310, PythonParser.RULE_fstring_conversion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1810;
			this.match(PythonParser.EXCLAMATION);
			this.state = 1811;
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
		this.enterRule(localctx, 312, PythonParser.RULE_fstring_full_format_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1813;
			this.match(PythonParser.COLON);
			this.state = 1817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===10) {
				{
				{
				this.state = 1814;
				this.fstring_format_spec();
				}
				}
				this.state = 1819;
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
		this.enterRule(localctx, 314, PythonParser.RULE_fstring_format_spec);
		try {
			this.state = 1822;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1820;
				this.match(PythonParser.FSTRING_MIDDLE);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1821;
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
		this.enterRule(localctx, 316, PythonParser.RULE_fstring);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1824;
			this.match(PythonParser.FSTRING_START);
			this.state = 1828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===10) {
				{
				{
				this.state = 1825;
				this.fstring_middle();
				}
				}
				this.state = 1830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1831;
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
		this.enterRule(localctx, 318, PythonParser.RULE_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1833;
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
		this.enterRule(localctx, 320, PythonParser.RULE_strings);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1837;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1837;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 5:
						{
						this.state = 1835;
						this.fstring();
						}
						break;
					case 97:
						{
						this.state = 1836;
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
				this.state = 1839;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
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
		this.enterRule(localctx, 322, PythonParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1841;
			this.match(PythonParser.LSQB);
			this.state = 1843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 1842;
				this.star_named_expressions();
				}
			}

			this.state = 1845;
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
		this.enterRule(localctx, 324, PythonParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1847;
			this.match(PythonParser.LPAR);
			this.state = 1853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 1848;
				this.star_named_expression();
				this.state = 1849;
				this.match(PythonParser.COMMA);
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299713) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
					{
					this.state = 1850;
					this.star_named_expressions();
					}
				}

				}
			}

			this.state = 1855;
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
		this.enterRule(localctx, 326, PythonParser.RULE_set);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1857;
			this.match(PythonParser.LBRACE);
			this.state = 1858;
			this.star_named_expressions();
			this.state = 1859;
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
		this.enterRule(localctx, 328, PythonParser.RULE_dict);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1861;
			this.match(PythonParser.LBRACE);
			this.state = 1863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 788256) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299729) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
				{
				this.state = 1862;
				this.double_starred_kvpairs();
				}
			}

			this.state = 1865;
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
		this.enterRule(localctx, 330, PythonParser.RULE_double_starred_kvpairs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1867;
			this.double_starred_kvpair();
			this.state = 1872;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1868;
					this.match(PythonParser.COMMA);
					this.state = 1869;
					this.double_starred_kvpair();
					}
					}
				}
				this.state = 1874;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
			}
			this.state = 1876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1875;
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
		this.enterRule(localctx, 332, PythonParser.RULE_double_starred_kvpair);
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1878;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 1879;
				this.bitwise_or(0);
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1880;
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
		this.enterRule(localctx, 334, PythonParser.RULE_kvpair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1883;
			this.expression();
			this.state = 1884;
			this.match(PythonParser.COLON);
			this.state = 1885;
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
		this.enterRule(localctx, 336, PythonParser.RULE_for_if_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1887;
				this.for_if_clause();
				}
				}
				this.state = 1890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===73 || _la===86);
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
		this.enterRule(localctx, 338, PythonParser.RULE_for_if_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===86) {
				{
				this.state = 1892;
				this.match(PythonParser.ASYNC);
				}
			}

			this.state = 1895;
			this.match(PythonParser.FOR);
			this.state = 1896;
			this.star_targets();
			this.state = 1897;
			this.match(PythonParser.IN);
			this.state = 1898;
			this.disjunction();
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===88) {
				{
				{
				this.state = 1899;
				this.match(PythonParser.IF);
				this.state = 1900;
				this.disjunction();
				}
				}
				this.state = 1905;
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
		this.enterRule(localctx, 340, PythonParser.RULE_listcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1906;
			this.match(PythonParser.LSQB);
			this.state = 1907;
			this.named_expression();
			this.state = 1908;
			this.for_if_clauses();
			this.state = 1909;
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
		this.enterRule(localctx, 342, PythonParser.RULE_setcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1911;
			this.match(PythonParser.LBRACE);
			this.state = 1912;
			this.named_expression();
			this.state = 1913;
			this.for_if_clauses();
			this.state = 1914;
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
		this.enterRule(localctx, 344, PythonParser.RULE_genexp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1916;
			this.match(PythonParser.LPAR);
			this.state = 1919;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				{
				this.state = 1917;
				this.assignment_expression();
				}
				break;
			case 2:
				{
				this.state = 1918;
				this.expression();
				}
				break;
			}
			this.state = 1921;
			this.for_if_clauses();
			this.state = 1922;
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
		this.enterRule(localctx, 346, PythonParser.RULE_dictcomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1924;
			this.match(PythonParser.LBRACE);
			this.state = 1925;
			this.kvpair();
			this.state = 1926;
			this.for_if_clauses();
			this.state = 1927;
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
		this.enterRule(localctx, 348, PythonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1929;
			this.args();
			this.state = 1931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1930;
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
		this.enterRule(localctx, 350, PythonParser.RULE_args);
		try {
			let _alt: number;
			this.state = 1958;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1938;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 20:
					{
					this.state = 1933;
					this.starred_expression();
					}
					break;
				case 5:
				case 8:
				case 9:
				case 10:
				case 18:
				case 19:
				case 32:
				case 53:
				case 56:
				case 57:
				case 61:
				case 66:
				case 74:
				case 84:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					{
					this.state = 1936;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
					case 1:
						{
						this.state = 1934;
						this.assignment_expression();
						}
						break;
					case 2:
						{
						this.state = 1935;
						this.expression();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1950;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1940;
						this.match(PythonParser.COMMA);
						this.state = 1946;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 20:
							{
							this.state = 1941;
							this.starred_expression();
							}
							break;
						case 5:
						case 8:
						case 9:
						case 10:
						case 18:
						case 19:
						case 32:
						case 53:
						case 56:
						case 57:
						case 61:
						case 66:
						case 74:
						case 84:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 97:
							{
							this.state = 1944;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
							case 1:
								{
								this.state = 1942;
								this.assignment_expression();
								}
								break;
							case 2:
								{
								this.state = 1943;
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
					this.state = 1952;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
				}
				this.state = 1955;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1953;
					this.match(PythonParser.COMMA);
					this.state = 1954;
					this.kwargs();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1957;
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
		this.enterRule(localctx, 352, PythonParser.RULE_kwargs);
		try {
			let _alt: number;
			this.state = 1987;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1960;
				this.kwarg_or_starred();
				this.state = 1965;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1961;
						this.match(PythonParser.COMMA);
						this.state = 1962;
						this.kwarg_or_starred();
						}
						}
					}
					this.state = 1967;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
				}
				this.state = 1977;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1968;
					this.match(PythonParser.COMMA);
					this.state = 1969;
					this.kwarg_or_double_starred();
					this.state = 1974;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1970;
							this.match(PythonParser.COMMA);
							this.state = 1971;
							this.kwarg_or_double_starred();
							}
							}
						}
						this.state = 1976;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1979;
				this.kwarg_or_double_starred();
				this.state = 1984;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1980;
						this.match(PythonParser.COMMA);
						this.state = 1981;
						this.kwarg_or_double_starred();
						}
						}
					}
					this.state = 1986;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
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
		this.enterRule(localctx, 354, PythonParser.RULE_starred_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1989;
			this.match(PythonParser.STAR);
			this.state = 1990;
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
		this.enterRule(localctx, 356, PythonParser.RULE_kwarg_or_starred);
		try {
			this.state = 1997;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1992;
				this.name();
				this.state = 1993;
				this.match(PythonParser.EQUAL);
				this.state = 1994;
				this.expression();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1996;
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
		this.enterRule(localctx, 358, PythonParser.RULE_kwarg_or_double_starred);
		try {
			this.state = 2005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1999;
				this.name();
				this.state = 2000;
				this.match(PythonParser.EQUAL);
				this.state = 2001;
				this.expression();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2003;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 2004;
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
		this.enterRule(localctx, 360, PythonParser.RULE_star_targets);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2007;
			this.star_target();
			this.state = 2012;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2008;
					this.match(PythonParser.COMMA);
					this.state = 2009;
					this.star_target();
					}
					}
				}
				this.state = 2014;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
			}
			this.state = 2016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 2015;
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
		this.enterRule(localctx, 362, PythonParser.RULE_star_targets_list_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2018;
			this.star_target();
			this.state = 2023;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 263, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2019;
					this.match(PythonParser.COMMA);
					this.state = 2020;
					this.star_target();
					}
					}
				}
				this.state = 2025;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 263, this._ctx);
			}
			this.state = 2027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 2026;
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
		this.enterRule(localctx, 364, PythonParser.RULE_star_targets_tuple_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2029;
			this.star_target();
			this.state = 2040;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 2030;
				this.match(PythonParser.COMMA);
				}
				break;
			case 2:
				{
				this.state = 2033;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2031;
						this.match(PythonParser.COMMA);
						this.state = 2032;
						this.star_target();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2035;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 2037;
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
		this.enterRule(localctx, 366, PythonParser.RULE_star_target);
		try {
			this.state = 2045;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2042;
				this.match(PythonParser.STAR);
				{
				this.state = 2043;
				this.star_target();
				}
				}
				break;
			case 5:
			case 8:
			case 9:
			case 10:
			case 53:
			case 56:
			case 61:
			case 66:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2044;
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
		this.enterRule(localctx, 368, PythonParser.RULE_target_with_star_atom);
		try {
			this.state = 2057;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2047;
				this.t_primary(0);
				this.state = 2054;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 14:
					{
					this.state = 2048;
					this.match(PythonParser.DOT);
					this.state = 2049;
					this.name();
					}
					break;
				case 9:
					{
					this.state = 2050;
					this.match(PythonParser.LSQB);
					this.state = 2051;
					this.slices();
					this.state = 2052;
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
				this.state = 2056;
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
		this.enterRule(localctx, 370, PythonParser.RULE_star_atom);
		let _la: number;
		try {
			this.state = 2074;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2059;
				this.name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2060;
				this.match(PythonParser.LPAR);
				this.state = 2061;
				this.target_with_star_atom();
				this.state = 2062;
				this.match(PythonParser.RPAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2064;
				this.match(PythonParser.LPAR);
				this.state = 2066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1050400) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 8457) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 2065;
					this.star_targets_tuple_seq();
					}
				}

				this.state = 2068;
				this.match(PythonParser.RPAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2069;
				this.match(PythonParser.LSQB);
				this.state = 2071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1050400) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 8457) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 2070;
					this.star_targets_list_seq();
					}
				}

				this.state = 2073;
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
		this.enterRule(localctx, 372, PythonParser.RULE_single_target);
		try {
			this.state = 2082;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2076;
				this.single_subscript_attribute_target();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2077;
				this.name();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2078;
				this.match(PythonParser.LPAR);
				this.state = 2079;
				this.single_target();
				this.state = 2080;
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
		this.enterRule(localctx, 374, PythonParser.RULE_single_subscript_attribute_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2084;
			this.t_primary(0);
			this.state = 2091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				{
				this.state = 2085;
				this.match(PythonParser.DOT);
				this.state = 2086;
				this.name();
				}
				break;
			case 9:
				{
				this.state = 2087;
				this.match(PythonParser.LSQB);
				this.state = 2088;
				this.slices();
				this.state = 2089;
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
		let _startState: number = 376;
		this.enterRecursionRule(localctx, 376, PythonParser.RULE_t_primary, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2094;
			this.atom();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2113;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 278, this._ctx);
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
					this.state = 2096;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2109;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
					case 1:
						{
						this.state = 2097;
						this.match(PythonParser.DOT);
						this.state = 2098;
						this.name();
						}
						break;
					case 2:
						{
						this.state = 2099;
						this.match(PythonParser.LSQB);
						this.state = 2100;
						this.slices();
						this.state = 2101;
						this.match(PythonParser.RSQB);
						}
						break;
					case 3:
						{
						this.state = 2103;
						this.genexp();
						}
						break;
					case 4:
						{
						this.state = 2104;
						this.match(PythonParser.LPAR);
						this.state = 2106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1836832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 589299729) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261675265) !== 0)) {
							{
							this.state = 2105;
							this.arguments();
							}
						}

						this.state = 2108;
						this.match(PythonParser.RPAR);
						}
						break;
					}
					}
					}
				}
				this.state = 2115;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 278, this._ctx);
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
		this.enterRule(localctx, 378, PythonParser.RULE_del_targets);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2116;
			this.del_target();
			this.state = 2121;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 279, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2117;
					this.match(PythonParser.COMMA);
					this.state = 2118;
					this.del_target();
					}
					}
				}
				this.state = 2123;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 279, this._ctx);
			}
			this.state = 2125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 2124;
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
		this.enterRule(localctx, 380, PythonParser.RULE_del_target);
		try {
			this.state = 2137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2127;
				this.t_primary(0);
				this.state = 2134;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 14:
					{
					this.state = 2128;
					this.match(PythonParser.DOT);
					this.state = 2129;
					this.name();
					}
					break;
				case 9:
					{
					this.state = 2130;
					this.match(PythonParser.LSQB);
					this.state = 2131;
					this.slices();
					this.state = 2132;
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
				this.state = 2136;
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
		this.enterRule(localctx, 382, PythonParser.RULE_del_t_atom);
		let _la: number;
		try {
			this.state = 2154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2139;
				this.name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2140;
				this.match(PythonParser.LPAR);
				this.state = 2141;
				this.del_target();
				this.state = 2142;
				this.match(PythonParser.RPAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2144;
				this.match(PythonParser.LPAR);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1824) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 8457) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 2145;
					this.del_targets();
					}
				}

				this.state = 2148;
				this.match(PythonParser.RPAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2149;
				this.match(PythonParser.LSQB);
				this.state = 2151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1824) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 8457) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 127) !== 0)) {
					{
					this.state = 2150;
					this.del_targets();
					}
				}

				this.state = 2153;
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
		this.enterRule(localctx, 384, PythonParser.RULE_type_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 8:
			case 9:
			case 10:
			case 18:
			case 19:
			case 32:
			case 53:
			case 56:
			case 57:
			case 61:
			case 66:
			case 74:
			case 84:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2156;
				this.expression();
				this.state = 2161;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2157;
						this.match(PythonParser.COMMA);
						this.state = 2158;
						this.expression();
						}
						}
					}
					this.state = 2163;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
				}
				this.state = 2176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 2164;
					this.match(PythonParser.COMMA);
					this.state = 2174;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 20:
						{
						this.state = 2165;
						this.match(PythonParser.STAR);
						this.state = 2166;
						this.expression();
						this.state = 2170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===16) {
							{
							this.state = 2167;
							this.match(PythonParser.COMMA);
							this.state = 2168;
							this.match(PythonParser.DOUBLESTAR);
							this.state = 2169;
							this.expression();
							}
						}

						}
						break;
					case 36:
						{
						this.state = 2172;
						this.match(PythonParser.DOUBLESTAR);
						this.state = 2173;
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
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2178;
				this.match(PythonParser.STAR);
				this.state = 2179;
				this.expression();
				this.state = 2183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 2180;
					this.match(PythonParser.COMMA);
					this.state = 2181;
					this.match(PythonParser.DOUBLESTAR);
					this.state = 2182;
					this.expression();
					}
				}

				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2185;
				this.match(PythonParser.DOUBLESTAR);
				this.state = 2186;
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
	public func_type_comment(): Func_type_commentContext {
		let localctx: Func_type_commentContext = new Func_type_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, PythonParser.RULE_func_type_comment);
		try {
			this.state = 2192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2189;
				this.match(PythonParser.NEWLINE);
				this.state = 2190;
				this.match(PythonParser.TYPE_COMMENT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2191;
				this.match(PythonParser.TYPE_COMMENT);
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
		this.enterRule(localctx, 388, PythonParser.RULE_name_except_underscore);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2194;
			_la = this._input.LA(1);
			if(!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 23) !== 0))) {
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
		this.enterRule(localctx, 390, PythonParser.RULE_name);
		try {
			this.state = 2198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2196;
				this.match(PythonParser.NAME_OR_WILDCARD);
				}
				break;
			case 91:
			case 92:
			case 93:
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2197;
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
		case 28:
			return this.dotted_name_sempred(localctx as Dotted_nameContext, predIndex);
		case 128:
			return this.bitwise_or_sempred(localctx as Bitwise_orContext, predIndex);
		case 129:
			return this.bitwise_xor_sempred(localctx as Bitwise_xorContext, predIndex);
		case 130:
			return this.bitwise_and_sempred(localctx as Bitwise_andContext, predIndex);
		case 131:
			return this.shift_expr_sempred(localctx as Shift_exprContext, predIndex);
		case 132:
			return this.sum_sempred(localctx as SumContext, predIndex);
		case 133:
			return this.term_sempred(localctx as TermContext, predIndex);
		case 137:
			return this.primary_sempred(localctx as PrimaryContext, predIndex);
		case 188:
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

	public static readonly _serializedATN: number[] = [4,1,102,2201,2,0,7,0,
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
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,1,0,3,0,394,8,0,1,0,1,0,1,1,1,1,1,2,1,2,5,
	2,402,8,2,10,2,12,2,405,9,2,1,2,1,2,1,3,1,3,3,3,411,8,3,1,3,1,3,1,3,1,3,
	5,3,417,8,3,10,3,12,3,420,9,3,1,3,1,3,1,4,4,4,425,8,4,11,4,12,4,426,1,5,
	1,5,3,5,431,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,439,8,6,1,7,1,7,1,7,5,7,444,
	8,7,10,7,12,7,447,9,7,1,7,3,7,450,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,468,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,3,9,478,8,9,1,10,1,10,1,10,1,10,1,10,3,10,485,8,10,1,10,1,10,1,10,1,10,
	1,10,3,10,492,8,10,1,10,1,10,1,10,1,10,3,10,498,8,10,1,10,1,10,1,10,4,10,
	503,8,10,11,10,12,10,504,1,10,1,10,3,10,509,8,10,1,10,3,10,512,8,10,1,10,
	1,10,1,10,1,10,3,10,518,8,10,3,10,520,8,10,1,11,1,11,3,11,524,8,11,1,12,
	1,12,1,13,1,13,3,13,530,8,13,1,14,1,14,1,14,1,14,3,14,536,8,14,3,14,538,
	8,14,1,15,1,15,1,15,1,15,5,15,544,8,15,10,15,12,15,547,9,15,1,16,1,16,1,
	16,1,16,5,16,553,8,16,10,16,12,16,556,9,16,1,17,1,17,1,17,1,18,1,18,1,19,
	1,19,1,19,1,19,3,19,567,8,19,1,20,1,20,3,20,571,8,20,1,21,1,21,1,21,1,22,
	1,22,5,22,578,8,22,10,22,12,22,581,9,22,1,22,1,22,1,22,1,22,1,22,1,22,4,
	22,589,8,22,11,22,12,22,590,1,22,1,22,3,22,595,8,22,1,23,1,23,1,23,3,23,
	600,8,23,1,23,1,23,1,23,1,23,3,23,606,8,23,1,24,1,24,1,24,5,24,611,8,24,
	10,24,12,24,614,9,24,1,25,1,25,1,25,3,25,619,8,25,1,26,1,26,1,26,5,26,624,
	8,26,10,26,12,26,627,9,26,1,27,1,27,1,27,3,27,632,8,27,1,28,1,28,1,28,1,
	28,1,28,1,28,5,28,640,8,28,10,28,12,28,643,9,28,1,29,1,29,1,29,1,29,1,29,
	1,29,3,29,651,8,29,1,30,1,30,1,30,1,30,4,30,657,8,30,11,30,12,30,658,1,
	31,1,31,1,31,1,31,3,31,665,8,31,1,32,1,32,1,32,3,32,670,8,32,1,32,1,32,
	3,32,674,8,32,1,32,3,32,677,8,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,3,33,
	686,8,33,1,34,1,34,1,34,3,34,691,8,34,1,34,1,34,3,34,695,8,34,1,34,1,34,
	1,34,3,34,700,8,34,1,34,1,34,3,34,704,8,34,1,34,1,34,1,34,1,34,1,34,1,34,
	3,34,712,8,34,1,34,1,34,3,34,716,8,34,1,34,1,34,1,34,3,34,721,8,34,1,34,
	1,34,3,34,725,8,34,1,34,1,34,3,34,729,8,34,1,35,1,35,1,36,1,36,5,36,735,
	8,36,10,36,12,36,738,9,36,1,36,5,36,741,8,36,10,36,12,36,744,9,36,1,36,
	3,36,747,8,36,1,36,1,36,5,36,751,8,36,10,36,12,36,754,9,36,1,36,3,36,757,
	8,36,1,36,4,36,760,8,36,11,36,12,36,761,1,36,5,36,765,8,36,10,36,12,36,
	768,9,36,1,36,3,36,771,8,36,1,36,4,36,774,8,36,11,36,12,36,775,1,36,3,36,
	779,8,36,1,36,3,36,782,8,36,1,37,4,37,785,8,37,11,37,12,37,786,1,37,1,37,
	3,37,791,8,37,1,38,5,38,794,8,38,10,38,12,38,797,9,38,1,38,4,38,800,8,38,
	11,38,12,38,801,1,38,1,38,3,38,806,8,38,1,39,1,39,1,39,5,39,811,8,39,10,
	39,12,39,814,9,39,1,39,3,39,817,8,39,1,39,1,39,1,39,5,39,822,8,39,10,39,
	12,39,825,9,39,1,39,3,39,828,8,39,1,39,1,39,1,39,4,39,833,8,39,11,39,12,
	39,834,1,39,3,39,838,8,39,1,39,3,39,841,8,39,1,40,1,40,1,40,1,41,1,41,3,
	41,848,8,41,1,41,3,41,851,8,41,1,42,1,42,3,42,855,8,42,1,42,3,42,858,8,
	42,1,43,1,43,1,43,3,43,863,8,43,1,43,3,43,866,8,43,1,44,1,44,3,44,870,8,
	44,1,44,3,44,873,8,44,1,44,3,44,876,8,44,1,45,1,45,3,45,880,8,45,1,46,1,
	46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,50,
	1,50,1,50,3,50,900,8,50,3,50,902,8,50,1,51,1,51,1,51,1,51,1,51,1,51,3,51,
	910,8,51,3,51,912,8,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,3,53,
	923,8,53,1,54,3,54,926,8,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,934,8,54,
	1,54,1,54,3,54,938,8,54,1,55,1,55,1,55,1,55,1,55,5,55,945,8,55,10,55,12,
	55,948,9,55,1,55,3,55,951,8,55,1,55,1,55,1,55,3,55,956,8,55,1,55,1,55,1,
	55,1,55,1,55,1,55,1,55,1,55,5,55,966,8,55,10,55,12,55,969,9,55,1,55,3,55,
	972,8,55,1,55,1,55,1,55,1,55,1,55,3,55,979,8,55,1,55,1,55,1,55,1,55,5,55,
	985,8,55,10,55,12,55,988,9,55,1,55,1,55,3,55,992,8,55,1,55,1,55,3,55,996,
	8,55,1,56,1,56,1,56,3,56,1001,8,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,1,57,4,57,1012,8,57,11,57,12,57,1013,1,57,3,57,1017,8,57,1,57,3,57,1020,
	8,57,1,57,1,57,1,57,1,57,4,57,1026,8,57,11,57,12,57,1027,1,57,3,57,1031,
	8,57,1,57,3,57,1034,8,57,3,57,1036,8,57,1,58,1,58,1,58,1,58,3,58,1042,8,
	58,3,58,1044,8,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,3,59,1054,8,59,
	1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,4,61,1069,
	8,61,11,61,12,61,1070,1,61,1,61,1,62,1,62,1,62,3,62,1078,8,62,1,62,3,62,
	1081,8,62,1,63,1,63,1,63,3,63,1086,8,63,1,63,1,63,1,63,1,64,1,64,1,64,1,
	65,1,65,3,65,1096,8,65,1,66,1,66,3,66,1100,8,66,1,67,1,67,1,67,1,67,1,68,
	1,68,1,68,5,68,1109,8,68,10,68,12,68,1112,9,68,1,69,1,69,1,69,1,69,1,69,
	1,69,1,69,1,69,3,69,1122,8,69,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1130,8,
	70,1,71,1,71,1,71,1,71,1,71,1,71,3,71,1138,8,71,1,72,1,72,1,72,1,72,1,73,
	3,73,1145,8,73,1,73,1,73,1,74,3,74,1150,8,74,1,74,1,74,1,75,1,75,1,76,1,
	76,1,77,1,77,1,78,1,78,1,79,1,79,1,80,1,80,1,81,1,81,1,81,4,81,1169,8,81,
	11,81,12,81,1170,1,82,1,82,1,82,5,82,1176,8,82,10,82,12,82,1179,9,82,1,
	83,1,83,1,83,1,83,1,84,1,84,3,84,1187,8,84,1,84,1,84,1,84,3,84,1192,8,84,
	1,84,3,84,1195,8,84,1,85,1,85,1,85,3,85,1200,8,85,1,86,1,86,1,86,5,86,1205,
	8,86,10,86,12,86,1208,9,86,1,86,3,86,1211,8,86,1,87,1,87,3,87,1215,8,87,
	1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,3,89,1225,8,89,1,89,1,89,1,89,1,
	89,1,89,1,89,3,89,1233,8,89,1,89,3,89,1236,8,89,1,89,1,89,3,89,1240,8,89,
	1,90,1,90,1,90,5,90,1245,8,90,10,90,12,90,1248,9,90,1,91,1,91,3,91,1252,
	8,91,1,91,1,91,1,91,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,3,93,1265,8,
	93,1,93,3,93,1268,8,93,1,93,3,93,1271,8,93,3,93,1273,8,93,1,93,1,93,1,94,
	1,94,1,94,5,94,1280,8,94,10,94,12,94,1283,9,94,1,95,1,95,1,95,5,95,1288,
	8,95,10,95,12,95,1291,9,95,1,96,1,96,1,96,1,96,1,97,1,97,1,97,3,97,1300,
	8,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,99,1,99,1,99,5,99,1312,8,99,10,
	99,12,99,1315,9,99,1,99,3,99,1318,8,99,1,100,1,100,3,100,1322,8,100,1,100,
	3,100,1325,8,100,1,100,1,100,1,100,3,100,1330,8,100,1,100,1,100,1,100,3,
	100,1335,8,100,3,100,1337,8,100,1,101,1,101,1,101,1,102,1,102,1,102,1,103,
	1,103,1,103,1,104,1,104,1,104,5,104,1351,8,104,10,104,12,104,1354,9,104,
	1,104,3,104,1357,8,104,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1365,8,
	105,1,105,3,105,1368,8,105,1,106,1,106,1,106,1,106,3,106,1374,8,106,3,106,
	1376,8,106,1,107,1,107,1,107,5,107,1381,8,107,10,107,12,107,1384,9,107,
	1,107,3,107,1387,8,107,1,108,1,108,1,108,3,108,1392,8,108,1,109,1,109,1,
	109,5,109,1397,8,109,10,109,12,109,1400,9,109,1,109,3,109,1403,8,109,1,
	110,1,110,1,110,3,110,1408,8,110,1,111,1,111,1,111,1,111,1,112,1,112,3,
	112,1416,8,112,1,113,1,113,1,113,5,113,1421,8,113,10,113,12,113,1424,9,
	113,1,114,1,114,1,114,5,114,1429,8,114,10,114,12,114,1432,9,114,1,115,1,
	115,1,115,3,115,1437,8,115,1,116,1,116,5,116,1441,8,116,10,116,12,116,1444,
	9,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,3,117,
	1456,8,117,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,1,120,1,121,
	1,121,1,121,1,122,1,122,1,122,1,123,1,123,1,123,1,124,1,124,1,124,1,124,
	1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,128,1,128,
	1,128,1,128,1,128,1,128,5,128,1496,8,128,10,128,12,128,1499,9,128,1,129,
	1,129,1,129,1,129,1,129,1,129,5,129,1507,8,129,10,129,12,129,1510,9,129,
	1,130,1,130,1,130,1,130,1,130,1,130,5,130,1518,8,130,10,130,12,130,1521,
	9,130,1,131,1,131,1,131,1,131,1,131,1,131,5,131,1529,8,131,10,131,12,131,
	1532,9,131,1,132,1,132,1,132,1,132,1,132,1,132,5,132,1540,8,132,10,132,
	12,132,1543,9,132,1,133,1,133,1,133,1,133,1,133,1,133,5,133,1551,8,133,
	10,133,12,133,1554,9,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,3,134,
	1563,8,134,1,135,1,135,1,135,3,135,1568,8,135,1,136,1,136,1,136,3,136,1573,
	8,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,1584,
	8,137,1,137,1,137,1,137,1,137,1,137,3,137,1591,8,137,5,137,1593,8,137,10,
	137,12,137,1596,9,137,1,138,1,138,1,138,3,138,1601,8,138,1,138,1,138,1,
	138,3,138,1606,8,138,5,138,1608,8,138,10,138,12,138,1611,9,138,1,138,3,
	138,1614,8,138,3,138,1616,8,138,1,139,3,139,1619,8,139,1,139,1,139,3,139,
	1623,8,139,1,139,1,139,3,139,1627,8,139,3,139,1629,8,139,1,139,3,139,1632,
	8,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,3,140,1643,
	8,140,1,140,1,140,3,140,1647,8,140,1,140,1,140,1,140,1,140,3,140,1653,8,
	140,1,140,3,140,1656,8,140,1,141,1,141,1,141,3,141,1661,8,141,1,141,1,141,
	1,142,1,142,3,142,1667,8,142,1,142,1,142,1,142,1,143,1,143,1,144,1,144,
	5,144,1676,8,144,10,144,12,144,1679,9,144,1,144,5,144,1682,8,144,10,144,
	12,144,1685,9,144,1,144,3,144,1688,8,144,1,144,1,144,5,144,1692,8,144,10,
	144,12,144,1695,9,144,1,144,3,144,1698,8,144,1,144,4,144,1701,8,144,11,
	144,12,144,1702,1,144,5,144,1706,8,144,10,144,12,144,1709,9,144,1,144,3,
	144,1712,8,144,1,144,4,144,1715,8,144,11,144,12,144,1716,1,144,3,144,1720,
	8,144,1,144,3,144,1723,8,144,1,145,4,145,1726,8,145,11,145,12,145,1727,
	1,145,1,145,3,145,1732,8,145,1,146,5,146,1735,8,146,10,146,12,146,1738,
	9,146,1,146,4,146,1741,8,146,11,146,12,146,1742,1,146,1,146,3,146,1747,
	8,146,1,147,1,147,1,147,5,147,1752,8,147,10,147,12,147,1755,9,147,1,147,
	3,147,1758,8,147,1,147,1,147,1,147,4,147,1763,8,147,11,147,12,147,1764,
	1,147,3,147,1768,8,147,1,147,3,147,1771,8,147,1,148,1,148,1,148,1,149,1,
	149,3,149,1778,8,149,1,150,1,150,1,150,3,150,1783,8,150,1,151,1,151,3,151,
	1787,8,151,1,151,3,151,1790,8,151,1,152,1,152,1,153,1,153,3,153,1796,8,
	153,1,154,1,154,1,154,3,154,1801,8,154,1,154,3,154,1804,8,154,1,154,3,154,
	1807,8,154,1,154,1,154,1,155,1,155,1,155,1,156,1,156,5,156,1816,8,156,10,
	156,12,156,1819,9,156,1,157,1,157,3,157,1823,8,157,1,158,1,158,5,158,1827,
	8,158,10,158,12,158,1830,9,158,1,158,1,158,1,159,1,159,1,160,1,160,4,160,
	1838,8,160,11,160,12,160,1839,1,161,1,161,3,161,1844,8,161,1,161,1,161,
	1,162,1,162,1,162,1,162,3,162,1852,8,162,3,162,1854,8,162,1,162,1,162,1,
	163,1,163,1,163,1,163,1,164,1,164,3,164,1864,8,164,1,164,1,164,1,165,1,
	165,1,165,5,165,1871,8,165,10,165,12,165,1874,9,165,1,165,3,165,1877,8,
	165,1,166,1,166,1,166,3,166,1882,8,166,1,167,1,167,1,167,1,167,1,168,4,
	168,1889,8,168,11,168,12,168,1890,1,169,3,169,1894,8,169,1,169,1,169,1,
	169,1,169,1,169,1,169,5,169,1902,8,169,10,169,12,169,1905,9,169,1,170,1,
	170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,3,
	172,1920,8,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,174,1,
	174,3,174,1932,8,174,1,175,1,175,1,175,3,175,1937,8,175,3,175,1939,8,175,
	1,175,1,175,1,175,1,175,3,175,1945,8,175,3,175,1947,8,175,5,175,1949,8,
	175,10,175,12,175,1952,9,175,1,175,1,175,3,175,1956,8,175,1,175,3,175,1959,
	8,175,1,176,1,176,1,176,5,176,1964,8,176,10,176,12,176,1967,9,176,1,176,
	1,176,1,176,1,176,5,176,1973,8,176,10,176,12,176,1976,9,176,3,176,1978,
	8,176,1,176,1,176,1,176,5,176,1983,8,176,10,176,12,176,1986,9,176,3,176,
	1988,8,176,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,3,178,1998,8,
	178,1,179,1,179,1,179,1,179,1,179,1,179,3,179,2006,8,179,1,180,1,180,1,
	180,5,180,2011,8,180,10,180,12,180,2014,9,180,1,180,3,180,2017,8,180,1,
	181,1,181,1,181,5,181,2022,8,181,10,181,12,181,2025,9,181,1,181,3,181,2028,
	8,181,1,182,1,182,1,182,1,182,4,182,2034,8,182,11,182,12,182,2035,1,182,
	3,182,2039,8,182,3,182,2041,8,182,1,183,1,183,1,183,3,183,2046,8,183,1,
	184,1,184,1,184,1,184,1,184,1,184,1,184,3,184,2055,8,184,1,184,3,184,2058,
	8,184,1,185,1,185,1,185,1,185,1,185,1,185,1,185,3,185,2067,8,185,1,185,
	1,185,1,185,3,185,2072,8,185,1,185,3,185,2075,8,185,1,186,1,186,1,186,1,
	186,1,186,1,186,3,186,2083,8,186,1,187,1,187,1,187,1,187,1,187,1,187,1,
	187,3,187,2092,8,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,
	188,1,188,1,188,1,188,1,188,3,188,2107,8,188,1,188,3,188,2110,8,188,5,188,
	2112,8,188,10,188,12,188,2115,9,188,1,189,1,189,1,189,5,189,2120,8,189,
	10,189,12,189,2123,9,189,1,189,3,189,2126,8,189,1,190,1,190,1,190,1,190,
	1,190,1,190,1,190,3,190,2135,8,190,1,190,3,190,2138,8,190,1,191,1,191,1,
	191,1,191,1,191,1,191,1,191,3,191,2147,8,191,1,191,1,191,1,191,3,191,2152,
	8,191,1,191,3,191,2155,8,191,1,192,1,192,1,192,5,192,2160,8,192,10,192,
	12,192,2163,9,192,1,192,1,192,1,192,1,192,1,192,1,192,3,192,2171,8,192,
	1,192,1,192,3,192,2175,8,192,3,192,2177,8,192,1,192,1,192,1,192,1,192,1,
	192,3,192,2184,8,192,1,192,1,192,3,192,2188,8,192,1,193,1,193,1,193,3,193,
	2193,8,193,1,194,1,194,1,195,1,195,3,195,2199,8,195,1,195,0,9,56,256,258,
	260,262,264,266,274,376,196,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
	194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
	230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,
	266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,
	302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
	338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,
	374,376,378,380,382,384,386,388,390,0,6,3,0,37,47,49,49,51,51,2,0,14,14,
	53,53,1,0,18,19,1,0,34,35,4,0,20,21,27,27,48,48,50,50,2,0,91,93,95,95,2379,
	0,393,1,0,0,0,2,397,1,0,0,0,4,399,1,0,0,0,6,408,1,0,0,0,8,424,1,0,0,0,10,
	430,1,0,0,0,12,438,1,0,0,0,14,440,1,0,0,0,16,467,1,0,0,0,18,477,1,0,0,0,
	20,519,1,0,0,0,22,523,1,0,0,0,24,525,1,0,0,0,26,527,1,0,0,0,28,531,1,0,
	0,0,30,539,1,0,0,0,32,548,1,0,0,0,34,557,1,0,0,0,36,560,1,0,0,0,38,562,
	1,0,0,0,40,570,1,0,0,0,42,572,1,0,0,0,44,594,1,0,0,0,46,605,1,0,0,0,48,
	607,1,0,0,0,50,615,1,0,0,0,52,620,1,0,0,0,54,628,1,0,0,0,56,633,1,0,0,0,
	58,650,1,0,0,0,60,656,1,0,0,0,62,664,1,0,0,0,64,666,1,0,0,0,66,685,1,0,
	0,0,68,728,1,0,0,0,70,730,1,0,0,0,72,781,1,0,0,0,74,784,1,0,0,0,76,795,
	1,0,0,0,78,840,1,0,0,0,80,842,1,0,0,0,82,845,1,0,0,0,84,852,1,0,0,0,86,
	859,1,0,0,0,88,867,1,0,0,0,90,877,1,0,0,0,92,881,1,0,0,0,94,884,1,0,0,0,
	96,887,1,0,0,0,98,890,1,0,0,0,100,893,1,0,0,0,102,903,1,0,0,0,104,913,1,
	0,0,0,106,917,1,0,0,0,108,925,1,0,0,0,110,995,1,0,0,0,112,997,1,0,0,0,114,
	1035,1,0,0,0,116,1037,1,0,0,0,118,1048,1,0,0,0,120,1058,1,0,0,0,122,1062,
	1,0,0,0,124,1080,1,0,0,0,126,1082,1,0,0,0,128,1090,1,0,0,0,130,1095,1,0,
	0,0,132,1099,1,0,0,0,134,1101,1,0,0,0,136,1105,1,0,0,0,138,1121,1,0,0,0,
	140,1129,1,0,0,0,142,1137,1,0,0,0,144,1139,1,0,0,0,146,1144,1,0,0,0,148,
	1149,1,0,0,0,150,1153,1,0,0,0,152,1155,1,0,0,0,154,1157,1,0,0,0,156,1159,
	1,0,0,0,158,1161,1,0,0,0,160,1163,1,0,0,0,162,1165,1,0,0,0,164,1172,1,0,
	0,0,166,1180,1,0,0,0,168,1194,1,0,0,0,170,1196,1,0,0,0,172,1201,1,0,0,0,
	174,1214,1,0,0,0,176,1216,1,0,0,0,178,1239,1,0,0,0,180,1241,1,0,0,0,182,
	1251,1,0,0,0,184,1256,1,0,0,0,186,1259,1,0,0,0,188,1276,1,0,0,0,190,1284,
	1,0,0,0,192,1292,1,0,0,0,194,1296,1,0,0,0,196,1304,1,0,0,0,198,1308,1,0,
	0,0,200,1336,1,0,0,0,202,1338,1,0,0,0,204,1341,1,0,0,0,206,1344,1,0,0,0,
	208,1347,1,0,0,0,210,1367,1,0,0,0,212,1369,1,0,0,0,214,1377,1,0,0,0,216,
	1391,1,0,0,0,218,1393,1,0,0,0,220,1407,1,0,0,0,222,1409,1,0,0,0,224,1415,
	1,0,0,0,226,1417,1,0,0,0,228,1425,1,0,0,0,230,1436,1,0,0,0,232,1438,1,0,
	0,0,234,1455,1,0,0,0,236,1457,1,0,0,0,238,1460,1,0,0,0,240,1463,1,0,0,0,
	242,1466,1,0,0,0,244,1469,1,0,0,0,246,1472,1,0,0,0,248,1475,1,0,0,0,250,
	1479,1,0,0,0,252,1482,1,0,0,0,254,1486,1,0,0,0,256,1489,1,0,0,0,258,1500,
	1,0,0,0,260,1511,1,0,0,0,262,1522,1,0,0,0,264,1533,1,0,0,0,266,1544,1,0,
	0,0,268,1562,1,0,0,0,270,1564,1,0,0,0,272,1572,1,0,0,0,274,1574,1,0,0,0,
	276,1615,1,0,0,0,278,1631,1,0,0,0,280,1655,1,0,0,0,282,1657,1,0,0,0,284,
	1664,1,0,0,0,286,1671,1,0,0,0,288,1722,1,0,0,0,290,1725,1,0,0,0,292,1736,
	1,0,0,0,294,1770,1,0,0,0,296,1772,1,0,0,0,298,1775,1,0,0,0,300,1779,1,0,
	0,0,302,1784,1,0,0,0,304,1791,1,0,0,0,306,1795,1,0,0,0,308,1797,1,0,0,0,
	310,1810,1,0,0,0,312,1813,1,0,0,0,314,1822,1,0,0,0,316,1824,1,0,0,0,318,
	1833,1,0,0,0,320,1837,1,0,0,0,322,1841,1,0,0,0,324,1847,1,0,0,0,326,1857,
	1,0,0,0,328,1861,1,0,0,0,330,1867,1,0,0,0,332,1881,1,0,0,0,334,1883,1,0,
	0,0,336,1888,1,0,0,0,338,1893,1,0,0,0,340,1906,1,0,0,0,342,1911,1,0,0,0,
	344,1916,1,0,0,0,346,1924,1,0,0,0,348,1929,1,0,0,0,350,1958,1,0,0,0,352,
	1987,1,0,0,0,354,1989,1,0,0,0,356,1997,1,0,0,0,358,2005,1,0,0,0,360,2007,
	1,0,0,0,362,2018,1,0,0,0,364,2029,1,0,0,0,366,2045,1,0,0,0,368,2057,1,0,
	0,0,370,2074,1,0,0,0,372,2082,1,0,0,0,374,2084,1,0,0,0,376,2093,1,0,0,0,
	378,2116,1,0,0,0,380,2137,1,0,0,0,382,2154,1,0,0,0,384,2187,1,0,0,0,386,
	2192,1,0,0,0,388,2194,1,0,0,0,390,2198,1,0,0,0,392,394,3,8,4,0,393,392,
	1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,396,5,0,0,1,396,1,1,0,0,0,397,
	398,3,12,6,0,398,3,1,0,0,0,399,403,3,208,104,0,400,402,5,98,0,0,401,400,
	1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,406,1,0,0,0,
	405,403,1,0,0,0,406,407,5,0,0,1,407,5,1,0,0,0,408,410,5,8,0,0,409,411,3,
	384,192,0,410,409,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,413,5,11,
	0,0,413,414,5,52,0,0,414,418,3,210,105,0,415,417,5,98,0,0,416,415,1,0,0,
	0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,421,1,0,0,0,420,418,
	1,0,0,0,421,422,5,0,0,1,422,7,1,0,0,0,423,425,3,10,5,0,424,423,1,0,0,0,
	425,426,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,9,1,0,0,0,428,431,3,
	18,9,0,429,431,3,14,7,0,430,428,1,0,0,0,430,429,1,0,0,0,431,11,1,0,0,0,
	432,433,3,18,9,0,433,434,5,98,0,0,434,439,1,0,0,0,435,439,3,14,7,0,436,
	439,5,98,0,0,437,439,5,0,0,1,438,432,1,0,0,0,438,435,1,0,0,0,438,436,1,
	0,0,0,438,437,1,0,0,0,439,13,1,0,0,0,440,445,3,16,8,0,441,442,5,17,0,0,
	442,444,3,16,8,0,443,441,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,
	1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,0,448,450,5,17,0,0,449,448,1,0,0,
	0,449,450,1,0,0,0,450,451,1,0,0,0,451,452,5,98,0,0,452,15,1,0,0,0,453,468,
	3,20,10,0,454,468,3,194,97,0,455,468,3,214,107,0,456,468,3,26,13,0,457,
	468,3,40,20,0,458,468,3,28,14,0,459,468,5,60,0,0,460,468,3,34,17,0,461,
	468,3,36,18,0,462,468,3,38,19,0,463,468,5,62,0,0,464,468,5,72,0,0,465,468,
	3,30,15,0,466,468,3,32,16,0,467,453,1,0,0,0,467,454,1,0,0,0,467,455,1,0,
	0,0,467,456,1,0,0,0,467,457,1,0,0,0,467,458,1,0,0,0,467,459,1,0,0,0,467,
	460,1,0,0,0,467,461,1,0,0,0,467,462,1,0,0,0,467,463,1,0,0,0,467,464,1,0,
	0,0,467,465,1,0,0,0,467,466,1,0,0,0,468,17,1,0,0,0,469,478,3,66,33,0,470,
	478,3,100,50,0,471,478,3,62,31,0,472,478,3,110,55,0,473,478,3,108,54,0,
	474,478,3,114,57,0,475,478,3,106,53,0,476,478,3,122,61,0,477,469,1,0,0,
	0,477,470,1,0,0,0,477,471,1,0,0,0,477,472,1,0,0,0,477,473,1,0,0,0,477,474,
	1,0,0,0,477,475,1,0,0,0,477,476,1,0,0,0,478,19,1,0,0,0,479,480,3,390,195,
	0,480,481,5,15,0,0,481,484,3,210,105,0,482,483,5,26,0,0,483,485,3,22,11,
	0,484,482,1,0,0,0,484,485,1,0,0,0,485,520,1,0,0,0,486,487,5,8,0,0,487,488,
	3,372,186,0,488,489,5,11,0,0,489,492,1,0,0,0,490,492,3,374,187,0,491,486,
	1,0,0,0,491,490,1,0,0,0,492,493,1,0,0,0,493,494,5,15,0,0,494,497,3,210,
	105,0,495,496,5,26,0,0,496,498,3,22,11,0,497,495,1,0,0,0,497,498,1,0,0,
	0,498,520,1,0,0,0,499,500,3,360,180,0,500,501,5,26,0,0,501,503,1,0,0,0,
	502,499,1,0,0,0,503,504,1,0,0,0,504,502,1,0,0,0,504,505,1,0,0,0,505,508,
	1,0,0,0,506,509,3,212,106,0,507,509,3,214,107,0,508,506,1,0,0,0,508,507,
	1,0,0,0,509,511,1,0,0,0,510,512,5,4,0,0,511,510,1,0,0,0,511,512,1,0,0,0,
	512,520,1,0,0,0,513,514,3,372,186,0,514,517,3,24,12,0,515,518,3,212,106,
	0,516,518,3,214,107,0,517,515,1,0,0,0,517,516,1,0,0,0,518,520,1,0,0,0,519,
	479,1,0,0,0,519,491,1,0,0,0,519,502,1,0,0,0,519,513,1,0,0,0,520,21,1,0,
	0,0,521,524,3,212,106,0,522,524,3,214,107,0,523,521,1,0,0,0,523,522,1,0,
	0,0,524,23,1,0,0,0,525,526,7,0,0,0,526,25,1,0,0,0,527,529,5,70,0,0,528,
	530,3,214,107,0,529,528,1,0,0,0,529,530,1,0,0,0,530,27,1,0,0,0,531,537,
	5,65,0,0,532,535,3,210,105,0,533,534,5,78,0,0,534,536,3,210,105,0,535,533,
	1,0,0,0,535,536,1,0,0,0,536,538,1,0,0,0,537,532,1,0,0,0,537,538,1,0,0,0,
	538,29,1,0,0,0,539,540,5,83,0,0,540,545,3,390,195,0,541,542,5,16,0,0,542,
	544,3,390,195,0,543,541,1,0,0,0,544,547,1,0,0,0,545,543,1,0,0,0,545,546,
	1,0,0,0,546,31,1,0,0,0,547,545,1,0,0,0,548,549,5,79,0,0,549,554,3,390,195,
	0,550,551,5,16,0,0,551,553,3,390,195,0,552,550,1,0,0,0,553,556,1,0,0,0,
	554,552,1,0,0,0,554,555,1,0,0,0,555,33,1,0,0,0,556,554,1,0,0,0,557,558,
	5,82,0,0,558,559,3,378,189,0,559,35,1,0,0,0,560,561,3,212,106,0,561,37,
	1,0,0,0,562,563,5,81,0,0,563,566,3,210,105,0,564,565,5,16,0,0,565,567,3,
	210,105,0,566,564,1,0,0,0,566,567,1,0,0,0,567,39,1,0,0,0,568,571,3,42,21,
	0,569,571,3,44,22,0,570,568,1,0,0,0,570,569,1,0,0,0,571,41,1,0,0,0,572,
	573,5,59,0,0,573,574,3,52,26,0,574,43,1,0,0,0,575,579,5,78,0,0,576,578,
	7,1,0,0,577,576,1,0,0,0,578,581,1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,
	580,582,1,0,0,0,581,579,1,0,0,0,582,583,3,56,28,0,583,584,5,59,0,0,584,
	585,3,46,23,0,585,595,1,0,0,0,586,588,5,78,0,0,587,589,7,1,0,0,588,587,
	1,0,0,0,589,590,1,0,0,0,590,588,1,0,0,0,590,591,1,0,0,0,591,592,1,0,0,0,
	592,593,5,59,0,0,593,595,3,46,23,0,594,575,1,0,0,0,594,586,1,0,0,0,595,
	45,1,0,0,0,596,597,5,8,0,0,597,599,3,48,24,0,598,600,5,16,0,0,599,598,1,
	0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,602,5,11,0,0,602,606,1,0,0,0,
	603,606,3,48,24,0,604,606,5,20,0,0,605,596,1,0,0,0,605,603,1,0,0,0,605,
	604,1,0,0,0,606,47,1,0,0,0,607,612,3,50,25,0,608,609,5,16,0,0,609,611,3,
	50,25,0,610,608,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,
	613,49,1,0,0,0,614,612,1,0,0,0,615,618,3,390,195,0,616,617,5,76,0,0,617,
	619,3,390,195,0,618,616,1,0,0,0,618,619,1,0,0,0,619,51,1,0,0,0,620,625,
	3,54,27,0,621,622,5,16,0,0,622,624,3,54,27,0,623,621,1,0,0,0,624,627,1,
	0,0,0,625,623,1,0,0,0,625,626,1,0,0,0,626,53,1,0,0,0,627,625,1,0,0,0,628,
	631,3,56,28,0,629,630,5,76,0,0,630,632,3,390,195,0,631,629,1,0,0,0,631,
	632,1,0,0,0,632,55,1,0,0,0,633,634,6,28,-1,0,634,635,3,390,195,0,635,641,
	1,0,0,0,636,637,10,2,0,0,637,638,5,14,0,0,638,640,3,390,195,0,639,636,1,
	0,0,0,640,643,1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,57,1,0,0,0,643,
	641,1,0,0,0,644,645,5,98,0,0,645,646,5,2,0,0,646,647,3,8,4,0,647,648,5,
	3,0,0,648,651,1,0,0,0,649,651,3,14,7,0,650,644,1,0,0,0,650,649,1,0,0,0,
	651,59,1,0,0,0,652,653,5,50,0,0,653,654,3,224,112,0,654,655,5,98,0,0,655,
	657,1,0,0,0,656,652,1,0,0,0,657,658,1,0,0,0,658,656,1,0,0,0,658,659,1,0,
	0,0,659,61,1,0,0,0,660,661,3,60,30,0,661,662,3,64,32,0,662,665,1,0,0,0,
	663,665,3,64,32,0,664,660,1,0,0,0,664,663,1,0,0,0,665,63,1,0,0,0,666,667,
	5,67,0,0,667,669,3,390,195,0,668,670,3,196,98,0,669,668,1,0,0,0,669,670,
	1,0,0,0,670,676,1,0,0,0,671,673,5,8,0,0,672,674,3,348,174,0,673,672,1,0,
	0,0,673,674,1,0,0,0,674,675,1,0,0,0,675,677,5,11,0,0,676,671,1,0,0,0,676,
	677,1,0,0,0,677,678,1,0,0,0,678,679,5,15,0,0,679,680,3,58,29,0,680,65,1,
	0,0,0,681,682,3,60,30,0,682,683,3,68,34,0,683,686,1,0,0,0,684,686,3,68,
	34,0,685,681,1,0,0,0,685,684,1,0,0,0,686,67,1,0,0,0,687,688,5,77,0,0,688,
	690,3,390,195,0,689,691,3,196,98,0,690,689,1,0,0,0,690,691,1,0,0,0,691,
	692,1,0,0,0,692,694,5,8,0,0,693,695,3,70,35,0,694,693,1,0,0,0,694,695,1,
	0,0,0,695,696,1,0,0,0,696,699,5,11,0,0,697,698,5,52,0,0,698,700,3,210,105,
	0,699,697,1,0,0,0,699,700,1,0,0,0,700,701,1,0,0,0,701,703,5,15,0,0,702,
	704,3,386,193,0,703,702,1,0,0,0,703,704,1,0,0,0,704,705,1,0,0,0,705,706,
	3,58,29,0,706,729,1,0,0,0,707,708,5,86,0,0,708,709,5,77,0,0,709,711,3,390,
	195,0,710,712,3,196,98,0,711,710,1,0,0,0,711,712,1,0,0,0,712,713,1,0,0,
	0,713,715,5,8,0,0,714,716,3,70,35,0,715,714,1,0,0,0,715,716,1,0,0,0,716,
	717,1,0,0,0,717,720,5,11,0,0,718,719,5,52,0,0,719,721,3,210,105,0,720,718,
	1,0,0,0,720,721,1,0,0,0,721,722,1,0,0,0,722,724,5,15,0,0,723,725,3,386,
	193,0,724,723,1,0,0,0,724,725,1,0,0,0,725,726,1,0,0,0,726,727,3,58,29,0,
	727,729,1,0,0,0,728,687,1,0,0,0,728,707,1,0,0,0,729,69,1,0,0,0,730,731,
	3,72,36,0,731,71,1,0,0,0,732,736,3,74,37,0,733,735,3,82,41,0,734,733,1,
	0,0,0,735,738,1,0,0,0,736,734,1,0,0,0,736,737,1,0,0,0,737,742,1,0,0,0,738,
	736,1,0,0,0,739,741,3,86,43,0,740,739,1,0,0,0,741,744,1,0,0,0,742,740,1,
	0,0,0,742,743,1,0,0,0,743,746,1,0,0,0,744,742,1,0,0,0,745,747,3,78,39,0,
	746,745,1,0,0,0,746,747,1,0,0,0,747,782,1,0,0,0,748,752,3,76,38,0,749,751,
	3,86,43,0,750,749,1,0,0,0,751,754,1,0,0,0,752,750,1,0,0,0,752,753,1,0,0,
	0,753,756,1,0,0,0,754,752,1,0,0,0,755,757,3,78,39,0,756,755,1,0,0,0,756,
	757,1,0,0,0,757,782,1,0,0,0,758,760,3,82,41,0,759,758,1,0,0,0,760,761,1,
	0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,766,1,0,0,0,763,765,3,86,43,0,
	764,763,1,0,0,0,765,768,1,0,0,0,766,764,1,0,0,0,766,767,1,0,0,0,767,770,
	1,0,0,0,768,766,1,0,0,0,769,771,3,78,39,0,770,769,1,0,0,0,770,771,1,0,0,
	0,771,782,1,0,0,0,772,774,3,86,43,0,773,772,1,0,0,0,774,775,1,0,0,0,775,
	773,1,0,0,0,775,776,1,0,0,0,776,778,1,0,0,0,777,779,3,78,39,0,778,777,1,
	0,0,0,778,779,1,0,0,0,779,782,1,0,0,0,780,782,3,78,39,0,781,732,1,0,0,0,
	781,748,1,0,0,0,781,759,1,0,0,0,781,773,1,0,0,0,781,780,1,0,0,0,782,73,
	1,0,0,0,783,785,3,82,41,0,784,783,1,0,0,0,785,786,1,0,0,0,786,784,1,0,0,
	0,786,787,1,0,0,0,787,788,1,0,0,0,788,790,5,21,0,0,789,791,5,16,0,0,790,
	789,1,0,0,0,790,791,1,0,0,0,791,75,1,0,0,0,792,794,3,82,41,0,793,792,1,
	0,0,0,794,797,1,0,0,0,795,793,1,0,0,0,795,796,1,0,0,0,796,799,1,0,0,0,797,
	795,1,0,0,0,798,800,3,86,43,0,799,798,1,0,0,0,800,801,1,0,0,0,801,799,1,
	0,0,0,801,802,1,0,0,0,802,803,1,0,0,0,803,805,5,21,0,0,804,806,5,16,0,0,
	805,804,1,0,0,0,805,806,1,0,0,0,806,77,1,0,0,0,807,808,5,20,0,0,808,812,
	3,82,41,0,809,811,3,88,44,0,810,809,1,0,0,0,811,814,1,0,0,0,812,810,1,0,
	0,0,812,813,1,0,0,0,813,816,1,0,0,0,814,812,1,0,0,0,815,817,3,80,40,0,816,
	815,1,0,0,0,816,817,1,0,0,0,817,841,1,0,0,0,818,819,5,20,0,0,819,823,3,
	84,42,0,820,822,3,88,44,0,821,820,1,0,0,0,822,825,1,0,0,0,823,821,1,0,0,
	0,823,824,1,0,0,0,824,827,1,0,0,0,825,823,1,0,0,0,826,828,3,80,40,0,827,
	826,1,0,0,0,827,828,1,0,0,0,828,841,1,0,0,0,829,830,5,20,0,0,830,832,5,
	16,0,0,831,833,3,88,44,0,832,831,1,0,0,0,833,834,1,0,0,0,834,832,1,0,0,
	0,834,835,1,0,0,0,835,837,1,0,0,0,836,838,3,80,40,0,837,836,1,0,0,0,837,
	838,1,0,0,0,838,841,1,0,0,0,839,841,3,80,40,0,840,807,1,0,0,0,840,818,1,
	0,0,0,840,829,1,0,0,0,840,839,1,0,0,0,841,79,1,0,0,0,842,843,5,36,0,0,843,
	844,3,82,41,0,844,81,1,0,0,0,845,847,3,90,45,0,846,848,5,16,0,0,847,846,
	1,0,0,0,847,848,1,0,0,0,848,850,1,0,0,0,849,851,5,4,0,0,850,849,1,0,0,0,
	850,851,1,0,0,0,851,83,1,0,0,0,852,854,3,92,46,0,853,855,5,16,0,0,854,853,
	1,0,0,0,854,855,1,0,0,0,855,857,1,0,0,0,856,858,5,4,0,0,857,856,1,0,0,0,
	857,858,1,0,0,0,858,85,1,0,0,0,859,860,3,90,45,0,860,862,3,98,49,0,861,
	863,5,16,0,0,862,861,1,0,0,0,862,863,1,0,0,0,863,865,1,0,0,0,864,866,5,
	4,0,0,865,864,1,0,0,0,865,866,1,0,0,0,866,87,1,0,0,0,867,869,3,90,45,0,
	868,870,3,98,49,0,869,868,1,0,0,0,869,870,1,0,0,0,870,872,1,0,0,0,871,873,
	5,16,0,0,872,871,1,0,0,0,872,873,1,0,0,0,873,875,1,0,0,0,874,876,5,4,0,
	0,875,874,1,0,0,0,875,876,1,0,0,0,876,89,1,0,0,0,877,879,3,390,195,0,878,
	880,3,94,47,0,879,878,1,0,0,0,879,880,1,0,0,0,880,91,1,0,0,0,881,882,3,
	390,195,0,882,883,3,96,48,0,883,93,1,0,0,0,884,885,5,15,0,0,885,886,3,210,
	105,0,886,95,1,0,0,0,887,888,5,15,0,0,888,889,3,216,108,0,889,97,1,0,0,
	0,890,891,5,26,0,0,891,892,3,210,105,0,892,99,1,0,0,0,893,894,5,88,0,0,
	894,895,3,224,112,0,895,896,5,15,0,0,896,901,3,58,29,0,897,902,3,102,51,
	0,898,900,3,104,52,0,899,898,1,0,0,0,899,900,1,0,0,0,900,902,1,0,0,0,901,
	897,1,0,0,0,901,899,1,0,0,0,902,101,1,0,0,0,903,904,5,87,0,0,904,905,3,
	224,112,0,905,906,5,15,0,0,906,911,3,58,29,0,907,912,3,102,51,0,908,910,
	3,104,52,0,909,908,1,0,0,0,909,910,1,0,0,0,910,912,1,0,0,0,911,907,1,0,
	0,0,911,909,1,0,0,0,912,103,1,0,0,0,913,914,5,58,0,0,914,915,5,15,0,0,915,
	916,3,58,29,0,916,105,1,0,0,0,917,918,5,80,0,0,918,919,3,224,112,0,919,
	920,5,15,0,0,920,922,3,58,29,0,921,923,3,104,52,0,922,921,1,0,0,0,922,923,
	1,0,0,0,923,107,1,0,0,0,924,926,5,86,0,0,925,924,1,0,0,0,925,926,1,0,0,
	0,926,927,1,0,0,0,927,928,5,73,0,0,928,929,3,360,180,0,929,930,5,64,0,0,
	930,931,3,214,107,0,931,933,5,15,0,0,932,934,5,4,0,0,933,932,1,0,0,0,933,
	934,1,0,0,0,934,935,1,0,0,0,935,937,3,58,29,0,936,938,3,104,52,0,937,936,
	1,0,0,0,937,938,1,0,0,0,938,109,1,0,0,0,939,940,5,85,0,0,940,941,5,8,0,
	0,941,946,3,112,56,0,942,943,5,16,0,0,943,945,3,112,56,0,944,942,1,0,0,
	0,945,948,1,0,0,0,946,944,1,0,0,0,946,947,1,0,0,0,947,950,1,0,0,0,948,946,
	1,0,0,0,949,951,5,16,0,0,950,949,1,0,0,0,950,951,1,0,0,0,951,952,1,0,0,
	0,952,953,5,11,0,0,953,955,5,15,0,0,954,956,5,4,0,0,955,954,1,0,0,0,955,
	956,1,0,0,0,956,957,1,0,0,0,957,958,3,58,29,0,958,996,1,0,0,0,959,960,5,
	86,0,0,960,961,5,85,0,0,961,962,5,8,0,0,962,967,3,112,56,0,963,964,5,16,
	0,0,964,966,3,112,56,0,965,963,1,0,0,0,966,969,1,0,0,0,967,965,1,0,0,0,
	967,968,1,0,0,0,968,971,1,0,0,0,969,967,1,0,0,0,970,972,5,16,0,0,971,970,
	1,0,0,0,971,972,1,0,0,0,972,973,1,0,0,0,973,974,5,11,0,0,974,975,5,15,0,
	0,975,976,3,58,29,0,976,996,1,0,0,0,977,979,5,86,0,0,978,977,1,0,0,0,978,
	979,1,0,0,0,979,980,1,0,0,0,980,981,5,85,0,0,981,986,3,112,56,0,982,983,
	5,16,0,0,983,985,3,112,56,0,984,982,1,0,0,0,985,988,1,0,0,0,986,984,1,0,
	0,0,986,987,1,0,0,0,987,989,1,0,0,0,988,986,1,0,0,0,989,991,5,15,0,0,990,
	992,5,4,0,0,991,990,1,0,0,0,991,992,1,0,0,0,992,993,1,0,0,0,993,994,3,58,
	29,0,994,996,1,0,0,0,995,939,1,0,0,0,995,959,1,0,0,0,995,978,1,0,0,0,996,
	111,1,0,0,0,997,1000,3,210,105,0,998,999,5,76,0,0,999,1001,3,366,183,0,
	1000,998,1,0,0,0,1000,1001,1,0,0,0,1001,113,1,0,0,0,1002,1003,5,75,0,0,
	1003,1004,5,15,0,0,1004,1005,3,58,29,0,1005,1006,3,120,60,0,1006,1036,1,
	0,0,0,1007,1008,5,75,0,0,1008,1009,5,15,0,0,1009,1011,3,58,29,0,1010,1012,
	3,116,58,0,1011,1010,1,0,0,0,1012,1013,1,0,0,0,1013,1011,1,0,0,0,1013,1014,
	1,0,0,0,1014,1016,1,0,0,0,1015,1017,3,104,52,0,1016,1015,1,0,0,0,1016,1017,
	1,0,0,0,1017,1019,1,0,0,0,1018,1020,3,120,60,0,1019,1018,1,0,0,0,1019,1020,
	1,0,0,0,1020,1036,1,0,0,0,1021,1022,5,75,0,0,1022,1023,5,15,0,0,1023,1025,
	3,58,29,0,1024,1026,3,118,59,0,1025,1024,1,0,0,0,1026,1027,1,0,0,0,1027,
	1025,1,0,0,0,1027,1028,1,0,0,0,1028,1030,1,0,0,0,1029,1031,3,104,52,0,1030,
	1029,1,0,0,0,1030,1031,1,0,0,0,1031,1033,1,0,0,0,1032,1034,3,120,60,0,1033,
	1032,1,0,0,0,1033,1034,1,0,0,0,1034,1036,1,0,0,0,1035,1002,1,0,0,0,1035,
	1007,1,0,0,0,1035,1021,1,0,0,0,1036,115,1,0,0,0,1037,1043,5,63,0,0,1038,
	1041,3,210,105,0,1039,1040,5,76,0,0,1040,1042,3,390,195,0,1041,1039,1,0,
	0,0,1041,1042,1,0,0,0,1042,1044,1,0,0,0,1043,1038,1,0,0,0,1043,1044,1,0,
	0,0,1044,1045,1,0,0,0,1045,1046,5,15,0,0,1046,1047,3,58,29,0,1047,117,1,
	0,0,0,1048,1049,5,63,0,0,1049,1050,5,20,0,0,1050,1053,3,210,105,0,1051,
	1052,5,76,0,0,1052,1054,3,390,195,0,1053,1051,1,0,0,0,1053,1054,1,0,0,0,
	1054,1055,1,0,0,0,1055,1056,5,15,0,0,1056,1057,3,58,29,0,1057,119,1,0,0,
	0,1058,1059,5,68,0,0,1059,1060,5,15,0,0,1060,1061,3,58,29,0,1061,121,1,
	0,0,0,1062,1063,5,92,0,0,1063,1064,3,124,62,0,1064,1065,5,15,0,0,1065,1066,
	5,98,0,0,1066,1068,5,2,0,0,1067,1069,3,126,63,0,1068,1067,1,0,0,0,1069,
	1070,1,0,0,0,1070,1068,1,0,0,0,1070,1071,1,0,0,0,1071,1072,1,0,0,0,1072,
	1073,5,3,0,0,1073,123,1,0,0,0,1074,1075,3,220,110,0,1075,1077,5,16,0,0,
	1076,1078,3,218,109,0,1077,1076,1,0,0,0,1077,1078,1,0,0,0,1078,1081,1,0,
	0,0,1079,1081,3,224,112,0,1080,1074,1,0,0,0,1080,1079,1,0,0,0,1081,125,
	1,0,0,0,1082,1083,5,93,0,0,1083,1085,3,130,65,0,1084,1086,3,128,64,0,1085,
	1084,1,0,0,0,1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1088,5,15,0,0,1088,
	1089,3,58,29,0,1089,127,1,0,0,0,1090,1091,5,88,0,0,1091,1092,3,224,112,
	0,1092,129,1,0,0,0,1093,1096,3,170,85,0,1094,1096,3,132,66,0,1095,1093,
	1,0,0,0,1095,1094,1,0,0,0,1096,131,1,0,0,0,1097,1100,3,134,67,0,1098,1100,
	3,136,68,0,1099,1097,1,0,0,0,1099,1098,1,0,0,0,1100,133,1,0,0,0,1101,1102,
	3,136,68,0,1102,1103,5,76,0,0,1103,1104,3,156,78,0,1104,135,1,0,0,0,1105,
	1110,3,138,69,0,1106,1107,5,22,0,0,1107,1109,3,138,69,0,1108,1106,1,0,0,
	0,1109,1112,1,0,0,0,1110,1108,1,0,0,0,1110,1111,1,0,0,0,1111,137,1,0,0,
	0,1112,1110,1,0,0,0,1113,1122,3,140,70,0,1114,1122,3,154,77,0,1115,1122,
	3,158,79,0,1116,1122,3,160,80,0,1117,1122,3,166,83,0,1118,1122,3,168,84,
	0,1119,1122,3,178,89,0,1120,1122,3,186,93,0,1121,1113,1,0,0,0,1121,1114,
	1,0,0,0,1121,1115,1,0,0,0,1121,1116,1,0,0,0,1121,1117,1,0,0,0,1121,1118,
	1,0,0,0,1121,1119,1,0,0,0,1121,1120,1,0,0,0,1122,139,1,0,0,0,1123,1130,
	3,146,73,0,1124,1130,3,144,72,0,1125,1130,3,320,160,0,1126,1130,5,61,0,
	0,1127,1130,5,66,0,0,1128,1130,5,56,0,0,1129,1123,1,0,0,0,1129,1124,1,0,
	0,0,1129,1125,1,0,0,0,1129,1126,1,0,0,0,1129,1127,1,0,0,0,1129,1128,1,0,
	0,0,1130,141,1,0,0,0,1131,1138,3,146,73,0,1132,1138,3,144,72,0,1133,1138,
	3,320,160,0,1134,1138,5,61,0,0,1135,1138,5,66,0,0,1136,1138,5,56,0,0,1137,
	1131,1,0,0,0,1137,1132,1,0,0,0,1137,1133,1,0,0,0,1137,1134,1,0,0,0,1137,
	1135,1,0,0,0,1137,1136,1,0,0,0,1138,143,1,0,0,0,1139,1140,3,148,74,0,1140,
	1141,7,2,0,0,1141,1142,3,152,76,0,1142,145,1,0,0,0,1143,1145,5,19,0,0,1144,
	1143,1,0,0,0,1144,1145,1,0,0,0,1145,1146,1,0,0,0,1146,1147,5,96,0,0,1147,
	147,1,0,0,0,1148,1150,5,19,0,0,1149,1148,1,0,0,0,1149,1150,1,0,0,0,1150,
	1151,1,0,0,0,1151,1152,3,150,75,0,1152,149,1,0,0,0,1153,1154,5,96,0,0,1154,
	151,1,0,0,0,1155,1156,5,96,0,0,1156,153,1,0,0,0,1157,1158,3,156,78,0,1158,
	155,1,0,0,0,1159,1160,3,388,194,0,1160,157,1,0,0,0,1161,1162,5,94,0,0,1162,
	159,1,0,0,0,1163,1164,3,162,81,0,1164,161,1,0,0,0,1165,1168,3,390,195,0,
	1166,1167,5,14,0,0,1167,1169,3,390,195,0,1168,1166,1,0,0,0,1169,1170,1,
	0,0,0,1170,1168,1,0,0,0,1170,1171,1,0,0,0,1171,163,1,0,0,0,1172,1177,3,
	390,195,0,1173,1174,5,14,0,0,1174,1176,3,390,195,0,1175,1173,1,0,0,0,1176,
	1179,1,0,0,0,1177,1175,1,0,0,0,1177,1178,1,0,0,0,1178,165,1,0,0,0,1179,
	1177,1,0,0,0,1180,1181,5,8,0,0,1181,1182,3,132,66,0,1182,1183,5,11,0,0,
	1183,167,1,0,0,0,1184,1186,5,9,0,0,1185,1187,3,172,86,0,1186,1185,1,0,0,
	0,1186,1187,1,0,0,0,1187,1188,1,0,0,0,1188,1195,5,12,0,0,1189,1191,5,8,
	0,0,1190,1192,3,170,85,0,1191,1190,1,0,0,0,1191,1192,1,0,0,0,1192,1193,
	1,0,0,0,1193,1195,5,11,0,0,1194,1184,1,0,0,0,1194,1189,1,0,0,0,1195,169,
	1,0,0,0,1196,1197,3,174,87,0,1197,1199,5,16,0,0,1198,1200,3,172,86,0,1199,
	1198,1,0,0,0,1199,1200,1,0,0,0,1200,171,1,0,0,0,1201,1206,3,174,87,0,1202,
	1203,5,16,0,0,1203,1205,3,174,87,0,1204,1202,1,0,0,0,1205,1208,1,0,0,0,
	1206,1204,1,0,0,0,1206,1207,1,0,0,0,1207,1210,1,0,0,0,1208,1206,1,0,0,0,
	1209,1211,5,16,0,0,1210,1209,1,0,0,0,1210,1211,1,0,0,0,1211,173,1,0,0,0,
	1212,1215,3,176,88,0,1213,1215,3,132,66,0,1214,1212,1,0,0,0,1214,1213,1,
	0,0,0,1215,175,1,0,0,0,1216,1217,5,20,0,0,1217,1218,3,390,195,0,1218,177,
	1,0,0,0,1219,1220,5,10,0,0,1220,1240,5,13,0,0,1221,1222,5,10,0,0,1222,1224,
	3,184,92,0,1223,1225,5,16,0,0,1224,1223,1,0,0,0,1224,1225,1,0,0,0,1225,
	1226,1,0,0,0,1226,1227,5,13,0,0,1227,1240,1,0,0,0,1228,1229,5,10,0,0,1229,
	1232,3,180,90,0,1230,1231,5,16,0,0,1231,1233,3,184,92,0,1232,1230,1,0,0,
	0,1232,1233,1,0,0,0,1233,1235,1,0,0,0,1234,1236,5,16,0,0,1235,1234,1,0,
	0,0,1235,1236,1,0,0,0,1236,1237,1,0,0,0,1237,1238,5,13,0,0,1238,1240,1,
	0,0,0,1239,1219,1,0,0,0,1239,1221,1,0,0,0,1239,1228,1,0,0,0,1240,179,1,
	0,0,0,1241,1246,3,182,91,0,1242,1243,5,16,0,0,1243,1245,3,182,91,0,1244,
	1242,1,0,0,0,1245,1248,1,0,0,0,1246,1244,1,0,0,0,1246,1247,1,0,0,0,1247,
	181,1,0,0,0,1248,1246,1,0,0,0,1249,1252,3,142,71,0,1250,1252,3,162,81,0,
	1251,1249,1,0,0,0,1251,1250,1,0,0,0,1252,1253,1,0,0,0,1253,1254,5,15,0,
	0,1254,1255,3,132,66,0,1255,183,1,0,0,0,1256,1257,5,36,0,0,1257,1258,3,
	156,78,0,1258,185,1,0,0,0,1259,1260,3,164,82,0,1260,1272,5,8,0,0,1261,1264,
	3,188,94,0,1262,1263,5,16,0,0,1263,1265,3,190,95,0,1264,1262,1,0,0,0,1264,
	1265,1,0,0,0,1265,1268,1,0,0,0,1266,1268,3,190,95,0,1267,1261,1,0,0,0,1267,
	1266,1,0,0,0,1268,1270,1,0,0,0,1269,1271,5,16,0,0,1270,1269,1,0,0,0,1270,
	1271,1,0,0,0,1271,1273,1,0,0,0,1272,1267,1,0,0,0,1272,1273,1,0,0,0,1273,
	1274,1,0,0,0,1274,1275,5,11,0,0,1275,187,1,0,0,0,1276,1281,3,132,66,0,1277,
	1278,5,16,0,0,1278,1280,3,132,66,0,1279,1277,1,0,0,0,1280,1283,1,0,0,0,
	1281,1279,1,0,0,0,1281,1282,1,0,0,0,1282,189,1,0,0,0,1283,1281,1,0,0,0,
	1284,1289,3,192,96,0,1285,1286,5,16,0,0,1286,1288,3,192,96,0,1287,1285,
	1,0,0,0,1288,1291,1,0,0,0,1289,1287,1,0,0,0,1289,1290,1,0,0,0,1290,191,
	1,0,0,0,1291,1289,1,0,0,0,1292,1293,3,390,195,0,1293,1294,5,26,0,0,1294,
	1295,3,132,66,0,1295,193,1,0,0,0,1296,1297,5,91,0,0,1297,1299,3,390,195,
	0,1298,1300,3,196,98,0,1299,1298,1,0,0,0,1299,1300,1,0,0,0,1300,1301,1,
	0,0,0,1301,1302,5,26,0,0,1302,1303,3,210,105,0,1303,195,1,0,0,0,1304,1305,
	5,9,0,0,1305,1306,3,198,99,0,1306,1307,5,12,0,0,1307,197,1,0,0,0,1308,1313,
	3,200,100,0,1309,1310,5,16,0,0,1310,1312,3,200,100,0,1311,1309,1,0,0,0,
	1312,1315,1,0,0,0,1313,1311,1,0,0,0,1313,1314,1,0,0,0,1314,1317,1,0,0,0,
	1315,1313,1,0,0,0,1316,1318,5,16,0,0,1317,1316,1,0,0,0,1317,1318,1,0,0,
	0,1318,199,1,0,0,0,1319,1321,3,390,195,0,1320,1322,3,202,101,0,1321,1320,
	1,0,0,0,1321,1322,1,0,0,0,1322,1324,1,0,0,0,1323,1325,3,204,102,0,1324,
	1323,1,0,0,0,1324,1325,1,0,0,0,1325,1337,1,0,0,0,1326,1327,5,20,0,0,1327,
	1329,3,390,195,0,1328,1330,3,206,103,0,1329,1328,1,0,0,0,1329,1330,1,0,
	0,0,1330,1337,1,0,0,0,1331,1332,5,36,0,0,1332,1334,3,390,195,0,1333,1335,
	3,204,102,0,1334,1333,1,0,0,0,1334,1335,1,0,0,0,1335,1337,1,0,0,0,1336,
	1319,1,0,0,0,1336,1326,1,0,0,0,1336,1331,1,0,0,0,1337,201,1,0,0,0,1338,
	1339,5,15,0,0,1339,1340,3,210,105,0,1340,203,1,0,0,0,1341,1342,5,26,0,0,
	1342,1343,3,210,105,0,1343,205,1,0,0,0,1344,1345,5,26,0,0,1345,1346,3,216,
	108,0,1346,207,1,0,0,0,1347,1352,3,210,105,0,1348,1349,5,16,0,0,1349,1351,
	3,210,105,0,1350,1348,1,0,0,0,1351,1354,1,0,0,0,1352,1350,1,0,0,0,1352,
	1353,1,0,0,0,1353,1356,1,0,0,0,1354,1352,1,0,0,0,1355,1357,5,16,0,0,1356,
	1355,1,0,0,0,1356,1357,1,0,0,0,1357,209,1,0,0,0,1358,1364,3,226,113,0,1359,
	1360,5,88,0,0,1360,1361,3,226,113,0,1361,1362,5,58,0,0,1362,1363,3,210,
	105,0,1363,1365,1,0,0,0,1364,1359,1,0,0,0,1364,1365,1,0,0,0,1365,1368,1,
	0,0,0,1366,1368,3,284,142,0,1367,1358,1,0,0,0,1367,1366,1,0,0,0,1368,211,
	1,0,0,0,1369,1375,5,90,0,0,1370,1371,5,78,0,0,1371,1376,3,210,105,0,1372,
	1374,3,214,107,0,1373,1372,1,0,0,0,1373,1374,1,0,0,0,1374,1376,1,0,0,0,
	1375,1370,1,0,0,0,1375,1373,1,0,0,0,1376,213,1,0,0,0,1377,1382,3,216,108,
	0,1378,1379,5,16,0,0,1379,1381,3,216,108,0,1380,1378,1,0,0,0,1381,1384,
	1,0,0,0,1382,1380,1,0,0,0,1382,1383,1,0,0,0,1383,1386,1,0,0,0,1384,1382,
	1,0,0,0,1385,1387,5,16,0,0,1386,1385,1,0,0,0,1386,1387,1,0,0,0,1387,215,
	1,0,0,0,1388,1389,5,20,0,0,1389,1392,3,256,128,0,1390,1392,3,210,105,0,
	1391,1388,1,0,0,0,1391,1390,1,0,0,0,1392,217,1,0,0,0,1393,1398,3,220,110,
	0,1394,1395,5,16,0,0,1395,1397,3,220,110,0,1396,1394,1,0,0,0,1397,1400,
	1,0,0,0,1398,1396,1,0,0,0,1398,1399,1,0,0,0,1399,1402,1,0,0,0,1400,1398,
	1,0,0,0,1401,1403,5,16,0,0,1402,1401,1,0,0,0,1402,1403,1,0,0,0,1403,219,
	1,0,0,0,1404,1405,5,20,0,0,1405,1408,3,256,128,0,1406,1408,3,224,112,0,
	1407,1404,1,0,0,0,1407,1406,1,0,0,0,1408,221,1,0,0,0,1409,1410,3,390,195,
	0,1410,1411,5,54,0,0,1411,1412,3,210,105,0,1412,223,1,0,0,0,1413,1416,3,
	222,111,0,1414,1416,3,210,105,0,1415,1413,1,0,0,0,1415,1414,1,0,0,0,1416,
	225,1,0,0,0,1417,1422,3,228,114,0,1418,1419,5,89,0,0,1419,1421,3,228,114,
	0,1420,1418,1,0,0,0,1421,1424,1,0,0,0,1422,1420,1,0,0,0,1422,1423,1,0,0,
	0,1423,227,1,0,0,0,1424,1422,1,0,0,0,1425,1430,3,230,115,0,1426,1427,5,
	71,0,0,1427,1429,3,230,115,0,1428,1426,1,0,0,0,1429,1432,1,0,0,0,1430,1428,
	1,0,0,0,1430,1431,1,0,0,0,1431,229,1,0,0,0,1432,1430,1,0,0,0,1433,1434,
	5,84,0,0,1434,1437,3,230,115,0,1435,1437,3,232,116,0,1436,1433,1,0,0,0,
	1436,1435,1,0,0,0,1437,231,1,0,0,0,1438,1442,3,256,128,0,1439,1441,3,234,
	117,0,1440,1439,1,0,0,0,1441,1444,1,0,0,0,1442,1440,1,0,0,0,1442,1443,1,
	0,0,0,1443,233,1,0,0,0,1444,1442,1,0,0,0,1445,1456,3,236,118,0,1446,1456,
	3,238,119,0,1447,1456,3,240,120,0,1448,1456,3,242,121,0,1449,1456,3,244,
	122,0,1450,1456,3,246,123,0,1451,1456,3,248,124,0,1452,1456,3,250,125,0,
	1453,1456,3,252,126,0,1454,1456,3,254,127,0,1455,1445,1,0,0,0,1455,1446,
	1,0,0,0,1455,1447,1,0,0,0,1455,1448,1,0,0,0,1455,1449,1,0,0,0,1455,1450,
	1,0,0,0,1455,1451,1,0,0,0,1455,1452,1,0,0,0,1455,1453,1,0,0,0,1455,1454,
	1,0,0,0,1456,235,1,0,0,0,1457,1458,5,28,0,0,1458,1459,3,256,128,0,1459,
	237,1,0,0,0,1460,1461,5,29,0,0,1461,1462,3,256,128,0,1462,239,1,0,0,0,1463,
	1464,5,30,0,0,1464,1465,3,256,128,0,1465,241,1,0,0,0,1466,1467,5,24,0,0,
	1467,1468,3,256,128,0,1468,243,1,0,0,0,1469,1470,5,31,0,0,1470,1471,3,256,
	128,0,1471,245,1,0,0,0,1472,1473,5,25,0,0,1473,1474,3,256,128,0,1474,247,
	1,0,0,0,1475,1476,5,84,0,0,1476,1477,5,64,0,0,1477,1478,3,256,128,0,1478,
	249,1,0,0,0,1479,1480,5,64,0,0,1480,1481,3,256,128,0,1481,251,1,0,0,0,1482,
	1483,5,69,0,0,1483,1484,5,84,0,0,1484,1485,3,256,128,0,1485,253,1,0,0,0,
	1486,1487,5,69,0,0,1487,1488,3,256,128,0,1488,255,1,0,0,0,1489,1490,6,128,
	-1,0,1490,1491,3,258,129,0,1491,1497,1,0,0,0,1492,1493,10,2,0,0,1493,1494,
	5,22,0,0,1494,1496,3,258,129,0,1495,1492,1,0,0,0,1496,1499,1,0,0,0,1497,
	1495,1,0,0,0,1497,1498,1,0,0,0,1498,257,1,0,0,0,1499,1497,1,0,0,0,1500,
	1501,6,129,-1,0,1501,1502,3,260,130,0,1502,1508,1,0,0,0,1503,1504,10,2,
	0,0,1504,1505,5,33,0,0,1505,1507,3,260,130,0,1506,1503,1,0,0,0,1507,1510,
	1,0,0,0,1508,1506,1,0,0,0,1508,1509,1,0,0,0,1509,259,1,0,0,0,1510,1508,
	1,0,0,0,1511,1512,6,130,-1,0,1512,1513,3,262,131,0,1513,1519,1,0,0,0,1514,
	1515,10,2,0,0,1515,1516,5,23,0,0,1516,1518,3,262,131,0,1517,1514,1,0,0,
	0,1518,1521,1,0,0,0,1519,1517,1,0,0,0,1519,1520,1,0,0,0,1520,261,1,0,0,
	0,1521,1519,1,0,0,0,1522,1523,6,131,-1,0,1523,1524,3,264,132,0,1524,1530,
	1,0,0,0,1525,1526,10,2,0,0,1526,1527,7,3,0,0,1527,1529,3,264,132,0,1528,
	1525,1,0,0,0,1529,1532,1,0,0,0,1530,1528,1,0,0,0,1530,1531,1,0,0,0,1531,
	263,1,0,0,0,1532,1530,1,0,0,0,1533,1534,6,132,-1,0,1534,1535,3,266,133,
	0,1535,1541,1,0,0,0,1536,1537,10,2,0,0,1537,1538,7,2,0,0,1538,1540,3,266,
	133,0,1539,1536,1,0,0,0,1540,1543,1,0,0,0,1541,1539,1,0,0,0,1541,1542,1,
	0,0,0,1542,265,1,0,0,0,1543,1541,1,0,0,0,1544,1545,6,133,-1,0,1545,1546,
	3,268,134,0,1546,1552,1,0,0,0,1547,1548,10,2,0,0,1548,1549,7,4,0,0,1549,
	1551,3,268,134,0,1550,1547,1,0,0,0,1551,1554,1,0,0,0,1552,1550,1,0,0,0,
	1552,1553,1,0,0,0,1553,267,1,0,0,0,1554,1552,1,0,0,0,1555,1556,5,18,0,0,
	1556,1563,3,268,134,0,1557,1558,5,19,0,0,1558,1563,3,268,134,0,1559,1560,
	5,32,0,0,1560,1563,3,268,134,0,1561,1563,3,270,135,0,1562,1555,1,0,0,0,
	1562,1557,1,0,0,0,1562,1559,1,0,0,0,1562,1561,1,0,0,0,1563,269,1,0,0,0,
	1564,1567,3,272,136,0,1565,1566,5,36,0,0,1566,1568,3,268,134,0,1567,1565,
	1,0,0,0,1567,1568,1,0,0,0,1568,271,1,0,0,0,1569,1570,5,57,0,0,1570,1573,
	3,274,137,0,1571,1573,3,274,137,0,1572,1569,1,0,0,0,1572,1571,1,0,0,0,1573,
	273,1,0,0,0,1574,1575,6,137,-1,0,1575,1576,3,280,140,0,1576,1594,1,0,0,
	0,1577,1590,10,2,0,0,1578,1579,5,14,0,0,1579,1591,3,390,195,0,1580,1591,
	3,344,172,0,1581,1583,5,8,0,0,1582,1584,3,348,174,0,1583,1582,1,0,0,0,1583,
	1584,1,0,0,0,1584,1585,1,0,0,0,1585,1591,5,11,0,0,1586,1587,5,9,0,0,1587,
	1588,3,276,138,0,1588,1589,5,12,0,0,1589,1591,1,0,0,0,1590,1578,1,0,0,0,
	1590,1580,1,0,0,0,1590,1581,1,0,0,0,1590,1586,1,0,0,0,1591,1593,1,0,0,0,
	1592,1577,1,0,0,0,1593,1596,1,0,0,0,1594,1592,1,0,0,0,1594,1595,1,0,0,0,
	1595,275,1,0,0,0,1596,1594,1,0,0,0,1597,1616,3,278,139,0,1598,1601,3,278,
	139,0,1599,1601,3,354,177,0,1600,1598,1,0,0,0,1600,1599,1,0,0,0,1601,1609,
	1,0,0,0,1602,1605,5,16,0,0,1603,1606,3,278,139,0,1604,1606,3,354,177,0,
	1605,1603,1,0,0,0,1605,1604,1,0,0,0,1606,1608,1,0,0,0,1607,1602,1,0,0,0,
	1608,1611,1,0,0,0,1609,1607,1,0,0,0,1609,1610,1,0,0,0,1610,1613,1,0,0,0,
	1611,1609,1,0,0,0,1612,1614,5,16,0,0,1613,1612,1,0,0,0,1613,1614,1,0,0,
	0,1614,1616,1,0,0,0,1615,1597,1,0,0,0,1615,1600,1,0,0,0,1616,277,1,0,0,
	0,1617,1619,3,210,105,0,1618,1617,1,0,0,0,1618,1619,1,0,0,0,1619,1620,1,
	0,0,0,1620,1622,5,15,0,0,1621,1623,3,210,105,0,1622,1621,1,0,0,0,1622,1623,
	1,0,0,0,1623,1628,1,0,0,0,1624,1626,5,15,0,0,1625,1627,3,210,105,0,1626,
	1625,1,0,0,0,1626,1627,1,0,0,0,1627,1629,1,0,0,0,1628,1624,1,0,0,0,1628,
	1629,1,0,0,0,1629,1632,1,0,0,0,1630,1632,3,224,112,0,1631,1618,1,0,0,0,
	1631,1630,1,0,0,0,1632,279,1,0,0,0,1633,1656,3,390,195,0,1634,1656,5,66,
	0,0,1635,1656,5,56,0,0,1636,1656,5,61,0,0,1637,1656,3,320,160,0,1638,1656,
	5,96,0,0,1639,1643,3,324,162,0,1640,1643,3,282,141,0,1641,1643,3,344,172,
	0,1642,1639,1,0,0,0,1642,1640,1,0,0,0,1642,1641,1,0,0,0,1643,1656,1,0,0,
	0,1644,1647,3,322,161,0,1645,1647,3,340,170,0,1646,1644,1,0,0,0,1646,1645,
	1,0,0,0,1647,1656,1,0,0,0,1648,1653,3,328,164,0,1649,1653,3,326,163,0,1650,
	1653,3,346,173,0,1651,1653,3,342,171,0,1652,1648,1,0,0,0,1652,1649,1,0,
	0,0,1652,1650,1,0,0,0,1652,1651,1,0,0,0,1653,1656,1,0,0,0,1654,1656,5,53,
	0,0,1655,1633,1,0,0,0,1655,1634,1,0,0,0,1655,1635,1,0,0,0,1655,1636,1,0,
	0,0,1655,1637,1,0,0,0,1655,1638,1,0,0,0,1655,1642,1,0,0,0,1655,1646,1,0,
	0,0,1655,1652,1,0,0,0,1655,1654,1,0,0,0,1656,281,1,0,0,0,1657,1660,5,8,
	0,0,1658,1661,3,212,106,0,1659,1661,3,224,112,0,1660,1658,1,0,0,0,1660,
	1659,1,0,0,0,1661,1662,1,0,0,0,1662,1663,5,11,0,0,1663,283,1,0,0,0,1664,
	1666,5,74,0,0,1665,1667,3,286,143,0,1666,1665,1,0,0,0,1666,1667,1,0,0,0,
	1667,1668,1,0,0,0,1668,1669,5,15,0,0,1669,1670,3,210,105,0,1670,285,1,0,
	0,0,1671,1672,3,288,144,0,1672,287,1,0,0,0,1673,1677,3,290,145,0,1674,1676,
	3,298,149,0,1675,1674,1,0,0,0,1676,1679,1,0,0,0,1677,1675,1,0,0,0,1677,
	1678,1,0,0,0,1678,1683,1,0,0,0,1679,1677,1,0,0,0,1680,1682,3,300,150,0,
	1681,1680,1,0,0,0,1682,1685,1,0,0,0,1683,1681,1,0,0,0,1683,1684,1,0,0,0,
	1684,1687,1,0,0,0,1685,1683,1,0,0,0,1686,1688,3,294,147,0,1687,1686,1,0,
	0,0,1687,1688,1,0,0,0,1688,1723,1,0,0,0,1689,1693,3,292,146,0,1690,1692,
	3,300,150,0,1691,1690,1,0,0,0,1692,1695,1,0,0,0,1693,1691,1,0,0,0,1693,
	1694,1,0,0,0,1694,1697,1,0,0,0,1695,1693,1,0,0,0,1696,1698,3,294,147,0,
	1697,1696,1,0,0,0,1697,1698,1,0,0,0,1698,1723,1,0,0,0,1699,1701,3,298,149,
	0,1700,1699,1,0,0,0,1701,1702,1,0,0,0,1702,1700,1,0,0,0,1702,1703,1,0,0,
	0,1703,1707,1,0,0,0,1704,1706,3,300,150,0,1705,1704,1,0,0,0,1706,1709,1,
	0,0,0,1707,1705,1,0,0,0,1707,1708,1,0,0,0,1708,1711,1,0,0,0,1709,1707,1,
	0,0,0,1710,1712,3,294,147,0,1711,1710,1,0,0,0,1711,1712,1,0,0,0,1712,1723,
	1,0,0,0,1713,1715,3,300,150,0,1714,1713,1,0,0,0,1715,1716,1,0,0,0,1716,
	1714,1,0,0,0,1716,1717,1,0,0,0,1717,1719,1,0,0,0,1718,1720,3,294,147,0,
	1719,1718,1,0,0,0,1719,1720,1,0,0,0,1720,1723,1,0,0,0,1721,1723,3,294,147,
	0,1722,1673,1,0,0,0,1722,1689,1,0,0,0,1722,1700,1,0,0,0,1722,1714,1,0,0,
	0,1722,1721,1,0,0,0,1723,289,1,0,0,0,1724,1726,3,298,149,0,1725,1724,1,
	0,0,0,1726,1727,1,0,0,0,1727,1725,1,0,0,0,1727,1728,1,0,0,0,1728,1729,1,
	0,0,0,1729,1731,5,21,0,0,1730,1732,5,16,0,0,1731,1730,1,0,0,0,1731,1732,
	1,0,0,0,1732,291,1,0,0,0,1733,1735,3,298,149,0,1734,1733,1,0,0,0,1735,1738,
	1,0,0,0,1736,1734,1,0,0,0,1736,1737,1,0,0,0,1737,1740,1,0,0,0,1738,1736,
	1,0,0,0,1739,1741,3,300,150,0,1740,1739,1,0,0,0,1741,1742,1,0,0,0,1742,
	1740,1,0,0,0,1742,1743,1,0,0,0,1743,1744,1,0,0,0,1744,1746,5,21,0,0,1745,
	1747,5,16,0,0,1746,1745,1,0,0,0,1746,1747,1,0,0,0,1747,293,1,0,0,0,1748,
	1749,5,20,0,0,1749,1753,3,298,149,0,1750,1752,3,302,151,0,1751,1750,1,0,
	0,0,1752,1755,1,0,0,0,1753,1751,1,0,0,0,1753,1754,1,0,0,0,1754,1757,1,0,
	0,0,1755,1753,1,0,0,0,1756,1758,3,296,148,0,1757,1756,1,0,0,0,1757,1758,
	1,0,0,0,1758,1771,1,0,0,0,1759,1760,5,20,0,0,1760,1762,5,16,0,0,1761,1763,
	3,302,151,0,1762,1761,1,0,0,0,1763,1764,1,0,0,0,1764,1762,1,0,0,0,1764,
	1765,1,0,0,0,1765,1767,1,0,0,0,1766,1768,3,296,148,0,1767,1766,1,0,0,0,
	1767,1768,1,0,0,0,1768,1771,1,0,0,0,1769,1771,3,296,148,0,1770,1748,1,0,
	0,0,1770,1759,1,0,0,0,1770,1769,1,0,0,0,1771,295,1,0,0,0,1772,1773,5,36,
	0,0,1773,1774,3,298,149,0,1774,297,1,0,0,0,1775,1777,3,304,152,0,1776,1778,
	5,16,0,0,1777,1776,1,0,0,0,1777,1778,1,0,0,0,1778,299,1,0,0,0,1779,1780,
	3,304,152,0,1780,1782,3,98,49,0,1781,1783,5,16,0,0,1782,1781,1,0,0,0,1782,
	1783,1,0,0,0,1783,301,1,0,0,0,1784,1786,3,304,152,0,1785,1787,3,98,49,0,
	1786,1785,1,0,0,0,1786,1787,1,0,0,0,1787,1789,1,0,0,0,1788,1790,5,16,0,
	0,1789,1788,1,0,0,0,1789,1790,1,0,0,0,1790,303,1,0,0,0,1791,1792,3,390,
	195,0,1792,305,1,0,0,0,1793,1796,3,308,154,0,1794,1796,5,6,0,0,1795,1793,
	1,0,0,0,1795,1794,1,0,0,0,1796,307,1,0,0,0,1797,1798,5,10,0,0,1798,1800,
	3,22,11,0,1799,1801,5,26,0,0,1800,1799,1,0,0,0,1800,1801,1,0,0,0,1801,1803,
	1,0,0,0,1802,1804,3,310,155,0,1803,1802,1,0,0,0,1803,1804,1,0,0,0,1804,
	1806,1,0,0,0,1805,1807,3,312,156,0,1806,1805,1,0,0,0,1806,1807,1,0,0,0,
	1807,1808,1,0,0,0,1808,1809,5,13,0,0,1809,309,1,0,0,0,1810,1811,5,55,0,
	0,1811,1812,3,390,195,0,1812,311,1,0,0,0,1813,1817,5,15,0,0,1814,1816,3,
	314,157,0,1815,1814,1,0,0,0,1816,1819,1,0,0,0,1817,1815,1,0,0,0,1817,1818,
	1,0,0,0,1818,313,1,0,0,0,1819,1817,1,0,0,0,1820,1823,5,6,0,0,1821,1823,
	3,308,154,0,1822,1820,1,0,0,0,1822,1821,1,0,0,0,1823,315,1,0,0,0,1824,1828,
	5,5,0,0,1825,1827,3,306,153,0,1826,1825,1,0,0,0,1827,1830,1,0,0,0,1828,
	1826,1,0,0,0,1828,1829,1,0,0,0,1829,1831,1,0,0,0,1830,1828,1,0,0,0,1831,
	1832,5,7,0,0,1832,317,1,0,0,0,1833,1834,5,97,0,0,1834,319,1,0,0,0,1835,
	1838,3,316,158,0,1836,1838,3,318,159,0,1837,1835,1,0,0,0,1837,1836,1,0,
	0,0,1838,1839,1,0,0,0,1839,1837,1,0,0,0,1839,1840,1,0,0,0,1840,321,1,0,
	0,0,1841,1843,5,9,0,0,1842,1844,3,218,109,0,1843,1842,1,0,0,0,1843,1844,
	1,0,0,0,1844,1845,1,0,0,0,1845,1846,5,12,0,0,1846,323,1,0,0,0,1847,1853,
	5,8,0,0,1848,1849,3,220,110,0,1849,1851,5,16,0,0,1850,1852,3,218,109,0,
	1851,1850,1,0,0,0,1851,1852,1,0,0,0,1852,1854,1,0,0,0,1853,1848,1,0,0,0,
	1853,1854,1,0,0,0,1854,1855,1,0,0,0,1855,1856,5,11,0,0,1856,325,1,0,0,0,
	1857,1858,5,10,0,0,1858,1859,3,218,109,0,1859,1860,5,13,0,0,1860,327,1,
	0,0,0,1861,1863,5,10,0,0,1862,1864,3,330,165,0,1863,1862,1,0,0,0,1863,1864,
	1,0,0,0,1864,1865,1,0,0,0,1865,1866,5,13,0,0,1866,329,1,0,0,0,1867,1872,
	3,332,166,0,1868,1869,5,16,0,0,1869,1871,3,332,166,0,1870,1868,1,0,0,0,
	1871,1874,1,0,0,0,1872,1870,1,0,0,0,1872,1873,1,0,0,0,1873,1876,1,0,0,0,
	1874,1872,1,0,0,0,1875,1877,5,16,0,0,1876,1875,1,0,0,0,1876,1877,1,0,0,
	0,1877,331,1,0,0,0,1878,1879,5,36,0,0,1879,1882,3,256,128,0,1880,1882,3,
	334,167,0,1881,1878,1,0,0,0,1881,1880,1,0,0,0,1882,333,1,0,0,0,1883,1884,
	3,210,105,0,1884,1885,5,15,0,0,1885,1886,3,210,105,0,1886,335,1,0,0,0,1887,
	1889,3,338,169,0,1888,1887,1,0,0,0,1889,1890,1,0,0,0,1890,1888,1,0,0,0,
	1890,1891,1,0,0,0,1891,337,1,0,0,0,1892,1894,5,86,0,0,1893,1892,1,0,0,0,
	1893,1894,1,0,0,0,1894,1895,1,0,0,0,1895,1896,5,73,0,0,1896,1897,3,360,
	180,0,1897,1898,5,64,0,0,1898,1903,3,226,113,0,1899,1900,5,88,0,0,1900,
	1902,3,226,113,0,1901,1899,1,0,0,0,1902,1905,1,0,0,0,1903,1901,1,0,0,0,
	1903,1904,1,0,0,0,1904,339,1,0,0,0,1905,1903,1,0,0,0,1906,1907,5,9,0,0,
	1907,1908,3,224,112,0,1908,1909,3,336,168,0,1909,1910,5,12,0,0,1910,341,
	1,0,0,0,1911,1912,5,10,0,0,1912,1913,3,224,112,0,1913,1914,3,336,168,0,
	1914,1915,5,13,0,0,1915,343,1,0,0,0,1916,1919,5,8,0,0,1917,1920,3,222,111,
	0,1918,1920,3,210,105,0,1919,1917,1,0,0,0,1919,1918,1,0,0,0,1920,1921,1,
	0,0,0,1921,1922,3,336,168,0,1922,1923,5,11,0,0,1923,345,1,0,0,0,1924,1925,
	5,10,0,0,1925,1926,3,334,167,0,1926,1927,3,336,168,0,1927,1928,5,13,0,0,
	1928,347,1,0,0,0,1929,1931,3,350,175,0,1930,1932,5,16,0,0,1931,1930,1,0,
	0,0,1931,1932,1,0,0,0,1932,349,1,0,0,0,1933,1939,3,354,177,0,1934,1937,
	3,222,111,0,1935,1937,3,210,105,0,1936,1934,1,0,0,0,1936,1935,1,0,0,0,1937,
	1939,1,0,0,0,1938,1933,1,0,0,0,1938,1936,1,0,0,0,1939,1950,1,0,0,0,1940,
	1946,5,16,0,0,1941,1947,3,354,177,0,1942,1945,3,222,111,0,1943,1945,3,210,
	105,0,1944,1942,1,0,0,0,1944,1943,1,0,0,0,1945,1947,1,0,0,0,1946,1941,1,
	0,0,0,1946,1944,1,0,0,0,1947,1949,1,0,0,0,1948,1940,1,0,0,0,1949,1952,1,
	0,0,0,1950,1948,1,0,0,0,1950,1951,1,0,0,0,1951,1955,1,0,0,0,1952,1950,1,
	0,0,0,1953,1954,5,16,0,0,1954,1956,3,352,176,0,1955,1953,1,0,0,0,1955,1956,
	1,0,0,0,1956,1959,1,0,0,0,1957,1959,3,352,176,0,1958,1938,1,0,0,0,1958,
	1957,1,0,0,0,1959,351,1,0,0,0,1960,1965,3,356,178,0,1961,1962,5,16,0,0,
	1962,1964,3,356,178,0,1963,1961,1,0,0,0,1964,1967,1,0,0,0,1965,1963,1,0,
	0,0,1965,1966,1,0,0,0,1966,1977,1,0,0,0,1967,1965,1,0,0,0,1968,1969,5,16,
	0,0,1969,1974,3,358,179,0,1970,1971,5,16,0,0,1971,1973,3,358,179,0,1972,
	1970,1,0,0,0,1973,1976,1,0,0,0,1974,1972,1,0,0,0,1974,1975,1,0,0,0,1975,
	1978,1,0,0,0,1976,1974,1,0,0,0,1977,1968,1,0,0,0,1977,1978,1,0,0,0,1978,
	1988,1,0,0,0,1979,1984,3,358,179,0,1980,1981,5,16,0,0,1981,1983,3,358,179,
	0,1982,1980,1,0,0,0,1983,1986,1,0,0,0,1984,1982,1,0,0,0,1984,1985,1,0,0,
	0,1985,1988,1,0,0,0,1986,1984,1,0,0,0,1987,1960,1,0,0,0,1987,1979,1,0,0,
	0,1988,353,1,0,0,0,1989,1990,5,20,0,0,1990,1991,3,210,105,0,1991,355,1,
	0,0,0,1992,1993,3,390,195,0,1993,1994,5,26,0,0,1994,1995,3,210,105,0,1995,
	1998,1,0,0,0,1996,1998,3,354,177,0,1997,1992,1,0,0,0,1997,1996,1,0,0,0,
	1998,357,1,0,0,0,1999,2000,3,390,195,0,2000,2001,5,26,0,0,2001,2002,3,210,
	105,0,2002,2006,1,0,0,0,2003,2004,5,36,0,0,2004,2006,3,210,105,0,2005,1999,
	1,0,0,0,2005,2003,1,0,0,0,2006,359,1,0,0,0,2007,2012,3,366,183,0,2008,2009,
	5,16,0,0,2009,2011,3,366,183,0,2010,2008,1,0,0,0,2011,2014,1,0,0,0,2012,
	2010,1,0,0,0,2012,2013,1,0,0,0,2013,2016,1,0,0,0,2014,2012,1,0,0,0,2015,
	2017,5,16,0,0,2016,2015,1,0,0,0,2016,2017,1,0,0,0,2017,361,1,0,0,0,2018,
	2023,3,366,183,0,2019,2020,5,16,0,0,2020,2022,3,366,183,0,2021,2019,1,0,
	0,0,2022,2025,1,0,0,0,2023,2021,1,0,0,0,2023,2024,1,0,0,0,2024,2027,1,0,
	0,0,2025,2023,1,0,0,0,2026,2028,5,16,0,0,2027,2026,1,0,0,0,2027,2028,1,
	0,0,0,2028,363,1,0,0,0,2029,2040,3,366,183,0,2030,2041,5,16,0,0,2031,2032,
	5,16,0,0,2032,2034,3,366,183,0,2033,2031,1,0,0,0,2034,2035,1,0,0,0,2035,
	2033,1,0,0,0,2035,2036,1,0,0,0,2036,2038,1,0,0,0,2037,2039,5,16,0,0,2038,
	2037,1,0,0,0,2038,2039,1,0,0,0,2039,2041,1,0,0,0,2040,2030,1,0,0,0,2040,
	2033,1,0,0,0,2041,365,1,0,0,0,2042,2043,5,20,0,0,2043,2046,3,366,183,0,
	2044,2046,3,368,184,0,2045,2042,1,0,0,0,2045,2044,1,0,0,0,2046,367,1,0,
	0,0,2047,2054,3,376,188,0,2048,2049,5,14,0,0,2049,2055,3,390,195,0,2050,
	2051,5,9,0,0,2051,2052,3,276,138,0,2052,2053,5,12,0,0,2053,2055,1,0,0,0,
	2054,2048,1,0,0,0,2054,2050,1,0,0,0,2055,2058,1,0,0,0,2056,2058,3,370,185,
	0,2057,2047,1,0,0,0,2057,2056,1,0,0,0,2058,369,1,0,0,0,2059,2075,3,390,
	195,0,2060,2061,5,8,0,0,2061,2062,3,368,184,0,2062,2063,5,11,0,0,2063,2075,
	1,0,0,0,2064,2066,5,8,0,0,2065,2067,3,364,182,0,2066,2065,1,0,0,0,2066,
	2067,1,0,0,0,2067,2068,1,0,0,0,2068,2075,5,11,0,0,2069,2071,5,9,0,0,2070,
	2072,3,362,181,0,2071,2070,1,0,0,0,2071,2072,1,0,0,0,2072,2073,1,0,0,0,
	2073,2075,5,12,0,0,2074,2059,1,0,0,0,2074,2060,1,0,0,0,2074,2064,1,0,0,
	0,2074,2069,1,0,0,0,2075,371,1,0,0,0,2076,2083,3,374,187,0,2077,2083,3,
	390,195,0,2078,2079,5,8,0,0,2079,2080,3,372,186,0,2080,2081,5,11,0,0,2081,
	2083,1,0,0,0,2082,2076,1,0,0,0,2082,2077,1,0,0,0,2082,2078,1,0,0,0,2083,
	373,1,0,0,0,2084,2091,3,376,188,0,2085,2086,5,14,0,0,2086,2092,3,390,195,
	0,2087,2088,5,9,0,0,2088,2089,3,276,138,0,2089,2090,5,12,0,0,2090,2092,
	1,0,0,0,2091,2085,1,0,0,0,2091,2087,1,0,0,0,2092,375,1,0,0,0,2093,2094,
	6,188,-1,0,2094,2095,3,280,140,0,2095,2113,1,0,0,0,2096,2109,10,2,0,0,2097,
	2098,5,14,0,0,2098,2110,3,390,195,0,2099,2100,5,9,0,0,2100,2101,3,276,138,
	0,2101,2102,5,12,0,0,2102,2110,1,0,0,0,2103,2110,3,344,172,0,2104,2106,
	5,8,0,0,2105,2107,3,348,174,0,2106,2105,1,0,0,0,2106,2107,1,0,0,0,2107,
	2108,1,0,0,0,2108,2110,5,11,0,0,2109,2097,1,0,0,0,2109,2099,1,0,0,0,2109,
	2103,1,0,0,0,2109,2104,1,0,0,0,2110,2112,1,0,0,0,2111,2096,1,0,0,0,2112,
	2115,1,0,0,0,2113,2111,1,0,0,0,2113,2114,1,0,0,0,2114,377,1,0,0,0,2115,
	2113,1,0,0,0,2116,2121,3,380,190,0,2117,2118,5,16,0,0,2118,2120,3,380,190,
	0,2119,2117,1,0,0,0,2120,2123,1,0,0,0,2121,2119,1,0,0,0,2121,2122,1,0,0,
	0,2122,2125,1,0,0,0,2123,2121,1,0,0,0,2124,2126,5,16,0,0,2125,2124,1,0,
	0,0,2125,2126,1,0,0,0,2126,379,1,0,0,0,2127,2134,3,376,188,0,2128,2129,
	5,14,0,0,2129,2135,3,390,195,0,2130,2131,5,9,0,0,2131,2132,3,276,138,0,
	2132,2133,5,12,0,0,2133,2135,1,0,0,0,2134,2128,1,0,0,0,2134,2130,1,0,0,
	0,2135,2138,1,0,0,0,2136,2138,3,382,191,0,2137,2127,1,0,0,0,2137,2136,1,
	0,0,0,2138,381,1,0,0,0,2139,2155,3,390,195,0,2140,2141,5,8,0,0,2141,2142,
	3,380,190,0,2142,2143,5,11,0,0,2143,2155,1,0,0,0,2144,2146,5,8,0,0,2145,
	2147,3,378,189,0,2146,2145,1,0,0,0,2146,2147,1,0,0,0,2147,2148,1,0,0,0,
	2148,2155,5,11,0,0,2149,2151,5,9,0,0,2150,2152,3,378,189,0,2151,2150,1,
	0,0,0,2151,2152,1,0,0,0,2152,2153,1,0,0,0,2153,2155,5,12,0,0,2154,2139,
	1,0,0,0,2154,2140,1,0,0,0,2154,2144,1,0,0,0,2154,2149,1,0,0,0,2155,383,
	1,0,0,0,2156,2161,3,210,105,0,2157,2158,5,16,0,0,2158,2160,3,210,105,0,
	2159,2157,1,0,0,0,2160,2163,1,0,0,0,2161,2159,1,0,0,0,2161,2162,1,0,0,0,
	2162,2176,1,0,0,0,2163,2161,1,0,0,0,2164,2174,5,16,0,0,2165,2166,5,20,0,
	0,2166,2170,3,210,105,0,2167,2168,5,16,0,0,2168,2169,5,36,0,0,2169,2171,
	3,210,105,0,2170,2167,1,0,0,0,2170,2171,1,0,0,0,2171,2175,1,0,0,0,2172,
	2173,5,36,0,0,2173,2175,3,210,105,0,2174,2165,1,0,0,0,2174,2172,1,0,0,0,
	2175,2177,1,0,0,0,2176,2164,1,0,0,0,2176,2177,1,0,0,0,2177,2188,1,0,0,0,
	2178,2179,5,20,0,0,2179,2183,3,210,105,0,2180,2181,5,16,0,0,2181,2182,5,
	36,0,0,2182,2184,3,210,105,0,2183,2180,1,0,0,0,2183,2184,1,0,0,0,2184,2188,
	1,0,0,0,2185,2186,5,36,0,0,2186,2188,3,210,105,0,2187,2156,1,0,0,0,2187,
	2178,1,0,0,0,2187,2185,1,0,0,0,2188,385,1,0,0,0,2189,2190,5,98,0,0,2190,
	2193,5,4,0,0,2191,2193,5,4,0,0,2192,2189,1,0,0,0,2192,2191,1,0,0,0,2193,
	387,1,0,0,0,2194,2195,7,5,0,0,2195,389,1,0,0,0,2196,2199,5,94,0,0,2197,
	2199,3,388,194,0,2198,2196,1,0,0,0,2198,2197,1,0,0,0,2199,391,1,0,0,0,294,
	393,403,410,418,426,430,438,445,449,467,477,484,491,497,504,508,511,517,
	519,523,529,535,537,545,554,566,570,579,590,594,599,605,612,618,625,631,
	641,650,658,664,669,673,676,685,690,694,699,703,711,715,720,724,728,736,
	742,746,752,756,761,766,770,775,778,781,786,790,795,801,805,812,816,823,
	827,834,837,840,847,850,854,857,862,865,869,872,875,879,899,901,909,911,
	922,925,933,937,946,950,955,967,971,978,986,991,995,1000,1013,1016,1019,
	1027,1030,1033,1035,1041,1043,1053,1070,1077,1080,1085,1095,1099,1110,1121,
	1129,1137,1144,1149,1170,1177,1186,1191,1194,1199,1206,1210,1214,1224,1232,
	1235,1239,1246,1251,1264,1267,1270,1272,1281,1289,1299,1313,1317,1321,1324,
	1329,1334,1336,1352,1356,1364,1367,1373,1375,1382,1386,1391,1398,1402,1407,
	1415,1422,1430,1436,1442,1455,1497,1508,1519,1530,1541,1552,1562,1567,1572,
	1583,1590,1594,1600,1605,1609,1613,1615,1618,1622,1626,1628,1631,1642,1646,
	1652,1655,1660,1666,1677,1683,1687,1693,1697,1702,1707,1711,1716,1719,1722,
	1727,1731,1736,1742,1746,1753,1757,1764,1767,1770,1777,1782,1786,1789,1795,
	1800,1803,1806,1817,1822,1828,1837,1839,1843,1851,1853,1863,1872,1876,1881,
	1890,1893,1903,1919,1931,1936,1938,1944,1946,1950,1955,1958,1965,1974,1977,
	1984,1987,1997,2005,2012,2016,2023,2027,2035,2038,2040,2045,2054,2057,2066,
	2071,2074,2082,2091,2106,2109,2113,2121,2125,2134,2137,2146,2151,2154,2161,
	2170,2174,2176,2183,2187,2192,2198];

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


export class InteractiveContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_newline(): Statement_newlineContext {
		return this.getTypedRuleContext(Statement_newlineContext, 0) as Statement_newlineContext;
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_interactive;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterInteractive) {
	 		listener.enterInteractive(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitInteractive) {
	 		listener.exitInteractive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitInteractive) {
			return visitor.visitInteractive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvalContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(PythonParser.EOF, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_eval;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterEval) {
	 		listener.enterEval(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitEval) {
	 		listener.exitEval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitEval) {
			return visitor.visitEval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_typeContext extends ParserRuleContext {
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
	public RARROW(): TerminalNode {
		return this.getToken(PythonParser.RARROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(PythonParser.EOF, 0);
	}
	public type_expressions(): Type_expressionsContext {
		return this.getTypedRuleContext(Type_expressionsContext, 0) as Type_expressionsContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(PythonParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_func_type;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFunc_type) {
	 		listener.enterFunc_type(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFunc_type) {
	 		listener.exitFunc_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFunc_type) {
			return visitor.visitFunc_type(this);
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


export class Statement_newlineContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public compound_stmt(): Compound_stmtContext {
		return this.getTypedRuleContext(Compound_stmtContext, 0) as Compound_stmtContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, 0);
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(PythonParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_statement_newline;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterStatement_newline) {
	 		listener.enterStatement_newline(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitStatement_newline) {
	 		listener.exitStatement_newline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitStatement_newline) {
			return visitor.visitStatement_newline(this);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public func_type_comment(): Func_type_commentContext {
		return this.getTypedRuleContext(Func_type_commentContext, 0) as Func_type_commentContext;
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
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


export class Func_type_commentContext extends ParserRuleContext {
	constructor(parser?: PythonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(PythonParser.NEWLINE, 0);
	}
	public TYPE_COMMENT(): TerminalNode {
		return this.getToken(PythonParser.TYPE_COMMENT, 0);
	}
    public get ruleIndex(): number {
    	return PythonParser.RULE_func_type_comment;
	}
	public enterRule(listener: PythonParserListener): void {
	    if(listener.enterFunc_type_comment) {
	 		listener.enterFunc_type_comment(this);
		}
	}
	public exitRule(listener: PythonParserListener): void {
	    if(listener.exitFunc_type_comment) {
	 		listener.exitFunc_type_comment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonParserVisitor<Result>): Result {
		if (visitor.visitFunc_type_comment) {
			return visitor.visitFunc_type_comment(this);
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
