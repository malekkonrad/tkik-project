// Generated from PythonParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./PythonParser.js";
import { StatementsContext } from "./PythonParser.js";
import { StatementContext } from "./PythonParser.js";
import { Simple_stmtsContext } from "./PythonParser.js";
import { Simple_stmtContext } from "./PythonParser.js";
import { Compound_stmtContext } from "./PythonParser.js";
import { AssignmentContext } from "./PythonParser.js";
import { Annotated_rhsContext } from "./PythonParser.js";
import { AugassignContext } from "./PythonParser.js";
import { Return_stmtContext } from "./PythonParser.js";
import { Raise_stmtContext } from "./PythonParser.js";
import { Global_stmtContext } from "./PythonParser.js";
import { Nonlocal_stmtContext } from "./PythonParser.js";
import { Del_stmtContext } from "./PythonParser.js";
import { Yield_stmtContext } from "./PythonParser.js";
import { Assert_stmtContext } from "./PythonParser.js";
import { Import_stmtContext } from "./PythonParser.js";
import { Import_nameContext } from "./PythonParser.js";
import { Import_fromContext } from "./PythonParser.js";
import { Import_from_targetsContext } from "./PythonParser.js";
import { Import_from_as_namesContext } from "./PythonParser.js";
import { Import_from_as_nameContext } from "./PythonParser.js";
import { Dotted_as_namesContext } from "./PythonParser.js";
import { Dotted_as_nameContext } from "./PythonParser.js";
import { Dotted_nameContext } from "./PythonParser.js";
import { BlockContext } from "./PythonParser.js";
import { DecoratorsContext } from "./PythonParser.js";
import { Class_defContext } from "./PythonParser.js";
import { Class_def_rawContext } from "./PythonParser.js";
import { Function_defContext } from "./PythonParser.js";
import { Function_def_rawContext } from "./PythonParser.js";
import { ParamsContext } from "./PythonParser.js";
import { ParametersContext } from "./PythonParser.js";
import { Slash_no_defaultContext } from "./PythonParser.js";
import { Slash_with_defaultContext } from "./PythonParser.js";
import { Star_etcContext } from "./PythonParser.js";
import { KwdsContext } from "./PythonParser.js";
import { Param_no_defaultContext } from "./PythonParser.js";
import { Param_no_default_star_annotationContext } from "./PythonParser.js";
import { Param_with_defaultContext } from "./PythonParser.js";
import { Param_maybe_defaultContext } from "./PythonParser.js";
import { ParamContext } from "./PythonParser.js";
import { Param_star_annotationContext } from "./PythonParser.js";
import { AnnotationContext } from "./PythonParser.js";
import { Star_annotationContext } from "./PythonParser.js";
import { Default_assignmentContext } from "./PythonParser.js";
import { If_stmtContext } from "./PythonParser.js";
import { Elif_stmtContext } from "./PythonParser.js";
import { Else_blockContext } from "./PythonParser.js";
import { While_stmtContext } from "./PythonParser.js";
import { For_stmtContext } from "./PythonParser.js";
import { With_stmtContext } from "./PythonParser.js";
import { With_itemContext } from "./PythonParser.js";
import { Try_stmtContext } from "./PythonParser.js";
import { Except_blockContext } from "./PythonParser.js";
import { Except_star_blockContext } from "./PythonParser.js";
import { Finally_blockContext } from "./PythonParser.js";
import { Match_stmtContext } from "./PythonParser.js";
import { Subject_exprContext } from "./PythonParser.js";
import { Case_blockContext } from "./PythonParser.js";
import { GuardContext } from "./PythonParser.js";
import { PatternsContext } from "./PythonParser.js";
import { PatternContext } from "./PythonParser.js";
import { As_patternContext } from "./PythonParser.js";
import { Or_patternContext } from "./PythonParser.js";
import { Closed_patternContext } from "./PythonParser.js";
import { Literal_patternContext } from "./PythonParser.js";
import { Literal_exprContext } from "./PythonParser.js";
import { Complex_numberContext } from "./PythonParser.js";
import { Signed_numberContext } from "./PythonParser.js";
import { Signed_real_numberContext } from "./PythonParser.js";
import { Real_numberContext } from "./PythonParser.js";
import { Imaginary_numberContext } from "./PythonParser.js";
import { Capture_patternContext } from "./PythonParser.js";
import { Pattern_capture_targetContext } from "./PythonParser.js";
import { Wildcard_patternContext } from "./PythonParser.js";
import { Value_patternContext } from "./PythonParser.js";
import { AttrContext } from "./PythonParser.js";
import { Name_or_attrContext } from "./PythonParser.js";
import { Group_patternContext } from "./PythonParser.js";
import { Sequence_patternContext } from "./PythonParser.js";
import { Open_sequence_patternContext } from "./PythonParser.js";
import { Maybe_sequence_patternContext } from "./PythonParser.js";
import { Maybe_star_patternContext } from "./PythonParser.js";
import { Star_patternContext } from "./PythonParser.js";
import { Mapping_patternContext } from "./PythonParser.js";
import { Items_patternContext } from "./PythonParser.js";
import { Key_value_patternContext } from "./PythonParser.js";
import { Double_star_patternContext } from "./PythonParser.js";
import { Class_patternContext } from "./PythonParser.js";
import { Positional_patternsContext } from "./PythonParser.js";
import { Keyword_patternsContext } from "./PythonParser.js";
import { Keyword_patternContext } from "./PythonParser.js";
import { Type_aliasContext } from "./PythonParser.js";
import { Type_paramsContext } from "./PythonParser.js";
import { Type_param_seqContext } from "./PythonParser.js";
import { Type_paramContext } from "./PythonParser.js";
import { Type_param_boundContext } from "./PythonParser.js";
import { Type_param_defaultContext } from "./PythonParser.js";
import { Type_param_starred_defaultContext } from "./PythonParser.js";
import { ExpressionsContext } from "./PythonParser.js";
import { ExpressionContext } from "./PythonParser.js";
import { Yield_exprContext } from "./PythonParser.js";
import { Star_expressionsContext } from "./PythonParser.js";
import { Star_expressionContext } from "./PythonParser.js";
import { Star_named_expressionsContext } from "./PythonParser.js";
import { Star_named_expressionContext } from "./PythonParser.js";
import { Assignment_expressionContext } from "./PythonParser.js";
import { Named_expressionContext } from "./PythonParser.js";
import { DisjunctionContext } from "./PythonParser.js";
import { ConjunctionContext } from "./PythonParser.js";
import { InversionContext } from "./PythonParser.js";
import { ComparisonContext } from "./PythonParser.js";
import { Compare_op_bitwise_or_pairContext } from "./PythonParser.js";
import { Eq_bitwise_orContext } from "./PythonParser.js";
import { Noteq_bitwise_orContext } from "./PythonParser.js";
import { Lte_bitwise_orContext } from "./PythonParser.js";
import { Lt_bitwise_orContext } from "./PythonParser.js";
import { Gte_bitwise_orContext } from "./PythonParser.js";
import { Gt_bitwise_orContext } from "./PythonParser.js";
import { Notin_bitwise_orContext } from "./PythonParser.js";
import { In_bitwise_orContext } from "./PythonParser.js";
import { Isnot_bitwise_orContext } from "./PythonParser.js";
import { Is_bitwise_orContext } from "./PythonParser.js";
import { Bitwise_orContext } from "./PythonParser.js";
import { Bitwise_xorContext } from "./PythonParser.js";
import { Bitwise_andContext } from "./PythonParser.js";
import { Shift_exprContext } from "./PythonParser.js";
import { SumContext } from "./PythonParser.js";
import { TermContext } from "./PythonParser.js";
import { FactorContext } from "./PythonParser.js";
import { PowerContext } from "./PythonParser.js";
import { Await_primaryContext } from "./PythonParser.js";
import { PrimaryContext } from "./PythonParser.js";
import { SlicesContext } from "./PythonParser.js";
import { SliceContext } from "./PythonParser.js";
import { AtomContext } from "./PythonParser.js";
import { GroupContext } from "./PythonParser.js";
import { LambdefContext } from "./PythonParser.js";
import { Lambda_paramsContext } from "./PythonParser.js";
import { Lambda_parametersContext } from "./PythonParser.js";
import { Lambda_slash_no_defaultContext } from "./PythonParser.js";
import { Lambda_slash_with_defaultContext } from "./PythonParser.js";
import { Lambda_star_etcContext } from "./PythonParser.js";
import { Lambda_kwdsContext } from "./PythonParser.js";
import { Lambda_param_no_defaultContext } from "./PythonParser.js";
import { Lambda_param_with_defaultContext } from "./PythonParser.js";
import { Lambda_param_maybe_defaultContext } from "./PythonParser.js";
import { Lambda_paramContext } from "./PythonParser.js";
import { Fstring_middleContext } from "./PythonParser.js";
import { Fstring_replacement_fieldContext } from "./PythonParser.js";
import { Fstring_conversionContext } from "./PythonParser.js";
import { Fstring_full_format_specContext } from "./PythonParser.js";
import { Fstring_format_specContext } from "./PythonParser.js";
import { FstringContext } from "./PythonParser.js";
import { StringContext } from "./PythonParser.js";
import { StringsContext } from "./PythonParser.js";
import { ListContext } from "./PythonParser.js";
import { TupleContext } from "./PythonParser.js";
import { SetContext } from "./PythonParser.js";
import { DictContext } from "./PythonParser.js";
import { Double_starred_kvpairsContext } from "./PythonParser.js";
import { Double_starred_kvpairContext } from "./PythonParser.js";
import { KvpairContext } from "./PythonParser.js";
import { For_if_clausesContext } from "./PythonParser.js";
import { For_if_clauseContext } from "./PythonParser.js";
import { ListcompContext } from "./PythonParser.js";
import { SetcompContext } from "./PythonParser.js";
import { GenexpContext } from "./PythonParser.js";
import { DictcompContext } from "./PythonParser.js";
import { ArgumentsContext } from "./PythonParser.js";
import { ArgsContext } from "./PythonParser.js";
import { KwargsContext } from "./PythonParser.js";
import { Starred_expressionContext } from "./PythonParser.js";
import { Kwarg_or_starredContext } from "./PythonParser.js";
import { Kwarg_or_double_starredContext } from "./PythonParser.js";
import { Star_targetsContext } from "./PythonParser.js";
import { Star_targets_list_seqContext } from "./PythonParser.js";
import { Star_targets_tuple_seqContext } from "./PythonParser.js";
import { Star_targetContext } from "./PythonParser.js";
import { Target_with_star_atomContext } from "./PythonParser.js";
import { Star_atomContext } from "./PythonParser.js";
import { Single_targetContext } from "./PythonParser.js";
import { Single_subscript_attribute_targetContext } from "./PythonParser.js";
import { T_primaryContext } from "./PythonParser.js";
import { Del_targetsContext } from "./PythonParser.js";
import { Del_targetContext } from "./PythonParser.js";
import { Del_t_atomContext } from "./PythonParser.js";
import { Type_expressionsContext } from "./PythonParser.js";
import { Name_except_underscoreContext } from "./PythonParser.js";
import { NameContext } from "./PythonParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PythonParser`.
 */
export default class PythonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PythonParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.simple_stmts`.
	 * @param ctx the parse tree
	 */
	enterSimple_stmts?: (ctx: Simple_stmtsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.simple_stmts`.
	 * @param ctx the parse tree
	 */
	exitSimple_stmts?: (ctx: Simple_stmtsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	enterSimple_stmt?: (ctx: Simple_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	exitSimple_stmt?: (ctx: Simple_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompound_stmt?: (ctx: Compound_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompound_stmt?: (ctx: Compound_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.annotated_rhs`.
	 * @param ctx the parse tree
	 */
	enterAnnotated_rhs?: (ctx: Annotated_rhsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.annotated_rhs`.
	 * @param ctx the parse tree
	 */
	exitAnnotated_rhs?: (ctx: Annotated_rhsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.augassign`.
	 * @param ctx the parse tree
	 */
	enterAugassign?: (ctx: AugassignContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.augassign`.
	 * @param ctx the parse tree
	 */
	exitAugassign?: (ctx: AugassignContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.raise_stmt`.
	 * @param ctx the parse tree
	 */
	enterRaise_stmt?: (ctx: Raise_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.raise_stmt`.
	 * @param ctx the parse tree
	 */
	exitRaise_stmt?: (ctx: Raise_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.global_stmt`.
	 * @param ctx the parse tree
	 */
	enterGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.global_stmt`.
	 * @param ctx the parse tree
	 */
	exitGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.nonlocal_stmt`.
	 * @param ctx the parse tree
	 */
	enterNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.nonlocal_stmt`.
	 * @param ctx the parse tree
	 */
	exitNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.del_stmt`.
	 * @param ctx the parse tree
	 */
	enterDel_stmt?: (ctx: Del_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.del_stmt`.
	 * @param ctx the parse tree
	 */
	exitDel_stmt?: (ctx: Del_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.yield_stmt`.
	 * @param ctx the parse tree
	 */
	enterYield_stmt?: (ctx: Yield_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.yield_stmt`.
	 * @param ctx the parse tree
	 */
	exitYield_stmt?: (ctx: Yield_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.assert_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssert_stmt?: (ctx: Assert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.assert_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssert_stmt?: (ctx: Assert_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_name`.
	 * @param ctx the parse tree
	 */
	enterImport_name?: (ctx: Import_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_name`.
	 * @param ctx the parse tree
	 */
	exitImport_name?: (ctx: Import_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_from`.
	 * @param ctx the parse tree
	 */
	enterImport_from?: (ctx: Import_fromContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_from`.
	 * @param ctx the parse tree
	 */
	exitImport_from?: (ctx: Import_fromContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_from_targets`.
	 * @param ctx the parse tree
	 */
	enterImport_from_targets?: (ctx: Import_from_targetsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_from_targets`.
	 * @param ctx the parse tree
	 */
	exitImport_from_targets?: (ctx: Import_from_targetsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_from_as_names`.
	 * @param ctx the parse tree
	 */
	enterImport_from_as_names?: (ctx: Import_from_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_from_as_names`.
	 * @param ctx the parse tree
	 */
	exitImport_from_as_names?: (ctx: Import_from_as_namesContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.import_from_as_name`.
	 * @param ctx the parse tree
	 */
	enterImport_from_as_name?: (ctx: Import_from_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_from_as_name`.
	 * @param ctx the parse tree
	 */
	exitImport_from_as_name?: (ctx: Import_from_as_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_names?: (ctx: Dotted_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_names?: (ctx: Dotted_as_namesContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_name?: (ctx: Dotted_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_name?: (ctx: Dotted_as_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_name?: (ctx: Dotted_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_name?: (ctx: Dotted_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.decorators`.
	 * @param ctx the parse tree
	 */
	enterDecorators?: (ctx: DecoratorsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.decorators`.
	 * @param ctx the parse tree
	 */
	exitDecorators?: (ctx: DecoratorsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.class_def`.
	 * @param ctx the parse tree
	 */
	enterClass_def?: (ctx: Class_defContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.class_def`.
	 * @param ctx the parse tree
	 */
	exitClass_def?: (ctx: Class_defContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.class_def_raw`.
	 * @param ctx the parse tree
	 */
	enterClass_def_raw?: (ctx: Class_def_rawContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.class_def_raw`.
	 * @param ctx the parse tree
	 */
	exitClass_def_raw?: (ctx: Class_def_rawContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.function_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_def?: (ctx: Function_defContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.function_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_def?: (ctx: Function_defContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.function_def_raw`.
	 * @param ctx the parse tree
	 */
	enterFunction_def_raw?: (ctx: Function_def_rawContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.function_def_raw`.
	 * @param ctx the parse tree
	 */
	exitFunction_def_raw?: (ctx: Function_def_rawContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.slash_no_default`.
	 * @param ctx the parse tree
	 */
	enterSlash_no_default?: (ctx: Slash_no_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.slash_no_default`.
	 * @param ctx the parse tree
	 */
	exitSlash_no_default?: (ctx: Slash_no_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.slash_with_default`.
	 * @param ctx the parse tree
	 */
	enterSlash_with_default?: (ctx: Slash_with_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.slash_with_default`.
	 * @param ctx the parse tree
	 */
	exitSlash_with_default?: (ctx: Slash_with_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_etc`.
	 * @param ctx the parse tree
	 */
	enterStar_etc?: (ctx: Star_etcContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_etc`.
	 * @param ctx the parse tree
	 */
	exitStar_etc?: (ctx: Star_etcContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.kwds`.
	 * @param ctx the parse tree
	 */
	enterKwds?: (ctx: KwdsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kwds`.
	 * @param ctx the parse tree
	 */
	exitKwds?: (ctx: KwdsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param_no_default`.
	 * @param ctx the parse tree
	 */
	enterParam_no_default?: (ctx: Param_no_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param_no_default`.
	 * @param ctx the parse tree
	 */
	exitParam_no_default?: (ctx: Param_no_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param_no_default_star_annotation`.
	 * @param ctx the parse tree
	 */
	enterParam_no_default_star_annotation?: (ctx: Param_no_default_star_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param_no_default_star_annotation`.
	 * @param ctx the parse tree
	 */
	exitParam_no_default_star_annotation?: (ctx: Param_no_default_star_annotationContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param_with_default`.
	 * @param ctx the parse tree
	 */
	enterParam_with_default?: (ctx: Param_with_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param_with_default`.
	 * @param ctx the parse tree
	 */
	exitParam_with_default?: (ctx: Param_with_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param_maybe_default`.
	 * @param ctx the parse tree
	 */
	enterParam_maybe_default?: (ctx: Param_maybe_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param_maybe_default`.
	 * @param ctx the parse tree
	 */
	exitParam_maybe_default?: (ctx: Param_maybe_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.param_star_annotation`.
	 * @param ctx the parse tree
	 */
	enterParam_star_annotation?: (ctx: Param_star_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.param_star_annotation`.
	 * @param ctx the parse tree
	 */
	exitParam_star_annotation?: (ctx: Param_star_annotationContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_annotation`.
	 * @param ctx the parse tree
	 */
	enterStar_annotation?: (ctx: Star_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_annotation`.
	 * @param ctx the parse tree
	 */
	exitStar_annotation?: (ctx: Star_annotationContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.default_assignment`.
	 * @param ctx the parse tree
	 */
	enterDefault_assignment?: (ctx: Default_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.default_assignment`.
	 * @param ctx the parse tree
	 */
	exitDefault_assignment?: (ctx: Default_assignmentContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.elif_stmt`.
	 * @param ctx the parse tree
	 */
	enterElif_stmt?: (ctx: Elif_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.elif_stmt`.
	 * @param ctx the parse tree
	 */
	exitElif_stmt?: (ctx: Elif_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.else_block`.
	 * @param ctx the parse tree
	 */
	enterElse_block?: (ctx: Else_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.else_block`.
	 * @param ctx the parse tree
	 */
	exitElse_block?: (ctx: Else_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.with_stmt`.
	 * @param ctx the parse tree
	 */
	enterWith_stmt?: (ctx: With_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.with_stmt`.
	 * @param ctx the parse tree
	 */
	exitWith_stmt?: (ctx: With_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 */
	enterWith_item?: (ctx: With_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 */
	exitWith_item?: (ctx: With_itemContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.try_stmt`.
	 * @param ctx the parse tree
	 */
	enterTry_stmt?: (ctx: Try_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.try_stmt`.
	 * @param ctx the parse tree
	 */
	exitTry_stmt?: (ctx: Try_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.except_block`.
	 * @param ctx the parse tree
	 */
	enterExcept_block?: (ctx: Except_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.except_block`.
	 * @param ctx the parse tree
	 */
	exitExcept_block?: (ctx: Except_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.except_star_block`.
	 * @param ctx the parse tree
	 */
	enterExcept_star_block?: (ctx: Except_star_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.except_star_block`.
	 * @param ctx the parse tree
	 */
	exitExcept_star_block?: (ctx: Except_star_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.finally_block`.
	 * @param ctx the parse tree
	 */
	enterFinally_block?: (ctx: Finally_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.finally_block`.
	 * @param ctx the parse tree
	 */
	exitFinally_block?: (ctx: Finally_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.match_stmt`.
	 * @param ctx the parse tree
	 */
	enterMatch_stmt?: (ctx: Match_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.match_stmt`.
	 * @param ctx the parse tree
	 */
	exitMatch_stmt?: (ctx: Match_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.subject_expr`.
	 * @param ctx the parse tree
	 */
	enterSubject_expr?: (ctx: Subject_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.subject_expr`.
	 * @param ctx the parse tree
	 */
	exitSubject_expr?: (ctx: Subject_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.case_block`.
	 * @param ctx the parse tree
	 */
	enterCase_block?: (ctx: Case_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.case_block`.
	 * @param ctx the parse tree
	 */
	exitCase_block?: (ctx: Case_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.guard`.
	 * @param ctx the parse tree
	 */
	enterGuard?: (ctx: GuardContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.guard`.
	 * @param ctx the parse tree
	 */
	exitGuard?: (ctx: GuardContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.patterns`.
	 * @param ctx the parse tree
	 */
	enterPatterns?: (ctx: PatternsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.patterns`.
	 * @param ctx the parse tree
	 */
	exitPatterns?: (ctx: PatternsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.as_pattern`.
	 * @param ctx the parse tree
	 */
	enterAs_pattern?: (ctx: As_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.as_pattern`.
	 * @param ctx the parse tree
	 */
	exitAs_pattern?: (ctx: As_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.or_pattern`.
	 * @param ctx the parse tree
	 */
	enterOr_pattern?: (ctx: Or_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.or_pattern`.
	 * @param ctx the parse tree
	 */
	exitOr_pattern?: (ctx: Or_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.closed_pattern`.
	 * @param ctx the parse tree
	 */
	enterClosed_pattern?: (ctx: Closed_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.closed_pattern`.
	 * @param ctx the parse tree
	 */
	exitClosed_pattern?: (ctx: Closed_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.literal_pattern`.
	 * @param ctx the parse tree
	 */
	enterLiteral_pattern?: (ctx: Literal_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.literal_pattern`.
	 * @param ctx the parse tree
	 */
	exitLiteral_pattern?: (ctx: Literal_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.literal_expr`.
	 * @param ctx the parse tree
	 */
	enterLiteral_expr?: (ctx: Literal_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.literal_expr`.
	 * @param ctx the parse tree
	 */
	exitLiteral_expr?: (ctx: Literal_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.complex_number`.
	 * @param ctx the parse tree
	 */
	enterComplex_number?: (ctx: Complex_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.complex_number`.
	 * @param ctx the parse tree
	 */
	exitComplex_number?: (ctx: Complex_numberContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.signed_number`.
	 * @param ctx the parse tree
	 */
	enterSigned_number?: (ctx: Signed_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.signed_number`.
	 * @param ctx the parse tree
	 */
	exitSigned_number?: (ctx: Signed_numberContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.signed_real_number`.
	 * @param ctx the parse tree
	 */
	enterSigned_real_number?: (ctx: Signed_real_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.signed_real_number`.
	 * @param ctx the parse tree
	 */
	exitSigned_real_number?: (ctx: Signed_real_numberContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.real_number`.
	 * @param ctx the parse tree
	 */
	enterReal_number?: (ctx: Real_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.real_number`.
	 * @param ctx the parse tree
	 */
	exitReal_number?: (ctx: Real_numberContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.imaginary_number`.
	 * @param ctx the parse tree
	 */
	enterImaginary_number?: (ctx: Imaginary_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.imaginary_number`.
	 * @param ctx the parse tree
	 */
	exitImaginary_number?: (ctx: Imaginary_numberContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.capture_pattern`.
	 * @param ctx the parse tree
	 */
	enterCapture_pattern?: (ctx: Capture_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.capture_pattern`.
	 * @param ctx the parse tree
	 */
	exitCapture_pattern?: (ctx: Capture_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.pattern_capture_target`.
	 * @param ctx the parse tree
	 */
	enterPattern_capture_target?: (ctx: Pattern_capture_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.pattern_capture_target`.
	 * @param ctx the parse tree
	 */
	exitPattern_capture_target?: (ctx: Pattern_capture_targetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.wildcard_pattern`.
	 * @param ctx the parse tree
	 */
	enterWildcard_pattern?: (ctx: Wildcard_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.wildcard_pattern`.
	 * @param ctx the parse tree
	 */
	exitWildcard_pattern?: (ctx: Wildcard_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.value_pattern`.
	 * @param ctx the parse tree
	 */
	enterValue_pattern?: (ctx: Value_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.value_pattern`.
	 * @param ctx the parse tree
	 */
	exitValue_pattern?: (ctx: Value_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.attr`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.attr`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.name_or_attr`.
	 * @param ctx the parse tree
	 */
	enterName_or_attr?: (ctx: Name_or_attrContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.name_or_attr`.
	 * @param ctx the parse tree
	 */
	exitName_or_attr?: (ctx: Name_or_attrContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.group_pattern`.
	 * @param ctx the parse tree
	 */
	enterGroup_pattern?: (ctx: Group_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.group_pattern`.
	 * @param ctx the parse tree
	 */
	exitGroup_pattern?: (ctx: Group_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.sequence_pattern`.
	 * @param ctx the parse tree
	 */
	enterSequence_pattern?: (ctx: Sequence_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.sequence_pattern`.
	 * @param ctx the parse tree
	 */
	exitSequence_pattern?: (ctx: Sequence_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.open_sequence_pattern`.
	 * @param ctx the parse tree
	 */
	enterOpen_sequence_pattern?: (ctx: Open_sequence_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.open_sequence_pattern`.
	 * @param ctx the parse tree
	 */
	exitOpen_sequence_pattern?: (ctx: Open_sequence_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.maybe_sequence_pattern`.
	 * @param ctx the parse tree
	 */
	enterMaybe_sequence_pattern?: (ctx: Maybe_sequence_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.maybe_sequence_pattern`.
	 * @param ctx the parse tree
	 */
	exitMaybe_sequence_pattern?: (ctx: Maybe_sequence_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.maybe_star_pattern`.
	 * @param ctx the parse tree
	 */
	enterMaybe_star_pattern?: (ctx: Maybe_star_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.maybe_star_pattern`.
	 * @param ctx the parse tree
	 */
	exitMaybe_star_pattern?: (ctx: Maybe_star_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_pattern`.
	 * @param ctx the parse tree
	 */
	enterStar_pattern?: (ctx: Star_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_pattern`.
	 * @param ctx the parse tree
	 */
	exitStar_pattern?: (ctx: Star_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.mapping_pattern`.
	 * @param ctx the parse tree
	 */
	enterMapping_pattern?: (ctx: Mapping_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.mapping_pattern`.
	 * @param ctx the parse tree
	 */
	exitMapping_pattern?: (ctx: Mapping_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.items_pattern`.
	 * @param ctx the parse tree
	 */
	enterItems_pattern?: (ctx: Items_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.items_pattern`.
	 * @param ctx the parse tree
	 */
	exitItems_pattern?: (ctx: Items_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.key_value_pattern`.
	 * @param ctx the parse tree
	 */
	enterKey_value_pattern?: (ctx: Key_value_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.key_value_pattern`.
	 * @param ctx the parse tree
	 */
	exitKey_value_pattern?: (ctx: Key_value_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.double_star_pattern`.
	 * @param ctx the parse tree
	 */
	enterDouble_star_pattern?: (ctx: Double_star_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.double_star_pattern`.
	 * @param ctx the parse tree
	 */
	exitDouble_star_pattern?: (ctx: Double_star_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.class_pattern`.
	 * @param ctx the parse tree
	 */
	enterClass_pattern?: (ctx: Class_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.class_pattern`.
	 * @param ctx the parse tree
	 */
	exitClass_pattern?: (ctx: Class_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.positional_patterns`.
	 * @param ctx the parse tree
	 */
	enterPositional_patterns?: (ctx: Positional_patternsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.positional_patterns`.
	 * @param ctx the parse tree
	 */
	exitPositional_patterns?: (ctx: Positional_patternsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.keyword_patterns`.
	 * @param ctx the parse tree
	 */
	enterKeyword_patterns?: (ctx: Keyword_patternsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.keyword_patterns`.
	 * @param ctx the parse tree
	 */
	exitKeyword_patterns?: (ctx: Keyword_patternsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.keyword_pattern`.
	 * @param ctx the parse tree
	 */
	enterKeyword_pattern?: (ctx: Keyword_patternContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.keyword_pattern`.
	 * @param ctx the parse tree
	 */
	exitKeyword_pattern?: (ctx: Keyword_patternContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_alias`.
	 * @param ctx the parse tree
	 */
	enterType_alias?: (ctx: Type_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_alias`.
	 * @param ctx the parse tree
	 */
	exitType_alias?: (ctx: Type_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_params`.
	 * @param ctx the parse tree
	 */
	enterType_params?: (ctx: Type_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_params`.
	 * @param ctx the parse tree
	 */
	exitType_params?: (ctx: Type_paramsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_param_seq`.
	 * @param ctx the parse tree
	 */
	enterType_param_seq?: (ctx: Type_param_seqContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_param_seq`.
	 * @param ctx the parse tree
	 */
	exitType_param_seq?: (ctx: Type_param_seqContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_param`.
	 * @param ctx the parse tree
	 */
	enterType_param?: (ctx: Type_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_param`.
	 * @param ctx the parse tree
	 */
	exitType_param?: (ctx: Type_paramContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_param_bound`.
	 * @param ctx the parse tree
	 */
	enterType_param_bound?: (ctx: Type_param_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_param_bound`.
	 * @param ctx the parse tree
	 */
	exitType_param_bound?: (ctx: Type_param_boundContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_param_default`.
	 * @param ctx the parse tree
	 */
	enterType_param_default?: (ctx: Type_param_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_param_default`.
	 * @param ctx the parse tree
	 */
	exitType_param_default?: (ctx: Type_param_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_param_starred_default`.
	 * @param ctx the parse tree
	 */
	enterType_param_starred_default?: (ctx: Type_param_starred_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_param_starred_default`.
	 * @param ctx the parse tree
	 */
	exitType_param_starred_default?: (ctx: Type_param_starred_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 */
	enterYield_expr?: (ctx: Yield_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 */
	exitYield_expr?: (ctx: Yield_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_expressions`.
	 * @param ctx the parse tree
	 */
	enterStar_expressions?: (ctx: Star_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_expressions`.
	 * @param ctx the parse tree
	 */
	exitStar_expressions?: (ctx: Star_expressionsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_expression`.
	 * @param ctx the parse tree
	 */
	enterStar_expression?: (ctx: Star_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_expression`.
	 * @param ctx the parse tree
	 */
	exitStar_expression?: (ctx: Star_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_named_expressions`.
	 * @param ctx the parse tree
	 */
	enterStar_named_expressions?: (ctx: Star_named_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_named_expressions`.
	 * @param ctx the parse tree
	 */
	exitStar_named_expressions?: (ctx: Star_named_expressionsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_named_expression`.
	 * @param ctx the parse tree
	 */
	enterStar_named_expression?: (ctx: Star_named_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_named_expression`.
	 * @param ctx the parse tree
	 */
	exitStar_named_expression?: (ctx: Star_named_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.named_expression`.
	 * @param ctx the parse tree
	 */
	enterNamed_expression?: (ctx: Named_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.named_expression`.
	 * @param ctx the parse tree
	 */
	exitNamed_expression?: (ctx: Named_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.disjunction`.
	 * @param ctx the parse tree
	 */
	enterDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.disjunction`.
	 * @param ctx the parse tree
	 */
	exitDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.conjunction`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.conjunction`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.inversion`.
	 * @param ctx the parse tree
	 */
	enterInversion?: (ctx: InversionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.inversion`.
	 * @param ctx the parse tree
	 */
	exitInversion?: (ctx: InversionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.compare_op_bitwise_or_pair`.
	 * @param ctx the parse tree
	 */
	enterCompare_op_bitwise_or_pair?: (ctx: Compare_op_bitwise_or_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.compare_op_bitwise_or_pair`.
	 * @param ctx the parse tree
	 */
	exitCompare_op_bitwise_or_pair?: (ctx: Compare_op_bitwise_or_pairContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.eq_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterEq_bitwise_or?: (ctx: Eq_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.eq_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitEq_bitwise_or?: (ctx: Eq_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.noteq_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterNoteq_bitwise_or?: (ctx: Noteq_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.noteq_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitNoteq_bitwise_or?: (ctx: Noteq_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lte_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterLte_bitwise_or?: (ctx: Lte_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lte_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitLte_bitwise_or?: (ctx: Lte_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lt_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterLt_bitwise_or?: (ctx: Lt_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lt_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitLt_bitwise_or?: (ctx: Lt_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.gte_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterGte_bitwise_or?: (ctx: Gte_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.gte_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitGte_bitwise_or?: (ctx: Gte_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.gt_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterGt_bitwise_or?: (ctx: Gt_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.gt_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitGt_bitwise_or?: (ctx: Gt_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.notin_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterNotin_bitwise_or?: (ctx: Notin_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.notin_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitNotin_bitwise_or?: (ctx: Notin_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.in_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterIn_bitwise_or?: (ctx: In_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.in_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitIn_bitwise_or?: (ctx: In_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.isnot_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterIsnot_bitwise_or?: (ctx: Isnot_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.isnot_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitIsnot_bitwise_or?: (ctx: Isnot_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.is_bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterIs_bitwise_or?: (ctx: Is_bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.is_bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitIs_bitwise_or?: (ctx: Is_bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterBitwise_or?: (ctx: Bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitBitwise_or?: (ctx: Bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	enterBitwise_xor?: (ctx: Bitwise_xorContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	exitBitwise_xor?: (ctx: Bitwise_xorContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.bitwise_and`.
	 * @param ctx the parse tree
	 */
	enterBitwise_and?: (ctx: Bitwise_andContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.bitwise_and`.
	 * @param ctx the parse tree
	 */
	exitBitwise_and?: (ctx: Bitwise_andContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.shift_expr`.
	 * @param ctx the parse tree
	 */
	enterShift_expr?: (ctx: Shift_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.shift_expr`.
	 * @param ctx the parse tree
	 */
	exitShift_expr?: (ctx: Shift_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.sum`.
	 * @param ctx the parse tree
	 */
	enterSum?: (ctx: SumContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.sum`.
	 * @param ctx the parse tree
	 */
	exitSum?: (ctx: SumContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.power`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.power`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.await_primary`.
	 * @param ctx the parse tree
	 */
	enterAwait_primary?: (ctx: Await_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.await_primary`.
	 * @param ctx the parse tree
	 */
	exitAwait_primary?: (ctx: Await_primaryContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.slices`.
	 * @param ctx the parse tree
	 */
	enterSlices?: (ctx: SlicesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.slices`.
	 * @param ctx the parse tree
	 */
	exitSlices?: (ctx: SlicesContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.slice`.
	 * @param ctx the parse tree
	 */
	enterSlice?: (ctx: SliceContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.slice`.
	 * @param ctx the parse tree
	 */
	exitSlice?: (ctx: SliceContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambdef`.
	 * @param ctx the parse tree
	 */
	enterLambdef?: (ctx: LambdefContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambdef`.
	 * @param ctx the parse tree
	 */
	exitLambdef?: (ctx: LambdefContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_params`.
	 * @param ctx the parse tree
	 */
	enterLambda_params?: (ctx: Lambda_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_params`.
	 * @param ctx the parse tree
	 */
	exitLambda_params?: (ctx: Lambda_paramsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_parameters`.
	 * @param ctx the parse tree
	 */
	enterLambda_parameters?: (ctx: Lambda_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_parameters`.
	 * @param ctx the parse tree
	 */
	exitLambda_parameters?: (ctx: Lambda_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_slash_no_default`.
	 * @param ctx the parse tree
	 */
	enterLambda_slash_no_default?: (ctx: Lambda_slash_no_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_slash_no_default`.
	 * @param ctx the parse tree
	 */
	exitLambda_slash_no_default?: (ctx: Lambda_slash_no_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_slash_with_default`.
	 * @param ctx the parse tree
	 */
	enterLambda_slash_with_default?: (ctx: Lambda_slash_with_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_slash_with_default`.
	 * @param ctx the parse tree
	 */
	exitLambda_slash_with_default?: (ctx: Lambda_slash_with_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_star_etc`.
	 * @param ctx the parse tree
	 */
	enterLambda_star_etc?: (ctx: Lambda_star_etcContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_star_etc`.
	 * @param ctx the parse tree
	 */
	exitLambda_star_etc?: (ctx: Lambda_star_etcContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_kwds`.
	 * @param ctx the parse tree
	 */
	enterLambda_kwds?: (ctx: Lambda_kwdsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_kwds`.
	 * @param ctx the parse tree
	 */
	exitLambda_kwds?: (ctx: Lambda_kwdsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_param_no_default`.
	 * @param ctx the parse tree
	 */
	enterLambda_param_no_default?: (ctx: Lambda_param_no_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_param_no_default`.
	 * @param ctx the parse tree
	 */
	exitLambda_param_no_default?: (ctx: Lambda_param_no_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_param_with_default`.
	 * @param ctx the parse tree
	 */
	enterLambda_param_with_default?: (ctx: Lambda_param_with_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_param_with_default`.
	 * @param ctx the parse tree
	 */
	exitLambda_param_with_default?: (ctx: Lambda_param_with_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_param_maybe_default`.
	 * @param ctx the parse tree
	 */
	enterLambda_param_maybe_default?: (ctx: Lambda_param_maybe_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_param_maybe_default`.
	 * @param ctx the parse tree
	 */
	exitLambda_param_maybe_default?: (ctx: Lambda_param_maybe_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.lambda_param`.
	 * @param ctx the parse tree
	 */
	enterLambda_param?: (ctx: Lambda_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.lambda_param`.
	 * @param ctx the parse tree
	 */
	exitLambda_param?: (ctx: Lambda_paramContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring_middle`.
	 * @param ctx the parse tree
	 */
	enterFstring_middle?: (ctx: Fstring_middleContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring_middle`.
	 * @param ctx the parse tree
	 */
	exitFstring_middle?: (ctx: Fstring_middleContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring_replacement_field`.
	 * @param ctx the parse tree
	 */
	enterFstring_replacement_field?: (ctx: Fstring_replacement_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring_replacement_field`.
	 * @param ctx the parse tree
	 */
	exitFstring_replacement_field?: (ctx: Fstring_replacement_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring_conversion`.
	 * @param ctx the parse tree
	 */
	enterFstring_conversion?: (ctx: Fstring_conversionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring_conversion`.
	 * @param ctx the parse tree
	 */
	exitFstring_conversion?: (ctx: Fstring_conversionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring_full_format_spec`.
	 * @param ctx the parse tree
	 */
	enterFstring_full_format_spec?: (ctx: Fstring_full_format_specContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring_full_format_spec`.
	 * @param ctx the parse tree
	 */
	exitFstring_full_format_spec?: (ctx: Fstring_full_format_specContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring_format_spec`.
	 * @param ctx the parse tree
	 */
	enterFstring_format_spec?: (ctx: Fstring_format_specContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring_format_spec`.
	 * @param ctx the parse tree
	 */
	exitFstring_format_spec?: (ctx: Fstring_format_specContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.fstring`.
	 * @param ctx the parse tree
	 */
	enterFstring?: (ctx: FstringContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.fstring`.
	 * @param ctx the parse tree
	 */
	exitFstring?: (ctx: FstringContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.strings`.
	 * @param ctx the parse tree
	 */
	enterStrings?: (ctx: StringsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.strings`.
	 * @param ctx the parse tree
	 */
	exitStrings?: (ctx: StringsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.dict`.
	 * @param ctx the parse tree
	 */
	enterDict?: (ctx: DictContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dict`.
	 * @param ctx the parse tree
	 */
	exitDict?: (ctx: DictContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.double_starred_kvpairs`.
	 * @param ctx the parse tree
	 */
	enterDouble_starred_kvpairs?: (ctx: Double_starred_kvpairsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.double_starred_kvpairs`.
	 * @param ctx the parse tree
	 */
	exitDouble_starred_kvpairs?: (ctx: Double_starred_kvpairsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.double_starred_kvpair`.
	 * @param ctx the parse tree
	 */
	enterDouble_starred_kvpair?: (ctx: Double_starred_kvpairContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.double_starred_kvpair`.
	 * @param ctx the parse tree
	 */
	exitDouble_starred_kvpair?: (ctx: Double_starred_kvpairContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.kvpair`.
	 * @param ctx the parse tree
	 */
	enterKvpair?: (ctx: KvpairContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kvpair`.
	 * @param ctx the parse tree
	 */
	exitKvpair?: (ctx: KvpairContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.for_if_clauses`.
	 * @param ctx the parse tree
	 */
	enterFor_if_clauses?: (ctx: For_if_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.for_if_clauses`.
	 * @param ctx the parse tree
	 */
	exitFor_if_clauses?: (ctx: For_if_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.for_if_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_if_clause?: (ctx: For_if_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.for_if_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_if_clause?: (ctx: For_if_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.listcomp`.
	 * @param ctx the parse tree
	 */
	enterListcomp?: (ctx: ListcompContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.listcomp`.
	 * @param ctx the parse tree
	 */
	exitListcomp?: (ctx: ListcompContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.setcomp`.
	 * @param ctx the parse tree
	 */
	enterSetcomp?: (ctx: SetcompContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.setcomp`.
	 * @param ctx the parse tree
	 */
	exitSetcomp?: (ctx: SetcompContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.genexp`.
	 * @param ctx the parse tree
	 */
	enterGenexp?: (ctx: GenexpContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.genexp`.
	 * @param ctx the parse tree
	 */
	exitGenexp?: (ctx: GenexpContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.dictcomp`.
	 * @param ctx the parse tree
	 */
	enterDictcomp?: (ctx: DictcompContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dictcomp`.
	 * @param ctx the parse tree
	 */
	exitDictcomp?: (ctx: DictcompContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 */
	enterKwargs?: (ctx: KwargsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 */
	exitKwargs?: (ctx: KwargsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.starred_expression`.
	 * @param ctx the parse tree
	 */
	enterStarred_expression?: (ctx: Starred_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.starred_expression`.
	 * @param ctx the parse tree
	 */
	exitStarred_expression?: (ctx: Starred_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.kwarg_or_starred`.
	 * @param ctx the parse tree
	 */
	enterKwarg_or_starred?: (ctx: Kwarg_or_starredContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kwarg_or_starred`.
	 * @param ctx the parse tree
	 */
	exitKwarg_or_starred?: (ctx: Kwarg_or_starredContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.kwarg_or_double_starred`.
	 * @param ctx the parse tree
	 */
	enterKwarg_or_double_starred?: (ctx: Kwarg_or_double_starredContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kwarg_or_double_starred`.
	 * @param ctx the parse tree
	 */
	exitKwarg_or_double_starred?: (ctx: Kwarg_or_double_starredContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_targets`.
	 * @param ctx the parse tree
	 */
	enterStar_targets?: (ctx: Star_targetsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_targets`.
	 * @param ctx the parse tree
	 */
	exitStar_targets?: (ctx: Star_targetsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_targets_list_seq`.
	 * @param ctx the parse tree
	 */
	enterStar_targets_list_seq?: (ctx: Star_targets_list_seqContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_targets_list_seq`.
	 * @param ctx the parse tree
	 */
	exitStar_targets_list_seq?: (ctx: Star_targets_list_seqContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_targets_tuple_seq`.
	 * @param ctx the parse tree
	 */
	enterStar_targets_tuple_seq?: (ctx: Star_targets_tuple_seqContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_targets_tuple_seq`.
	 * @param ctx the parse tree
	 */
	exitStar_targets_tuple_seq?: (ctx: Star_targets_tuple_seqContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_target`.
	 * @param ctx the parse tree
	 */
	enterStar_target?: (ctx: Star_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_target`.
	 * @param ctx the parse tree
	 */
	exitStar_target?: (ctx: Star_targetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.target_with_star_atom`.
	 * @param ctx the parse tree
	 */
	enterTarget_with_star_atom?: (ctx: Target_with_star_atomContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.target_with_star_atom`.
	 * @param ctx the parse tree
	 */
	exitTarget_with_star_atom?: (ctx: Target_with_star_atomContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.star_atom`.
	 * @param ctx the parse tree
	 */
	enterStar_atom?: (ctx: Star_atomContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_atom`.
	 * @param ctx the parse tree
	 */
	exitStar_atom?: (ctx: Star_atomContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.single_target`.
	 * @param ctx the parse tree
	 */
	enterSingle_target?: (ctx: Single_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.single_target`.
	 * @param ctx the parse tree
	 */
	exitSingle_target?: (ctx: Single_targetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.single_subscript_attribute_target`.
	 * @param ctx the parse tree
	 */
	enterSingle_subscript_attribute_target?: (ctx: Single_subscript_attribute_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.single_subscript_attribute_target`.
	 * @param ctx the parse tree
	 */
	exitSingle_subscript_attribute_target?: (ctx: Single_subscript_attribute_targetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.t_primary`.
	 * @param ctx the parse tree
	 */
	enterT_primary?: (ctx: T_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.t_primary`.
	 * @param ctx the parse tree
	 */
	exitT_primary?: (ctx: T_primaryContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.del_targets`.
	 * @param ctx the parse tree
	 */
	enterDel_targets?: (ctx: Del_targetsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.del_targets`.
	 * @param ctx the parse tree
	 */
	exitDel_targets?: (ctx: Del_targetsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.del_target`.
	 * @param ctx the parse tree
	 */
	enterDel_target?: (ctx: Del_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.del_target`.
	 * @param ctx the parse tree
	 */
	exitDel_target?: (ctx: Del_targetContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.del_t_atom`.
	 * @param ctx the parse tree
	 */
	enterDel_t_atom?: (ctx: Del_t_atomContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.del_t_atom`.
	 * @param ctx the parse tree
	 */
	exitDel_t_atom?: (ctx: Del_t_atomContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.type_expressions`.
	 * @param ctx the parse tree
	 */
	enterType_expressions?: (ctx: Type_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.type_expressions`.
	 * @param ctx the parse tree
	 */
	exitType_expressions?: (ctx: Type_expressionsContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.name_except_underscore`.
	 * @param ctx the parse tree
	 */
	enterName_except_underscore?: (ctx: Name_except_underscoreContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.name_except_underscore`.
	 * @param ctx the parse tree
	 */
	exitName_except_underscore?: (ctx: Name_except_underscoreContext) => void;
	/**
	 * Enter a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;
}

