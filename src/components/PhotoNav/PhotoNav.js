import '../NavBar/NavBar.css'
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react';
import { FaBars } from "react-icons/fa";

const PhotoNav = ({setCategory}) => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return(
        <header>
            <nav ref={navRef} className='NavBar'>
                
                <a className='nav-link' href='/'>Home</a>

                <a href='#all' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('all')}}
                >Todo
                </a>

                <a href='#packaging' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('packaging')}}
                >Packaging
                </a>
                
                <a href='#merchandising' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('merchandising')}}
                >Merchandising
                </a>
                
                <a href='#logos' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('logos')}}
                >Logos
                </a>

                <a href='#retoqueDig' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('retoque digital')}}
                >Retoque digital
                </a>
                
                <button className='nav-btn nav-close-btn' onClick={showNavBar} > <MdOutlineClose/> </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar} > <FaBars/> </button>
        </header>
    );
}

export default PhotoNav
