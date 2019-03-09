import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
   return (
      <div>
         <h1>Expense List</h1>
         {
            props.expenses.length === 0 ? (
               <p>No expenses</p>
            ) : (
               props.expenses.map((item) => {
                  return <ExpenseListItem key={item.id} {...item} />
               })
            )
         }
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      expenses: selectExpenses(state.expenses, state.filters)
   };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);


export default ConnectedExpenseList;



// const ConnectedExpenseList = connect((state) => {
//    return {
//       expenses: state.expenses
//    };
// })(ExpenseList);


// export default ConnectedExpenseList;