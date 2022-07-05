import './App.css';
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import BlankPage from "./components/BlankPage.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import {useRef} from "react";

function App() {

  const testRef = useRef(null);
  const testRef2 = useRef(null);

  const scrollToElement = (someRef) => someRef.current.scrollIntoView({ 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      <NavBar scroll={scrollToElement} ref1={testRef} ref2={testRef2}/>
      <Home myRef={testRef}/>
      <BlankPage/>
      <Contact myRef={testRef2}/>
      <Footer scroll={scrollToElement} ref1={testRef}/>
    </div>
  );
}

export default App;
