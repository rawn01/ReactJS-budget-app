import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expensesSummary with single expense', () => {
   const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={115} />);
   expect(wrapper).toMatchSnapshot();
});

test('should correctly render expensesSummary with multiple expense', () => {
   const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={1000} />);
   expect(wrapper).toMatchSnapshot();
});