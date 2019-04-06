import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { startSetExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(<h2> Loading...</h2>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
   ReactDOM.render(jsx, document.getElementById('app'));
});



// import { addExpense, removeExpense, editExpense } from './actions/expenses';
// import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';

// console.log('-----------------');
// store.dispatch(addExpense({desc: 'Water bill', amount: 525}));
// store.dispatch(addExpense({desc: 'Gas bill', amount: 700, createdAt: 1000}));
// store.dispatch(addExpense({desc: 'Rent', amount: 1000, createdAt: 25}));

// console.log(store.getState());
// console.log('------------');

// const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);