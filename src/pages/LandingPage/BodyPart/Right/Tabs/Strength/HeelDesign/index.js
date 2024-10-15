import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import StemDesignTabBody from "../TabsBody/stemDesignTabBody";
import CustomTabs from "../CommonFiles/CustomTabs";

function Index({ designOfHeel }) {
  const [value, setValue] = useState(designOfHeel?.controlling_case - 1);
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (value) {
      case 0:
        setTabDSData(designOfHeel?.lc_1);
        break;
      case 1:
        setTabDSData(designOfHeel?.lc_2);
        break;
      case 2:
        setTabDSData(designOfHeel?.lc_3);
        break;
      case 3:
        setTabDSData(designOfHeel?.lc_4);
        break;
      case 4:
        setTabDSData(designOfHeel?.lc_5);
        break;
      default:
        setTabDSData(designOfHeel?.lc_1);
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
