import {
  Box,
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { routes } from "../../constants/RouteConstants";
import { Link } from "react-router-dom";
import React from "react";

function SideDrawer({ isOpen, handleDrawerToggle }) {
  
  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Origine 1.0
      </Typography>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}
            component={Link}  to={route.link}
            >

              <ListItemText primary={route.name} />
              {/* {routes.map((route) => (
                
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
              ))} */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={isOpen}
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
    </>
  );
}

export default SideDrawer;
