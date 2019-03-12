import selectTotalExpenses from '../../selectors/expenses-total';
import moment from 'moment';

const expenses = [
   {
      id: '1',
      description: 'Toffee',
      note: '',
      amount: 1,
      createdAt: 0
   },
   {
      id: '2',
      description: 'Chocolate',
      note: '',
      amount: 100,
      createdAt: moment(0).subtract(4, 'days').valueOf()
   },
   {
      id: '3',
      description: 'Vanilla',
      note: 'vanilla',
      amount: 102,
      createdAt: moment(0).add(4, 'days').valueOf()
   }
];

test('should return 0 if no expenses', () => {
   const res = selectTotalExpenses([]);
   expect(res).toBe(0);
});

test('should correctly add up single expense', () => {
   const res = selectTotalExpenses([expenses[0]]);
   expect(res).toBe(1);
});

test('should correctly add up multiple expense', () => {
   const res = selectTotalExpenses(expenses);
   expect(res).toBe(203);
});