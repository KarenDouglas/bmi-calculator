import React from "react";
import AdviceComponent from "../src/components/AdviceComponent";
import { render, screen } from "@testing-library/react";

test('When page loads, relevant elements are visible for the advice component', () => {
    render(<AdviceComponent/>)
    const healthyEatingHeader = screen.queryByRole('heading', {name: "Healthy eating"});
    const regExerciseHeader = screen.queryByRole('heading', {name: "Regular exercise"});
    const adequateSleepHeader = screen.queryByRole('heading', {name: "Adequate sleep"});
    const healthyEatingPara = screen.queryByText('Healthy eating promotes weight control', {exact: false});
    const regExercisePara = screen.queryByText('Exercise improves fitness, aids weight', {exact: false});
    const adequateSleepPara = screen.queryByText('Sleep enhances mental clarity, emotional stability', {exact: false});

    expect(healthyEatingHeader).not.toBeNull();
    expect(regExerciseHeader).not.toBeNull()
    expect(adequateSleepHeader).not.toBeNull()
    expect(healthyEatingPara).not.toBeNull()
    expect(regExercisePara).not.toBeNull()
    expect(adequateSleepPara).not.toBeNull()
    expect(healthyEatingPara.innerHTML).toMatch(
        `Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.`
    );
    expect(regExercisePara.innerHTML).toMatch(
        `Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.`
    );
    expect(adequateSleepPara.innerHTML).toMatch(
        `Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.`
    );
    
});
