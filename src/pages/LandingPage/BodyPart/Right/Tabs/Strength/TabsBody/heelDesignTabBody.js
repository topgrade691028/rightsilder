import { Box, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function heelDesignTabBody({ tabData }) {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CustomTypo>Moment and Shear Check</CustomTypo>
        <CustomTypo fontsize={"12px"} fontweight={400}>
          DCR
        </CustomTypo>
      </Stack>
      <OutputComponent
        title={"Longitudinal Mom."}
        value={tabData?.longitudinal}
        sf={0.3}
      />
      <OutputComponent
        title={"Horizontal Moment"}
        value={tabData?.shear}
        sf={0.3}
      />
      <OutputComponent
        title={"Shear, Vu"}
        value={tabData?.shear}
        sf={0.3}
      />
    </Box>
  );
}

export default heelDesignTabBody;
