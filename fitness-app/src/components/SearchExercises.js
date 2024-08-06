/* State data that changes with time */

import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  // Current State: The current value of the state (search).
  // State Setter Function: A function to update the state (setSearch).
  const handleSearch = async () => {
    if (search) {
      // const exerciseData = await fetchData
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
    </Stack>
  );
};

export default SearchExercises;
