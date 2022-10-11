import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  // AppBar,
  styled,
  // Toolbar,
  // Typography,
  InputBase,
  // Box,
  Avatar,
  alpha,
} from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;
const navItems = ["Men", "Women", "Kis", "Food", "Accessories"];

function DrawerAppBar(props) {
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (_evnt) => {
    console.log(_evnt.target.value);
    setSearchVal(_evnt.target.value);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const StyledSearch = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%",
    
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUII
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              justifyContent: "space-between",
              display: { xs: "none", sm: "block" },
            }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
