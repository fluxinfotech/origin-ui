import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function MuiSelect() {
  const [country, setCountry] = useState([]);
  console.log({ country });
  const handleChange = (_evnt) => {
    setCountry(_evnt.target.value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        fullWidth
        size="small"
        onChange={handleChange}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN"> India</MenuItem>
        <MenuItem value="US"> USA</MenuItem>
        <MenuItem value="AU"> Austraia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
