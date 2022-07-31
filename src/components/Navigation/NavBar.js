import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom"

export default function Navbar({setLoggedIn}) {
  const navigate = useNavigate();

  function handleClick() {
    setLoggedIn(false);
    navigate("/login");
    localStorage.clear()
  }

  return (
    <nav className="nav">
        <NavLink to="/" >Home </NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">ContactUs</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Sign Up</NavLink>

      <p onClick={handleClick}>Logout</p>

    </nav>
  )
}


