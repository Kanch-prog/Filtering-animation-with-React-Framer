import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion } from "framer-motion";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=dd667c96733c5ac4609ec448c40b766f&language=en-US&page=1";

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <h1>MOVIES</h1>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
};
export default App;
