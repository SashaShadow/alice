import '../NavBar/NavBar.css'
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react';
import { FaBars } from "react-icons/fa";

const PhotoNav = ({setCategory, setLoader}) => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return(
        <header>
            <nav ref={navRef} className='NavBar'>
                
                <a className='nav-link' href='/'>Home</a>

                <a href='#all' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('all'); setLoader(true);}}
                >Todo
                </a>

                <a href='#packaging' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('packaging'); setLoader(true);}}
                >Packaging
                </a>
                
                <a href='#merchandising' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('merchandising'); setLoader(true);}}
                >Merchandising
                </a>
                
                <a href='#logos' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('logos'); setLoader(true);}}
                >Logos
                </a>

                <a href='#retoqueDig' className = {"nav-link"} onClick={() => { showNavBar(); setCategory('retoque digital'); setLoader(true);}}
                >Retoque digital
                </a>
                
                <button className='nav-btn nav-close-btn' onClick={showNavBar} > <MdOutlineClose/> </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar} > <FaBars/> </button>
        </header>
    );
}

export default PhotoNav
