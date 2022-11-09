import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MoviesResponse } from "types/MovieMeta";
import axiosInstance from "lib/axios";
import Spinner from "components/Spinner";
import { useSearchParams } from "react-router-dom";
import MovieCard from "components/MovieCard";

const MovieSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error, isFetching, isRefetching, refetch } =
    useQuery({
      queryKey: ["movies"],
      queryFn: () => {
        return axiosInstance
          .get<MoviesResponse>(`/movies?q=${searchParams.get("query")}`)
          .then((res) => res.data);
      },
    });

  useEffect(() => {
    refetch();
  }, [refetch, searchParams]);

  if (isLoading || isFetching || isRefetching) return <Spinner />;

  if (error instanceof Error)
    return <> {`An error has occurred: ${error?.message}`}</>;

  return (
    <Box>
      <Typography variant="h4">
        Search Results: {data?.movies.length}
      </Typography>
      <Stack display="flex" flexDirection="row" gap="16px" flexWrap="wrap">
        {data?.movies?.map((movie) => (
          <MovieCard key={movie.slug} movie={movie} />
        ))}
      </Stack>
    </Box>
  );
};

export default MovieSearch;
