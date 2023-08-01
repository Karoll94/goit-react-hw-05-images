import styled from "@emotion/styled";

const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  
  const GenresList = styled("ul")({
    listStyle: "none",
    display: "flex",
    padding: 0,
    gap: "16px",
  });

  export {Img, GenresList};