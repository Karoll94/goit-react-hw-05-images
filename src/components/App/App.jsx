
import { Routes, Route } from "react-router-dom";
import { navLinks } from "../utils/routes";
import { Navbar } from "../navbar/Navbar";
import { lazy } from "react";


const MovieDetails = lazy(() => import("../MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Movies = lazy(() => import("../../pages/Movies"));
const Home = lazy(() => import("../../pages/Home"));
const Cast = lazy(() => import("../Cast/Cast"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar navLinks={navLinks} />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
