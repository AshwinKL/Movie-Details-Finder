import MovieCard from "./MovieCard";
const SearchResults = (props) => {
  return (
    <>
      {props.movies?.length > 0 ? (
        <div className="container">
          {props.movies.map((el) => (
            <MovieCard movie={el} key={el.imdbID} />
          ))}
          ;
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};
export default SearchResults;
