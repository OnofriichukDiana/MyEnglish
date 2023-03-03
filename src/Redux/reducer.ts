import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IInitialState } from "../types/interfaces";
import {
  registration,
  logIn,
  logOut,
  currentUser,
  updateAvailableLeasons,
  updateAvatar,
} from "./actions";

const initialState: IInitialState = {
  user: {
    name: "",
    email: "",
    password: "",
    availableLeasons: [],
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: "",
          email: "",
          password: "",
          availableLeasons: [],
        };
        state.token = "";
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = `https://phonebook-be.onrender.com/${action.payload.avatarURL}`;
      })
      .addCase(updateAvailableLeasons.fulfilled, (state, action) => {
        state.user.availableLeasons = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
