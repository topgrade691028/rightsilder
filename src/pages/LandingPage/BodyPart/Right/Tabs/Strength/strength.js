import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import LoadCombination from "./LoadCombination";
import StemDesign from "./StemDesign";
import HeelDesign from "./HeelDesign";
import ToeDesign from "./ToeDesign";
import ShearKeyDesign from "./ShearKeyDesign";
import ButtressDesign from "./ButtressDesign";

import { IoIosArrowDown } from "react-icons/io";
import { Box, IconButton, Stack, styled } from "@mui/material";
import CustomTypo from "../../../../../../components/CustomTypo";
import { useState } from "react";
import { dispatch } from "../../../../../../store";
import { getStrengthTabData } from "../../../../../../store/actions/uiActions";
import { useSelector } from "react-redux";
import isCorrectIcon from "../../../../../../static/ischeckIcon.png";
import isIncorrectIcon from "../../../../../../static/isIncorrectIcon.png";
import CustomButton from "../../../../../../components/CustomButton";

function Strength() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDesignStemExpanded, setIsDesignStemExpanded] = useState(true);
  const [isDesignHeelExpanded, setIsDesignHeelExpanded] = useState(true);
  const [isDesignToeExpanded, setIsDesignToeExpanded] = useState(true);
  const [isDesignShearExpanded, setIsDesignShearExpanded] = useState(true);
  const [isDesignButtressExpanded, setIsDesignButtressExpanded] =
    useState(true);
  const [expandAll, setExpandAll] = useState(false);
  const { stabilityTabData, strengthTabData } = useSelector(
    (state) => state.uiReducer
  );
  const IsCorrectIcon = () => (
    <img
      src={isCorrectIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );
  const IsIncorrectIcon = () => (
    <img
      src={isIncorrectIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );

  React.useEffect(() => {
    dispatch(getStrengthTabData(stabilityTabData));
  }, []);

  React.useEffect(() => {
    console.log("strengthTabData: ", strengthTabData);
  }, [strengthTabData]);
  // const StyledAccordionTest = styled(Accordion)((props) => {
  //   console.log(props);
  //   return {
  //     // ".MuiSvgIconRoot": {
  //     //   display: "none",
  //     // },
  //     // ".MuiPaper-root-MuiAccordion-root:before": {
  //     //   height: "0px",
  //     //   backgroundColor: "red",
  //     // },
  //     ".MuiPaper-root.MuiAccordion-root:before": {
  //       // Target the :before pseudo-element
  //       position: "absolute",
  //       left: "0",
  //       top: "-1px",
  //       right: "0",
  //       height: "1px",
  //       opacity: "1",
  //       backgroundColor: "rgba(0, 0, 0, 0.12)",
  //       transition:
  //         "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //       content: '""', // Add this line to specify the pseudo-element content
  //     },
  //   };
  // });
  const styleAccordion = {
    ".MuiAccordionSummary-root": { paddingLeft: 0 },
    ".MuiAccordionDetails-root": {
      paddingTop: 1,
      paddingX: 0,
    },
    boxShadow: "none",
    ".MuiSvgIconRoot": {
      display: "none",
    },
    borderWidth: `0px `,
    "&:not(:lastChild)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  };

  const styleDropdownIcon = {
    transform: isExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon2 = {
    transform: isDesignStemExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon3 = {
    transform: isDesignHeelExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon4 = {
    transform: isDesignToeExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon5 = {
    transform: isDesignShearExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon6 = {
    transform: isDesignButtressExpanded ? "rotate(-180deg)" : "rotate(0)",
    transition: "0.3s ease-in-out",
  };
  const StyledAccordion = styled((props) => (
    <Accordion elevation={0} square {...props} />
  ))(({ theme }) => ({
    ".MuiSvgIconRoot": {
      display: "none",
    },
    borderWidth: `0px `,
    "&:not(:lastChild)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));
  const handleExpandAll = (event) => {
    event.stopPropagation();
    if (expandAll) {
      setIsDesignStemExpanded(false);
      setIsDesignHeelExpanded(false);
      setIsDesignToeExpanded(false);
      setIsDesignShearExpanded(false);
      setIsDesignButtressExpanded(false);
    } else {
      setIsDesignStemExpanded(true);
      setIsDesignHeelExpanded(true);
      setIsDesignToeExpanded(true);
      setIsDesignShearExpanded(true);
      setIsDesignButtressExpanded(true);
    }
    setExpandAll(!expandAll);
  };
  return (
    <Box>
      <Stack direction={"column"} spacing={"10px"}>
        <CustomTypo>Summary</CustomTypo>
        <Stack direction={"row"} spacing={"7px"}>
          <CustomTypo fontsize={"12px"} fontweight={400}>
            {strengthTabData?.summary?.summary}
          </CustomTypo>
          <Box sx={{ width: 100 }}>
            {strengthTabData?.summary?.check && <IsCorrectIcon />}{" "}
            {strengthTabData?.summary?.check == false && (
              <Stack direction={"row"} spacing={"11px"} sx={{ width: 50 }}>
                <IsIncorrectIcon />
                <CustomTypo fontweight={400}>
                  {strengthTabData?.summary?.issues}
                </CustomTypo>
              </Stack>
            )}
          </Box>
        </Stack>
      </Stack>

      <Accordion
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Load Combinations</CustomTypo>
            <IconButton style={styleDropdownIcon}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.load_combo && (
            <LoadCombination loadCombo={strengthTabData?.load_combo} />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignStemExpanded}
        onChange={() => setIsDesignStemExpanded(!isDesignStemExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            width: "100%",
            ".MuiAccordionSummary-content": {
              margin: 0,
            },
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Stack
              spacing={3}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CustomTypo>Design of Stem</CustomTypo>
              <IconButton style={styleDropdownIcon2}>
                <IoIosArrowDown color="#47C5FB" />
              </IconButton>
            </Stack>
            <Stack
              direction={"row"}
              spacing={"6px"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Box onClick={() => console.log("boom")}></Box>
              <CustomButton
                bordercolor={"#D9D9D9"}
                variant="outlined"
                fontSize={"10px"}
                onClick={(event) => {
                  event.stopPropagation();
                  console.log("button clicked");
                }}
              >
                Show Controlling
              </CustomButton>
              <CustomButton
                bordercolor={"#D9D9D9"}
                variant="outlined"
                fontSize={"10px"}
                onClick={(event) => handleExpandAll(event)}
              >
                Expand All
              </CustomButton>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_stem && (
            <StemDesign
              designOfStem={strengthTabData?.results?.design_of_stem}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignHeelExpanded}
        onChange={() => setIsDesignHeelExpanded(!isDesignHeelExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Heel</CustomTypo>
            <IconButton style={styleDropdownIcon3}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_heel && (
            <HeelDesign
              designOfHeel={strengthTabData?.results?.design_of_heel}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignToeExpanded}
        onChange={() => setIsDesignToeExpanded(!isDesignToeExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Toe</CustomTypo>
            <IconButton style={styleDropdownIcon4}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_toe && (
            <ToeDesign designOfToe={strengthTabData?.results?.design_of_toe} />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignShearExpanded}
        onChange={() => setIsDesignShearExpanded(!isDesignShearExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Shear Key</CustomTypo>
            <IconButton style={styleDropdownIcon5}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_shear_key && (
            <ShearKeyDesign
              designOfShearKey={strengthTabData?.results?.design_of_shear_key}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignButtressExpanded}
        onChange={() => setIsDesignButtressExpanded(!isDesignButtressExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Buttress</CustomTypo>
            <IconButton style={styleDropdownIcon6}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_buttress && (
            <ButtressDesign
              designOfButtress={strengthTabData?.results?.design_of_buttress}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Strength;
