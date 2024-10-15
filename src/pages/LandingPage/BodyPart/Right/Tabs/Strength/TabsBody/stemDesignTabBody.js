import { Box, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function StemDesignTabBody({tabData}) {
  return (
    <Stack direction={"column"} spacing={2}>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <CustomTypo>Horizontal Moment</CustomTypo>
          <CustomTypo fontsize={"12px"} fontweight={400}>
            DCR
          </CustomTypo>
        </Stack>
        <OutputComponent
          title={"Max Positive, +Mu"}
          value={tabData?.horizontal_moment?.max_positive}
          sf={0.3}
        />
        <OutputComponent
          title={"Max Negative, -Mu"}
          value={tabData?.horizontal_moment?.max_negative}
          sf={0.3}
        />
        <OutputComponent
          title={"Shear, Vu"}
          value={tabData?.horizontal_moment?.shear}
          sf={0.3}
        />
      </Box>
      <Box>
        <CustomTypo>Vertical Moment</CustomTypo>
        <OutputComponent
          title={"Max Positive, +Mu"}
          value={tabData?.vertical_moment?.max_positive}
          sf={1}
        />
        <OutputComponent
          title={"Max Negative, -Mu"}
          value={tabData?.vertical_moment?.max_negative}
          sf={1.3}
        />
        <OutputComponent
          title={"Shear, Vu"}
          value={tabData?.vertical_moment?.shear}
          sf={1.3}
        />
      </Box>
      <Box>
        <OutputComponent
          title={"Shear Friction"}
          value={tabData?.shear_friction}
          sf={1.3}
        />
      </Box>
    </Stack>
  );
}

export default StemDesignTabBody;
