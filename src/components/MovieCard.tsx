import React from "react";
import { Box } from "@mui/material";
import { MovieMeta } from "../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

interface IMovieCardProps {
  movie: MovieMeta;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClickMovie = () => {
    console.log("clicked");
    navigate(`/movies/${movie.slug}`);
  };

  return (
    <Box>
      <Card
        sx={{ maxWidth: 345, cursor: "pointer" }}
        onClick={() => handleClickMovie()}
      >
        <CardMedia
          component="img"
          height="140"
          image={movie.poster}
          alt={movie.slug}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              alignItems="center"
              display="flex"
            >
              <AccessTimeIcon />
              {movie.length}
            </Typography>
            <Chip label={movie.classification} color="primary" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
