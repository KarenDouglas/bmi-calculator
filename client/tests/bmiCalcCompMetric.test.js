import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';





describe('test that all visible aspects of the BMI Component are rendered after loaded for the Metric system form', () => {


    test('renders main heading and paragraph content', () => {
        // renders BMI Component
        render(<BmiCalcComponent />);

        // Elements to be tested
         const heading = screen.getByRole('heading', {name: 'Body Mass Index Calculator'});
         const paragraph = screen.getByText('Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.')
     
         // testing that elements and correct content is rendered
         expect(heading).toBeDefined();
         expect(heading.innerHTML).toMatch('Body Mass Index Calculator');
         expect(paragraph).toBeDefined();
    });

    test('renders form content and inputs', () => {
        // elements to be tested
        // renders BMI Component
        render(<BmiCalcComponent />);
        const form = screen.getByTestId('measurment-form')
        const formHeading = screen.getByRole('heading', {name: "Enter your details below"})
        const metricRadioOption = screen.getByRole('radio',{name: 'Metric'});
        const imperialOption = screen.getByRole('radio', {name: 'Imperial'});
        const heightInput = screen.getByLabelText('Height');
        const weightInput = screen.getByLabelText('Weight');
        const resultsHeading = screen.getByRole('heading', {name: 'Results header'});
        const resultParagraph = screen.getByText(`Enter our height and weight and you'll see your BMI result here`);
        
        // testing all element in the form and content is rendered
        expect(form).toBeDefined();
        expect(formHeading).toBeDefined();
        expect(formHeading.innerHTML).toMatch('Enter your details below');
        expect(metricRadioOption).toBeDefined();
        expect(metricRadioOption.checked).toBeTruthy();
        expect(imperialOption).toBeDefined();
        expect(imperialOption.checked).toBeFalsy();
        expect(heightInput).toBeDefined();
        expect(weightInput).toBeDefined();
        expect(resultsHeading).toBeDefined();
        expect(resultsHeading.innerHTML).toMatch('Welcome!');
        expect(resultParagraph).toBeDefined();
        expect(resultParagraph.innerHTML).toMatch(`Enter our height and weight and you'll see your BMI result here`);     
    });
    test('should return BMI calculation using metric system', async()=> {
        //-------- BMI CALCULATIONS NOTES------------
        
        //-----  HEALTHY BMI RANGE IS 18.5 kg/m² to 24.9 kg/m² -------
        
        //----- BMI CALCULATIONS------
        // Height in meters (m): 165 cm / 100 cm/m = 1.65 m
        // BMI Calculation:
        // BMI = weight (kg) / (height (m))^2
        // BMI = 50 kg / (1.65 m)^2 = 18.4 (rounded to two decimal places)
        //-----END BMI CALCULATIONS END------
        
        //------ GETTING MAX & MIN HEALTHY WEIGHT RANGE ----
        // Maximum Healthy Weight (kg) = BMI_max * height²        
        // Maximum Healthy Weight (kg) = 24.9 kg/m² * (1.7 m)² ≈ 77.3 kg
        // Minimum Healthy Weight (kg) = BMI_min * height²
        // Minimum Healthy Weight (kg) = 18.5 kg/m² * (1.7 m)² ≈ 58.1 kg
        //-----END GETTING MAX & MIN HEALTHY WEIGHT RANGE END------
        
        //--------END BMI CALCULATIONS NOTES END------------
        // results decription should show more info
        // test if classification is correct
        
        // renders BMI Component
        render(<BmiCalcComponent />);
        // Elements
        const heightInput = screen.getByLabelText('Height');
        const weightInput = screen.getByLabelText('Weight');
        const resultsHeading = screen.getByRole('heading', {name: 'Results header'});
        const HEALTHY_WEIGHT = "a healthy weight";
        const UNHEALTHY_WEIGHT = "an unhealty weight";
        
        
        expect(screen.queryByTestId('results')).toBeNull();
        // submits height and weight inputs
        fireEvent.change(heightInput, {target: {value: 185}});
        fireEvent.change(weightInput, {target: {value: 80}});
        
        const resultParagraphFull = screen.getByTestId('results-description-full');
        const weightClassSpan = screen.getByTestId('weight-classification');
        const minWeightSpan = screen.getByTestId('min-weight-range');
        const maxWeightSpan = screen.getByTestId('max-weight-range');
        
        expect(heightInput.value).toBe('185');
        expect(weightInput.value).toBe('80');
        expect(parseFloat(screen.getByTestId('results').innerHTML)).toBeCloseTo(23.4)
        
        expect(resultsHeading.innerHTML).toMatch('Your BMI is...');
        expect(resultParagraphFull.textContent).toMatch(`Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs~85.2kgs`);
        expect(weightClassSpan.innerHTML).toMatch(HEALTHY_WEIGHT);
        expect(parseFloat(minWeightSpan.innerHTML)).toBe(63.3);
        expect(parseFloat(maxWeightSpan.innerHTML)).toBe(85.2);
    });
    
    
    
});
