import React from "react";
import { render, screen } from "@testing-library/react";
import LimitationsComponent from "../src/components/LimitationsComponent";

test('when page loads relevant elements should be visible for LimitationsComponent', () => {
    render(<LimitationsComponent/>)
    const limitationsHeader = screen.queryByRole('heading', {name: "Limitations of BMI"});
    const genderHeader = screen.queryByRole('heading', {name: "Gender"});
    const ageHeader = screen.queryByRole('heading', {name: "Age"})
    const muscleHeader = screen.queryByRole('heading', {name: "Muscle"});
    const pregnancyHeader = screen.queryByRole('heading', {name: "Pregnancy"});
    const raceHeader = screen.queryByRole('heading', {name: "Race"});

    const limiationsPara = screen.queryByText("Although BMI is often a practical indicator", {exact: false})
    const genderPara = screen.queryByText("The development and body fat composition", {exact: false})
    const agePara = screen.queryByText("In aging individuals, increased body fat and muscle", {exact: false})
    const musclePara = screen.queryByText("BMi may misclassify muscular", {exact: false})
    const pregnancyPara = screen.queryByText("Expectant mothers experience weight gain due to their growing baby", {exact: false})
    const racePara = screen.queryByText("Certain health concerns may affect individuals of some Black", {exact: false})

    expect(limitationsHeader).not.toBeNull()
    expect(genderHeader).not.toBeNull()
    expect(ageHeader).not.toBeNull()
    expect(muscleHeader).not.toBeNull()
    expect(pregnancyHeader).not.toBeNull()
    expect(raceHeader).not.toBeNull()
    expect(limiationsPara).not.toBeNull()
    expect(genderPara).not.toBeNull()
    expect(agePara).not.toBeNull()
    expect(musclePara).not.toBeNull()
    expect(pregnancyPara).not.toBeNull()
    expect(racePara).not.toBeNull()
    expect(limiationsPara.innerHTML).toMatch(
        `Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.`
    )
    expect(genderPara.innerHTML).toMatch(
        `The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.`
    )
    expect(agePara.innerHTML).toMatch(
        `In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.`
    )
    expect(musclePara.innerHTML).toMatch(
        `BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.`
    )
    expect(pregnancyPara.innerHTML).toMatch(
        `Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.`
    )
    expect(racePara.innerHTML).toMatch(
        `Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.`
    )
});
