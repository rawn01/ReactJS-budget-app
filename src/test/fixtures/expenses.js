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

export default expenses;