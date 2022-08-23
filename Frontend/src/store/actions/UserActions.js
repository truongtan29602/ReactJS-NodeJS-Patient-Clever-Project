import axios from "axios";
import { UserConstants } from "./UserConstants";
import { AlertActions } from "./AlertActions";

//Load User
export const loadUser = () => {
  return (dispatch) => {
    axios
      .get("/api/v1/auth")
      .then((res) =>
        dispatch({
          type: UserConstants.USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: UserConstants.AUTH_ERROR,
        });
      });
  };
};

//Login User
export const login = (username, password, from) => {
  return (dispatch) => {
    dispatch(request({ username }));
    axios
      .post("/api/v1/auth", {
        username: username,
        password: password,
      })
      .then((user) /*response*/ => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        dispatch(success(user));
        dispatch(loadUser());
        localStorage.setItem("token", user.data.token);
        console.log(user);
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(AlertActions.error(error.toString()));
        console.log(error);
      });
  };

  function request(user) {
    return { type: UserConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: UserConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: UserConstants.LOGIN_FAILURE, error };
  }
};

// Logout
export const logout = () => ({ type: UserConstants.LOGOUT });

export const UserActions = {
  login,
  loadUser,
  logout,
};
