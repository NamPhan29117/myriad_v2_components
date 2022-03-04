import React from 'react'
import Footer from '../components/Footer'
import MenuHeader from '../components/MenuHeader'
import Sidebar from '../components/Sidebar'

export default function BasicLayout(props) {
  return (
    <div className="basic-layout">
        <MenuHeader/>
          <div className="container-layout">
            <Sidebar />
            <divc className="main-content">
              {props.children}
            </divc>
          </div>
        <Footer />
    </div>
  )
}
