import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default function TabNavigate() {
  return (
    <div className="tab-navigate">
      <Link className="tab-navigate__item" to="/myriad_v2_components/record-audio">
        <img src="images/big-data.svg" alt=""/>
        <span>Upload voice</span>
      </Link>
      <Link className="tab-navigate__item" to="/myriad_v2_components/record-audio">
        <img src="images/email.svg" alt=""/>
        <span>Upload image</span>
      </Link>
      <Link className="tab-navigate__item" to="/myriad_v2_components/record-audio">
        <img src="images/pth-14.svg" alt=""/>
        <span>Upload File</span>
      </Link>
    </div>
  )
}
