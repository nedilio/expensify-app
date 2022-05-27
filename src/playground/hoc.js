import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. please dont share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <p>Hello here is the info Authenticated user</p>: <p>You must be authenticated to see the info bellow</p>}
      {props.isAuthenticated && <WrappedComponent {...props}/>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Tere are some details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Tere are some details"/>, document.getElementById('app'));