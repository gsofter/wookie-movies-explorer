import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "components/MovieCard";
import { MovieMeta, MoviesResponse } from "../types/MovieMeta";
import axiosInstance from "lib/axios";

const MovieList: React.FC = () => {
  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axiosInstance
        .get<MoviesResponse>("/movies")
        .then((res) => res.data);
    },
  });

  if (isLoading) return <>Loading...</>;

  if (error instanceof Error)
    return <> {`An error has occurred: ${error?.message}`}</>;

  return (
    isSuccess && (
      <Box>
        {data?.movies.map((movie: MovieMeta) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    )
  );
};

export default MovieList;
