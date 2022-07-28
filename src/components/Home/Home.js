import React from 'react';
import home from './Homeimages/Home.jpg';
import home1 from './Homeimages/Home1.jpg';
import slide1 from './Homeimages/slide1.jpg'
import slide2 from './Homeimages/slide2.jpg'
import slide3 from './Homeimages/slide3.jpg'
import slide4 from './Homeimages/slide4.jpg'
import slide5 from './Homeimages/slide5.jpg'
import slide6 from './Homeimages/slide6.jpg'
import slide7 from './Homeimages/slide7.jpg'
import slide8 from './Homeimages/slide8.jpg'
import slide9 from './Homeimages/slide9.jpg'
import slide10 from './Homeimages/slide10.jpg'


import './Home.css';

// function Slideshow({imgs}){
//   const [index, setIndex] =useState(0)

//   useEffect(() => {
//     setIndex(0)
//   },[])

//   function next(){
//     if(index === imgs.length -1){
//       setIndex(0)
//     }else{
//       setIndex(index+1)
//     }
//   }

//   function previous(){
//     if(index === 0 ){
//       setIndex(imgs.length -1)
//     }else{
//       setIndex(index-1)
//     }
//   }

//   return(
//     <div className='slideshow'>
//       <img className='mainImg' src={imgs[index]}/>
//       <div classname='actions'>
//         <button onClick={previous}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>

//     </div>
//   )
// }

function Home() {
 
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
    <div className='slider'>
    {/* <Slideshow 
        imgs={[
          "home",
          "home1",
        ]}
    /> */}
    <img src={home} alt="image0" height={200} width={200}/>
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
    </div>
    </div>
  )
}

export default Home
