import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import moment from 'moment';

const filters = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

const altFilters = {
   text: 'ffe',
   sortBy: 'amount',
   startDate: moment(0),
   endDate:  moment(0).add(3, 'days'),
};

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
   setTextFilter = jest.fn();
   sortByDate = jest.fn();
   sortByAmount = jest.fn();
   setStartDate = jest.fn();
   setEndDate = jest.fn();
   wrapper = shallow(
      <ExpenseListFilters
         filters={filters}
         setTextFilter={setTextFilter}
         sortByAmount={sortByAmount}
         sortByDate={sortByDate}
         setStartDate={setStartDate}
         setEndDate={setEndDate}
      />
   );
})

test('should render expense list filters correctly', () => {
   expect(wrapper).toMatchSnapshot();
});


test('should render expense list filters with alt data correctly', () => {
   wrapper.setProps({
      filters: altFilters
   });
   expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
   const value = 'lla';
   wrapper.find('input').simulate('change', {
      target: {
         value: value
      }
   });

   expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


test('should sort by date', () => {
   wrapper.setProps({
      filters: altFilters
   });

   const value = "date";

   wrapper.find('select').simulate('change', {
      target: {
         value: value
      }
   });

   expect(sortByDate).toHaveBeenCalled();
});


test('should sort by amount', () => {
    const value = "amount";

   wrapper.find('select').simulate('change', {
      target: {
         value: value
      }
   });

   expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date change', () => {
   const startDate = new moment(0).add(4, 'years');
   const endDate = new moment(0).add(8, 'years');

   wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });

   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle date focus change', () => {
   const focused = 'endDate';
   wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);

   expect(wrapper.state('focused')).toBe(focused);
});