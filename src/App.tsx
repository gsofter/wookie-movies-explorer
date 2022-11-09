import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieList from "pages/MovieList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "components/Header";
import MovieDetail from "pages/MovieDetail";
import MovieSearch from "pages/MovieSearch";
import PageNotFound from "pages/PageNotFound";
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container maxWidth="lg" sx={{ pt: 5, pb: 2 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/search" element={<MovieSearch />} />
            <Route path="/movies/:slug" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
