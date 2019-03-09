import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render the expense form', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
});

test('should render the expense form with expense data', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
   expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
   const value = 'New description';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(0).simulate('change', {
      target: {
         value: value
      }
   });
   expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
   const value = 'New note';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('textarea').at(0).simulate('change', {
      target: {
         value: value
      }
   });
   expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
   const value = '12.22';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: {
         value: value
      }
   });
   expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount if valid input', () => {
   const value = '12.222';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: {
         value: value
      }
   });
   expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });
   expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      desc: expenses[1].description,
      note: expenses[1].note,
      amount: expenses[1].amount,
      createdAt: expenses[1].createdAt
   });
});

test('should set new date on date change', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
   expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set focused on change', () => {
   const focused = true;
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: focused });
   expect(wrapper.state('focused')).toEqual(focused);
});