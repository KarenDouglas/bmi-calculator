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

