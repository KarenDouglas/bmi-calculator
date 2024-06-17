import React from "react";
import logo from "../assets/logo.svg"

function BmiCalcComponent() {

  
    return (
      <>
       <main>
        <section>
            <img src={logo} alt="BMI Calculator Logo" />
            <figure aria-label="background image">
                <h1>Body Mass Index Calculator</h1>
                <p aria-label="Introduction to BMI Calculator">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </figure>
        </section>
       </main>
      </>
    )
  }
  
  export default BmiCalcComponent