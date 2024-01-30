import icon from '../NavBar/assets/logo.png';
import curriculo from './assets/Currículo Patrick.pdf';
import './styles.css';
import React from 'react';

function About () {
  return(
    <>
    <div className='about'>
    <h2 className='title-page'>Sobre min</h2>
    <section className='about-me' id='about'>

      <div className='about-logo'>
        <img src={icon} className='img-about' alt='icon'></img>
      </div>
      <div className='right-text'>
        <div className='texto-about'>
          <h3>Olá!!!</h3>
          <p>
            Olá muito prazer, meu nome é Patrick Zanela Medeiros. Sou de Tubarão SC. Sempre gostei da área de computação
            e agora finalmente resolvi entrar de cabeça nesse mundo. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Uninter, além de estar
            me especializando com um curso de front-end. Estou em busca da minha primeira oportunidade na área, meu objetivo é por em
            prática o que estou estudando. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.

          </p>

        </div>
      </div>
    </section>
    <a href={curriculo} target='_black' rel='noopener noreferrer' className='btn btn-primary'>Currículo</a>
    </div>
    </>
  );
}

export default About;
