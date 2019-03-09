import moment from 'moment';

import filtersRedcuer from '../../reducers/filters';


test('should setup default filter values', () => {
   const state = filtersRedcuer(undefined, { type: '@@INIT' });
   expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
});


test('should set sort by to amount', () => {
   const state = filtersRedcuer(undefined, { type: 'SORT_BY_AMOUNT' });
   expect(state.sortBy).toBe('amount');
});


test('should set sort by date', () => {
   const defaultState = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
   };

   const state = filtersRedcuer(defaultState, { type: 'SORT_BY_DATE' });

   expect(state.sortBy).toBe('date');
})


test('should set text filter', () => {
   const action = { 
      type: 'SET_TEXT_FILTER',
      text: 'This is the text'
   }

   const state = filtersRedcuer(undefined, action);

   expect(state.text).toBe('This is the text');
});


test('should set the start date', () => {
   const action = {
      type: 'SET_START_DATE',
      startDate: moment()
   };

   const state = filtersRedcuer(undefined, action);

   expect(state.startDate).toEqual(action.startDate);
});


test('should set the end date', () => {
   const action = {
      type: 'SET_END_DATE',
      endDate: moment()
   };

   const state = filtersRedcuer(undefined, action);

   expect(state.endDate).toEqual(action.endDate);
});