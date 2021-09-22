import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Acount from "./components/acount/Acount.jsx";




function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Home/>
      <Acount/>
      <News/>
      <About/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
