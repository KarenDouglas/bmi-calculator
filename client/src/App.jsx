import React from 'react';
import BmiCalcComponent from './components/BmiCalcComponent';
import BmiDefinitionComponent from './components/BmiDefinitionComponent';
import AdviceComponent from './components/AdviceComponent';
import LimitationsComponent from './components/LimitationsComponent';
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
