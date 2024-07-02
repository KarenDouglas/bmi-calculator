import React from 'react';
import iconEating from '../assets/icon-eating.svg';
import iconExercise from "../assets/icon-exercise.svg";
import iconSleep from "../assets/icon-sleep.svg";
import "../assets/css/adviceStyles.css";

function AdviceComponent (){
return(
    <>
    <article className='advice-section'>

        <section>
            <i>
                <img src={iconEating} alt="icon of ramen bowl" />
            </i>
            <section>
                <h3>Healthy eating</h3>
                <p>
                    Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                </p>
            </section>
        </section>
        <section>
            <i>
                <img src={iconExercise} alt="icon of ramen bowl" />
            </i>
            <section>
                <h3>Regular exercise</h3>
                <p>
                Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
                </p>
            </section>
        </section>
        <section>
            <i>
                <img src={iconSleep} alt="icon of ramen bowl" />
            </i>
            <section>
                <h3>Adequate sleep</h3>
                <p>
                Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                </p>
            </section>
        </section>
    </article>
    </>
)
};

export default AdviceComponent;