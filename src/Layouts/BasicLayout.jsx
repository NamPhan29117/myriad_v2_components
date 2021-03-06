import React from 'react'
import Footer from '../components/Footer'
import MenuHeader from '../components/MenuHeader'
import Sidebar from '../components/Sidebar'
import { Link, Outlet } from 'react-router-dom'

export default function BasicLayout(props) {
  return (
    <div className="basic-layout">
        <MenuHeader/>
          <div className="container-layout">
            <Sidebar />
            <div className="main-content">
              {/* <Outlet /> */}
              {props.children}
            </div>
          </div>
        <Footer />
    </div>
  )
}
