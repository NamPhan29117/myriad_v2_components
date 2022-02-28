

import React,{useState } from 'react'
import { Modal } from 'antd';
import './style.scss'

export default function DialogErrorMessage(props) {
  const {titleBody} = props
  const [visible, setVisible] = useState(true);
  return (
      <Modal
        onCancel={() => setVisible(false)}
        title={<img src="images/error-icon.svg" alt=''/>}
        centered
        visible={visible}
        width={404}
        closable={false}
        className="dialog-error"
        footer={[
          <button key="left" onClick={() => setVisible(false)} style={{marginRight:"10px"}} className='button' type='button'>Cancel</button>,
          <button key="right" className='button button--secondary'>Continue</button>
        ]}
      >
       {titleBody && <h3>{titleBody}</h3>}
       <p>How to hide the X button present at the top from the ant d modal, also how can I disable the behavior of closing </p>
      </Modal>
  )
}




