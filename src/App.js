import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Menu from "./components/Menu/Menu";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/Navigation/NavBar";
import axios from "axios"


function App() {
  const [menus, setMenus] =useState([])
  const url="https://the-grind-api.herokuapp.com/menu"

  const fetchData = () =>{
    axios.get(url)
    .then((resp => {
      setMenus(resp.data)
      console.log(resp.data)
    }))
  }

  useEffect(() => {
    fetchData()
  },[])

  console.log(menus)

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
