import React from 'react'
import CheckBoxGroup from "../../components/CheckboxGroup";
import CheckBoxGroupNotSearch from "../../components/CheckBoxGroupNotSearch";
import DialogErrorMessage from "../../components/DialogMessage/DialogErrorMessage";
import DialogInfoMessage from "../../components/DialogMessage/DialogInfoMessage";
import DialogWarningMessage from "../../components/DialogMessage/DialogWarningMessage";
import MultiChoice from "../../components/MultiChoice";
import RadioGroup from "../../components/RadioGroup/index";
import SingleChoice from "../../components/SingleChoice";

export default function DashBoard() {
    const listRadio = [
        { name: "English", value: "english" },
        { name: "Spanish", value: "spanish" },
        { name: "Vietnamese", value: "vietnamese" },
    ];
    const listCheckBox = [
        { name: "English", value: "english", checked: false },
        { name: "Spanish", value: "spanish", checked: false },
        { name: "Vietnamese", value: "vietnamese", checked: false },
    ];
    const actionProp = () =>{
      console.log("code here")
    }
  return (
    <div>
        <RadioGroup list={listRadio} />
        <CheckBoxGroup list={listCheckBox} />
        <CheckBoxGroupNotSearch list={listCheckBox} />
        <MultiChoice list={listCheckBox} />
        <SingleChoice list={listCheckBox} />

        {/* Dialog mess */}

        <DialogWarningMessage titleBody={false} onOke={actionProp}/>
        {/* <DialogInfoMessage titleBody={false} leftButton={false} /> */}
        {/* <DialogErrorMessage titleBody={false} /> */}
    </div>
  )
}
