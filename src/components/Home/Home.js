import "./Home.css";

const Home = ({homeRef, ref2, ref3, scroll}) => {
    return (
        <div className="HomeContainer">
            <div className="Home">
                <div className="text" ref={homeRef}>
                    <h5>Te doy la bienvenida a mi web</h5>
                    <h1>Hola, soy <span className="aliTitle">Alice</span></h1>
                    <h2>Diseñadora Gráfica y UX/UI</h2>
                    <h4>Soy diseñadora y me especializo en temas como packaging, retoques digitales y logotipos</h4>
                    <div className="Buttons">
                        <button onClick={() => scroll(ref2)}>Conversemos</button>
                        <button onClick={() => scroll(ref3)}>Mis trabajos</button>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/telayna-i/image/upload/v1657906177/Alice/bro_swrxi4.svg" alt='alice' className="alice"/>
            </div>
        </div>
    )
}

export default Home;