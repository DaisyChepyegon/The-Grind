import React, {useState} from 'react'
import './About.css'
import about0 from './Aboutimages/joanna-kosinska-B43a-FPxYqU-unsplash.jpg'


function Readmore({children, maxCharacterCount = 100}){

  const[lessText, setLessText] =useState(true)
  const text = children;

  const resultString = lessText ? text.slice(0, maxCharacterCount) : text;

  function toggleIsLess(){
    setLessText(!lessText)
  }

  return(
    <p className='txt'>
      {resultString}
      <br /> 
      <br />
      <span onClick={toggleIsLess} className='moretxt'>
      {lessText ? "Read More" : "Read Less"}
      </span>
    </p>
  )
}

function About() {
 
 return (
    
    <div className='about'>
    
      <div className='left'>
      <h1>About US</h1>
      <img src={about0} alt='About0' height={550} width={500} />
      </div>
      <div className='right'>
      <h1>The Grind Coffee House</h1>
      <h3><hr/>Store Hours</h3>
      <ul>
        <li>Monday - Thursday 7am - 9pm</li>
        <li>Friday 7am - 10pm</li>
        <li>Saturday 8am - 10pm</li>
      </ul>
      <div>
      <Readmore maxCharacterCount={190}>
        The Grind Coffee House offers a unique coffee house environment.
        We are not only a place to drop in and get your morning cup of coffee
        (although you are more than welcome to do that),
        we are a place where you can sit down and enjoy that tailor-made cup of coffee.
        If you need to work, we have a seating area created specifically for you.
        If you need to rest, we have a soft-seating area in front of a stone fire place that is perfect for your weary mind and body.
        We offer a delicious variety of coffee from Safehouse Coffee made by our professionally trained baristas. 
        We have everything from classic coffee to our house made specialty beverages. 
        All of our sauces & syrups are made in-house with all natural ingredients ensuring you the highest quality in taste & health.
        You can complete your coffee with one of our delicious sweet treats made by our very own baker.
        We look forward to serving you at The Grind Coffee House!
      </Readmore>
      </div>
      
     

      </div>
    </div>
  )
}

export default About
