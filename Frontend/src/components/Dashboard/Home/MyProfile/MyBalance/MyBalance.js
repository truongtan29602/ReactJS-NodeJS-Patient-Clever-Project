import React from 'react'
import "./MyBalance.css"
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IncomeIcon from "../../../../../assets/income.png"

const MyBalance = () => {
  return (
    <div className="my-balance-wrapper">
      <div className="my-balance-header">My balance</div>
      <div className="my-balance-box">
          <div className="my-balance-icon-wrapper">
          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
          </div>
          <div className="my-balance-info-wrapper">
                <div>Income</div>
                <b>$95000</b>
          </div>
          <img className="my-balance-income-icon" src={IncomeIcon}/>
      </div>
    </div>
  )
}

export default MyBalance