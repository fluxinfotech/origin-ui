import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: "10px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList() {
  return (
    <>
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              laptop: 1024,
              tablet: 640,
              mobile: 0,
              desktop: 1280,
            },
          },
        })}
      >
        <Grid container >
          {Array.from(Array(5)).map((_, index) => (
            <Grid mobile={6} tablet={6} laptop={3} key={index} padding={0.5} >
              
              <Card >
                <CardMedia
                  component="img"
                  height="30%"
                  image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg"
                  alt="Product"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>

      {/* <Box 
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {/* <Paper elevation={0} /> */}
      {/* <Paper /> */}
      {/* <Paper elevation={3} />
      </Box> */}

      {/* <Card sx={{ maxWidth: 250,  }} >
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg"
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={2.5}
            md={2.5}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Menu
          </Grid> */}
      {/* <Grid item lg={9.5} md={9.5} sm={9} xs={12}> */}
      {/* <Grid spacing={1}> 
       <Box    marginRight={3}>
            <Item>xs=6 md=8</Item>
          </Box> */}
      {/* <Grid item xs={6} md={3} sm={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={3} sm={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={3} sm={6}>
            <Item>xs=6 md=8</Item>
          </Grid> */}
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </Box> */}
    </>
  );
}

export default ProductList;
