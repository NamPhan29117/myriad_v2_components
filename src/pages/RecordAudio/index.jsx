import React from 'react'
import TabNavigate from '../../components/TabNavigate'
import './style.scss'

export default function RecordAudio() {
  return (
    <div className="record-audio">
        <h1 className="page-title-s2ix">Create New Record Audio</h1>
        <TabNavigate />
        <div className='wrap-item-function-small'>
          <div className="item-function-small">
            <span>Record New Audio</span>
            <img src="images/record-icon-small.svg" alt="" />
          </div>
        </div>

        <div className='recording'>
          <div className='title-box'>Recording in progress</div>
          <div className='wrap-file'>
            <span className='txt-1'>Filename : </span>
            <span className='file-name'>Audio_PT_EN.mp3</span>
          </div>
          <div className='audio-spectrum-and-time'>
            <div className="spectrum"></div>
            <span className='time-audio'>00:05:10</span>
          </div>
        </div>
        
    </div>
  )
}
