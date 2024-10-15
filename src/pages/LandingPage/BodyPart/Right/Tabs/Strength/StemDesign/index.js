import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTabs from "../CommonFiles/CustomTabs";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";
import StemDesignTabBody from "../TabsBody/stemDesignTabBody";

function Index({ designOfStem }) {
  const [value, setValue] = useState(designOfStem?.controlling_case - 1);
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (value) {
      case 0:
        setTabDSData(designOfStem?.lc_1);
        break;
      case 1:
        setTabDSData(designOfStem?.lc_2);
        break;
      case 2:
        setTabDSData(designOfStem?.lc_3);
        break;
      case 3:
        setTabDSData(designOfStem?.lc_4);
        break;
      case 4:
        setTabDSData(designOfStem?.lc_5);
        break;
      default:
        setTabDSData(designOfStem?.lc_1);
        break;
    }
  }, [value]);

  return (
    <Box>
      <CustomTabs value={value} setValue={setValue} />
      <StemDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
