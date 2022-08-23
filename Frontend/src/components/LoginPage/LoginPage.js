import { React, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import "./LoginPage.css";
import { UserActions } from "store/actions/UserActions";
import Logo from "../../assets/logo.png";
import LoginPageSideBackground from "../../assets/login-page-side-background.png";
import {
  faUser,
  faLock
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const login = UserActions.login;

const LoginPage = ({login, isAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  //const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  

  const checkUsername = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(username)) {
      setInvalidUsername("Username must not contain special characters");
    } else if (username === "") {
      setInvalidUsername("Username must not be empty");
    } else {
      setInvalidUsername(false);
    }
  };

  const checkPassword = () => {
    if (password === "") {
      setInvalidPassword("Password must not be empty");
    } else {
      setInvalidPassword(false);
    }
  };

  const submitLoginForm = () => {
    checkPassword(password);
    checkUsername(username);
    
    const { from } = location.state || { from: { pathname: "/dashboard" } };
    dispatch(UserActions.login(username, password, from));

    history.push("/dashboard/");
    
  };

  return (
    <>
        <div className="login-page-wrapper">
          <div className="l-p-header-wrapper">
            <img className="h-logo" src={Logo} alt=""/>
            <div className="h-text">Patient Clever</div>
          </div>
          <div className="login-wrapper">
            <div className="login-container">
              <div className="login-content">
                <div className="l-main-text">A member of Patient Clever?</div>
                <div className="l-sub-text">
                  Sign in to start managing your patient profiles
                </div>
                <div className="l-username-wrapper">
                  <div className="l-u-text">Username</div>
                  <FontAwesomeIcon className="l-u-icon" icon={faUser} />
                  <input
                    className={`l-u-input ${
                      invalidUsername === false
                        ? "l-u-input-valid"
                        : "l-u-input-invalid"
                    }`}
                    value={username}
                    onChange={(e) => {setUsername(e.target.value);}}
                    onBlur={(e) => checkUsername(e.target.value)}
                    type="text"
                    placeholder="Type your username"
                    maxLength={50}
                  />
                  {invalidUsername && (
                      <div className="l-u-invalid">{invalidUsername}</div>
                  )}
                </div>
                <div className="l-password-wrapper">
                  <div className="l-p-text">Password</div>
                  <FontAwesomeIcon className="l-p-icon" icon={faLock} />
                  <input
                    className={`l-p-input ${
                      invalidPassword === false
                        ? "l-p-input-valid"
                        : "l-p-input-invalid"
                    }`}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);}}
                    onBlur={(e) => checkPassword(e.target.value)}
                    type="password"
                    placeholder="Type your password"
                    maxLength={50}
                    onKeyPress={(e)=> {if(e.key === 'Enter'){submitLoginForm()}}
                    }
                  />
                  {invalidPassword && (
                      <div className="l-p-invalid">{invalidPassword}</div>
                  )}
                </div>
                <button className="l-login-button" onClick={submitLoginForm} disabled={invalidPassword || invalidUsername ? true : false}>
                  Sign in
                </button>
              </div>
            </div>
            <img className="l-side-background" src={LoginPageSideBackground} alt=""/>
          </div>
        </div>
    </>
  );
};

export default LoginPage;