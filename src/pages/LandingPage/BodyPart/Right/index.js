import { Box, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../../../components/CustomButton";
import Slogan from "../../../../components/Slogan";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import Stability from "./Tabs/stability";
import Strength from "./Tabs/Strength/strength";
function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const { stabilityTabData } = useSelector((state) => state.uiReducer);
  const [stabilityOpen, setStabilityOpen] = useState(true);
  const [strengthOpen, setStrengthOpen] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const handleTabClick = (caller) => {
    switch (caller) {
      case "stability":
        setactiveTab(1);
        setStabilityOpen(true);
        setStrengthOpen(false);
        break;
      case "strength":
        setactiveTab(2);
        setStabilityOpen(false);
        setStrengthOpen(true);
        break;
      default:
        setactiveTab(1);
        setStabilityOpen(true);
        setStrengthOpen(false);
        break;
    }
  };

  return (
    <Stack spacing={"40px"}>
      {isMatch && <Slogan />}

      <Stack
        direction={"column"}
        justifyContent={"center"}
        spacing={"76px"}
        sx={{
          backgroundColor: "rgba(236, 236, 236, 0.25)",
          paddingY: 10,
          borderRadius: 5,
          paddingX: 2,
        }}
      >
        <Stack
          direction={isMatchXS ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Box onClick={() => handleTabClick("stability")}>
            <CustomButton
              fontWeight={700}
              fontSize={16}
              backgroundcolor={stabilityOpen ? "#171414" : "#D9D9D9"}
              txtcolor={stabilityOpen ? "#FFF" : "#000"}
              sx={{ paddingX: isMatchXS ? 12 : 6, width: "100%" }}
            >
              Stability
            </CustomButton>
          </Box>
          <Box onClick={() => handleTabClick("strength")}>
            <CustomButton
              fontSize={16}
              fontWeight={700}
              backgroundcolor={strengthOpen ? "#171414" : "#D9D9D9"}
              txtcolor={strengthOpen ? "#FFF" : "#000"}
              sx={{ paddingX: isMatchXS ? 12 : 6, width: "100%" }}
            >
              Strength
            </CustomButton>
          </Box>
        </Stack>

        {/* stability output space */}
        {activeTab == 1 && <Stability />}
        {activeTab == 2 && <Strength />}
      </Stack>
    </Stack>
  );
}

export default Index;
