import { createAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, IState, IResponse, IError } from "../types/interfaces";

export const changeFilter = createAction("contacts/changeFilter");

axios.defaults.baseURL = "http://localhost:3001/api";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registration = createAsyncThunk<
  IResponse,
  IUser,
  { rejectValue: IError }
>("auth/registration", async (userInfo, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<IResponse> = await axios.post(
      "/users/signup",
      userInfo
    );
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});

export const logIn = createAsyncThunk<
  IResponse,
  IUser,
  { rejectValue: IError }
>("auth/logIn", async (userInfo: IUser, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<IResponse> = await axios.post(
      "/users/login",
      userInfo
    );
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});

export const logOut = createAsyncThunk<
  void,
  undefined,
  { rejectValue: IError }
>("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    await axios.get("/users/logout");
    token.unset();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});

export const currentUser = createAsyncThunk<
  IUser,
  undefined,
  { state: IState; rejectValue: IError }
>("auth/currentUser", async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({ message: `` });
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get("/users/current");
    return data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});

export const updateAvatar = createAsyncThunk<
  { avatarURL: string },
  string,
  { rejectValue: IError }
>("auth/updateAvatar", async (avatar, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch("/users/avatars", avatar);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});

export const updateAvailableLeasons = createAsyncThunk<
  Number[],
  { leasons: Number[] },
  { rejectValue: IError }
>("auth/updateAvailableLeasons", async (lesons, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch("/users/availableLessons", lesons);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      throw error;
    }
  }
});
