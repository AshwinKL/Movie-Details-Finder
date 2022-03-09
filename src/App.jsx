import "./App.css";
import { useState, useEffect } from "react";
import search from "./components/search.svg";
import "./components/MovieCard";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => searchMovies("marvel"), []);

  const API_URl = `http://www.omdbapi.com?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div>
      <div className="app">
        <div className="h1-container">
          <h1>Movie Details Finder</h1>
        </div>
        <form
          className="search"
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies(searchTerm);
          }}
        >
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={search}
            alt="search-icon"
            onClick={() => {
              searchMovies(searchTerm);
            }}
          ></img>
        </form>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((el) => (
              <MovieCard movie={el} key={el.imdbID} />
            ))}
            ;
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>Created with ❤ by Ashwin</p>
      </footer>
    </div>
  );
};

export default App;
