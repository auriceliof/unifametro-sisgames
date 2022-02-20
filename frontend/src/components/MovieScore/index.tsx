import MovieStars from "components/MovieStars";
import './styles.css'

type Props = {
    score: number;
    count: number;
}

function MovieSore( {score, count } : Props ) {

    return (
        <div className="sisgames-score-container">
            <p className="sisgames-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="sisgames-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieSore;