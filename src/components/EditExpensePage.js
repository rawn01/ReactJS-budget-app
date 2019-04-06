import React from 'react';
import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditPage = (props) => {
   return (
      <div>
         <ExpenseForm expense={props.expense} onSubmit={(expense) => {
            props.startEditExpense(props.expense.id, expense);
            props.history.push('/');
         }} />
         <button onClick={() => {
            props.startRemoveExpense({ id: props.expense.id });
            props.history.push('/');
         }}>Remove</button>
      </div>
   );   
};

const mapStateToProps = (state, props) => {
   return {
      expense: state.expenses.find((expense) => {
         return props.match.params.id === expense.id;
      })
   }
};

// Used for TESTING
const mapDispatchToProps = (dispatch) => {
   return {
      startEditExpense: (id, expense) => {
         return dispatch(startEditExpense(id, expense));
      },
      startRemoveExpense: (data) => {
         return dispatch(startRemoveExpense(data));
      }
   };
};

const ConnectedEditPage = connect(mapStateToProps, mapDispatchToProps)(EditPage);

export default ConnectedEditPage;