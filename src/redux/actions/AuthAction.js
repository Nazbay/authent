import axios from "axios";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (userState, history, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/signup", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data.message,
        });
        setErrorHandler({
          hasError: true,
          message: error.response.data.message,
        });
      }
    }
  };
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/signin", loginState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
      setErrorHandler({ hasError: true, message: error.response.data.message });
    }
  };
};


export {
  RegisterAuthAction,
  AuthActionType,
  LoginAuthAction,
};
