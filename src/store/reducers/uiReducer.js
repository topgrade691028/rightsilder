import { createSlice } from "@reduxjs/toolkit";
import {
  getStabilityTabData,
  getStarupData,
  getStrengthTabData,
} from "../actions/uiActions";
import { dispatch } from "..";

const initialState = {
  starupDataLoading: false,
  model: {},
  modelData: {},
  stabilityTabData: {},
  strengthTabData: {},
  mode: "light",
  height: 0,
};
const UiSlice = createSlice({
  name: "modelManip",
  initialState,
  reducers: {
    setUiMode: (state, action) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setHeight: (state, action) => {},
    setModel: (state, action) => {
      state.model = action.payload;
    },
  },

  extraReducers: (builder) => {
    //left
    builder.addCase(getStarupData.pending, (state) => {
      state.starupDataLoading = true;
    });
    builder.addCase(getStarupData.fulfilled, (state, action) => {
      state.model = action.payload;
      state.starupDataLoading = false;
    });
    builder.addCase(getStarupData.rejected, (state, action) => {
      state.starupDataLoading = false;
    });

    //stability tab
    builder.addCase(getStabilityTabData.pending, (state) => {});
    builder.addCase(getStabilityTabData.fulfilled, (state, action) => {
      state.stabilityTabData = action.payload.stabilityTabData;
      state.modelData = action.payload.newModel;
    });
    builder.addCase(getStabilityTabData.rejected, (state, action) => {});

    //strength tab
    builder.addCase(getStrengthTabData.pending, (state) => {});
    builder.addCase(getStrengthTabData.fulfilled, (state, action) => {
      state.strengthTabData = action.payload;
    });
    builder.addCase(getStrengthTabData.rejected, (state, action) => {});
  },
});

export const { setUiMode, setHeight, setModel } = UiSlice.actions;
export default UiSlice.reducer;
