import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// ***************** ACTION GENERATORS *****************

// ======= Expense Action =======

// Add Expense action generator 
const addExpense = ({desc = "", note = "", amount = 0, createdAt = 0} = {}) => {
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
const removeExpense = ({ id }) => {
   return {
      type: 'REMOVE_EXPENSE',
      id: id
   };
};

// Edit Expense action generator

const editExpense = (id, updates) => {
   return {
      type: 'EDIT_EXPENSE',
      id: id,
      updates: updates
   }
};


// ---------------------------


// ======= Filters Action =======

// SET TEXT FILTER
const setTextFilter = (text = "") => {
   console.log(text);
   
   return {
      type: "SET_TEXT_FILTER",
      text: text
   };
};

// SORT BY
const sortByAmount = () => {
   return {
      type: "SORT_BY_AMOUNT"
   }
};

const sortByDate = () => {
   return {
      type: "SORT_BY_DATE"
   }
};

// Start/End Date -- [date === undefined equals date]
const setStartDate = (date) => {
   return {
      type: "SET_START_DATE",
      startDate: date
   };
};

const setEndDate = (date) => {
   return {
      type: "SET_END_DATE",
      endDate: date
   };
};

// --------------------------------------------------------


// ***************** REDUCERS *****************

// ======= Expense Reducer =======
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch(action.type) {
      case 'ADD_EXPENSE':
         return [...state, action.expense];
      
      case 'REMOVE_EXPENSE':        
         return state.filter((item) => {
            return item.id !== action.id;
         });
      
      case 'EDIT_EXPENSE':
         return state.map((item) => {
            if(action.id === item.id) {
               return {
                  ...item,
                  ...action.updates
               }
            } else {
               return item;
            }
         });

      default:
         return state;
   }
};

// ======= Filter Reducer =======
const filtersReducerDefaultState = {
   text: "",
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch(action.type) {
      case 'SET_TEXT_FILTER':    
         return {
            ...state,
            text: action.text
         }
      
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }

      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'Date'
         }

      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         }

      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         }

      default:
         return state;
   }
};

// --------------------------------------------------------


// ***************** REDUX STORE *****************

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
   return expenses.filter((item) => {
      const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
      const textMatch =  item.description.toLowerCase().includes(text.toLowerCase());
      
      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {
      if(sortBy === "date") {
         return a.createdAt < b.createdAt ? 1 : -1;
      }
      if(sortBy === "amount") {
         return a.amount > b.amount ? -1 : 1;
      }
   });
};

// Redux Store
const store = createStore(combineReducers({
   expenses: expensesReducer,
   filters: filtersReducer
}));


store.subscribe(() => {  
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({ desc: 'rent', createdAt: 1000 }));
const exp = store.dispatch(addExpense({ desc:'tax', amount: 20000, createdAt: -1000 }));
// console.log('exp' , exp);
// store.dispatch(removeExpense({ id: exp.expense.id }));
// store.dispatch(editExpense(exp1.expense.id, { description: 'Editted', amount: 4000 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));



// demo ------
const demoState = {
   expenses: [{
      id: 'qeesdacx',
      description: 'Jan rent',
      note: 'This was the final payment for that address',
      amount: 15000,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount', // data or amount
      startDate: undefined,
      endDate: undefined
   }
};
