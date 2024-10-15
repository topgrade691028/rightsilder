import { Box, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function ToeDesignTabBody({ tabData }) {
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
      <OutputComponent title={"Moment, Mu"} value={tabData?.moment} sf={0.3} />
      <OutputComponent title={"Shear, Vu"} value={tabData?.shear} sf={0.3} />
    </Box>
  );
}

export default ToeDesignTabBody;
