import LandingPage from "./pages/LandingPage";
import { Box, Typography } from "@mui/material";
import ThreeDTest from "./pages/ThreeDTest";
import { ThemeProvider } from "@mui/material";
import customThemeFunction from "./assets/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeDWrapper from "./pages/ThreeDTest/parent";
function App() {
  return (
    <ThemeProvider theme={customThemeFunction}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  paddingTop: "82px",
                  height: "100%",
                  marginBottom: 0,
                }}
              >
                <LandingPage />
              </Box>
            }
          ></Route>
          <Route path="/threed" element={<ThreeDWrapper />}></Route>
          <Route
            path={"*"}
            element={
              <Box>
                <Typography>No such path!</Typography>
              </Box>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
