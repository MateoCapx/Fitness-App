import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Fitness App </h1>
      <Box width="400px">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
