import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


// console.log(store.getState());
// store.subscribe(() => {
  //   const state = store.getState();
  //   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  //   console.log(visibleExpenses);
  // });
store.dispatch(addExpense({description: 'Water Bill', amount: 5000, createdAt: 0}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 7000, createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount: 288000, createdAt: 1653068354261}));
// store.dispatch(setTextFilter('bill'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// },3000);



const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));