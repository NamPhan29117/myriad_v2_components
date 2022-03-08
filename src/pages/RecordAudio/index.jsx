import React from 'react'
import { Link } from 'react-router-dom'
import TabNavigate from '../../components/TabNavigate'
import './style.scss'

export default function RecordAudio() {
  return (
    <div className="record-audio">
        <h1 className="page-title-s2ix">Create New Record Audio</h1>
        <TabNavigate />
        <div className="record-audio-function">
          <span>Record New Audio</span>
          <img src="/images/record-icon-big.svg" alt="" />
        </div>
    </div>
  )
}
