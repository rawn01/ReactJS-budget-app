import React from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditPage = (props) => {
   return (
      <div>
         <ExpenseForm expense={props.expense} onSubmit={(expense) => {
            props.editExpense(props.expense.id, expense);
            props.history.push('/');
         }} />
         <button onClick={() => {
            props.removeExpense({ id: props.expense.id });
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
      editExpense: (id, expense) => {
         return dispatch(editExpense(id, expense));
      },
      removeExpense: (data) => {
         return dispatch(removeExpense(data));
      }
   };
};

const ConnectedEditPage = connect(mapStateToProps, mapDispatchToProps)(EditPage);

export default ConnectedEditPage;