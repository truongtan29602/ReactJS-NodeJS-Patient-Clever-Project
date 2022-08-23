import axios from "axios";
import { UserConstants } from "store/actions/UserConstants";

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const UserReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserConstants.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case UserConstants.REGISTER_SUCCESS:
    case UserConstants.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case UserConstants.ACCOUNT_DELETED:
    case UserConstants.AUTH_ERROR:
    case UserConstants.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
};

export default UserReducers;
