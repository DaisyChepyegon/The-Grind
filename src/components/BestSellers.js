import React from "react";

function BestSellers({menus}) {
  let coffee = menus[5]
  let coffee2= menus[6]
  let pastry1=menus[21]
  let pastry2=menus[25]
  
  return (
    <div>
      <h1>Our Bestsellers</h1>
      <div className="bestseller">
        <div className="coffee">
          <h2>Coffee</h2>
          <img src={coffee.image} alt="coffee1" height={200} width={200} />
          <h3> {coffee.name}</h3>
          <p>{coffee.desc} </p>
          <img src={coffee2.image} alt="coffee2" height={200} width={200} />
          <h3> {coffee2.name}</h3>
          <p>{coffee2.desc}</p>
        </div>
        <div className="pastries">
          <h2>Pastries</h2>
          <img src={pastry1.image} alt="image0" height={200} width={200} />
          <h3> {pastry1.name}</h3>
          <p>{pastry1.desc}</p>

          <img src={pastry2.image} alt="image0" height={200} width={200} />
          <h3>{pastry2.name} </h3>
          <p>{pastry2.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
