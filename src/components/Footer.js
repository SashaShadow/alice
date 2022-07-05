import "./Footer.css";

const Footer = ({scroll, ref1}) => {

    return (
        <div className="Footer">
            <a className="Volver" onClick={() => scroll(ref1)}><p>Volver arriba</p></a>
        </div>
    )
}

export default Footer;