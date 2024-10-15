import { Typography } from "@mui/material";
import React from "react";

function CustomTypo(props) {
  const { fontweight, fontsize, txtcolor, children } = props;
  return (
    <Typography
      sx={{
        ...props,
        fontWeight: fontweight,
        fontSize: fontsize,
        color: txtcolor,
      }}
    >
      {children}
    </Typography>
  );
}
CustomTypo.defaultProps = {
  txtcolor: "#000",
  fontsize: "14px",
  fontweight: 700,
};

export default CustomTypo;
