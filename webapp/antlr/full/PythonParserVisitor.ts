// Generated from PythonParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./PythonParser.js";
import { InteractiveContext } from "./PythonParser.js";
import { EvalContext } from "./PythonParser.js";
import { Func_typeContext } from "./PythonParser.js";
import { StatementsContext } from "./PythonParser.js";
import { StatementContext } from "./PythonParser.js";
import { Statement_newlineContext } from "./PythonParser.js";
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
import { Func_type_commentContext } from "./PythonParser.js";
import { Name_except_underscoreContext } from "./PythonParser.js";
import { NameContext } from "./PythonParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PythonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class PythonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PythonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.interactive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteractive?: (ctx: InteractiveContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.eval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval?: (ctx: EvalContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.func_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_type?: (ctx: Func_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.statement_newline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_newline?: (ctx: Statement_newlineContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.simple_stmts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_stmts?: (ctx: Simple_stmtsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_stmt?: (ctx: Simple_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_stmt?: (ctx: Compound_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.annotated_rhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotated_rhs?: (ctx: Annotated_rhsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.augassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAugassign?: (ctx: AugassignContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.raise_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_stmt?: (ctx: Raise_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.global_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_stmt?: (ctx: Global_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.nonlocal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.del_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_stmt?: (ctx: Del_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.yield_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_stmt?: (ctx: Yield_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.assert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert_stmt?: (ctx: Assert_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_name?: (ctx: Import_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from?: (ctx: Import_fromContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_from_targets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from_targets?: (ctx: Import_from_targetsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_from_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from_as_names?: (ctx: Import_from_as_namesContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.import_from_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from_as_name?: (ctx: Import_from_as_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_names?: (ctx: Dotted_as_namesContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_name?: (ctx: Dotted_as_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_name?: (ctx: Dotted_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.decorators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorators?: (ctx: DecoratorsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.class_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_def?: (ctx: Class_defContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.class_def_raw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_def_raw?: (ctx: Class_def_rawContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.function_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_def?: (ctx: Function_defContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.function_def_raw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_def_raw?: (ctx: Function_def_rawContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.slash_no_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlash_no_default?: (ctx: Slash_no_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.slash_with_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlash_with_default?: (ctx: Slash_with_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_etc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_etc?: (ctx: Star_etcContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.kwds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwds?: (ctx: KwdsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param_no_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_no_default?: (ctx: Param_no_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param_no_default_star_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_no_default_star_annotation?: (ctx: Param_no_default_star_annotationContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param_with_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_with_default?: (ctx: Param_with_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param_maybe_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_maybe_default?: (ctx: Param_maybe_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.param_star_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_star_annotation?: (ctx: Param_star_annotationContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_annotation?: (ctx: Star_annotationContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.default_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_assignment?: (ctx: Default_assignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.elif_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_stmt?: (ctx: Elif_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.else_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_block?: (ctx: Else_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.with_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_stmt?: (ctx: With_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_item?: (ctx: With_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.try_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_stmt?: (ctx: Try_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.except_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcept_block?: (ctx: Except_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.except_star_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcept_star_block?: (ctx: Except_star_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.finally_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinally_block?: (ctx: Finally_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.match_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_stmt?: (ctx: Match_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.subject_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubject_expr?: (ctx: Subject_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.case_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_block?: (ctx: Case_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.guard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuard?: (ctx: GuardContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatterns?: (ctx: PatternsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.as_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAs_pattern?: (ctx: As_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.or_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_pattern?: (ctx: Or_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.closed_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosed_pattern?: (ctx: Closed_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.literal_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_pattern?: (ctx: Literal_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.literal_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_expr?: (ctx: Literal_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.complex_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplex_number?: (ctx: Complex_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.signed_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSigned_number?: (ctx: Signed_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.signed_real_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSigned_real_number?: (ctx: Signed_real_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.real_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_number?: (ctx: Real_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.imaginary_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImaginary_number?: (ctx: Imaginary_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.capture_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture_pattern?: (ctx: Capture_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.pattern_capture_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_capture_target?: (ctx: Pattern_capture_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.wildcard_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard_pattern?: (ctx: Wildcard_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.value_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_pattern?: (ctx: Value_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.name_or_attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_or_attr?: (ctx: Name_or_attrContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.group_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_pattern?: (ctx: Group_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.sequence_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence_pattern?: (ctx: Sequence_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.open_sequence_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_sequence_pattern?: (ctx: Open_sequence_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.maybe_sequence_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybe_sequence_pattern?: (ctx: Maybe_sequence_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.maybe_star_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybe_star_pattern?: (ctx: Maybe_star_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_pattern?: (ctx: Star_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.mapping_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapping_pattern?: (ctx: Mapping_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.items_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItems_pattern?: (ctx: Items_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.key_value_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey_value_pattern?: (ctx: Key_value_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.double_star_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_star_pattern?: (ctx: Double_star_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.class_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_pattern?: (ctx: Class_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.positional_patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositional_patterns?: (ctx: Positional_patternsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.keyword_patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword_patterns?: (ctx: Keyword_patternsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.keyword_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword_pattern?: (ctx: Keyword_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_alias?: (ctx: Type_aliasContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_params?: (ctx: Type_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_param_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param_seq?: (ctx: Type_param_seqContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param?: (ctx: Type_paramContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_param_bound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param_bound?: (ctx: Type_param_boundContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_param_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param_default?: (ctx: Type_param_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_param_starred_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param_starred_default?: (ctx: Type_param_starred_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_expr?: (ctx: Yield_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_expressions?: (ctx: Star_expressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_expression?: (ctx: Star_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_named_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_named_expressions?: (ctx: Star_named_expressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_named_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_named_expression?: (ctx: Star_named_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.assignment_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.named_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_expression?: (ctx: Named_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.disjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction?: (ctx: DisjunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.inversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInversion?: (ctx: InversionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.compare_op_bitwise_or_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompare_op_bitwise_or_pair?: (ctx: Compare_op_bitwise_or_pairContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.eq_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq_bitwise_or?: (ctx: Eq_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.noteq_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoteq_bitwise_or?: (ctx: Noteq_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lte_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLte_bitwise_or?: (ctx: Lte_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lt_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLt_bitwise_or?: (ctx: Lt_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.gte_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGte_bitwise_or?: (ctx: Gte_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.gt_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGt_bitwise_or?: (ctx: Gt_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.notin_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotin_bitwise_or?: (ctx: Notin_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.in_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_bitwise_or?: (ctx: In_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.isnot_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsnot_bitwise_or?: (ctx: Isnot_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.is_bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIs_bitwise_or?: (ctx: Is_bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_or?: (ctx: Bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.bitwise_xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_xor?: (ctx: Bitwise_xorContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.bitwise_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_and?: (ctx: Bitwise_andContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.shift_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expr?: (ctx: Shift_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.sum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSum?: (ctx: SumContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.power`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.await_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwait_primary?: (ctx: Await_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.slices`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlices?: (ctx: SlicesContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlice?: (ctx: SliceContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdef?: (ctx: LambdefContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_params?: (ctx: Lambda_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_parameters?: (ctx: Lambda_parametersContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_slash_no_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_slash_no_default?: (ctx: Lambda_slash_no_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_slash_with_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_slash_with_default?: (ctx: Lambda_slash_with_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_star_etc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_star_etc?: (ctx: Lambda_star_etcContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_kwds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_kwds?: (ctx: Lambda_kwdsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_param_no_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_param_no_default?: (ctx: Lambda_param_no_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_param_with_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_param_with_default?: (ctx: Lambda_param_with_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_param_maybe_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_param_maybe_default?: (ctx: Lambda_param_maybe_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.lambda_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_param?: (ctx: Lambda_paramContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring_middle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring_middle?: (ctx: Fstring_middleContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring_replacement_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring_replacement_field?: (ctx: Fstring_replacement_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring_conversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring_conversion?: (ctx: Fstring_conversionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring_full_format_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring_full_format_spec?: (ctx: Fstring_full_format_specContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring_format_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring_format_spec?: (ctx: Fstring_format_specContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.fstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFstring?: (ctx: FstringContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.strings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrings?: (ctx: StringsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.dict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDict?: (ctx: DictContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.double_starred_kvpairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_starred_kvpairs?: (ctx: Double_starred_kvpairsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.double_starred_kvpair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_starred_kvpair?: (ctx: Double_starred_kvpairContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.kvpair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKvpair?: (ctx: KvpairContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.for_if_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_if_clauses?: (ctx: For_if_clausesContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.for_if_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_if_clause?: (ctx: For_if_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.listcomp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListcomp?: (ctx: ListcompContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.setcomp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetcomp?: (ctx: SetcompContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.genexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenexp?: (ctx: GenexpContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.dictcomp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictcomp?: (ctx: DictcompContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwargs?: (ctx: KwargsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.starred_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarred_expression?: (ctx: Starred_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.kwarg_or_starred`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwarg_or_starred?: (ctx: Kwarg_or_starredContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.kwarg_or_double_starred`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwarg_or_double_starred?: (ctx: Kwarg_or_double_starredContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_targets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_targets?: (ctx: Star_targetsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_targets_list_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_targets_list_seq?: (ctx: Star_targets_list_seqContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_targets_tuple_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_targets_tuple_seq?: (ctx: Star_targets_tuple_seqContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_target?: (ctx: Star_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.target_with_star_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_with_star_atom?: (ctx: Target_with_star_atomContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.star_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_atom?: (ctx: Star_atomContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.single_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_target?: (ctx: Single_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.single_subscript_attribute_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_subscript_attribute_target?: (ctx: Single_subscript_attribute_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.t_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_primary?: (ctx: T_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.del_targets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_targets?: (ctx: Del_targetsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.del_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_target?: (ctx: Del_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.del_t_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_t_atom?: (ctx: Del_t_atomContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.type_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_expressions?: (ctx: Type_expressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.func_type_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_type_comment?: (ctx: Func_type_commentContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.name_except_underscore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_except_underscore?: (ctx: Name_except_underscoreContext) => Result;
	/**
	 * Visit a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;
}

