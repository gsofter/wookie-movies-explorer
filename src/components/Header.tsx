import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg" sx={{ pt: 1, pb: 1 }}>
          <Toolbar
            sx={{
              padding: "0px!important",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
              onClick={() => navigate("/movies")}
            >
              <Typography variant="h3" noWrap component="div">
                WOOKIE
              </Typography>
              <Typography variant="h3" noWrap component="div">
                MOVIES
              </Typography>
            </Box>
            <SearchInput />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
