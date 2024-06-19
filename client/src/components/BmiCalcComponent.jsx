import React, {useState} from "react";
import logo from "../assets/logo.svg"

function BmiCalcComponent() {
  // create onchange event on inputs
  // calculate bmi
  // set function to dynamically change weight classification
  // create function to get min and max weight based on height

  const [heightInputValue, setHeightInputValue] = useState('');
  const [weightInputValue, setWeightInputValue] = useState('');
  const [resultsHeader, setResultsHeader] = useState('Welcome!');
  const [resultsDesc, setResultsDec] = useState(`Enter our height and weight and you'll see your BMI result here`);
  const [bmiResults, setBmiresults] = useState(0);
  const [weightClass, setWeightClass] = useState('');

  const handleHeightChange = (e) => {
    e.preventDefault();
    setHeightInputValue(e.target.value)
    console.log(e.target.value)

  }
  const handleWeightChange = (e) => {
    e.preventDefault();
    setWeightInputValue(e.target.value)
    console.log(e.target.value)

  }
    return (
      <>
       <main>
        <section>
            <img src={logo} alt="BMI Calculator Logo" />
            <figure aria-label="background image">
            </figure>
        </section>
        <section>
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </section>
            <form data-testid="measurment-form">
                <h3 aria-label="Enter your details below">Enter your details below</h3>
                <label htmlFor="metric" >Metric</label>
                <input type="radio" id="metric" defaultChecked
                />
                <label htmlFor="imperial">Imperial</label>
                <input type="radio" id="imperial" aria-labelledby="imperial" />
                <label htmlFor="height">Height</label>
                <input 
                type="number" 
                id="height" 
                placeholder='0'
                onChange={handleHeightChange}
                value={heightInputValue}
                />
                <label htmlFor="weight" >Weight</label>
                <input 
                type="number" 
                id="weight" 
                placeholder='0'
                value={weightInputValue}
                onChange={handleWeightChange}
                />
            </form>
            <section>
                <h3 aria-label="Results header">{resultsHeader}</h3>
                <p  data-testid="results">{bmiResults}</p>
                <p data-testid="results-description">{resultsDesc}</p>

            </section>
       </main>
      </>
    )
  }
  
  export default BmiCalcComponent