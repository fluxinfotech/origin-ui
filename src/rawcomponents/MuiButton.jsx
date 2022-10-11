import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

function MuiButton() {
  const [formats, setFromat] = useState([]);

  console.log(formats);
  
  const handleFormatChange = (_evnt,updatedFormats) => {
    setFromat(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Google!
        </Button>
        {/* used for card footer or comfirmation popup */}
        <Button variant="contained"> Contained </Button>
        {/* primary action login or register */}
        <Button variant="outlined"> Outlined </Button> {/* cancel or go back */}
      </Stack>

      <Stack spacing={2} direction="row">
        <span>text btn</span>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <span>contained btn</span>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <span>outlined btn</span>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" display="block">
        <span>sized btn</span>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <span>btn with text</span>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => {
            alert("clicked!");
          }}
        >
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <span>icon btn</span>
        <IconButton aria-label="send" color="primary">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="error">
          <CancelIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <span>text btn grp</span>
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button
            onClick={() => {
              alert("left clicked!");
            }}
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <span>contained btn grp</span>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <span>outlined btn grp</span>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <span>Toggle btn:</span>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          color='success'
          orientation="vertical"
          size="small"
          exclusive
          onChange={handleFormatChange}
        >
          <ToggleButton value="italic" >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="bold" >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="underline" >
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      
    </Stack>
  );
}

export default MuiButton;
