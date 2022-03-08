import React from 'react'
import './style.scss'

export default function TabNavigate() {
  return (
    <div className="tab-navigate">
      <div className="tab-navigate__item">
        <img src="/images/big-data.svg" alt=""/>
        <span>Upload voice</span>
      </div>
      <div className="tab-navigate__item">
        <img src="/images/email.svg" alt=""/>
        <span>Upload image</span>
      </div>
      <div className="tab-navigate__item">
        <img src="/images/pth-14.svg" alt=""/>
        <span>Upload File</span>
      </div>
    </div>
  )
}
