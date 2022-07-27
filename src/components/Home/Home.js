import React from 'react';
import home from './Homeimages/Home.jpg';
import home1 from './Homeimages/Home1.jpg';

import './Home.css';

function Home() {
 
  return (
    <div>
    <div className='Home'>
      <div className='left'>
      <img src={home} alt="image0" height={700} width={500}/>
      </div>
      <div className='Homeimage'>
        <img src={home1} alt='image1' height={280}width={830}/>
        <div className='text'>
         
          <h1>The Grind Coffee House</h1>
        </div>
        <img src={home1} alt='image2' height={280} width={830}/>
      </div>

    </div>
    </div>
  )
}

export default Home
