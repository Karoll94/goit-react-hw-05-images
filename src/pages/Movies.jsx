import { MovieList } from "../components/MovieList/MovieList";
import { Box, Container, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import api from "../service/api";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";

  useEffect(() => {
    if (movieName === "") return;
    const fetchData = async () => {
      setLoading(true);
      setError({
        error: false,
        message: "",
      });
      try {
        await api.fakePromise(200);
        const response = await api.searchMoviesQuery(movieName);
        if (response.error) throw { message: response.error.message };
        if (response.results.length === 0)
          throw { message: "No matching movies found" };
        setMovies(response.results);
      } catch (e) {
        setError({
          error: true,
          message: e.message,
        });
      } finally {
        setLoading(false);
        setMovie("");
      }
    };
    fetchData();
  }, [movieName]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ marginTop: 5 }}>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="movie"
            label="movies"
            variant="outlined"
            size="small"
            required
            name="movieName"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Loading..."
          >
            Search
          </LoadingButton>
        </Box>
        <MovieList movies={movies} />
      </Container>
    </>
  );
};

export default Movies;
