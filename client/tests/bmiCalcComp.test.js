import React from 'react';
import { render, screen } from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';


// renders BMI Component
render(<BmiCalcComponent />);



describe('test that all visible aspects of the BMI Component are rendered after loaded', () => {

    test('renders main heading and paragraph content', () => {
        // Elements to be tested
         const heading = screen.getByRole('heading', {name: 'Body Mass Index Calculator'});
         const paragraph = screen.getByRole('paragraph',{ name: "Introduction to BMI Calculator"})
     
         // testing that elements and correct content is rendered
         expect(heading).toBeDefined();
         expect(heading.innerHTML).toMatch('Body Mass Index Calculator');
         expect(paragraph).toBeDefined();
         expect(paragraph.innerHTML).toMatch('Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.');
     });
    
     test('renders content of form in its default state', () => {
        // elements to be tested
       const form = screen.getByRole('form',{name:'BMI Calculator Form'});
       const heading = screen.getByRole('heading', {name: "Enter your details below"})
       const metricRadioOption = screen.getByRole('radio',{name: 'Metric'});
       const imperialOption = screen.getByRole('radio', {name: 'Imperial'});
       const heightInput = screen.getByLabelText('Height');
       const weightInput = screen.getByLabelText('Weight');
       const resultsHeading = screen.getByRole('heading', {name: 'Results header'});
       const resultParagraph = screen.getByRole('paragraph', {name: 'Results description'});
       
       // testing all element in the form and content is rendered
       expect(form).toBeDefined();
       expect(heading).toBeDefined();
       expect(heading.innerHTML).toMatch('Enter your details below');
       expect(metricRadioOption).toBeDefined();
       expect(metricRadioOption.checked).toBeTruthy();
       expect(imperialOption).toBeDefined();
       expect(imperialOption.checked).toBeFalsy();
       expect(heightInput).toBeDefined();
       expect(heightInput.value).toBe(0)
       expect(weightInput).toBeDefined();
       expect(weightInput.value).toBe(0);
       expect(resultsHeading).toBeDefined();
       expect(resultsHeading.innerHTML).toMatch('Welcome!');
       expect(resultParagraph).toBeDefined();
       expect(resultParagraph).toMatch(`Enter our height and weight nd you'll see your BMI result here`);     
    });
    
    
});
