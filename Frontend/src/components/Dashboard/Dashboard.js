import { Switch, Route, Router, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import React, { Fragment } from "react";
import NavBar from "../Common/NavBar/NavBar";
import "./Dashboard.css";
import Home from "./Home/Home.js";
import Schedule from "./Schedule/Schedule";
import User from "./User/User";
import PatientList from "./PatientList/PatientList";


const DEFAULT_PATH = "/dashboard";

const Dashboard = (props) => {
  const {match, location, history} = props
  
  useEffect(() => {
  }, [match]);

  return (
    <div className="dashboard-wrapper">
      <Fragment>
        <NavBar/>
        <div className="content-container">
          <div className="main-content-wrapper">
              <Switch>
              <Route exact path={match.path}>
              <Redirect to={"/dashboard/home"} />
            </Route>
                <Route exact path={`${match.path}/home`} component={Home} />
                <Route exact path={`${match.path}/schedule`} component={Schedule} />
                <Route exact path={`${match.path}/profile`} component={User} />
                <Route exact path={`${match.path}/patients`} component={PatientList} />
              </Switch>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default withRouter(Dashboard);
