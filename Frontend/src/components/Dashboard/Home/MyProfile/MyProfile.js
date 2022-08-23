import React from 'react'
import "./MyProfile.css"
import MyAvatar from "../../../../assets/patient2.png"
import AvatarBackGround from "../../../../assets/profile-background.png"
import MyTeam from "./MyTeam/MyTeam"
import MyBalance from './MyBalance/MyBalance'

const MyProfileInfo={
  avatar: MyAvatar,
  title: "Dr.",
  name: "Curry",
  position: "General Practitioners",

}

const MyProfile = (props) => {
  return (
    <div className="my-profile-sub-wrapper">
        <div className="my-profile-info-wrapper">
          <img className="my-profile-info-background" src={AvatarBackGround}></img>
          <img className="my-profile-info-avatar" src={MyProfileInfo.avatar} />
          <div className="my-profile-info-name">{MyProfileInfo.title}{MyProfileInfo.name}</div>
          <p className="my-profile-info-position">{MyProfileInfo.position}</p>
        </div>
        <MyTeam/>
        <MyBalance/>
    </div>
  )
}

export default MyProfile