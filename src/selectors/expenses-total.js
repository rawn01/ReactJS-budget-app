export default (expenses) => {
   const totalExpense = expenses.map((expense) => {   
      return expense.amount;
   });

   const total = totalExpense.reduce((acc, currentValue) => {
      return acc + currentValue;
   }, 0);

   return total;
};
