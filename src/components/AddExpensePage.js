import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
   return (
      <div>
         <h1>Add Expense</h1>
         <ExpenseForm onSubmit={(expense) => {
            // props.dispatch(addExpense(expense));
            props.addExpense(expense);
            props.history.push('/');
         }} />
      </div>
   );
};

// Used for unit-TESTING
const mapDispatchToProps = (dispatch) => {
   return {
      addExpense: (expense) => {
         return dispatch(addExpense(expense));
      }
   }
};

const ConnectedAddExpensePage = connect(undefined, mapDispatchToProps)(AddExpensePage);

export default ConnectedAddExpensePage;