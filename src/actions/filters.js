// SET TEXT FILTER
export const setTextFilter = (text = "") => {
   return {
      type: "SET_TEXT_FILTER",
      text: text
   };
};

// SORT BY
export const sortByAmount = () => {
   return {
      type: "SORT_BY_AMOUNT"
   }
};

export const sortByDate = () => {
   return {
      type: "SORT_BY_DATE"
   }
};

// Start/End Date -- [date === undefined equals date]
export const setStartDate = (date) => {
   return {
      type: "SET_START_DATE",
      startDate: date
   };
};

export const setEndDate = (date) => {
   return {
      type: "SET_END_DATE",
      endDate: date
   };
};