import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


class ExpenseForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         description: props.expense ? props.expense.description : '',
         note: props.expense ? props.expense.note : '',
         amount: props.expense ? props.expense.amount.toString() : '',
         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
         focused: false,
         error: ''
      };
      // console.log("waka-waka", this.state);
   }

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => {
         return {
            description: description
         };
      });
   };

   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => {
         return {
            note: note
         };
      });
   };

   onAmountChange = (e) => {
      const amount = e.target.value;
      if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => {
            return {
               amount: amount
            }
         });
      }
   };

   onDateChange = (createdAt) => {
      if(createdAt) {
         this.setState(() => {
            return {
               createdAt: createdAt
            }
         });
      }
   };

   onFocusChange = ({ focused }) => {
      this.setState(() => {
         return {
            focused: focused
         };
      })
   };

   onFormSubmit = (e) => {
      e.preventDefault();

      if(!this.state.description || !this.state.amount) {
         // Set error state
         this.setState(() => {
            return {
               error: "Please provide description and amount"
            };
         })
      } else {
         // Clear the error
         this.setState(() => {
            return {
               error: ''
            }
         });
         
         this.props.onSubmit({
            desc: this.state.description,
            amount: parseFloat(this.state.amount),
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      }
   }

   render() {
      return (
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onFormSubmit}>
               <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
               <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
               <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.focused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} />
               <textarea placeholder="Add a note (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
               <button>Add Expense</button>
            </form>
         </div>
      );
   }
};

export default ExpenseForm;