import React from "react";
import { Link } from "react-router-dom";
import ErrorHandler from "../error/ErrorHandler";

function Header(props) {
  const { errorHandler } = props;
  return (
    <div className="header d-flex justify-content-center py-2 shadow-sm">
      <ErrorHandler
        errorHandler={errorHandler || { hasError: false, message: "" }}
      />
      <Link to="/">
        <h5 className="font-weight-bold text-danger mx-3">Auth</h5>
      </Link>
      <div className="ml-auto d-flex">
       
          <React.Fragment>
            <Link to="./login">
              <button className="btn btn-danger btn-sm mx-2">Login</button>
            </Link>
            <Link to="./register">
              <button className="btn btn-danger btn-sm mr-5">Sign up</button>
            </Link>
          </React.Fragment>
        
        
      </div>
    </div>
  );
}



export default Header;
