import React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import MovieList from "pages/MovieList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg">
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
