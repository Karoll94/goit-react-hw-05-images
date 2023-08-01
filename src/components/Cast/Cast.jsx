import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service/api";
import css from "./Cast.module.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/";

const Cast = () => {
  const [characters, setCharacters] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetCharacters = async () => {
      try {
        const response = await api.getMovieCredits(movieId);
        setCharacters(response.cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetCharacters();
  }, [movieId]);

  return (
    <>
      {characters.length !== 0 ? (
        <Container>
          <ul className={css["characteres-container"]}>
            {characters.map(({ cast_id, name, profile_path, character }) => (
              <li key={cast_id} className={css["character-card"]}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `${baseImageUrl}w200${profile_path}`
                        : "https://via.placeholder.com/300/"
                    }
                    alt={name}
                    className={css["character-image"]}
                  />
                  <p className={css["character-name"]}>{name}</p>
                  <p className={css["character"]}>Character: {character}</p>
                  {!profile_path && <p>Image not available</p>}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      ) : (
        <Typography variant="h5">
          We don´t have any character for this movie.
        </Typography>
      )}
    </>
  );
};

export default Cast;
