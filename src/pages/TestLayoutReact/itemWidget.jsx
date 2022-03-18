import React from "react";

export default function ItemWidget(props) {
  const { itemWidget, onDeleteWidget } = props;
  console.log(onDeleteWidget);
  return (
    <div className="wrap-widget">
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
      <div className="widget-header">
        <div className="left">Test Widget</div>
        <div className="right">
          <img alt="" src="images/setting-icon.svg" className="config-icon" />
          <img
            alt=""
            src="images/delete-icon.svg"
            className="delete-icon"
            onClick={() => alert("okkkkk")}
          />
        </div>
      </div>
      <div className="widget-body"></div>
    </div>
  );
}
