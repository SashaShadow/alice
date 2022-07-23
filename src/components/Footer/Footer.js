import "./Footer.css";

const Footer = ({scroll, ref1}) => {

    return (
        <div className="Footer">
            <a className="Volver" onClick={() => scroll(ref1)}><p>Volver arriba</p></a>
            <div className="InfoFooter">
                <p>© Copyright Alice Michan 2022.</p>
            </div>
        </div>
    )
}

export default Footer;