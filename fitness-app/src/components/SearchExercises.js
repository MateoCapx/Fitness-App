/* State is data that changes with time */

import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState(" ");
  // Current State: The current value of the state (search).
  // State Setter Function: A function to update the state (setSearch).

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=25&offset=0",
        exerciseOptions
      );

      // ____________ Filter to search different exercises ____________
      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) || // <--- This combination is often used to check if a string contains a certain substring, regardless of the case.
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch(""); // <-- this code Clears the search bar
      setSearch(JSON.stringify(searchedExercises));

      console.log(exerciseData);
    }
  };

  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p={"20px"}>
      {/* ___________________________________________________________ */}

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        mt="50px"
        textAlign={"center"}
      >
        Search for Your Favorite <br />
        Exercies
      </Typography>

      {/* ___________________________________________________________ */}
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "10px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        {/* ___________________________________________________________ */}

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        {/* ___________________________________________________________ */}
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <h2> help</h2>

        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
