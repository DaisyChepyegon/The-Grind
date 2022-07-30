import React from 'react';
import {Navigate} from "react-router-dom"
import home from './Homeimages/Home.jpg';
import home1 from './Homeimages/Home1.jpg';



import './Home.css';

function Home({LoggedIn}) {
 if (!LoggedIn)
  return <Navigate to="/Login"/>

  return (
    <div>
    <div className='Home'>
      <div className='left'>
      <img src={home} alt="image0" height={680} width={500}/>
      </div>
      <div className='Homeimage'>
        <img src={home1} alt='image1' height={270}width={820}/>
        <div className='text'>
         
          <h1>The Grind Coffee House</h1>
        </div>
        <img src={home1} alt='image2' height={270} width={820}/>
      </div>

    </div>
  
    </div>
  )
}

export default Home
