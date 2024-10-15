import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Slogan() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const typoStyle = {
    fontSize: isMatch ? 20 : 31,
    textAlign: "left",
    lineHeight: "1.1",
    whiteSpace: "nowrap",
  };
  return (
    <Stack direction={"column"} spacing={3}>
      {isMatch ? (
        <Typography
          sx={{
            fontSize: isMatch ? 25 : 31,
            textAlign: "left",
            lineHeight: "1.1",
          }}
        >
          Unlock <b>efficiency</b> with <b>intelligent automation </b>
          for stability and strength design
        </Typography>
      ) : (
        <Stack direction={"column"}>
          <Typography sx={typoStyle}>
            Unlock <b>efficiency</b> with <b>intelligent</b>
          </Typography>
          <Typography sx={typoStyle}>
            <b>automation </b> for stability and
          </Typography>
          <Typography sx={typoStyle}>strength design</Typography>
        </Stack>
      )}

      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Typography sx={{ fontSize: 18 }}>INSTANT ANALYSIS</Typography>
        <hr style={{ width: 150, border: "1px solid #000" }} />
      </Stack>
    </Stack>
  );
}

export default Slogan;
