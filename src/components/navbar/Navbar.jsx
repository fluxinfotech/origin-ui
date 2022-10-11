import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RightMenuItem from "./RightMenuItem";
import { routes } from "../../constants/RouteConstants";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import SubMenu from "./SubMenu";
import { Container } from "@mui/system";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const handleDrawerToggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  console.log("Navbar rendered!");
  return (
    <AppBar
      sx={{ position: "absolute", background: "#FDEEDC", color: "#E38B29" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <SideDrawer
              isOpen={isOpen}
              handleDrawerToggle={handleDrawerToggle}
            ></SideDrawer>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                // display: { xs: 'none', md: 'flex' },
                fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              M-LOGO
            </Typography>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO1
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
          {routes.map((route) => {
              if (route.subRoutes) {
               return <SubMenu key={route.name} route={route}></SubMenu>
              }
              return (
                <Typography
                  key={route.name}
                  sx={{
                    mr: "2rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "none",
                    background: "#FDEEDC",
                    color: "#E38B29",
                  }}
                  noWrap
                  component={Link}
                  to={route.link}
                >
                  {route.name}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <RightMenuItem />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
