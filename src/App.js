import './App.css';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import {useRef} from "react";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {

  const testRef = useRef(null);
  const testRef2 = useRef(null);

  const scrollToElement = (someRef) => someRef.current.scrollIntoView({ 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      <NavBar scroll={scrollToElement} ref1={testRef} ref2={testRef2}/>
      <Home scroll={scrollToElement} myRef={testRef} ref2={testRef2}/>
      <AboutMe/>
      <Projects/>
      <Contact myRef={testRef2}/>
      <Footer scroll={scrollToElement} ref1={testRef}/>
    </div>
  );
}

export default App;
