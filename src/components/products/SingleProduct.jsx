import {
  Grid,
  Typography,
  Container,
  Box,
  CardMedia,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import React from "react";
import { Stack } from "@mui/system";

function SingleProduct() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    // <Paper
    //   sx={{
    //     p: 2,
    //     margin: "auto",
    //     // maxWidth: 800,
    //     flexGrow: 1,
    //     // backgroundColor: (theme) =>
    //     //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //   }}
    // >

    <>
      {/* <Container> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3.7}>
          <CardMedia
            component="img"
            height="450px"
            image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg"
            alt="Show"
          />
        </Grid>

        <Grid item xs={12} sm={3.7}>
          <CardMedia
            component="img"
            height="450px"
            image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg"
            alt="Show"
          />
        </Grid>

        <Grid item xs={12} sm={4} container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography variant="subtitle1" component="div">
                {productData.name}
              </Typography>
              <Typography variant="body2">{productData.description}</Typography>
              <Grid item>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  {productData.cost}
                </Typography>
              </Grid>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default SingleProduct;

const productData = {
  name: "Shoes",
  description: "des",
  cost: "540",
  origin: "Kolhapur",
};
