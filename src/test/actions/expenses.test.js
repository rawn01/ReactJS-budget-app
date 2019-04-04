import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import firebase from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
   });
});

test('should setup edit expense action object with provided values', () => {
   const action = addExpense({
      id: '1',
      description: 'desc',
      note: 'note',
      amount: '111',
      createdAt: 14
   });

   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: '1',
         description: 'desc',
         note: 'note',
         amount: '111',
         createdAt: 14
      }
   });
});


test('should add expenses to database and store', (done) => {
   const store = createMockStore({});

   const expenseData = {
      desc: 'Car',
      amount: 500000,
      createdAt: 5000,
      note: 'LuL'
   };

   store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
            id: expect.any(String),
            description: 'Car',
            amount: 500000,
            createdAt: 5000,
            note: 'LuL'
         }
      });

      return firebase.database().ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual({
         description: 'Car',
         amount: 500000,
         createdAt: 5000,
         note: 'LuL'
      });
      done();
   });
});

test('should add expenses with default values to database and store', (done) => {
   const store = createMockStore({});

   store.dispatch(startAddExpense())
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ""
         }
      })
      done();
    });
});


// test('should setup edit expense action object with default values', () => {
//    const action = addExpense();

//    expect(action).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//          id: expect.any(String),
//          description: '',
//          note: '',
//          amount: 0,
//          createdAt: 0
//       }
//    });
// });