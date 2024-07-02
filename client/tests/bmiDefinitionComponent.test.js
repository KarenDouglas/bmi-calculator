import React from 'react';
import { render, screen } from '@testing-library/react';
import BmiDefinitionComponent from '../src/components/BmiDefinitionComponent';

test('when the page loads, revelant elements are visible for the bmi definition component', () => {
    render(<BmiDefinitionComponent/>);
   const bmiMeaningHeader = screen.queryByRole('heading', {name: "What your BMI result means"});
   const bmiMeaningParagragh = screen.queryByText('A BMI range of 18.5 to 24.9 is', {exact: false});
   const bmiPString =  `
   A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
    `

   expect(bmiMeaningHeader).not.toBeNull();
   expect(bmiMeaningParagragh).not.toBeNull();
   expect(bmiMeaningParagragh.innerHTML).toMatch(bmiPString.trim())

   
});
