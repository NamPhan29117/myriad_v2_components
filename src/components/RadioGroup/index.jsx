import React, {useState, useMemo, useEffect} from 'react'
// import { useForm } from "react-hook-form";
import './style.scss'

export default function RadioGroup({list}) {

  const [isShow, setIsShow] = useState(false)
  const [keysearch, setKeySearch] = useState("")
  const [checked, setChecked] = useState(list[0])
  const [listValue, setListValue] = useState(list)




  const renderHeader = useMemo(()=>{

    let itemChoice =  list.filter((item)=>{
        return item.value === checked.value
    })[0]
    return itemChoice.name

  },[checked,list])

  const onChangeValue = (e) =>{
      let checkedCurrent = list.filter((item)=>item.value === e.target.value)[0]
    setChecked(checkedCurrent)
  }

  useEffect(()=>{
      if(keysearch.trim() !== ""){
        let result = list.filter((item)=>item.name.toLowerCase().trim().indexOf(keysearch.toLowerCase().trim()) !== -1)
        setListValue(result)
      }else{
        setListValue(list)
      }
  },[keysearch,list])

  return (
    <div className="radio-group-container">
        <div className="radio-group">
            <div className="radio-group__header">
                <img src="images/radio-checked.svg" style={{width:"15px", height:"15px"}} alt=""/>
                <span>{renderHeader}</span>
                <img onClick={()=>setIsShow((state)=>!state)} src="images/expand-vertical.svg" alt='' style={{width: '10px', height: '11px', marginLeft:"auto"}}/>
            </div>
            {
                isShow && (
                    <div className="radio-group__body">
                        <div className="radio-group__search">
                            <input type="text" value={keysearch} name="keysearch" onChange={(e)=>setKeySearch(e.target.value)}/>
                            <img src="images/search-icon.svg" alt=''/>
                        </div>
                        <form>
                            {
                                listValue.map((item)=>{

                                    return (
                                        <label className="wraper-radio" key={item.value}>{item.name}
                                            <input type="radio" checked={item.value === checked.value} name="language" value={item.value} onChange={onChangeValue}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    )
                                    // return <div className="radio-group__item" key={item.name}>
                                    //     <input  type="radio" name="language" value={item.value} checked={checked === item.value} onChange={onChangeValue}/>
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
