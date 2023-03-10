import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import Header from "../layout/Header";

function Login(props) {
  const { login } = props;

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  const [loginState, setLoginState] = useState({});
  const history = useHistory();
  return (
    <div>
      <Header errorHandler={errorHandler} />
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Login</h4>
             
              
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                login(loginState, history, setErrorHandler);
              }}
            >
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const email = event.target.value;
                    setLoginState({ ...loginState, ...{ email } });
                  }}
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({ ...loginState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-danger btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history, setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
