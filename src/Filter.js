import React, { useEffect } from "react";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //Checks- don't do anything, just return all
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(53)}
        className={activeGenre === 53 ? "active" : ""}
      >
        Thriller
      </button>
      <button
        onClick={() => setActiveGenre(10749)}
        className={activeGenre === 10749 ? "active" : ""}
      >
        Romance
      </button>
    </div>
  );
};
export default Filter;
