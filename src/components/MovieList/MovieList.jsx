import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(({ title, name, id }) => (
        <ul key={id}>
          <li>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};
