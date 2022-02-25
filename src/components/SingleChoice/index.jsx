import React,{useState} from 'react'
import './style.scss'

export default function SingleChoice({list}) {
  const [listValue, setListValue] = useState(list)
  const [checked, setChecked] = useState(list[0].value)

  const onChangeChecked = (e) =>{
      setChecked(e.target.value)
  }

  console.log(checked)

  return (
    <div className="single-choice" style={{margin:"auto", width:"150px",marginTop:"20px"}}>
        {
            listValue.map((item)=>{
                return <label className="wraper-radio" key={item.value}>{item.name}
                    <input type="radio" checked={item.value === checked} name="radio" value={item.value} onChange={onChangeChecked}/>
                    <span className="checkmark"></span>
                </label>
            })
        }

    </div>
  )
}
