import React, {useState} from 'react';
import './styles.css';

function Skills() {
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState(' ');

  const toggleText = (text) => {
    setShowText(text !== currentText || !showText);
    setCurrentText(text);
  };

  const textMappings = {
    'Java': 'Como linguagem de programação, o código Java é baseado em classes e orientado a objetos, com foco em segurança, portabilidade e alta performance.',
    'React': 'React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook.',
    'Figma': 'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.',
    'Git': 'O Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde pequenos até Projetos muito grandes com rapidez e eficiência.',
    'Html': 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.',
    'Css': 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.',
    'Javascript': 'JavaScript é uma linguagem de programação que adiciona interatividade ao seu site. Isso acontece em jogos, no comportamento das respostas quando botões são pressionados ou com entrada de dados em formulários; com estilo dinâmico; com animação, etc.',
  };

  return(
    <>
    <div className='skills' id='skills'>
    <h2 className='title-page'>Minhas Habilidades</h2>
    <div className='container-skills'>

      <div className="icons">
        <div className="icon-container">
          <i className="devicon-java-plain-wordmark colored single-item clickable"
          onClick={() => toggleText('Java')}

          ></i>
        </div>
        <div className="icon-container">
          <i className="devicon-react-original colored single-item clickable"
          onClick={() => toggleText('React')}

          ></i>
        </div>
        <div className='icon-container'>
          <i className="devicon-figma-plain colored single-item clickable"
          onClick={() => toggleText('Figma')}

          ></i>
        </div>
        <div className='icon-container'>
          <i className="devicon-git-plain colored single-item clickable"
          onClick={() => toggleText('Git')}

          ></i>
        </div>
        <div className="icon-container">
          <i className="devicon-html5-plain-wordmark colored single-item clickable"
          onClick={() => toggleText('Html')}

          ></i>
        </div>
        <div className="icon-container">
          <i className="devicon-css3-plain-wordmark colored single-item clickable"
          onClick={() => toggleText('Css')}

          ></i>
        </div>
        <div className="icon-container">
          <i className="devicon-javascript-plain colored single-item clickable"
          onClick={() => toggleText('Javascript')}

          ></i>
        </div>
    </div>
    <div className='text-container'>
        <h4>{currentText}</h4>
        {showText && (
            <h5>{textMappings[currentText]}</h5>
          )}


    </div>
   </div>
   </div>
   </>
  );
}

export default Skills;
