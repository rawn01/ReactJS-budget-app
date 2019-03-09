import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
   return (
      <div>
         <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
         </Link>
         <h3>{props.amount}</h3>
         <h4>- {props.createdAt}</h4>
      </div>
   );
};

export default ExpenseListItem;