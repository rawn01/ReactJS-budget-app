import moment from 'moment';

import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from '../../actions/filters';


test('set the text filter object with text value', () => {
   const action = setTextFilter('Rent');
   
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'Rent'
   });
});

test('set the text filter object with default text value', () => {
   const action = setTextFilter();

   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
   })
});

test('set the sort by to amount', () => {
   const action = sortByAmount();

   expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
   })
});

test('set the sort by to date', () => {
   const action = sortByDate();

   expect(action).toEqual({
      type: 'SORT_BY_DATE'
   })
});

test('should generate set start date', () => {
   const action = setStartDate(moment(0));

   expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
   });
});

test('should generate set end date', () => {
   const action = setEndDate(moment(0));

   expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
   });
});