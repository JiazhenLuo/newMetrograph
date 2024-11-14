import Card from "./components/Cards/Card.jsx";
import "./App.css";
import "./App.jsx";
import React, { useEffect } from "react";
import { useState } from "react";

function Filmlist({ setSelectedMovie }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://movieserver-g46f.onrender.com")
      .then((res) => res.json())
      .then((jsonData) => {
        console.log("movie data", jsonData);
        setMovies(jsonData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="box-container">
      {movies.length ? (
        movies.map((movie, index) => (
          <Card
            key={index}
            img={movie.img}
            title={movie.title}
            director={movie.director}
            screenTime={movie.screenTime}
            link={movie.link}
            time={movie.time}
            Description={movie.Description}
            poster={movie.poster}
            onClick={() => {
              console.log("Movie selected:", movie.title);
              console.log(movie.poster);
              setSelectedMovie(movie);
            }}
          />
        ))
      ) : (
        <div className="loading">
          it may take a few minutes to load the film...{" "}
        </div>
      )}
    </div>
  );
}

export default Filmlist;
