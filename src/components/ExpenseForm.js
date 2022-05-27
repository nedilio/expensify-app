import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('Do MMM, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount.toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt): moment(),
      calendarFocused: false,
      error: false,
      edit: props.expense ? true : false
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState( () => ({description}));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState( () => ({amount}));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState( () => ({note}));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({createdAt}));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(()=>({calendarFocused: focused}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: true}));
    } else {
      this.setState(() => ({error: false}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    };
  };
  render () {
    return (
      <div>
        {this.state.error && <p>Please provide Description and amount</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Description" 
            autoFocus
            value = {this.state.description}
            onChange = {this.onDescriptionChange}
          />
          <input 
            type="text" 
            placeholder="Amount" 
            value = {this.state.amount}
            onChange = {this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused = {this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
          />
          <textarea 
            type="text" 
            placeholder="Note (optional)" 
            value = {this.state.note}
            onChange = {this.onNoteChange}

          />
          <button>{this.state.edit ? 'Edit' : 'Add'} Expense</button>
        </form>
      </div>
    );
  };
};