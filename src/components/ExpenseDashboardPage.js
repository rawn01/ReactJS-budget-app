import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
   return (
      <div>
         <p>This is from ExpenseDashboardPage!</p>
         <ExpenseListFilters />
         <ExpenseList />
      </div>
   );
};

export default ExpenseDashboardPage;