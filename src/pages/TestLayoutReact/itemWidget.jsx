import React from 'react'

export default function ItemWidget(props) {
    const {itemWidget} = props
  return (
    <div className='wrap-widget'>
        {/* <span onClick={()=>{
        // showModal()
        // setItemResize(item.i)
        }}>config</span>
        <span
        className="remove"
        // onClick={()=>onRemoveItem(item.i)}
        >
        x
        </span>
        <span>{itemWidget.i}</span> */}
        <div className='widget-header'></div>
        <div className='widget-body'></div>
    </div>
  )
}
