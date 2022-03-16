import React,{useState} from 'react'
import './style.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import GridLayout from "react-grid-layout";
import { Modal } from 'antd';
import ItemWidget from './itemWidget';


export default function Index() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [itemResize, setItemResize] = useState(undefined);
    const data = [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 1, h: 1 },
        { i: "3", x: 2, y: 0, w: 1, h: 1 },
        { i: "4", x: 3, y: 0, w: 1, h: 1 },
        { i: "5", x: 0, y: 1, w: 1, h: 1 },
        { i: "6", x: 0, y: 1, w: 1, h: 1 },
        { i: "7", x: 0, y: 1, w: 1, h: 1 },
        { i: "8", x: 0, y: 1, w: 1, h: 1 },
        { i: "9", x: 0, y: 1, w: 1, h: 1 },
        { i: "10", x: 0, y: 1, w: 1, h: 1 },
        { i: "11", x: 0, y: 1, w: 1, h: 1 },
        { i: "12", x: 0, y: 1, w: 1, h: 1 },
        { i: "13", x: 0, y: 1, w: 2, h: 1 },
        { i: "14", x: 0, y: 1, w: 4, h: 1 }
      ];

    const [layout, setLayOut] = useState(data)  

    const onRemoveItem = (i) =>{
        const updateData =  layout.filter((item)=>item.i !== i)
        setLayOut(updateData)
    }

    const addItem = () =>{
        const newItem =  { i: "15", x: 0, y: 0, w: 1, h: 1 }
        setLayOut([...layout, newItem])
    }

    const showModal = () => {
        setIsModalVisible(true);
      };

      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const handleResize =() =>{
        if(itemResize && width !== "" & height !== ""){
            let letUpdateLayout =  layout.map((item)=>{
                if(item.i === itemResize){
                    return {
                        ...item,
                        w : +width,
                        h: +height
                    }
                }
                return item 
            })

            setLayOut(letUpdateLayout)
            setTimeout(()=>{
                setIsModalVisible(false)
            },0)
        }
      }

  return (
        <div className="v-scroll-auto flex flex-grow relative region-content" data-renderedregion="content" role="main">
            
            <div className="dashboard-view">
                <div class="absolute-fill bolt-page v-scroll-auto flex-column bolt-page-white">
                    <div class="dashboard-content flex-grow flex-row scroll-hidden">
                        {/* PHAN TASK */}
                        <div className="primary-content flex-grow flex-column scroll-hidden">
                            <div className="flex-grow flex-column scroll-hidden">
                                <div className="scroll-auto flex-grow flex-column">
                                    <div className="devops-dashboard-grid flex-grow editable">
                                        <GridLayout
                                            className="layout"
                                            layout={layout}
                                            cols={12}
                                            compactType="horizontal"
                                            rowHeight={160}
                                            width={2030}
                                            onLayoutChange={(layout) => console.log(layout)}
                                            isResizable={false}
                                        >
                                            {layout.map((item) => (
                                                <div key={item.i} className="widget-layout">
                                                    <ItemWidget itemWidget={item} /> 
                                                </div>
                                           
                                            ))}
                                        </GridLayout>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} onOk={handleResize}>
                            <input name={width} value={width} onChange={(e)=>setWidth(e.target.value)}/>     
                            <input name={height} value={height} onChange={(e)=>setHeight(e.target.value)}/>                    
                        </Modal>                       
                        {/* PHAN WIDGET */}
                        <div className="dashboards-widget-inline-catalog flex-column flex-noshrink scroll-hidden">
                            phan tab them
                        </div>
                    </div>
                </div>
            </div>    
        </div> 

  )
}


