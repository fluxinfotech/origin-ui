import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import ProductMenu from "./ProductMenu";

function Product() {
  return (
    <Box component="main" sx={{ p: 3, mt: 8 }}>
      <Grid container spacing={2}>
        <Grid
          item
          lg={2.5}
          md={2.5}
          sm={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <ProductMenu />
        </Grid>

        <Grid item lg={9.5} md={9.5} sm={9} xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
