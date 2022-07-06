import "../App.css";
import "./Home.css";

const Home = ({myRef, ref2, scroll}) => {
    return (
        <div className="Home">
                <div className="text" ref={myRef}>
                    <h5>Te doy la bienvenida a mi web</h5>
                    <h1>Hola, soy Alice</h1>
                    <h2>Diseñadora Gráfica y UX/UI</h2>
                    <h4>Soy diseñadora y me especializo en temas como packaging, retoques digitales y logotipos</h4>
                    <div className="Buttons">
                        <button onClick={() => scroll(ref2)}>Conversemos</button>
                        <button>Mis trabajos</button>
                    </div>
                </div>
        </div>
    )
}

export default Home;