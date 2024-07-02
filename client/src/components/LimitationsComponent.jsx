import React from "react";
import iconGender from "../assets/icon-gender.svg";
import iconAge from "../assets/icon-age.svg";
import iconMuscle from "../assets/icon-muscle.svg";
import iconPregnancy from "../assets/icon-pregnancy.svg";
import iconRace from "../assets/icon-race.svg";
import "../assets/css/limitationsStyles.css";



function LimitationsComponent() {
    
    return(
        <>
        <article id="limitations-section">
                <section>
                    <header>
                        <h2>Limitations of BMI</h2>
                    </header>
                    <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                </section>
                <div id="limitations-cards">
                    <section className="card">
                        <div className="card-info">
                            <header>
                                <i>
                                    <img src={iconGender} alt="icon for gender"/>
                                </i>
                                <h3 className="text-bold" >Gender</h3>
                            </header>
                            <p>
                            The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.
                            </p>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card-info">
                            <header>
                                <i>
                                    <img src={iconAge} alt="icon for gender"/>
                                </i>
                                <h3  className="text-bold">Age</h3>
                            </header>
                            <p>
                            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
                            </p>                            
                        </div>
                    </section>
                <section className="card">
                    <div className="card-info">
                        <header>
                            <i>
                                <img src={iconMuscle} alt="icon for muscle"/>
                            </i>
                            <h3 className="text-bold">Muscle</h3>
                        </header>
                        <p>
                        BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
                        </p>
                    </div>
                </section>
                <section className="card">
                    <div className="card-info">
                        <header>
                            <i>
                                <img src={iconPregnancy} alt="icon for pregnancy"/>
                            </i>
                            <h3 className="text-bold">Pregnancy</h3>
                        </header>
                        <p>
                        Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
                        </p>
                    </div>
                </section>
                <section className="card">
                    <div className="card-info"></div>
                    <header>
                        <i>
                            <img src={iconRace} alt="icon for ethnic race"/>
                        </i>
                        <h3 className="text-bold">Race</h3>
                    </header>
                    <p>
                    Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
                    </p>
                </section>
            </div>
            
        </article>
        </>
    )

};

 export default LimitationsComponent;