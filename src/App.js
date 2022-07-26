//import react from "react";
//import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
//import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <NavBar /> */}

      {/* <Routes>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes> */}

    </div>
  );
}

export default App;
