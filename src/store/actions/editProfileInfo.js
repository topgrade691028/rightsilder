import { createAsyncThunk } from "@reduxjs/toolkit";
import { host } from "../../constants";
import axios from "axios";
import jwt_decode from "jwt-decode";
export const editProfileInfo = createAsyncThunk(
  "user/editProfileInfo",
  async (formData, thunkAPI) => {
    try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Authorization": `Bearer ${access_token}}`,
    //       // Accept: "application/json",
    //     },
    //   };
      const access_token = localStorage.getItem("access_token");
      var decodedToken = jwt_decode(access_token);
      var username = decodedToken.sub;
      var res;
      await axios
        .put(`${host}/api/users/edit-profile/${username}`, formData)
        .then((response) => {
          res = response.data;
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);
