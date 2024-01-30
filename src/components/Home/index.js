import './styles.css';
import React from 'react';
import Lottie from 'react-lottie';




function Home () {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: require('./assets/animacao.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <section className='home' id='home' >


      <div className='home-page'>
        <div className='text1'>Bem vindo, eu sou: </div>
        <div className='text2'>Patrick Zanela Medeiros</div>
        <div className='text3'>Desenvolvedor Web</div>
      </div>
      <div className='imageJson'>
        <Lottie options={lottieOptions} height={400} width={400} />
      </div>



    </section>
  );
}

export default Home;
