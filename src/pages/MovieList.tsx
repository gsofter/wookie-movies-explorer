import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MovieMeta, MoviesResponse } from "types/MovieMeta";
import axiosInstance from "lib/axios";
import Spinner from "components/Spinner";
import { useLocation } from "react-router-dom";
import MovieSection from "components/MovieSection";

const MovieList: React.FC = () => {
  const [moviesMap, setMoviesMap] = useState<Record<string, MovieMeta[]>>(
    {} as Record<string, MovieMeta[]>
  );
  const { data, isLoading, error, isFetching, isRefetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axiosInstance
        .get<MoviesResponse>("/movies")
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (data && data.movies) {
      categorizeMovies(data.movies);
    }
  }, [data]);

  if (isLoading || isFetching || isRefetching) return <Spinner />;

  if (error instanceof Error)
    return <> {`An error has occurred: ${error?.message}`}</>;

  const categorizeMovies = (movies: MovieMeta[]) => {
    const moviesMap = {};
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!moviesMap[genre]) {
          moviesMap[genre] = [];
        }
        moviesMap[genre].push(movie);
      });
    });
    setMoviesMap(moviesMap);
  };

  return (
    <Box>
      {Object.keys(moviesMap).map((genre) => (
        <MovieSection key={genre} title={genre} movies={moviesMap[genre]} />
      ))}
    </Box>
  );
};

export default MovieList;
