import React from "react";
import { Box } from "@mui/material";
import { MovieMeta } from "../types";

interface IMovieCardProps {
  movie: MovieMeta;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Box>
      <h1>{movie.title}</h1>
    </Box>
  );
};

export default MovieCard;
