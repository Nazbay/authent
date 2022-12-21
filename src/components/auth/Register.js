import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { RegisterAuthAction } from "../../redux/actions/AuthAction";
import Header from "../layout/Header";

function Register(props) {
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const history = useHistory();

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
    <div>
      <Header errorHandler={errorHandler}></Header>
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Sign Up</h4>
            
             
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                register(userState, history, setErrorHandler);
              }}
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Name"
                      onChange={(event) => {
                        const name = event.target.value;
                        setUserstate({ ...userState, ...{ name } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Age</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Age"
                      onChange={(event) => {
                        const age = event.target.value;
                        setUserstate({ ...userState, ...{ age } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const email = event.target.value;
                    setUserstate({ ...userState, ...{ email } });
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
                    setUserstate({ ...userState, ...{ password } });
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
    register: (userState, history, setErrorHandler) => {
      dispatch(RegisterAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
