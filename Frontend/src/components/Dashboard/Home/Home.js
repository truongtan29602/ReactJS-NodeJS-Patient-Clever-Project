import React from 'react'
import { withRouter } from 'react-router-dom';
import "./Home.css";
import Header from './Header/Header';
import KeyMetrics from './KeyMetrics/KeyMetrics';
import Statistic from './Statistic/Statistic';
import RecentPatients from './RecentPatients/RecentPatients';
import MyProfile from './MyProfile/MyProfile';
const Home = (props) => {
  return (
      <>
        <div className="home-wrapper">
          <div className="content-wrapper">
            <Header/>
            <KeyMetrics/>
            <Statistic/>
            <RecentPatients/>
          </div>
          <div className="my-profile-main-wrapper">
            <MyProfile/>
          </div>
        </div>
      </>
  )
}

export default withRouter(Home);