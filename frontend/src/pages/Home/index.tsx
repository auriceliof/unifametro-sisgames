import { Link } from "react-router-dom";
import pcgamer  from 'assets/img/pcgamer.png';
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça nosso sistema de avaliação de games</h1>
            <p>
              Ajudaremos você escolher o melhor jogo com base nas avaliações de
              quem já o jogou
            </p>
          </div>
          <div className="btn-container">
            <Link to="/listing">
              <button className="btn btn-primary sisgames-btn mt-3">
                Iniciar avaliação
              </button>
            </Link>
          </div>
        </div>
        <div className="games-container">   
          <img className="pcgamer-content" src={pcgamer} alt="pcgamer" />
        </div>
      </div>
    </div>
  );
};

export default Home;
