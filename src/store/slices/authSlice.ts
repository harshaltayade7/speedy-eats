import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_SERVICE_BASE_URL } from "../../config/constants";

interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("jwt") || null,
  error: null,
};

interface UserCredentials {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk<string, UserCredentials>(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    const response = await axios.post(
      `${USER_SERVICE_BASE_URL}/user/login`,
      user
    );
    if (response.data === "login unsuccessful") {
      return rejectWithValue("Login unsuccessful");
    } else {
      localStorage.setItem("jwt", response.data.token);
      return response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("jwt");
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
