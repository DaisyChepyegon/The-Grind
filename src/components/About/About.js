import React from 'react'
import './About.css'
import about0 from './Aboutimages/joanna-kosinska-B43a-FPxYqU-unsplash.jpg'

function About() {
  return (
    <div className='about'>
      <div className='left'>
      <h1>About US</h1>
      <img src={about0} alt='About0' height={500} width={500} />
      </div>
      <div className='right'>
      <p >
        The Grind Coffee House offers a unique coffee house environment.<br />
        We are not only a place to drop in and get your morning cup of coffee<br />
        (although you are more than welcome to do that),<br />
        we are a place where you can sit down and enjoy that tailor-made cup of coffee.<br /> 
        If you need to work, we have a seating area created specifically for you. <br />
        If you need to rest, we have a soft-seating area in front of a stone fire place that is perfect for your weary mind and body. <br />
        We offer a delicious variety of coffee from Safehouse Coffee made by our professionally trained baristas. <br />
        We have everything from classic coffee to our house made specialty beverages. <br />
        All of our sauces & syrups are made in-house with all natural ingredients ensuring you the highest quality in taste & health. <br />
        You can complete your coffee with one of our delicious sweet treats made by our very own baker. <br />
        We look forward to serving you at The Grind Coffee House!<br />
      </p>
      <button>Read More</button>
      </div>
    </div>
  )
}

export default About
