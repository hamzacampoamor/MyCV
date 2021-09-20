import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
      <News/>
      <About/>
      <Home/>
      <Portfolio/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
