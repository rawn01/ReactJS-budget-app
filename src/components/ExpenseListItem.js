import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => {
   return (
      <div>
         <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
         </Link>
         <h3>&#x20B9; {props.amount}</h3>
         <h4>- {moment(props.createdAt).format('DD/MMMM/YYYY')}</h4>
      </div>
   );
};

export default ExpenseListItem;