import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsLinkedin, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs';

const Contact = ({myRef}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q5egqyl', 'template_ooumsps', form.current, 'HpQpFqzf8B34MKSZt')
        .then((result) => {
            console.log(result.text);
            alert("Mensaje enviado")
            document.querySelector("#userName").value = "";
            document.querySelector("#userEmail").value = "";
            document.querySelector("#userPhone").value = "";
            document.querySelector("#message").value = "";
        }, (error) => {
            console.log(error.text);
        }).then(() => {

        });
    };

    const whatsappLink = () => {
        window.open('https://api.whatsapp.com/send?phone=++525536777280&text=%C2%A1Hola%20Alice,%20me%20interesa%20contratar%20tu%20trabajo!', '_blank')
    }

    return (
        <div className="Contact">
            <div className="ContactText">
                <h2>Conversemos</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, lectus augue lorem turpis. Commodo diam netus integer sed. Ut varius natoque scelerisque lectus amet platea ultricies. Mollis varius sed arcu commodo vitae et, leo.</h4>
                <div className="IconsFooter">
                <BsLinkedin className="Icon"/> <BsFacebook className="Icon"/> <BsInstagram className="Icon"/> 
                <BsWhatsapp onClick={whatsappLink} className="Icon"/>
                </div>
            </div>
            <div className="ContactMe" ref={myRef} >
                <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                    <label>Nombre*</label>
                    <input type="text" id="userName" name="user_name" placeholder="Escribe tu nombre aquí..." required/>
                    <label>Email*</label>
                    <input type="email" id="userEmail" name="user_email" placeholder="Escribe tu correo aquí..." required/>
                    <label>Teléfono</label>
                    <input type="phone" id="userPhone" name="user_phone" placeholder="Ingrese su teléfono (opcional)" />
                    <label>Mensaje*</label>
                    <textarea name="message" id="message"
                    rows={8}
                    placeholder="Cuéntanos lo que necesitas..." required/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;