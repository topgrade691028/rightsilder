import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { strengthTabData } from "./testStrengthTabData";

export const getStarupData = createAsyncThunk(
  "modelManip/getModelData",
  async (formData, thunkAPI) => {
    try {
      var res;
      await axios
        .get(`${BASE_URL}/?get_sample_model=model`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            get_sample_model: "model",
          },
        })
        .then((response) => {
          res = response.data;
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);

export const getStabilityTabData = createAsyncThunk(
  "modelManip/getStabilityTabData",
  async (model, thunkAPI) => {
    const { dim, soil_data, materials } = model;
    const reqModel = { dim, soil_data, materials };
    try {
      const params = { model: JSON.stringify(reqModel) };
      const queryString = new URLSearchParams(params).toString();
      var res;
      await axios
        .get(`${BASE_URL}/?${queryString}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          res = { stabilityTabData: response.data, newModel: model };
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);

export const getStrengthTabData = createAsyncThunk(
  "modelManip/getStrengthTabData",
  async (model, thunkAPI) => {
    const { dim, soil_data, materials } = model;
    const reqModel = { dim, soil_data, materials };
    try {
      const params = { model: JSON.stringify(reqModel) };
      const queryString = new URLSearchParams(params).toString();
      var res;
      await axios
        .get(`${BASE_URL}/?${queryString}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          res = { strengthTabData: response.data };
        });
      return strengthTabData;
      // return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);
