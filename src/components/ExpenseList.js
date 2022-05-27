import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>expense list component</h1>
    {props.expenses.map((expense, key) => (
      <ExpenseListItem {...expense} key={key}/>
    ))}
  </div>
);

const mapStateToProps = (state)=> {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
};

export default connect(mapStateToProps)(ExpenseList);
