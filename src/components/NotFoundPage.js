import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   return (
      <div>
         <p>ERROR 404 ! PAGE NOT FOUND - <Link to="/">Go home</Link></p>
      </div>
   );   
};

export default NotFoundPage;