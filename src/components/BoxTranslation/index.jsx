import React from 'react'
import './style.scss'

export default function BoxTranslation(props) {
  const {title} = props
  return (
    <div className="box-translation">
        <div className="box-translation__header">
            <span className="section-title-s2ix">{title}</span>
            <div className="box-translation__search">
                <input placeholder="Search"/>
                <img alt='' src="images/search-icon.svg"/>
            </div>
        </div>
        <div className="box-translation__body">
            <div className="main-text-s2ix">
                <span>
                    Eles vão nos abordar. Tragam armas. Esconda-se como refém. … 
                </span>
                <p>
                    [unclear] ... [questionable part: I don't know where my pineapple.]
                </p>
            </div>
        </div>
    </div>
  )
}
