import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <h1>Budget App</h1>
         <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink><br />
         <NavLink to="/help" activeClassName="is-active">Go to HELP page</NavLink><br />
         <NavLink to="/create" activeClassName="is-active">Go to CREATE page</NavLink>
      </header>
   );
};

export default Header;