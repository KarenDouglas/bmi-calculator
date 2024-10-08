import React, {useEffect, useState} from "react";
import logo from "../assets/logo.svg"
import "../assets/css/bmiCalcStyles.css";
function BmiDescription({wClass, maxWeight, minWeight}) {
  return(
    <>
    <section className="text-white">
      <p data-testid="results-description-full" id="results-description">Your BMI suggests you're <span data-testid ="weight-classification">{wClass}</span>. Your ideal weight is between <span className="text-bold" data-testid="min-weight-range">{minWeight}</span>~<span className="text-bold"data-testid="max-weight-range">{maxWeight}</span></p>
    </section>
    </>
  )
}


function BmiCalcComponent() {
  
  const METRIC = "METRIC";
  const IMPERIAL = "IMPERIAL";
  const minHealthyBMI = 18.5;
  const maxHealthyBMI = 24.9;
  // Metric input Values
  const [heightKgInputValue, setHeightKgInputValue] = useState('');
  const [weightKgInputValue, setWeightKgInputValue] = useState('');
  //Imperial input Values
  const [heightFtInputValue, setHeightFtInputValue] = useState('');
  const [heightInInputValue, setHeightInInputValue] = useState('');
  const [weightLbsInputValue, setWeightLbsInputValue] = useState('');
  // BMI results section variables
  const [resultsHeader, setResultsHeader] = useState('Welcome!');
  const [showResultsInfo, setShowResultsInfo] = useState(false);
  const [bmiResults, setBmiresults] = useState('');
  const [weightClass, setWeightClass] = useState('');
  // healthy weight in kg range variablees
  const [minHealthyWeightKg, setMinHealthyWeightKg] = useState('');
  const [maxHealthyWeightKg, setMaxHealthyWeightKg] = useState('');
  const [healthyMinRangeString, setHealthyMinRangeString] = useState('');
  const [healthyMaxRangeString, setHealthyMaxRangeString] = useState('');
  // form measurement state variable
  const [selectedMeasurement, setSelectedMeasurement] = useState(METRIC)

  // calculates BMI based on heigh(cm) and weight (kg)
  const bmiCalculatorMetric = (heightCm, weight) => {
      const heightInMeters = heightCm / 100;
      // BMI = weight (kg) / (height (m))^2
      const bmi = weight / (heightInMeters * heightInMeters);
      const roundedUpBMI = Math.ceil((bmi.toFixed(2) * 10)) / 10;
      return roundedUpBMI;
  };
  // caculates BMI based on hieght (in) and weight(st)
  const bmiCalculatorImperial = (heightFt,hieghtIn,weightLbs) => {
    const convertedFtToIn = (heightFt * 12) + hieghtIn
    //bmi = (weight_in_lbs /height_in) X 703
    const bmiRaw = (weightLbs/Math.pow(convertedFtToIn,2)) *703
    return bmiRaw.toFixed(1)
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


  // generates the minimum healthy weight range based on hieght KG and minimun BMI
  const getMinHealthyWeightKg = (heightCm) => {
    if(selectedMeasurement === METRIC){
      const heightInMeters = heightCm / 100;
          // Minimum Healthy Weight (kg) = BMI_min * height²
          const results = minHealthyBMI * heightInMeters *heightInMeters;   
          setHealthyMinRangeString(`${results.toFixed(1)}kgs`)
          return;

    }
  };
  
  // generates the maximum healthy weight range based on hieght KG and maximun BMI
  const getMaxHealthyWeightKg = (heightCm) => {
    
    if(selectedMeasurement === METRIC){
      const heightInMeters = heightCm / 100;
      // Maximum Healthy Weight (kg) = BMI_max * height²
      const results = maxHealthyBMI * heightInMeters *heightInMeters;   
      setHealthyMaxRangeString(`${results.toFixed(1)}kgs`);        
      return;
      
    }
  }
  // generates the maximum healthy weight range based on hieght in Feet and inches and maximun BMI
//height_in_inches=(feet×12)+inches
// min_weight_lbs = 18.5 X (height_in_inches/39.37)^2
// max_weight_lbs = 24.9 X (height_in_inches/39.37)^2
// weight_in_stone = (weight_lbs/ 14)
// weight_remaining_lbs = weight_lbs % 14
const calculateWeightRangeFtIn = (feet,inches) => {
  
  const heightInInches = (feet* 12) +inches
  //calculates min and max weight in pounds
  // Convert height to meters
  const minWeightLbs = (minHealthyBMI * Math.pow(heightInInches,2))/703;
  const maxWeightLbs = (maxHealthyBMI * Math.pow(heightInInches,2)) / 703;
  console.log({minWeightLbs,maxWeightLbs})  
  setHealthyMinRangeString(`${Math.trunc(minWeightLbs)}lbs`);
  setHealthyMaxRangeString(`${Math.trunc(maxWeightLbs)}lbs`);
  return;
};

  // resets form info
  const resetFormValues = () => {
    setHeightKgInputValue('');
    setWeightKgInputValue(""); 
    setBmiresults("");
    setWeightClass("");
    setMinHealthyWeightKg("");
    setMaxHealthyWeightKg("");
    setResultsHeader("Welcome!");
    setShowResultsInfo(false);

  };

  // EVENT HANDLERS FOR METRIC FORM
  // gets height values from user's inputs
  const handleHeightKgChange = (e) => {
    setHeightKgInputValue(parseFloat(e.target.value));
  };

  // gets weight values from user's inputs
  const handleWeightKgChange = (e) => {
    setWeightKgInputValue(parseFloat(e.target.value));
  };
  // changes form between Metric and Imperial and resets input values
  const handleMeasurementChange = (state) => {
    setSelectedMeasurement(state);
    resetFormValues();
  };

  //EVENT HANDLERS FOR IMPERIAL FORM
  // get height in feet value from user's inputs
  const handleHeightFtChange = (e) => {
    setHeightFtInputValue(parseFloat(e.target.value));
  };
  //gets height in inches from user's inputs
  const handleHeightInChange = (e) => {
    setHeightInInputValue(parseFloat(e.target.value));    
  };
  
  //gets weight in pounds from user's inputs
  const handleWeightLbsChange = (e) => {
    setWeightLbsInputValue(parseFloat(e.target.value));
  };
  // handles the state of the BMI results and info for the BMI calculator form
  useEffect(() => {
    if(heightKgInputValue && weightKgInputValue){
      const results=  bmiCalculatorMetric(parseFloat(heightKgInputValue), parseFloat(weightKgInputValue));
      
      setBmiresults(results);
      setResultsHeader('Your BMI is...');
      setShowResultsInfo(true);
      getWeightClass(results)
      getMaxHealthyWeightKg(heightKgInputValue);
      getMinHealthyWeightKg(heightKgInputValue);
      };

      if(heightFtInputValue && heightInInputValue && weightLbsInputValue){
        const imperialResults = bmiCalculatorImperial(heightFtInputValue, heightInInputValue , weightLbsInputValue);
      setBmiresults(imperialResults);
      setResultsHeader('Your BMI is...');
      setShowResultsInfo(true);
      getWeightClass(imperialResults);
      calculateWeightRangeFtIn(heightFtInputValue,heightInInputValue);
      }
  },[heightKgInputValue,weightKgInputValue,heightFtInputValue,heightInInputValue, weightLbsInputValue]);
  // handles metric/imperial toggle state


    return (
      <>
        <figure id="blue-css-img" aria-label="background image"></figure>
        <picture id="logo">
              <img  src={logo} alt="BMI Calculator Logo" />
        </picture>
       <main>
        <section className="container">
          <header>
              <h1 aria-label="site-header">Body Mass Index Calculator</h1>
          </header>
            <p  id="pitch" className="color-gun">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </section>

        <section className="container card form-container">
            {/* FORM SECTION */}
            <form data-testid="measurment-form">
              <header>
                <h3 aria-label="Enter your details below" className="text-bold">Enter your details below</h3>
              </header>
              <div id="formOptions">
                <div className="formOption">
                <input 
                type="radio" 
                id="metric"
                name="measurementOptions" 
                checked= {selectedMeasurement === "METRIC"}
                onChange={()=> handleMeasurementChange(METRIC)}             
                />
                <label htmlFor="metric" >Metric</label>
                </div>
                <div className="formOption">
                <input 
                type="radio" 
                id="imperial" 
                name="measurementOptions"
                checked= {selectedMeasurement === "IMPERIAL"}
                onChange={()=> handleMeasurementChange(IMPERIAL)}                    
                />
                <label htmlFor="imperial">Imperial</label>
                </div>
              </div>

                {/* START OF METRIC FORM */}
                {selectedMeasurement === METRIC &&
                <section className="form-group">
                  <div className="form-input-group">
                    <label>Height</label>
                    <div className="input-container">
                      <input 
                      type="number" 
                      id="height" 
                      placeholder='0'
                      aria-label="height-kg"
                      value={heightKgInputValue}
                      onChange={handleHeightKgChange}
                      />
                      <span className="measurement">cm</span>                   
                    </div>
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="weight" >Weight</label>
                    <div className="input-container">
                      <input 
                      type="number" 
                      id="weight" 
                      placeholder='0'
                      aria-label="weight-kg"
                      value={weightKgInputValue}
                      onChange={handleWeightKgChange}
                      />
                      <span className="measurement">kg</span>
                    </div>
                  </div>
                </section>
                }
                {/* END OF METRIC FORM */}

                {/* START OF IMPERIAL FORM */}
                {selectedMeasurement === IMPERIAL &&
                <section className="form-group">
                  <div className="form-input-group">
                    <label>Height</label>

                    <div className="form-height-group">
                      <div className="input-container">
                        <input
                        type="number"
                        id="height-feet"
                        aria-label="height-feet" 
                        placeholder="0"
                        value={heightFtInputValue}
                        onChange={handleHeightFtChange}    
                        />
                        <span className="measurement">ft</span>
                      </div>
                      <div className="input-container">
                        <input 
                        type="number"
                        id="height-inch"
                        aria-label="height-inch"
                        placeholder="0"
                        value={heightInInputValue}
                        onChange={handleHeightInChange}
                        />
                        <span className="measurement">in</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-input-group">
                    <label>Weight</label>
                    <div className="input-container">
                      <input
                      type="number"
                      id="weight-pounds"
                      aria-label="weight-pounds"
                      placeholder="0"
                      value={weightLbsInputValue}
                      onChange={handleWeightLbsChange}
                      />
                        <span className="measurement">lbs</span>
                    </div>
                  </div>
                </section>
                }
              {/* END OF IMPERIAL FORM */}
            </form>
            <section id="results-section">

              <div id="results-header">
                <h3 aria-label="Results header" className={resultsHeader === "Welcome!"?"text-bold":""}>{resultsHeader}</h3>
                {  bmiResults && 
                <p className="text-bold"id="bmi-results" data-testid="results">{bmiResults}</p>
                }
              </div>
               
          
            {showResultsInfo ? (
              <BmiDescription
              wClass = {weightClass}
              maxWeight = {healthyMaxRangeString}
              minWeight = {healthyMinRangeString}
              />
            ) : (

              <p data-testid="results-description">Enter our height and weight and you'll see your BMI result here</p>
            )}


            </section>
        </section>
       </main>
      </>
    )
  }
  
  export default BmiCalcComponent