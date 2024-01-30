import './styles.css';
import React from 'react';

function Footer() {
  return(
    <footer className='page-footer' id='footer'>
       <div className='social'>
          <a href="https://www.linkedin.com/in/patrick-zanela-medeiros-696305267/" rel="noopener noreferrer"
          target="_blank"><i className="fa-brands fa-linkedin" id="icon-linkedin"></i></a>
          <a href="https://github.com/patrickzmdev" rel="noopener noreferrer"
          target="_blank"><i className="fa-brands fa-github" id="icon-github"></i></a>
          <a href="https://api.whatsapp.com/send/?phone=5548988174195&type=phone_number" rel="noopener noreferrer"
          target="_blank"><i className="fa-brands fa-whatsapp" id="icon-whatsapp"></i></a>
       </div>
       <div className="copyright">
                <p>Patrick Zanela Medeiros 2024 ©</p>
            </div>
    </footer>
  );
}

export default Footer;
