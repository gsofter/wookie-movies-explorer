import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MovieCard from "components/MovieCard";
import { MovieMeta } from "types/MovieMeta";

interface IMovieSectionProps {
  title: string;
  movies: MovieMeta[];
}

const MovieSection: React.FC<IMovieSectionProps> = ({ title, movies }) => {
  return (
    <Box mt={2}>
      <Typography variant="h4">{title}</Typography>
      <Stack direction="row" spacing={2} overflow="auto">
        {movies.map((movie) => (
          <MovieCard key={movie.slug} movie={movie} />
        ))}
      </Stack>
    </Box>
  );
};

export default MovieSection;
