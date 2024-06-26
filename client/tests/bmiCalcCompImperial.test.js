import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';

//test Imperial and Metric radio buttons
// test for all the relevant elements are present
describe('test that all visible aspects of the BMI Component are rendered after loaded for the Imperial system form', () => {

test('when imperial input is selected,all elements of imperial form are present, metric inputs are not present',() => {
    // renders BMI Component
    render(<BmiCalcComponent />);

    const imperialOption = screen.getByRole('radio', {name: "Imperial"})    
    const metricOption = screen.getByRole('radio', {name: "Metric"})    
    const heightKg = screen.queryByLabelText('hieght-kg')
    const weightKg = screen.queryByLabelText('weight-kg')
    const heightFt = screen.queryByLabelText("hieght-feet")   
    const heightIn = screen.queryByLabelText("hieght-inch")   
    const weightSt = screen.queryByLabelText("wieght-stone")   
    const weightLbs = screen.queryByLabelText("wieght-pounds")
    
    expect(imperialOption.checked).toBeFalsy();
    expect(metricOption.checked).toBeTruthy()
    expect(heightKg).toBeDefined()
    expect(weightKg).toBeDefined()
    expect(heightIn).toBeNull()
    expect(heightFt).toBeNull()
    expect(weightSt).toBeNull()
    expect(weightLbs).toBeNull()

    fireEvent.click(imperialOption)

    expect(imperialOption.checked).toBeTruthy();
    expect(metricOption.checked).toBeFalsy();
    expect(heightFt).toBeDefined();
    expect(heightIn).toBeDefined();
    expect(weightSt).toBeDefined();
    expect(weightLbs).toBeDefined();
    expect(heightKg).toBeNull()
    expect(weightKg).toBeNull()

})
    
});
