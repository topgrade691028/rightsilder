import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import OutputComponent from "../../../../../components/OutputComponent";

function Stability() {
  const { stabilityTabData } = useSelector((state) => state.uiReducer);
  const { seismic, pmf } = stabilityTabData;
  const statics = stabilityTabData?.static;

  return (
    <Stack direction={"column"}>
      <Box mb={4}>
        <Typography
          sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
        >
          Static
        </Typography>
        <OutputComponent
          title={"Overturning"}
          value={statics?.overturning}
          sf={statics?.sf_overturning}
        />
        <OutputComponent
          title={"Compression"}
          value={statics?.compression}
          sf={statics?.sf_compression}
        />
        <OutputComponent
          title={"Bearing"}
          value={statics?.bearing}
          sf={statics?.sf_bearing}
        />
        <OutputComponent
          title={"Sliding"}
          value={statics?.sliding}
          sf={statics?.sf_sliding}
        />
        <OutputComponent
          title={"Flotation"}
          value={statics?.flotation}
          sf={statics?.sf_flotation}
        />
      </Box>
      <Box mb={4}>
        <Typography
          sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
        >
          Seismic
        </Typography>
        <OutputComponent
          title={"Overturning"}
          value={seismic?.overturning}
          sf={seismic?.sf_overturning}
        />
        <OutputComponent
          title={"Compression"}
          value={seismic?.compression}
          sf={seismic?.sf_compression}
        />
        <OutputComponent
          title={"Bearing"}
          value={seismic?.bearing}
          sf={seismic?.sf_bearing}
        />
        <OutputComponent
          title={"Sliding"}
          value={seismic?.sliding}
          sf={seismic?.sf_sliding}
        />
        <OutputComponent
          title={"Flotation"}
          value={seismic?.flotation}
          sf={seismic?.sf_flotation}
        />
        <Stack direction={"column"}></Stack>
      </Box>
      <Box mb={4}>
        <Typography
          sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
        >
          Peak Maximum Flow (PMF)
        </Typography>
        <OutputComponent
          title={"Overturning"}
          value={pmf?.overturning}
          sf={pmf?.sf_overturning}
        />
        <OutputComponent
          title={"Compression"}
          value={pmf?.compression}
          sf={pmf?.sf_compression}
        />
        <OutputComponent
          title={"Bearing"}
          value={pmf?.bearing}
          sf={pmf?.sf_bearing}
        />
        <OutputComponent
          title={"Sliding"}
          value={pmf?.sliding}
          sf={pmf?.sf_sliding}
        />
        <OutputComponent
          title={"Flotation"}
          value={pmf?.flotation}
          sf={pmf?.sf_flotation}
        />
      </Box>
    </Stack>
  );
}

export default Stability;
