import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ToeDesignTabBody from "../TabsBody/toeDesignTabBody";
import CustomTabs from "../CommonFiles/CustomTabs";

function Index({ designOfToe }) {
  const [value, setValue] = useState(designOfToe?.controlling_case - 1);
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (value) {
      case 0:
        setTabDSData(designOfToe?.lc_1);
        break;
      case 1:
        setTabDSData(designOfToe?.lc_2);
        break;
      case 2:
        setTabDSData(designOfToe?.lc_3);
        break;
      case 3:
        setTabDSData(designOfToe?.lc_4);
        break;
      case 4:
        setTabDSData(designOfToe?.lc_5);
        break;
      default:
        setTabDSData(designOfToe?.lc_1);
        break;
    }
  }, [value]);

  return (
    <Box>
      <CustomTabs value={value} setValue={setValue} />
      <ToeDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
