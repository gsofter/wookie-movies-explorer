import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MovieMeta } from "types/MovieMeta";
import axiosInstance from "lib/axios";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import { calcRating, getYear } from "utils";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

const MovieDetail: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading, error, isFetching, isRefetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axiosInstance
        .get<MovieMeta>(`/movies/${slug}`)
        .then((res) => res.data);
    },
  });

  if (isLoading || isFetching || isRefetching)
    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* Display title */}
              <Box display="flex">
                <Skeleton variant="text" width="100%" />
              </Box>

              <Skeleton variant="text" width="500" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );

  if (error instanceof Error)
    return <> {`An error has occurred: ${error?.message}`}</>;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={0}>
          <Box>
            <img src={data?.poster} alt={data?.title} />
          </Box>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3">{data?.title}</Typography>
              <Tooltip title={data?.imdb_rating}>
                <Rating
                  name="read-only"
                  max={5}
                  precision={0.1}
                  value={calcRating(data?.imdb_rating)}
                  readOnly
                />
              </Tooltip>
            </Box>

            <Box display="flex" flexDirection="column">
              <Typography
                variant="subtitle1"
                display="flex"
                alignItems="center"
              >
                <CalendarTodayIcon /> {getYear(data?.released_on)} |{" "}
                <AccessTimeIcon />
                {data?.length} | <PersonIcon /> {data?.director}
              </Typography>
              <Typography variant="subtitle1">
                Cast: {data?.cast?.join(", ")}
              </Typography>
            </Box>

            {/* Overview */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">Overview</Typography>
              <Typography variant="body1" color="text.secondary">
                {data?.overview}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <MovieCard movie={data} /> */}
    </Box>
  );
};

export default MovieDetail;
