import React, {useEffect, useState} from "react";
import logo from "../assets/logo.svg"


function BmiDescription({wClass, maxWeight, minWeight}) {
  return(
    <>
    <section>
      <p data-testid="results-description-full">Your BMI suggests you're <span data-testid ="weight-classification">{wClass}</span>. Your ideal weight is between <span data-testid="min-weight-range">{minWeight}</span>kgs~<span data-testid="max-weight-range">{maxWeight}</span>kgs</p>
    </section>
    </>
  )
}


function BmiCalcComponent() {
  
  const METRIC = "METRIC";
  const IMPERIAL = "IMPERIAL";
  const minHealthyBMI = 18.5;
  const maxHealthyBMI = 24.9;
  const [heightKgInputValue, setHeightKgInputValue] = useState('');
  const [weightKgInputValue, setWeightKgInputValue] = useState('');
  const [resultsHeader, setResultsHeader] = useState('Welcome!');
  const [showResultsInfo, setShowResultsInfo] = useState(false);
  const [bmiResults, setBmiresults] = useState('');
  const [weightClass, setWeightClass] = useState('');
  const [minHealthyWeight, setMinHealthyWeight] = useState('');
  const [maxHealthyWeight, setMaxHealthyWeight] = useState('');

  const [selectedMeasurement, setSelectedMeasurement] = useState(METRIC)

  // calculates BMI based on heigh(cm) and weight (kg)
  const bmiCalculatorMetric = (heightCm, weight) => {
      const heightInMeters = heightCm / 100
      // BMI = weight (kg) / (height (m))^2
      const bmi = weight / (heightInMeters * heightInMeters)
      const roundedUpBMI = Math.ceil((bmi.toFixed(2) * 10)) / 10
      return roundedUpBMI;
  };

  // determines whether weight if overweight/ underweight or heathly weight
  const getWeightClass = (bmi) => {
    //if bmi is <18.5 || > 24.9 weight class is unhealthy
    // else healthy weight
    if(bmi < minHealthyBMI || bmi > maxHealthyBMI){
      
      setWeightClass("an unhealthy weight")
    }else{
      setWeightClass("a healthy weight");
    }
    return;
  };

  // generates the minimum healthy weight range based on hieght and minimun BMI
  const getMinHealthyWeight = (heightCm) => {
    const heightInMeters = heightCm / 100
    // Minimum Healthy Weight (kg) = BMI_min * height²
    const results = minHealthyBMI * heightInMeters *heightInMeters;   
    setMinHealthyWeight(results.toFixed(1));        
    return;
  };
  
  const getMaxHealthyWeight = (heightCm) => {
    // generates the maximum healthy weight range based on hieght and maximun BMI
    const heightInMeters = heightCm / 100
        // Maximum Healthy Weight (kg) = BMI_max * height²
        const results = maxHealthyBMI * heightInMeters *heightInMeters;   
        setMaxHealthyWeight(results.toFixed(1));        
        return;
  }
  // resets form info
  const resetFormValues = () => {
    setHeightKgInputValue('');
    setWeightKgInputValue(""); 
    setBmiresults("");
    setWeightClass("");
    setMinHealthyWeight("");
    setMaxHealthyWeight("");
    setResultsHeader("Welcome!");
    setShowResultsInfo(false);

  };
  // gets height values from user's inputs
  const handleHeightChange = (e) => {
    setHeightKgInputValue(parseFloat(e.target.value))
  };

  // gets weight values from user's inputs
  const handleWeightChange = (e) => {
    setWeightKgInputValue(parseFloat(e.target.value))
  };

  const handleMeasurementChange = (state) => {
    console.log(state)
    setSelectedMeasurement(state)
    resetFormValues()
  }

  // handles the state of the BMI results and info for the BMI calculator form
  useEffect(() => {
    if(heightKgInputValue && weightKgInputValue){
      const results=  bmiCalculatorMetric(parseFloat(heightKgInputValue), parseFloat(weightKgInputValue))
      
      setBmiresults(results)
      setResultsHeader('Your BMI is...')
      setShowResultsInfo(true);
      getWeightClass(results)
      getMaxHealthyWeight(heightKgInputValue);
      getMinHealthyWeight(heightKgInputValue)
      };
  },[heightKgInputValue,weightKgInputValue]);
  // handles metric/imperial toggle state


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
            {/* FORM SECTION */}
            <form data-testid="measurment-form">
                <h3 aria-label="Enter your details below">Enter your details below</h3>
                <label htmlFor="metric" >Metric</label>
                <input 
                type="radio" 
                id="metric"
                name="measurementOptions" 
                checked= {selectedMeasurement === "METRIC"}
                onChange={()=> handleMeasurementChange(METRIC)}             
                />
                <label htmlFor="imperial">Imperial</label>
                <input 
                type="radio" 
                id="imperial" 
                name="measurementOptions"
                checked= {selectedMeasurement === "IMPERIAL"}
                onChange={()=> handleMeasurementChange(IMPERIAL)}                              
                />
                <label>Height</label>

                {selectedMeasurement === METRIC &&<input 
                type="number" 
                id="height" 
                placeholder='0'
                aria-label="height-kg"
                value={heightKgInputValue}
                onChange={handleHeightChange}
                />}
                {selectedMeasurement === IMPERIAL &&
                <input
                type="number"
                aria-label="height-feet"                
                />
                }
                {selectedMeasurement === IMPERIAL &&
                <input 
                type="number"
                aria-label="height-inch"
                />
                }
                <label htmlFor="weight" >Weight</label>
                {selectedMeasurement === "METRIC" &&
                <input 
                type="number" 
                id="weight" 
                placeholder='0'
                aria-label="weight-kg"
                value={weightKgInputValue}
                onChange={handleWeightChange}
                />
                }
                {selectedMeasurement === IMPERIAL &&
                <input
                type="numer"
                aria-label="weight-stone"
                />
                }
                {selectedMeasurement === IMPERIAL &&
                <input
                type="numer"
                aria-label="weight-pounds"
                />
                }
              
            </form>
            <section>
                <h3 aria-label="Results header">{resultsHeader}</h3>
             {  bmiResults && <p  data-testid="results">{bmiResults}</p>}
               
          
            {showResultsInfo ? (
              <BmiDescription
              wClass = {weightClass}
              maxWeight = {maxHealthyWeight}
              minWeight = {minHealthyWeight}
              />
            ) : (

              <p data-testid="results-description">Enter our height and weight and you'll see your BMI result here</p>
            )}


            </section>
       </main>
      </>
    )
  }
  
  export default BmiCalcComponent