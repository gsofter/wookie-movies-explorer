import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "components/MovieCard";
import { MovieMeta, MoviesResponse } from "types/MovieMeta";
import axiosInstance from "lib/axios";
import Spinner from "components/Spinner";
import { useParams } from "react-router-dom";

const MovieDetail: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axiosInstance
        .get<MovieMeta>(`/movies/${slug}`)
        .then((res) => res.data);
    },
  });

  if (isLoading) return <Spinner />;

  if (error instanceof Error)
    return <> {`An error has occurred: ${error?.message}`}</>;

  return (
    isSuccess && (
      <Box>
        <MovieCard movie={data} />
      </Box>
    )
  );
};

export default MovieDetail;
