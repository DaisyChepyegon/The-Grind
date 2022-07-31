import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CommentDisplay from "./components/Comments/CommentDisplay"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/Navigation/NavBar";
import Menu from "./components/Menu/Menu";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios"


function App() {
  const [menus, setMenus] =useState([])
  const [LoggedIn, setLoggedIn] = useState(false);
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
      <NavBar setLoggedIn={setLoggedIn} />
      
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home LoggedIn={LoggedIn} />} />
          <Route exact path="/contact" element={<CommentDisplay  />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/menu" element={<Menu menus={menus} />} />
          <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route exact path="/register" element={<Register />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
