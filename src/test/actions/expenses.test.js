import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
   const action = removeExpense({ id: '123' });

   expect(action).toEqual({
      id: '123',
      type: 'REMOVE_EXPENSE'
   });
});

test('should setup edit expense action object', () => {
   const action = editExpense('123', {
      description: 'description',
      note: 'note',
      amount: '1234',
      createdAt: 0
   });

   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123',
      updates: {
         description: 'description',
         note: 'note',
         amount: '1234',
         createdAt: 0
      }
   })
});

test('should setup edit expense action object with provided values', () => {
   const action = addExpense({
      desc: 'desc',
      note: 'note',
      amount: '111',
      createdAt: 14
   })

   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         description: 'desc',
         note: 'note',
         amount: '111',
         createdAt: 14
      }
   })
});

test('should setup edit expense action object with default values', () => {
   const action = addExpense();

   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         description: '',
         note: '',
         amount: 0,
         createdAt: 0
      }
   })
});