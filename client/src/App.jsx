import React from 'react';
import BmiCalcComponent from './components/BmiCalcComponent';
import BmiDefinitionComponent from './components/BmiDefinitionComponent';
import AdviceComponent from './components/AdviceComponent';
import LimitationsComponent from './components/LimitationsComponent';
import "../src/assets/css/resets.css";
import "../src/assets/css/app.css";
function App() {

  return (
    <>
      <BmiCalcComponent/>
      <BmiDefinitionComponent/>
      <AdviceComponent/>
      <LimitationsComponent/>
    </>
  )
}

export default App
