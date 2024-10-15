import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Left from "./Form";
import { Box, CircularProgress } from "@mui/material";
function Index() {
  const { model, starupDataLoading } = useSelector((state) => state.uiReducer);
  const [modelLength, setModelLenght] = useState(0);
  useEffect(() => {
    setModelLenght(Object.keys(model).length);
  }, [model]);

  return (
    <Box>
      {starupDataLoading && (
        <Box sx={{ marginTop: 0 }}>
          <CircularProgress color="inherit" />
        </Box>
      )}
      {modelLength > 0 && <Left />}
    </Box>
  );
}

export default Index;
