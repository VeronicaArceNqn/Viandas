import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const MuiRating = () => {
  const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    }
    console.log(value)
  return (
    <div className=" w-full">
      <Stack spacing={1}>
        <Rating name="half-rating" Value={value}  size="large" onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default MuiRating;
