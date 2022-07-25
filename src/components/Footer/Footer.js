import "./Footer.css";

const Footer = ({scroll, homeRef}) => {

    return (
        <div className="Footer">
            <a href='#volver' className="Volver" onClick={() => scroll(homeRef)}><p>Volver arriba</p></a>
            <div className="InfoFooter">
                <p>© Copyright Alice Michan 2022.</p>
                <p id="credits">Designed by Alejandro Anderson. Developed by: Iñaki Telayna & Sasha Rodriguez Carlomagno</p>
            </div>
        </div>
    )
}

export default Footer;