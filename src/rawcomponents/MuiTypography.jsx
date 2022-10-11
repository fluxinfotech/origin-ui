import { Typography } from "@mui/material";
// import React from "react";

function MuiTypography() {
  return (
    <>
      <Typography variant="h1"> h1 Heading</Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4"> h4 Heading</Typography>
      <Typography variant="h5"> h5 Heading</Typography>
      <Typography variant="h6"> h6 Heading</Typography>

      <Typography variant="subtitle1" gutterBottom>Subtitle 1</Typography>  {/*gutterBottom = bottom margin*/} 
      <Typography variant="subtitle2" gutterBottom>Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
        in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias
        distinctio nostrum. Minima ex dolor modi inventore sapiente
        necessitatibus aliquam fuga et.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
        in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias
        distinctio nostrum. Minima ex dolor modi inventore sapiente
        necessitatibus aliquam fuga et.
      </Typography>
    </>
  );
}

export default MuiTypography;
