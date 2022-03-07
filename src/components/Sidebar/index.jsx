import React,{useState} from 'react'
import './style.scss'
import { Menu } from "antd";
const { SubMenu } = Menu;

const rootSubmenuKeys = ["Activities", "People", "Visualise"];

export default function Sidebar() {
  const [openKeys, setOpenKeys] = useState(["Activities"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    console.log(latestOpenKey)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div style={{width:"219px", height:"100vh"}} className="wrap-sidebar">
      <h1 className='app-title-s2ix'>Speech To Text</h1>
      <Menu
      className="sidebar"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 219 }}
      >
        <SubMenu key="Activities" icon={<img className='icon-sidebar' src='/images/big-data.svg' alt=''/>} title="Activities">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="People" icon={<img className='icon-sidebar' src='/images/email.svg' alt=''/>}  title="People">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="Visualise" icon={<img className='icon-sidebar' src='/images/pth-14.svg' alt=''/>}  title="Visualise">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    
  )
}
