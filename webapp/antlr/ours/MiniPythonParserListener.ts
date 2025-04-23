// Generated from ours/MiniPythonParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./MiniPythonParser.js";
import { StmtContext } from "./MiniPythonParser.js";
import { If_stmtContext } from "./MiniPythonParser.js";
import { For_stmtContext } from "./MiniPythonParser.js";
import { While_stmtContext } from "./MiniPythonParser.js";
import { Return_stmtContext } from "./MiniPythonParser.js";
import { Break_stmtContext } from "./MiniPythonParser.js";
import { Continue_stmtContext } from "./MiniPythonParser.js";
import { FuncdefContext } from "./MiniPythonParser.js";
import { Print_stmtContext } from "./MiniPythonParser.js";
import { ParametersContext } from "./MiniPythonParser.js";
import { BlockContext } from "./MiniPythonParser.js";
import { Expr_stmtContext } from "./MiniPythonParser.js";
import { ExprContext } from "./MiniPythonParser.js";
import { BooleanContext } from "./MiniPythonParser.js";
import { ConditionContext } from "./MiniPythonParser.js";
import { And_conditionContext } from "./MiniPythonParser.js";
import { Not_conditionContext } from "./MiniPythonParser.js";
import { ComparisonContext } from "./MiniPythonParser.js";
import { Comparison_opContext } from "./MiniPythonParser.js";
import { AssignContext } from "./MiniPythonParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MiniPythonParser`.
 */
export default class MiniPythonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MiniPythonParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.break_stmt`.
	 * @param ctx the parse tree
	 */
	enterBreak_stmt?: (ctx: Break_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.break_stmt`.
	 * @param ctx the parse tree
	 */
	exitBreak_stmt?: (ctx: Break_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.continue_stmt`.
	 * @param ctx the parse tree
	 */
	enterContinue_stmt?: (ctx: Continue_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.continue_stmt`.
	 * @param ctx the parse tree
	 */
	exitContinue_stmt?: (ctx: Continue_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.funcdef`.
	 * @param ctx the parse tree
	 */
	enterFuncdef?: (ctx: FuncdefContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.funcdef`.
	 * @param ctx the parse tree
	 */
	exitFuncdef?: (ctx: FuncdefContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.print_stmt`.
	 * @param ctx the parse tree
	 */
	enterPrint_stmt?: (ctx: Print_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.print_stmt`.
	 * @param ctx the parse tree
	 */
	exitPrint_stmt?: (ctx: Print_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.and_condition`.
	 * @param ctx the parse tree
	 */
	enterAnd_condition?: (ctx: And_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.and_condition`.
	 * @param ctx the parse tree
	 */
	exitAnd_condition?: (ctx: And_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.not_condition`.
	 * @param ctx the parse tree
	 */
	enterNot_condition?: (ctx: Not_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.not_condition`.
	 * @param ctx the parse tree
	 */
	exitNot_condition?: (ctx: Not_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.comparison_op`.
	 * @param ctx the parse tree
	 */
	enterComparison_op?: (ctx: Comparison_opContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.comparison_op`.
	 * @param ctx the parse tree
	 */
	exitComparison_op?: (ctx: Comparison_opContext) => void;
	/**
	 * Enter a parse tree produced by `MiniPythonParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `MiniPythonParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;
}

