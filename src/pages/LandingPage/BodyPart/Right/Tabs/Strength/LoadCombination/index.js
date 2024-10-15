import * as React from "react";
import checkIcon from "../../../../../../../static/checkicon.png";
import unCheckIcon from "../../../../../../../static/uncheckicon.png";
import warningIcon from "../../../../../../../static/warningIcon.png";
import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CustomTypo from "../../../../../../../components/CustomTypo";
import CustomButton from "../../../../../../../components/CustomButton";
import { useState } from "react";

function Index({ loadCombo }) {
  // const { lc1, lc2, lc3, lc4, lc5 } = loadCombo;
  const [loadCombo1, setLc1] = useState(loadCombo?.lc1?.value);
  const [loadCombo2, setLc2] = useState(loadCombo?.lc2?.value);
  const [loadCombo3, setLc3] = useState(loadCombo?.lc3?.value);
  const [loadCombo4, setLc4] = useState(loadCombo?.lc4?.value);
  const [loadCombo5, setLc5] = useState(loadCombo?.lc5?.value);

  const [lc1Check, setLc1Check] = useState(false);
  const [lc2Check, setLc2Check] = useState(true);
  const [lc3Check, setLc3Check] = useState(false);
  const [lc4Check, setLc4Check] = useState(false);
  const [lc5Check, setLc5Check] = useState(false);

  const [checkAll, setCheckAll] = useState(false);
  const CheckIcon = () => (
    <img src={checkIcon} alt="icon" style={{ width: "20px", height: "20px" }} />
  );

  const UnCheckIcon = () => (
    <img
      src={unCheckIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );
  const WarinigIcon = ({ isWarning }) => (
    <>
      {isWarning ? (
        <Box sx={{ width: "1px" }}>
          <img src={warningIcon} alt="icon" style={{ height: "15px" }} />
        </Box>
      ) : (
        <Box sx={{ width: "1px" }}></Box>
      )}
    </>
  );

  const styleFormControl = {
    m: 1,
    width: "100%",
    borderColor: "#47C5FB",
    ".Mui-focused": {
      border: "2px solid #47C5FB",
    },
  };
  const styleOutlinedInput = {
    height: "24px",
    fontSize: "10px",
    width: "full",
    border: "1px solid #D9D9D9",
    ".Mui-focused": {
      border: "2px solid #47C5FB",
    },
  };
  const styleMiniStack = {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    spacing: "10px",
    paddingRight: "25px",
  };
  const Title = ({ title }) => (
    <Box sx={{ width: "50px" }}>
      <CustomTypo fontSize={"12px"} fontweight={400}>
        {title}
      </CustomTypo>
    </Box>
  );
  const CustomCheckBox = ({ checked, setChecked }) => (
    <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        icon={<UnCheckIcon />}
        checkedIcon={<CheckIcon />}
      />

      <WarinigIcon isWarning={true} />
    </Stack>
  );

  const handleCheckUncheck = () => {
    if (checkAll) {
      setLc1Check(false);
      setLc2Check(false);
      setLc3Check(false);
      setLc4Check(false);
      setLc5Check(false);
    } else {
      setLc1Check(true);
      setLc2Check(true);
      setLc3Check(true);
      setLc4Check(true);
      setLc5Check(true);
    }
    setCheckAll(!checkAll);
  };
  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mt={-6}>
        <Box onClick={() => handleCheckUncheck()}>
          <CustomButton
            bordercolor={"#D9D9D9"}
            variant="outlined"
            fontSize={"10px"}
          >
            {checkAll && "Uncheck All"}
            {!checkAll && "Check All"}
          </CustomButton>
        </Box>
      </Box>
      <Stack direction={"column"} spacing={-1.5}>
        <Box sx={styleMiniStack}>
          <Title title="LC 1" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo1}
              onChange={(event) => setLc1(event.target.value)}
              onBlur={() => {
                console.log("unfucused1");
              }}
              sx={styleOutlinedInput}
              id="filled-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomCheckBox checked={lc1Check} setChecked={setLc1Check} />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 2" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo2}
              onChange={(event) => setLc2(event.target.value)}
              onBlur={() => {
                console.log("unfucused2");
              }}
              sx={styleOutlinedInput}
              id="filled-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomCheckBox checked={lc2Check} setChecked={setLc2Check} />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 3" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo3}
              onChange={(event) => setLc3(event.target.value)}
              onBlur={() => {
                console.log("unfucused3");
              }}
              sx={styleOutlinedInput}
              id="filled-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomCheckBox checked={lc3Check} setChecked={setLc3Check} />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 4" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo4}
              onChange={(event) => setLc4(event.target.value)}
              onBlur={() => {
                console.log("unfucused4");
              }}
              sx={styleOutlinedInput}
              id="filled-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomCheckBox checked={lc4Check} setChecked={setLc4Check} />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 5" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo5}
              onChange={(event) => setLc5(event.target.value)}
              onBlur={() => {
                console.log("unfucused5");
              }}
              sx={styleOutlinedInput}
              id="filled-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomCheckBox checked={lc5Check} setChecked={setLc5Check} />
        </Box>
      </Stack>
    </div>
  );
}

export default Index;
