import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.coverImage.large} alt={movie.title.romaji} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title.english || movie.title.romaji}</h3>
        <p>Episodes: {movie.episodes || "?"}</p>
      </div>
    </div>
  );
}

export default MovieCard;