import moment from 'moment';

// Get Visible Expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
   return expenses.filter((item) => {
      // const createdAtMoment = moment(item.createdAt);
      // console.log(createdAtMoment);
      // console.log(item.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(item.createdAt, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(item.createdAt, 'day') : true;
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

export default getVisibleExpenses;