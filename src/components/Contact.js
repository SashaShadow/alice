import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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

    return (
        <div className="Contact">
            <div  ref={myRef} className="ContactText">
                <h1>Conversemos</h1>
                <h4>Mándame un mensaje mediante el formulario y me contactaré contigo a la brevedad</h4>
            </div>
            <div className="ContactMe">
            <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                <label>Nombre*</label>
                <input type="text" id="userName" name="user_name" placeholder="Escribe tu nombre aquí..." required/>
                <label>Email*</label>
                <input type="email" id="userEmail" name="user_email" placeholder="Escribe tu correo aquí..." required/>
                <label>Teléfono</label>
                <input type="phone" id="userPhone" name="user_phone" placeholder="Ingrese su teléfono (opcional)" />
                <label>Mensaje*</label>
                <textarea name="message" id="message" placeholder="Cuéntanos lo que necesitas..." required/>
                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;