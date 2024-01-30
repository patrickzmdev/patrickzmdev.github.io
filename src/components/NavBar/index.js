import React  from "react";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.css";
import logo from './assets/logo.png';

var cont = 0;


function NavBar() {

    function trocarLogo () {
      const menuLogo = document.body.querySelector('.menu-toggle .fa-bars');
      const menuLogoRemover = document.body.querySelector('.menu-toggle .fa-xmark');
      if(menuLogo) {
        menuLogo.classList.toggle('fa-bars');
        menuLogo.classList.toggle('fa-xmark');
      }
      if(menuLogoRemover) {
        menuLogoRemover.classList.toggle('fa-xmark');
        menuLogoRemover.classList.toggle('fa-bars');
      }
    }

    useEffect(() => {
      if (cont === 0) {
          cont++;

          const sidebarWrapper = document.getElementById('sidebar-wrapper');
          const menuToggle = document.body.querySelector('.menu-toggle');

          var navbarShrink = function () {
              const navbarCollapsible = document.body.querySelector('#main-bar');
              if (!navbarCollapsible) {
                  return;
              }
              if (window.scrollY === 0) {
                  navbarCollapsible.classList.remove('shrink');
              } else {
                  navbarCollapsible.classList.add('shrink');
              }
          };

          // Shrink the navbar
          navbarShrink();

          document.addEventListener('scroll', navbarShrink);

          menuToggle.addEventListener('click', event => {
              event.preventDefault();
              sidebarWrapper.classList.toggle('active');
              trocarLogo();
              menuToggle.classList.toggle('active');
          });

          var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
          scrollTriggerList.map(scrollTrigger => {
              scrollTrigger.addEventListener('click', () => {
                  sidebarWrapper.classList.remove('active');
                  menuToggle.classList.remove('active');
                  trocarLogo();
              })
              return scrollTrigger;
          });
      }
  }, []);

  const setTheme = (backgroundColor, backgroundColorSecundary, textColor, othersColors) => {


    document.documentElement.style.setProperty("--background-color", backgroundColor);
    document.documentElement.style.setProperty("--background-color-secundary", backgroundColorSecundary);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--others-colors", othersColors);
  };

  const handleClickSun = () => {
    setTheme("#4abdac", "#fc4a1a", "#dfdce3","#f7b733");
  };

  const handleClickMoon = () => {
    setTheme("#373737", "#262228", "#f4f4f4","#c0b283");
  };
return(
  <header>
  <section className="page-top" id="page-top">
      <img src={logo} alt="logo"></img>
      <div className="icons-container">
        <FontAwesomeIcon icon="fa-regular fa-sun" className="sun" onClick={handleClickSun} />
        <FontAwesomeIcon icon="fa-regular fa-moon" className="moon" onClick={handleClickMoon} />
        <a className="menu-toggle rounded" href="/" onClick={trocarLogo}>
          <i className="fas fa-bars" id="bars"></i>
        </a>

      </div>
        <nav id="sidebar-wrapper" >
        <ul className="sidebar-nav">
                    <li className="sidebar-nav-item"><a href="#home"><span>Home</span></a></li>
                    <li className="sidebar-nav-item"><a href="#about"><span>Sobre</span></a></li>
                    <li className="sidebar-nav-item"><a href="#skills"><span>Skills</span></a></li>
                    <li className="sidebar-nav-item"><a href="#projects"><span>Projetos</span></a></li>
                    <li className="sidebar-nav-item"><a href="#contact"><span>Contato</span></a></li>

                </ul>






        </nav>


  </section>
  </header>
);
}


export default NavBar;
