import uuid from 'uuid';

// Add Expense action generator 
export const addExpense = ({desc = "", note = "", amount = 0, createdAt = 0} = {}) => {
   return {
      type: 'ADD_EXPENSE',
      expense: {
         id: uuid(),
         description: desc,
         note: note,
         amount: amount,
         createdAt: createdAt
      }
   }
};

// Remove Expense action generator
export const removeExpense = ({ id }) => {
   return {
      type: 'REMOVE_EXPENSE',
      id: id
   };
};

// Edit Expense action generator
export const editExpense = (id, updates) => {
   return {
      type: 'EDIT_EXPENSE',
      id: id,
      updates: updates
   }
};
