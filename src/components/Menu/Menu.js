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
import slides1 from './Menuimages/slides1.jpg'
import slides2 from './Menuimages/slides2.jpg'
import slides3 from './Menuimages/slides3.jpg'
import slides4 from './Menuimages/slides4.jpg'
import pastry1 from './Menuimages/pastry1.jpg'
import pastry2 from './Menuimages/pastry2.jpg'

function Menu() {
  return (
    <div className='menus'>

    <div className='menu'>

    <div className='ourmenu'>
      <h2>Our Menu</h2>
      <ul>
        <li>Coffee</li>
        <li>Non-Coffee</li>
        <li>Snacks</li>
      </ul>
    

    </div>
    <div className='best'>
    <h1>Our Bestsellers</h1>
    <div className='bestseller'>
      
      <div className='coffee'>
      <h2>Coffee</h2>
      <img src={slides4} alt="image0" height={200} width={200}/>
      <h3> Cappuccino</h3>
      <p>A double shot of espresso, 2 ounces milk, 2 ounces foam. </p>
      <img src={slides2} alt="image0" height={200} width={200}/>
      <h3> Latte</h3>
      <p> A Double shot of espresso, with 6 ounces of perfectly steamed milk.</p>

      </div>
      <div className='pastries'>
      <h2>Pastries</h2>

      <img src={pastry2} alt="image0" height={200} width={200}/>
      <h3> Blueberry Muffin</h3>
      <p> Loaded with blueberries, our blueberry muffin is made using fresh blueberries and topped with a brown sugar pecan crumble</p>

      <img src={pastry1} alt="image0" height={200} width={200}/>
      <h3>Strawberry Scone </h3>
      <p> Our mouthwatering homemade scone filled with strawberries and topped with a strawberry creme drizzle</p>

      </div>
    </div>
    </div>

    </div>


<h1>Picture Collections</h1>
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
    <img src={slides1} alt="image0" height={200} width={200}/>
    <img src={slides2} alt="image0" height={200} width={200}/>
    <img src={slides3} alt="image0" height={200} width={200}/>
    <img src={slides4} alt="image0" height={200} width={200}/>
    </div>
      
    </div>
  )
}

export default Menu
