import uuid from 'uuid';
import firebase from '../firebase/firebase';

// Add Expense action generator 
export const addExpense = (expense) => {
   return {
      type: 'ADD_EXPENSE',
      expense: expense
   }
};

export const startAddExpense = (expenseData = {}) => {
   return (dispatch) => {
      const {desc = "", note = "", amount = 0, createdAt = 0} = expenseData;

      const expense = {
         description: desc,
         note: note,
         amount: amount,
         createdAt: createdAt
      };

      return firebase.database().ref('expenses').push(expense).then((dataSnapShot) => {
         //console.log(typeof(dataSnapShot.key));
         dispatch(addExpense({
            id: dataSnapShot.key,
            ...expense
         }))
      });
   };
};


// Remove Expense action generator
export const removeExpense = ({ id } = {}) => {
   return {
      type: 'REMOVE_EXPENSE',
      id: id
   };
};

export const startRemoveExpense = ({ id } = {}) => {
   return (dispatch) => {
      return firebase.database().ref(`expenses/${id}`).remove().then(() => {
         dispatch(removeExpense({ id }));
      });
   };
};


// Edit Expense action generator
export const editExpense = (id, updates) => {
   return {
      type: 'EDIT_EXPENSE',
      id: id,
      updates: updates
   };
};

export const startEditExpense = (id, updates) => {
   return (dispatch) => {  
      return firebase.database().ref(`expenses/${id}`).update(updates).then(() => {
         dispatch(editExpense(id, updates));
      })
   };
}


// SET_EXPENSES
export const setExpenses = (expenses) => {
   return {
      type: 'SET_EXPENSES',
      expenses: expenses
   }
};

export const startSetExpenses = () => {
   return (dispatch) => {
      return firebase.database().ref('expenses').once('value').then((snapshot) => {
         const expenseArray = [];
         snapshot.forEach((childSnapshot) => {
            expenseArray.push({
               id: childSnapshot.key,
               ...childSnapshot.val()
            });
         });

         dispatch(setExpenses(expenseArray));
      });
   };
}