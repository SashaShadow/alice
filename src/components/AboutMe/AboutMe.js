import "./AboutMe.css";

const AboutMe = ({myRef}) => {

    return (
        <div className="SobreMi" ref={myRef}>
            <div className="Info">
                <h2 className="TitleP">Alice Michan.</h2>
                <p>Soy una persona <span className="boldP">creativa, dinámica, con gran capacidad de trabajo, </span>tanto individual como en equipo.</p>
                <p>Me gusta <span className="boldP">afrontar nuevos retos</span> para aprender y <span className="boldP">mejorar</span> mis habilidades.</p>
                {/* <h3 className="TitleS">Skills</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ex. Mauris.</p>
                <h3 className="TitleS">Programas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ex. Mauris.</p> */}
            </div>
            <img src="https://res.cloudinary.com/telayna-i/image/upload/v1657579040/Alice/img1_n6fme4.svg" alt="alice"/>
        </div>
    )
}

export default AboutMe;