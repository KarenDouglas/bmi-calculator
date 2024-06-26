import React from 'react';
import { fireEvent, getAllByLabelText, render, screen} from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';

//test Imperial and Metric radio buttons
// test for all the relevant elements are present
describe('test that all visible aspects of the BMI Component are rendered after loaded for the Imperial system form', () => {

test('when imperial input is selected,all elements of imperial form are present, metric inputs are not present',() => {
    // renders BMI Component
    render(<BmiCalcComponent />);

    const imperialOption = screen.getByRole('radio', {name: "Imperial"});    
    const metricOption = screen.getByRole('radio', {name: "Metric"});    
    let heightKg = screen.queryByLabelText('height-kg');
    let weightKg = screen.queryByLabelText('weight-kg');
    let heightFt = screen.queryByLabelText("height-feet");   
    let heightIn = screen.queryByLabelText("height-inch");  
    let weightSt = screen.queryByLabelText("weight-stone");   
    let weightLbs = screen.queryByLabelText("weight-pounds");
    
    expect(imperialOption.checked).toBeFalsy();
    expect(metricOption.checked).toBeTruthy();
    expect(heightKg).not.toBeNull();
    expect(weightKg).not.toBeNull();
    expect(heightIn).toBeNull();
    expect(heightFt).toBeNull();
    expect(weightSt).toBeNull();
    expect(weightLbs).toBeNull();
    

    fireEvent.click(imperialOption)
    // reAccessing elements
    heightKg = screen.queryByLabelText('height-kg');
    weightKg = screen.queryByLabelText('weight-kg');
    heightFt = screen.queryByLabelText("height-feet");   
    heightIn = screen.queryByLabelText("height-inch");  
    weightSt = screen.queryByLabelText("weight-stone");   
    weightLbs = screen.queryByLabelText("weight-pounds");
    const resultsEl = screen.queryByTestId("results")

    expect(imperialOption.checked).toBeTruthy();
    expect(metricOption.checked).toBeFalsy();
    expect(resultsEl).toBeNull();
    expect(heightKg).toBeNull();
    expect(weightKg).toBeNull();
    expect(heightFt).not.toBeNull();
    expect(heightIn).not.toBeNull();
    expect(weightSt).not.toBeNull();
    expect(weightLbs).not.toBeNull();
});

test("when user clicks on imperial or metric radio options, the bmi calculator resetsd", ()=> {
render(<BmiCalcComponent/>)
const heightKg = screen.queryByLabelText('height-kg');
const weightKg = screen.queryByLabelText('weight-kg');
const imperialOption = screen.getByLabelText('Imperial');

fireEvent.change(heightKg, {target: {value: 185}});
fireEvent.change(weightKg, {target: {value: 80}});
fireEvent.click(imperialOption);
const resultsEl = screen.queryByTestId('results')
const resultsHeader = screen.getByRole('heading', {name: "Results header"})
const resultParagraph = screen.getByText(`Enter our height and weight and you'll see your BMI result here`)

expect(resultsEl).toBeNull();
expect(resultsHeader.innerHTML).toMatch('Welcome!');
expect(resultParagraph.innerHTML).toMatch(`Enter our height and weight and you'll see your BMI result here`);   
})

test("")

    
});
