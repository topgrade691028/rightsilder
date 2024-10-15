import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Right from "./Right/index";
import LeftParent from "./Left";
function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box marginY={6}>
      <Grid
        container
        spacing={isMatch ? 0 : 20}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item lg={6} sm={10} xs={10} ml={-3}>
          <LeftParent />
        </Grid>
        <Grid item lg={6} sm={10} xs={10} mt={"20px"}>
          <Right />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
