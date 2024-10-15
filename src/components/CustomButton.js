import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomButton = styled(Button)(
  ({
    backgroundcolor,
    txtcolor,
    fontSize,
    radius,
    fontWeight,
    bordercolor,
    variant,
    ...props
  }) => {
    const getContainedStyle = () => ({
      ...props,
      fontFamily: "Poppins",
      fontStyle: "normal",
      backgroundColor: backgroundcolor,
      borderRadius: radius,
      textTransform: "capitalize",
      paddingY: 2,
      fontSize: fontSize,
      color: txtcolor,
      boxShadow: "none",
      fontWeight: fontWeight,
      border: variant === "outlined" ? `1px solid ${bordercolor}` : "none",
      "&:hover": {
        backgroundColor: backgroundcolor,
        ...(variant === "outlined" && {
          border: `1px solid ${bordercolor}`,
        }),
        "&.Mui-disabled": {
          backgroundColor: backgroundcolor,
          color: txtcolor,
        },
      },
    });
    return {
      ...getContainedStyle(),
    };
  }
);

CustomButton.defaultProps = {
  backgroundcolor: "#FFF",
  txtcolor: "#000",
  fontWeight: 400,
  fontSize: "12px",
  bordercolor: "#FFF",
  variant: "contained",
  radius: "12px",
};
export default CustomButton;
