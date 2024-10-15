import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../static/retainingwall_logo 1.png";
import CustomButton from "../CustomButton";
import html2pdf from "html2pdf.js";
import BodyPart from "../../pages/LandingPage/BodyPart/index";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Appbar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { model, modelData } = useSelector((state) => state.uiReducer);
  const [excelOpen, setExcelOpen] = useState(true);
  const [pdfOpen, setPdfOpen] = useState(false);

  // const handleDownloadExcel =
  // async () => {
  //   try {
  //     const params = { model: JSON.stringify(model) };
  //     const queryString = new URLSearchParams(params).toString();

  //     const response = await fetch(
  //       "https://ashva.pythonanywhere.com/get_excel?" + queryString,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "filename.xlsx";
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error("Error downloading file:", error);
  //   }
  // };
  const handleTabClick = (caller) => {
    switch (caller) {
      case "excel":
        setExcelOpen(true);
        setPdfOpen(false);
        break;
      case "pdf":
        setExcelOpen(false);
        setPdfOpen(true);
        break;
      default:
        setExcelOpen(true);
        setPdfOpen(false);
        break;
    }
  };
  const handleDownloadExcel = React.useCallback(async () => {
    const newModel = {
      dim: modelData?.dim,
      materials: modelData?.materials,
      soil_data: modelData?.soil_data,
      info: {
        ...modelData?.info,
        format: "OK JSON, this is a: <class 'str'>",
      },
    };
    const caller = "excel";
    handleTabClick(caller);
    try {
      const response = await fetch(
        "https://ashva.pythonanywhere.com/get-excel" +
          "?model=" +
          JSON.stringify(newModel),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "filename.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }, [modelData]);

  const handleDownloadPdf = React.useCallback(async () => {
    const caller = "pdf";
    handleTabClick(caller);
    try {
      const params = { model: JSON.stringify(modelData) };
      const queryString = new URLSearchParams(params).toString();

      const response = await fetch(
        "https://ashva.pythonanywhere.com/get-pdf?model=" +
          JSON.stringify(modelData),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "filename.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }, [modelData]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFF", boxShadow: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <img src={logo} alt="logo" />
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: isMatch ? "18px" : "25px",
              }}
            >
              Retaining Wall
            </Typography>
            <Typography
              sx={{ color: "#000", fontSize: isMatch ? "15px" : "20px" }}
            >
              Beta
            </Typography>
          </Stack>
          {isMatch ? (
            <>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </>
          ) : (
            <>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                {/* <div onClick={handleExcelExport}> */}
                <div onClick={handleDownloadExcel}>
                  <CustomButton
                    backgroundcolor={excelOpen ? "#171414" : "#D9D9D9"}
                    txtcolor={excelOpen ? "#FFF" : "#000"}
                    fontSize={16}
                    fontWeight={700}
                  >
                    Excel
                  </CustomButton>
                </div>
                {/* <div onClick={handleExportClick}> */}
                <div onClick={handleDownloadPdf}>
                  <CustomButton
                    backgroundcolor={pdfOpen ? "#171414" : "#D9D9D9"}
                    txtcolor={pdfOpen ? "#FFF" : "#000"}
                    fontSize={16}
                    fontWeight={700}
                  >
                    Download PDF
                  </CustomButton>
                </div>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>
      {/* drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem>
            <ListItemButton onClick={handleDownloadExcel}>
              <CustomButton
                backgroundcolor={excelOpen ? "#171414" : "#D9D9D9"}
                txtcolor={excelOpen ? "#FFF" : "#000"}
                fontSize={16}
                fontWeight={700}
              >
                Excel
              </CustomButton>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleDownloadPdf}>
              <CustomButton
                backgroundcolor={pdfOpen ? "#171414" : "#D9D9D9"}
                txtcolor={pdfOpen ? "#FFF" : "#000"}
                fontSize={16}
                fontWeight={700}
              >
                Download PDF
              </CustomButton>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
