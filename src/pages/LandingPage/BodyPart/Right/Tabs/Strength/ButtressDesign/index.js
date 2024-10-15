import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtressDesignTabBody from "../TabsBody/ButtressDesignTabBody";
import CustomTabs from "../CommonFiles/CustomTabs";

function Index({ designOfButtress }) {
  const [value, setValue] = useState(designOfButtress?.controlling_case - 1);
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (value) {
      case 0:
        setTabDSData(designOfButtress?.lc_1);
        break;
      case 1:
        setTabDSData(designOfButtress?.lc_2);
        break;
      case 2:
        setTabDSData(designOfButtress?.lc_3);
        break;
      case 3:
        setTabDSData(designOfButtress?.lc_4);
        break;
      case 4:
        setTabDSData(designOfButtress?.lc_5);
        break;
      default:
        setTabDSData(designOfButtress?.lc_1);
        break;
    }
  }, [value]);

  return (
    <Box>
      <CustomTabs value={value} setValue={setValue} />
      <ButtressDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
