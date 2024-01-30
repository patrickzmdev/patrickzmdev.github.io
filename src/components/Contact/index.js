import React from "react";
import './styles.css';

function Contact() {
  return(
    <section className="page-section" id="contact">
    <h3 className="title-page">Contato</h3>
    <div className="container-contact">
        <div className="ways-contact">
            <h3><span>Entre em contato comigo!</span></h3>
            <p>Caso queira entrar em contato comigo me mande uma mensagem.</p>
            <ul className="list-icons">
                <li>
                    <i className="fa fa-envelope" id="icon-contact"></i>
                    <a href="mailto:patrickzm290493@gmail.com"><p>patrickzm290493@gmail.com</p></a>
                </li>
                <li>
                    <i className="fa fa-location-dot" id="icon-contact"></i>
                    <p className="mg-icon-2">Tubarão, Santa Catarina - Brasil</p>
                </li>
            </ul>
        </div>
        <form target="_blank" action="https://formsubmit.co/patrickzm290493@gmail.com" method="POST" className="form-contact">
            <input type="hidden" name="_next" value="https://www.linkedin.com/in/patrick-zanela-medeiros-696305267/" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
            <label>Nome:</label>
            <input type="text" name="name" className="form-control" placeholder="Nome" required/>
            <label>Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
            <label>Mensagem:</label>
            <textarea name="message" className="form-control" placeholder="Escreva a mensagem" required></textarea>
            <div className="btn-form">
                <input type="submit" className="btn btn-primary" value="Enviar" />
            </div>
        </form>
    </div>
</section>


    );
  }

  export default Contact;
