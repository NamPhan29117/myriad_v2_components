import React, {useState, useEffect} from 'react'
// import { useForm } from "react-hook-form";
import '../CheckboxGroup/style.scss'

export default function CheckBoxGroupNotSearch({list}) {

  const [isShow, setIsShow] = useState(false)
  const [listValue, setListValue] = useState(list)
  

  // them value search co dieu kien de render , neu co value search uu tien 

  const onChangeValue = (e) =>{
    const result = listValue.map((item)=>{
        if(item.value === e.target.value){
            return {
                ...item,
                checked: !item.checked
            }
        }
        return item
    })
    setListValue(result)
  }



  return (
    <div className="checkbox-group-container">
        <div className="checkbox-group">
            <div className="checkbox-group__header">
                <img src="images/checkbox-checked.svg" style={{width:"15px", height:"15px"}}/>
                <span>{listValue[0].name}<span style={{marginLeft:"2px"}}>(default)</span></span>
                <img onClick={()=>setIsShow((state)=>!state)} src="images/expand-vertical.svg" style={{width: '10px', height: '11px', marginLeft:"auto"}}/>
            </div>
            {
                isShow && (
                    <div className="checkbox-group__body">
                       
                        <form>
                            {
                                listValue.map((item)=>{
                                    return (
                                        <label className="wraper-checkbox" key={item.value}>{item.name}
                                            <input type="checkbox" checked={item.checked} name={item.name} value={item.value} onChange={onChangeValue}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    )
                                    // return <div className="checkbox-group__item" key={item.name}>
                                    //     <input  type="checkbox" name={item.name} value={item.value} checked={item.checked} onChange={onChangeValue}/>
                                    //     <label>{item.name}</label>
                                    // </div>
                                })
                            }
                        </form>
                    </div>
                )
            }
            
        </div>
    </div>

  )
}
