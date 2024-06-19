import React, {useState} from "react";
import logo from "../assets/logo.svg"

function BmiCalcComponent() {
    const [resultsHeaderAriaLabel, setResultsHeaderAriaLabel] = useState('Welcome header')
  
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
                <input type="radio" id="metric" checked/>
                <label htmlFor="imperial">Imperial</label>
                <form>
                <input type="radio" id="imperial" aria-labelledby="imperial" />
                <label htmlFor="height">Height</label>
                <input type="text" id="height" />
                <label htmlFor="weight">Weight</label>
                <input type="text" id="weight" />

                </form>
            </form>
            <section>
                <h3 aria-label="Results header">Welcome!</h3>
                <p  data-testid="results">25.8</p>
                <p data-testid="results-description">Enter our height and weight nd you'll see your BMI result here</p>

            </section>
       </main>
      </>
    )
  }
  
  export default BmiCalcComponent