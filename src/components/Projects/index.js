import './styles.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
};

  return(
    <section className="projects" id='projects'>
    <h3 className="title-page">Projetos</h3>
    <div className="container-projects">
        <Slider {...settings}>
            <div className="item-projects img-1">
                <div className="img-overlay"></div>
                <a href="https://lexicographic-stool.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                    <h3>Ping-Pong</h3>
                    <p>Projeto que desenvolvi no curso de Javascript. Implementei algumas melhorias interessantes, como um menu.</p>
                </a>
            </div>
            <div className="item-projects img-2">
                <a href="https://patinhasunidastb.com.br/" target="_blank" rel="noopener noreferrer">
                    <h3>Projeto Patinhas Unidas</h3>
                    <p>Meu primeiro site feito, pretendo atualiza-lo futuramente com as técnologias que aprendi.</p>
                </a>
            </div>
            <div className="item-projects img-3">
                <a href="https://salutary-debris.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                    <h3>Projeto Star Wars</h3>
                    <p>Projeto em Javascript puro, nele aprendi a utilizar API.</p>
                </a>
            </div>

            <div className="item-projects img-4">
                <a href="https://github.com/patrickzmdev" target="_blank" rel="noopener noreferrer">
                    <h3>Github</h3>
                    <p>Para acessar todos meus projetos acesse meu github.</p>
                </a>
            </div>
        </Slider>
    </div>
    </section>

  );

}

export default Projects;
