import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         focused: null
      };
   }

   onDatesChange = ({ startDate, endDate }) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
   };

   onFocusChange = (focused) => {
      this.setState(() => {
         return {
            focused: focused
         };
      })
   };

   onTextChange = (e) => {   
      this.props.setTextFilter(e.target.value);
   };

   onSortChange = (e) => {
      if(e.target.value === 'date') {
         this.props.sortByDate();
      } else if(e.target.value === "amount") {
         this.props.sortByAmount();
      }
   };

   render() {
      return (
         <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />

            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
               <option value="date" >Date</option>
               <option value="amount">Amount</option>
            </select>

            <DateRangePicker 
               startDate={this.props.filters.startDate}
               endDate={this.props.filters.endDate}
               onDatesChange={this.onDatesChange}
               focusedInput={this.state.focused}
               onFocusChange={this.onFocusChange}
               startDateId={'start'}
               endDateId={'end'}
               numberOfMonths={1}
               isOutsideRange={() => false}
               showClearDates={true}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters
   };
};

const matchDispatchToProps = (dispatch) => {
   return {
      setTextFilter: (text) => {
         return dispatch(setTextFilter(text));
      },
      sortByDate: () => {
         return dispatch(sortByDate());
      },
      sortByAmount: () => {
         return dispatch(sortByAmount());
      },
      setStartDate: (startDate) => {
         return dispatch(setStartDate(startDate));
      },
      setEndDate: (endDate) => {
         return dispatch(setEndDate(endDate));
      }
   };
};

const ConnectedExpenseListFilters = connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;