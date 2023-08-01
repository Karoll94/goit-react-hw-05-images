import { Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetReviews = async () => {
      try {
        const response = await api.getReviews(movieId);
        setReviews(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <Container>
          {reviews.map(({ id, author, content }) => (
            <Paper
              key={id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 3,
                p: 2,
              }}
            >
              <Typography variant="h5">Author: {author}</Typography>
              <Typography variant="p">{content}</Typography>
            </Paper>
          ))}
        </Container>
      ) : (
        <Typography variant="h5">
          We don´t have any reviews for this movie.
        </Typography>
      )}
    </>
  );
};

export default Reviews;
