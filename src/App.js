import React from 'react';
import './App.css';
import CheckBoxGroup from './components/CheckboxGroup';
import CheckBoxGroupNotSearch from './components/CheckBoxGroupNotSearch';
import DialogWarningMessage from './components/DialogWarningMessage';
import MultiChoice from './components/MultiChoice';
import RadioGroup from './components/RadioGroup/index';
import SingleChoice from './components/SingleChoice';

function App() {
  const listRadio = [{name:"English", value:"english"},{name:"Spanish", value:"spanish"},{name:"Vietnamese", value:"vietnamese"}]
  const listCheckBox = [{name:"English", value:"english",checked:false},{name:"Spanish", value:"spanish",checked:false},{name:"Vietnamese", value:"vietnamese",checked:false}]
  return (
    <div className="App">
      <RadioGroup list={listRadio}/>
      <CheckBoxGroup list={listCheckBox}/>
      <CheckBoxGroupNotSearch list={listCheckBox}/>
      <MultiChoice list={listCheckBox}/>
      <SingleChoice list={listCheckBox}/>
      <DialogWarningMessage />
    </div>
  );
}

export default App;
