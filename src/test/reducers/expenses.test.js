import moment from 'moment';

import expensesRedcuer from '../../reducers/expenses';

const expenses = [
   {
      id: '1',
      description: 'Toffee',
      note: '',
      amount: 1,
      createdAt: 0
   },
   {
      id: '2',
      description: 'Chocolate',
      note: '',
      amount: 100,
      createdAt: moment(0).subtract(4, 'days').valueOf()
   },
   {
      id: '3',
      description: 'Vanilla',
      note: 'vanilla',
      amount: 102,
      createdAt: moment(0).add(4, 'days').valueOf()
   }
];

test('should set up default state', () => {
   const state = expensesRedcuer(undefined, { type: '@@INIT' });

   expect(state).toEqual([]);
});


test('should remove expense by ID', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[0].id
   };

   const state = expensesRedcuer(expenses, action);
   expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should NOT remove expense by ID', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
   };

   const state = expensesRedcuer(expenses, action);
   expect(state).toEqual(expenses);
});


test('should add an expense', () => {
   const action = {
      type: 'ADD_EXPENSE',
      expense: {
         id: 109,
         description: 'waka waka',
         note: '',
         amount: 100,
         createdAt: 0
      }
   };

   const state = expensesRedcuer(undefined, action);

   expect(state).toEqual([{
      id: expect.any(Number),
      description: 'waka waka',
      note: '',
      amount: 100,
      createdAt: 0
   }]);
});


test('should edit an expense', () => {
   const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
         description: 'updated description',
         note: 'updated note',
         amount: 555,
         createdAt: 4, 
      }
   };

   const state = expensesRedcuer(expenses, action);
   
   expect(state[1]).toEqual({
      id: expenses[1].id,
      description: 'updated description',
      note: 'updated note',
      amount: 555,
      createdAt: 4, 
   });
});


test('should NOT edit expense(if expense not found)', () => {
   const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
         description: 'updated description',
         note: 'updated note',
         amount: 555,
         createdAt: 4, 
      }
   };

   const state = expensesRedcuer(expenses, action);
   
   expect(state).toEqual([...expenses]);
});

test('should set expenses', () => {
   const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
   }

   const state = expensesRedcuer(expenses, action);

   expect(state).toEqual([expenses[1]]);
});