import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formatedExpensesTotal = numeral(expensesTotal).format("($0,0)");
  return (
    <div>
      <h1>
        viewing {expenseCount} {expenseWord} tottalling {formatedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
