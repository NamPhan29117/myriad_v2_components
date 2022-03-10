import { Tooltip } from 'antd'
import React from 'react'
import BoxTranslation from '../../components/BoxTranslation'
import CheckBoxGroup from '../../components/CheckboxGroup'
import CheckBoxGroupNotSearch from '../../components/CheckBoxGroupNotSearch'
import TabNavigate from '../../components/TabNavigate'
import './style.scss'

export default function RecordAudio() {

  const listCheckBox = [
    { name: "Group1", value: "group1", checked: false },
    { name: "Group2", value: "group2", checked: false },
    { name: "Group3", value: "group3", checked: false },
  ];
  const listTranscriptFormat = [
    { name: "TXT", value: "txt", checked: false },
    { name: "PDF", value: "pdf", checked: false },
    { name: "DOCX", value: "docx", checked: false },
  ];

  const listTranslationLanguage = [
    { name: "English", value: "english", checked: false },
    { name: "Spanish", value: "spanish", checked: false },
    { name: "Vietnamese", value: "vietnamese", checked: false },
  ]

  const listTranslateFormat = [
    { name: "TXT", value: "txt", checked: false },
    { name: "PDF", value: "pdf", checked: false },
    { name: "DOCX", value: "docx", checked: false },
  ];
  return (
    <div className="record-audio">
        <h1 className="page-title-s2ix">Create New Record Audio</h1>
        <TabNavigate />
        <div className='wrap-item-function-small'>
          <div className="item-function-small item-function-small--active">
            <span>Record New Audio</span>
            <img src="images/record-icon-small.svg" alt="" />
          </div>
        </div>
        <div className='body-content'>
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
            <button className="button button--error">Stop recording</button>

            <div className='threat-level'>
              <span className="title">Threat Level</span>
              <div className='threat-level-bar'>
                <Tooltip placement="topRight" title={<span>50%</span>}>
                  <div className='threat-level-bar--sub'></div>
                </Tooltip>
              </div>
              <span className='threat-list-title'>Threat Words Identifiel</span>
              <div className='threat-work-list'>
                <span>hostage</span>
                <span>guns</span>
              </div>
            </div>

            <div className='actions'>
              <span className="title">Action</span>
              <div className='list-actions'>
                <div className='wrap-item-action-small'>
                  <div className="item-function-small item-function-small--active">
                    <span>Creacte Alert</span>
                    <img src="images/alert-icon.svg" alt="" />
                  </div>
                </div>
                <div className='wrap-item-action-small'>
                  <div className="item-function-small item-function-small--deactive">
                    <span>Sent By Email</span>
                    <img src="images/email-icon-big.svg" alt="" />
                  </div>
                </div>
                <div className='wrap-item-action-small'>
                  <div className="item-function-small item-function-small--deactive">
                    <span>Sent Link</span>
                    <img src="images/sent-link-icon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Phan translate and transcpit */}
          <div>
            <BoxTranslation title="Transcipt in Progress"/>
            <BoxTranslation title="Translation in Progress"/>
          </div>
          {/* Phan setting */}
          <div className="box-setting">
            <span className="section-title-s2ix">Settings</span>
            <p className="title-box-setting caption-s2ix">Group</p>
            <CheckBoxGroupNotSearch list={listCheckBox}/>

            <p className="title-box-setting caption-s2ix">Transcript Format</p>
            <CheckBoxGroup list={listTranscriptFormat}/>

            <p className="title-box-setting caption-s2ix">Translation Target Language</p>
            <CheckBoxGroup list={listTranslationLanguage}/>

            <p className="title-box-setting caption-s2ix">Translation Format</p>
            <CheckBoxGroup list={listTranslateFormat}/>

            <p className="heading-s2ix title-security">Security</p>
            <button class="button button--secondary">Change Security Setting</button>
          </div>
        </div>
        
    </div>
  )
}
