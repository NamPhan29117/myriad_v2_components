import React from 'react'
import './style.scss'

export default function MenuHeader() {
  return (
    <div className="header-menu">
        <div className="header-menu__logo-right">
            <img src="/images/S2IX-logo.png" alt=""/>
        </div>
        <div className="header-menu__search-center">
            <form>
                <input placeholder="Search"/>
                <img src="images/search-icon.svg" alt=""/>
            </form>
        </div>
        <div className="header-menu__left">
            <div className="item-left">
                <img src="/images/email.svg" />
            </div>
            <div className="item-left">
                <img src="/images/pth-14.svg" />
            </div>
            <div className="item-left">
                <img src="/images/big-data.svg" />
            </div>
            <div className="item-avatar">
                <img src="/images/avatar-test.png" />
            </div>
        </div>
    </div>
  )
}
