import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "pages/MovieList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "components/Header";
import MovieDetail from "pages/MovieDetail";
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container maxWidth="lg" sx={{ pt: 5, pb: 2 }}>
          <Routes>
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:slug" element={<MovieDetail />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
