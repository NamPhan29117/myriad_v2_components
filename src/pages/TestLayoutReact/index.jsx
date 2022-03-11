import React from 'react'
import './style.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'


export default function Index() {
  return (
    <div className="v-scroll-auto flex flex-grow relative region-content" data-renderedregion="content" role="main">
        <div className="dashboard-view">
            <div class="absolute-fill bolt-page v-scroll-auto flex-column bolt-page-white">
                <div class="dashboard-content flex-grow flex-row scroll-hidden">
                    {/* PHAN TASK */}
                    <div className="primary-content flex-grow flex-column scroll-hidden">
                        <div className="flex-grow flex-column scroll-hidden">
                            <div className="scroll-auto flex-grow flex-column">
                                <div className="devops-dashboard-grid flex-grow editable" style={{minWidth:"350px"}}>
                                    <div className="react-grid-layout" style={{minWidth:"350px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PHAN WIDGET */}
                    <div className="dashboards-widget-inline-catalog flex-column flex-noshrink scroll-hidden"></div>
                </div>
            </div>
        </div>    
    </div>
  )
}
