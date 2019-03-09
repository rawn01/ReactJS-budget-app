import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
   console.log(props);
   
   return (
      <div>
         <h1>Info</h1>
         <p>The info is: {props.info}</p>
      </div>
   );
};

const withAdmin = (WrappedComponent) => {
   return (props) => {
      return (
         <div>
            {props.isAdmin && <p>Admin rights granted.</p>}
            <WrappedComponent {...props} />
         </div>
      );
   }
};

const withAuth = (WrappedComponent) => {
   return (props) => {
      return (
         <div>
            {props.isAuth ? <WrappedComponent {...props}/>: <p>Please login!</p>}
         </div>
      );
   }
};

const AdminInfo = withAdmin(Info);

const AuthInfo = withAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="wow!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="wow!" />, document.getElementById('app'));