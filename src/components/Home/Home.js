import React from 'react';
import home from './Homeimages/Home.jpg';
import home1 from './Homeimages/Home1.jpg';



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
  
    </div>
  )
}

export default Home
