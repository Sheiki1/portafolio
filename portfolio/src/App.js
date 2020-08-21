import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./css/home.css";
import logo1 from "./triangulo1.png";
import logo2 from "./triangulo2.png";
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  const styleLogOne = {
    position: "absolute", width:"40%", top:"150px", transform: "rotate(-180deg)" 
  };

  const styleLogTwo={
    position:" absolute", width:"100px", height:"100px", top:"110px", transform: "rotate(-180deg)"
  };

  const colorRed ={
    color:"#E92B2B"
  };

  const colorGreen={
    color:"#8DFF34"
  };

  const colorYellow ={
    color:"#FF9900"
  };

  const colorBlue ={
    color:"#5564A2" 
  };

  const topFront = {
    position:" absolute", top:"250px" 
  };
  
  return (
    <div className="App">
       <Router>
        <div className="rectangle"></div>
        <section className="logo">
          <img src={logo1} className="figOne" style={styleLogOne} alt="tri" /> 
          <img src={logo2} className="figTwo" style={styleLogTwo} alt="tri" />
        </section>
        <div  className="logoText" >
            <h1 className="title is-size-1 " id="move"  >FRONT-END</h1>
            <h2 className="title is-size-2 has-text-white"  id="move" > DEVELOPER</h2>
            <h4 className="title is-size-3 has-text-grey-lighter is-family-sans-serif"  id="move" >Shei Miceli</h4>
            <h3><a href="#about" style={colorRed}>ABOUT ME</a>/<a href="#projects"  style={colorBlue}>PROJECTS</a>/<a href="#contact" style={colorGreen}>CONTACT</a></h3>
        </div>
        < About/>
        < Work/>
        <Contact/>
      </Router>
    </div>
      );
    }

export default App;
