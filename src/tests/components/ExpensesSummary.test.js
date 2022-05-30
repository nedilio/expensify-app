import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render expensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235}></ExpensesSummary>
  );
  expect(wrapper).toMatchSnapshot();
});
test("should render expensesSummary with multiple expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={2345355} />
  );
  expect(wrapper).toMatchSnapshot();
});
