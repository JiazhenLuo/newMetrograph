import React from "react";
import "./MovieDetails.css";

function MovieDetails({ movie }) {
  console.log("Selected Movie in Details:", movie);
  if (!movie) {
    return <p id="placeholder">Please select a movie to see the details.</p>;
  }

  return (
    <>
      <div className="movie-details">
        <div className="movieInfo-Container">

          <div className="title">
            <div className="empty"></div>
            <div className="title-Info">
              {movie.title}
            </div>
          </div>

          <div className="time">
            <div className="empty"></div>
            <div className="time-Info">{movie.screenTime}
            </div>
          </div>

          <div className="director">
            <div className="Director-text">Director:</div>
            <div className="director-Info">{movie.director}</div>
          </div>

          <div className="description">
            <div className="description-Text">Description:</div>
            <div className="description-Info">{movie.Description}</div>
          </div>

          <div className="screentime">
            <div className="screentime-Text">Screen Time:</div>
            <div className="screentime-Info">{movie.time}</div>
          </div>

        </div>
        <div className="poster-Container">
          <img src={movie.poster} alt={movie.title} className="details-image" />
          <button className="buy-button">
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              Buy Ticket
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
