import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { EditPage } from '../../components/EditExpensePage';

test('should render the edit expense page', () => {
   const startEditExpense = jest.fn();
   const startRemoveExpense = jest.fn();
   const history = {
      push: jest.fn()
   };
   const wrapper = shallow(
      <EditPage 
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         history={history}
         expense={expenses[0]}
      />
   );

   expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
   const startEditExpense = jest.fn();
   const startRemoveExpense = jest.fn();
   const history = {
      push: jest.fn()
   };
   const wrapper = shallow(
      <EditPage 
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         history={history}
         expense={expenses[2]}
      />
   );

   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle remove expense', () => {
   const startEditExpense = jest.fn();
   const startRemoveExpense = jest.fn();
   const history = {
      push: jest.fn()
   };
   const wrapper = shallow(
      <EditPage 
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         history={history}
         expense={expenses[0]}
      />
   );

   wrapper.find('button').prop('onClick')(expenses[0]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id: expenses[0].id
   });
});