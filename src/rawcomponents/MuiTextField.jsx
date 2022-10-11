import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="outlined"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField label="filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="First Name"
          required
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password!"}
        />

        <TextField
          label="Password"
          type="password"
          required
          helperText="do not share your password!"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="First Name"
          required
          size="small"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          required
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          required
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end"> kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
