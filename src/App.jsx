import "./App.css";
import { useState, useEffect } from "react";
import search from "./components/search.svg";
import "./components/MovieCard";
import SearchResults from "./components/SearchResults";
import ReactLoading from "react-loading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => searchMovies("marvel"), []);

  const API_URl = `https://www.omdbapi.com?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const searchMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setLoading(false);
  };

  return (
    <div>
      <div className="app">
        <div className="h1-container">
          <h1>Movie Name Finder</h1>
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
        {!loading ? (
          <SearchResults movies={movies}></SearchResults>
        ) : (
          <ReactLoading type="spin" color="#f9d3b4" height={100} width={50} />
        )}
      </div>
      <footer className="footer">
        <p>Created with ❤ by Ashwin</p>
      </footer>
    </div>
  );
};

export default App;
