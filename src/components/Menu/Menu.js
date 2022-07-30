import React from "react";
import "./Menu.css";
import List from "../List";
import BestSellers from "../BestSellers";
import Pictures from "../Pictures";



function Menu({menus}) {

  return (
    <div className="menus">
      <div className="menu">
        <div className="ourmenu">
        <h2>Our Menu</h2>
          {menus.map((item) =><List name={item.name} />)}
        </div>
        <div className="best">
          <BestSellers menus={menus} />
        </div>
      </div>

      <h1>Picture Collections</h1>
      <div className="slider">
       {menus.map((item) =>  <Pictures image={item.image} />)}
      </div>
    </div>
  );
}

export default Menu;
