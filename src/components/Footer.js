import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ height: "300px", backgroundColor: "#171414" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
        // backgroundColor={"#542"}
        paddingX={10}
        paddingY={5}
      >
        <Box>
          <hr style={{ width: 150, border: "2px solid #FFF" }} />
        </Box>
        <Typography sx={{ color: "#FFF" }}>San Francisco, CA</Typography>
        <Typography sx={{ color: "#FFF" }}>Give us feedback</Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
