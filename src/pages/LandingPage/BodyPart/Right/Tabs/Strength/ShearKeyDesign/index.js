import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTabs from "../CommonFiles/CustomTabs";
import ShearKeyDesignTabBody from "../TabsBody/shearKeyDesignTabBody";

function Index({ designOfShearKey }) {
  const [value, setValue] = useState(designOfShearKey?.controlling_case - 1);
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (value) {
      case 0:
        setTabDSData(designOfShearKey?.lc_1);
        break;
      case 1:
        setTabDSData(designOfShearKey?.lc_2);
        break;
      case 2:
        setTabDSData(designOfShearKey?.lc_3);
        break;
      case 3:
        setTabDSData(designOfShearKey?.lc_4);
        break;
      case 4:
        setTabDSData(designOfShearKey?.lc_5);
        break;
      default:
        setTabDSData(designOfShearKey?.lc_1);
        break;
    }
  }, [value]);

  return (
    <Box>
      <CustomTabs value={value} setValue={setValue} />
      <ShearKeyDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
