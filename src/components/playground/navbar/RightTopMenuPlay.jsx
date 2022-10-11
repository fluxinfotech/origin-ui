import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Stack } from "@mui/system";

import React from "react";

function RightTopMenuPlay() {
  return (
    <Box
    sx={{
      display: "flex",
      gap: 2,
      flexWrap: "wrap",
      alignItems: "center",
    }}
  >
    <Stack direction="column" alignItems="center">
      <IconButton
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#FFD8A9", color: "#E38B29" }}
        // component={Link}  to={"/wishlist"}
      >
        <FavoriteBorder />
      </IconButton>
      <Typography variant="caption" display="block">
        Wishlist
      </Typography>
    </Stack>

    <Stack direction="column" alignItems="center">
      <IconButton
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#FFD8A9", color: "#E38B29" }}
      >
        <ShoppingBasketOutlinedIcon />
      </IconButton>
      <Typography variant="caption" display="block">
        Shop
      </Typography>
    </Stack>

    <Stack direction="column" alignItems="center">
      <IconButton
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#FFD8A9", color: "#E38B29" }}
        // component={Link}  to={"/login"}
      >
        <LoginIcon />
      </IconButton>
      <Typography variant="caption" display="block">
        logIn
      </Typography>
    </Stack>
  </Box>
  );
}

export default RightTopMenuPlay;
