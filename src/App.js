import './App.css';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import PhotoNav from './components/PhotoNav/PhotoNav';
import {useState, useRef} from 'react';

function App() {

  const homeRef = useRef(null);
  const testRef = useRef(null);
  const testRef2 = useRef(null);
  const testRef3 = useRef(null);

  const [category, setCategory] = useState('');
  const [loader, setLoader] = useState(false);

  const scrollToElement = (someRef) => someRef.current.scrollIntoView({ 
    behavior: 'smooth' 
  });

  return (
      <div className="App">
        {category ?
        <>
          <PhotoNav category={category} setCategory={setCategory} setLoader={setLoader}/>
          <PhotoGallery category={category} loader={loader} setLoader={setLoader}/>
        </>
        :
        <>
        <NavBar scroll={scrollToElement} ref1={testRef} ref2={testRef2} ref3={testRef3}/>
        <Home scroll={scrollToElement} homeRef={homeRef} ref2={testRef2} ref3={testRef3}/>
        <AboutMe myRef={testRef}/>
        <Projects ref3={testRef3} setCategory={setCategory} setLoader={setLoader}/>
        <Contact myRef={testRef2}/>
        <Footer scroll={scrollToElement} homeRef={homeRef}/>
        </>}
      </div>
  );
}

export default App;
