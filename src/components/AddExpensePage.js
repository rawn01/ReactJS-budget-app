import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
   return (
      <div>
         <h1>Add Expense</h1>
         <ExpenseForm onSubmit={(expense) => {
            // props.dispatch(addExpense(expense));
            props.startAddExpense(expense);
            props.history.push('/');
         }} />
      </div>
   );
};

// Used for Unit-TESTING
const mapDispatchToProps = (dispatch) => {
   return {
      startAddExpense: (expense) => {
         return dispatch(startAddExpense(expense));
      }
   }
};

const ConnectedAddExpensePage = connect(undefined, mapDispatchToProps)(AddExpensePage);

export default ConnectedAddExpensePage;