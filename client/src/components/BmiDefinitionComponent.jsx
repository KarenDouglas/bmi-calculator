import React from 'react'
import manEatingFoodPic from '../assets/image-man-eating.webp'
import "../assets/css/bmiDefStyles.css";

function BmiDefinitionComponent() {

  return (
    <>
    <div className='wrapper'>
      <section id='bmi-meaning-section'>
          <figure>
              <img id='man-eating' src={manEatingFoodPic} alt="man eating sushi" />
          </figure>
          <article id='bmi-meaning-article'>
            <header>
              <h2>What your BMI result means</h2>
            </header>
            <p className='color-gun'>  
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
            </p>
          </article>
      </section>
    </div>
    </>
  )
}

export default BmiDefinitionComponent
