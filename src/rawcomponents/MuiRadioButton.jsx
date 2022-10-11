import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function MuiRadioButton() {
  const [val, setVal] = useState("");
  console.log(val);
  const handleChange = (_evnt) => {
    setVal(_evnt.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={val}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
