import React,{useState} from 'react'
import  './style.scss'

export default function MultiChoice({list}) {
  const [listValue, setListValue] = useState(list)

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
    <div className="multi-choice" style={{margin:"auto", width:"150px",marginTop:"20px"}}>
      {
        listValue.map((item)=>{
          return (
            <label className="wraper-checkbox" key={item.value}>{item.name}
              <input type="checkbox" checked={item.checked} name={item.name} value={item.value} onChange={onChangeValue}/>
              <span className="checkmark"></span>
          </label>
          )
        })
      }
    </div>
  )
}
