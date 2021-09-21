import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Home/>
      <News/>
      <About/>
      <Portfolio/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
