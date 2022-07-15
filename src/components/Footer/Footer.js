import "./Footer.css";
import { BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = ({scroll, ref1}) => {

    return (
        <div className="Footer">
            <a className="Volver" onClick={() => scroll(ref1)}><p>Volver arriba</p></a>
            <div className="InfoFooter">
                <p>© Copyright Alice Michan 2022.</p>
                <div className="IconsFooter">
                <BsLinkedin className="Icon"/> <BsFacebook className="Icon"/> <BsInstagram className="Icon"/> <BsWhatsapp className="Icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;