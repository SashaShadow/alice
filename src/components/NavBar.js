import "./NavBar.css";

const NavBar = ({scroll, ref1, ref2}) => {

    return ( 
        <div className="NavBar">
            <div className="Logo">
                <img src="" alt="Logo"/>
            </div>
            <div className="Categorias">
                <a id="aboutMe" onClick={() => scroll(ref1)}><p>Sobre mi</p></a>
                <a id="myProjects"><p>Proyectos</p></a>
                <a id="contact" onClick={() => scroll(ref2)}><p>Contacto</p></a>
            </div>
        </div>
    )
}

export default NavBar;