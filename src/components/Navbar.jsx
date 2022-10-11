import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Avatar,
  alpha,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  // justifyContent: "space-between",
});

const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

function Navbar() {
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (_evnt) => {
    console.log(_evnt.target.value);
    setSearchVal(_evnt.target.value);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          eCom!
        </Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <StyledSearch>
          <SearchIcon />
          <InputBase
            placeholder="search..."
            value={searchVal}
            onChange={handleSearch}
          />
        </StyledSearch>

        <Icons>
          <IconButton aria-label="wishlist">
            <Badge badgeContent={4} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="cart">
            <Badge badgeContent={1} color="secondary">
              <LocalMallIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <Avatar
              sx={{ height: "30px", width: "30px" }}
              alt=""
              src="/static/images/avatar/1.jpg"
            />
          </IconButton>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
