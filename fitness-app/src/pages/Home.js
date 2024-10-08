import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercise from "../components/Exercise";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
