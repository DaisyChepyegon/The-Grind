import React from 'react'
import './Menu.css'
import slide1 from './Menuimages/slide1.jpg'
import slide2 from './Menuimages/slide2.jpg'
import slide3 from './Menuimages/slide3.jpg'
import slide4 from './Menuimages/slide4.jpg'
import slide5 from './Menuimages/slide5.jpg'
import slide6 from './Menuimages/slide6.jpg'
import slide7 from './Menuimages/slide7.jpg'
import slide8 from './Menuimages/slide8.jpg'
import slide9 from './Menuimages/slide9.jpg'
import slide10 from './Menuimages/slide10.jpg'
import slide11 from './Menuimages/slide11.jpg'
import slide12 from './Menuimages/slide12.jpg'
import slide13 from './Menuimages/slide13.jpg'

function Menu() {
  return (
    <div>

    <div className='menu'>
    <div className='ourmenu'>
      <th>Our Menu</th>
      <tr>Coffee</tr>
      <tr>None-Coffee Drinks</tr>
    </div>
    <h1>Our Bestsellers</h1>
    <div className='bestseller'>
      
      <div className='coffee'>
      <h2>Coffee</h2>

      </div>
      <div className='pastries'>
      <h2>Pastries</h2>

      </div>
    </div>

    </div>

<h1>Galary</h1>
<div className='slider'>
  
    <img src={slide1} alt="image0" height={200} width={200}/>
    <img src={slide2} alt="image0" height={200} width={200}/>
    <img src={slide3} alt="image0" height={200} width={200}/>
    <img src={slide4} alt="image0" height={200} width={200}/>
    <img src={slide5} alt="image0" height={200} width={200}/>
    <img src={slide6} alt="image0" height={200} width={200}/>
    <img src={slide7} alt="image0" height={200} width={200}/>
    <img src={slide8} alt="image0" height={200} width={200}/>
    <img src={slide9} alt="image0" height={200} width={200}/>
    <img src={slide10} alt="image0" height={200} width={200}/>
    <img src={slide11} alt="image0" height={200} width={200}/>
    <img src={slide12} alt="image0" height={200} width={200}/>
    <img src={slide13} alt="image0" height={200} width={200}/>
    </div>
      
    </div>
  )
}

export default Menu
