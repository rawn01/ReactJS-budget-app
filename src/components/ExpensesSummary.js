import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
   return (
      <div>
         <h2>Viewing {props.expenseCount} expense(s) -  &#x20B9; {props.expensesTotal} </h2>
      </div>
   );
};


const mapStateToProps = (state) => {
   const visibleExpenses = selectExpenses(state.expenses, state.filters);

   return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
   }
};

const connectExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export default connectExpensesSummary;