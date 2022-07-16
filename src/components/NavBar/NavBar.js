import { a } from 'react-router-dom'
import './NavBar.css'
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react';

const NavBar = ({scroll, ref1, ref2, ref3}) => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return(
        <header>
            <nav ref={navRef}>
                
                <a href='#SobreMi' className = {"nav-link"} onClick={() => { showNavBar(); scroll(ref1) }}
                >Sobre mi
                </a>
                
                <a href='#Proyectos' className = {"nav-link"} onClick={() => { showNavBar(); scroll(ref3)}}
                >Proyectos
                </a>
                
                <a href='#Contacto' className = {"nav-link"} onClick={() => { showNavBar(); scroll(ref2) }}
                >Contacto
                </a>
                
                <button className='nav-btn nav-close-btn' onClick={showNavBar} > <MdOutlineClose/> </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar} > <FaBars/> </button>
        </header>
    );
}

export default NavBar
