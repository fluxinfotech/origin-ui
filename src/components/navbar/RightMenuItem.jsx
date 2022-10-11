import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

function RightMenuItem() {
  return (
    <>
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
            component={Link}
            to={"/wishlist"}
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
            component={Link}
            to={"/singin"}
          >
            <LoginIcon />
          </IconButton>
          <Typography variant="caption" display="block">
            SingIn
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default RightMenuItem;
