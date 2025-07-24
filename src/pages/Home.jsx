import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchAnime, getPopularAnime } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularAnime = async () => {
      try {
        const popularAnime = await getPopularAnime();
        setAnimeList(popularAnime);
      } catch (err) {
        console.error(err);
        setError("Failed to load popular anime.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularAnime();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchAnime(searchQuery);
      setAnimeList(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search anime.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for anime..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {animeList.map((anime) => (
            <MovieCard movie={anime} key={anime.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;