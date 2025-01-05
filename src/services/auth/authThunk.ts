import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../../api/apiClient';
;

// Define types for successful and error responses
interface Payload {
  user: { id: number; name: string; email: string };
  token: string;
}

interface Error {
  message: string;
}


interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string; // If the API returns the refresh token as well
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export const loginThunk = createAsyncThunk<Payload,  { email: string; password: string },  { rejectValue: Error }>
  ("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('auth/login', credentials);
    return response.data as Payload; 
  } catch (error: any) {  // eslint-disable-line
    const errorMessage: Error = {
      message: error.response?.data?.message || "An error occurred",
    };
    return rejectWithValue(errorMessage);
  }
});

export const registerThunk = createAsyncThunk<
  Payload, 
  { email: string; password: string; confirm_password: string }, 
  { rejectValue: Error } 
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('auth/register', userData);
    console.log(response)
    return response.data as Payload; 
  } catch (error: any) {  // eslint-disable-line
    const errorMessage: Error = {
      message:
        error.response?.data?.message ||
        "An error occurred during registration",
    };
    return rejectWithValue(errorMessage);
  }
});


export const refreshAccessToken = createAsyncThunk<
  RefreshTokenResponse,   
  { rejectValue: string } 
>(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return rejectWithValue('No refresh token found');
    }
    try {
      // Type the response from Axios
      const response = await axios.post<RefreshTokenResponse>('/auth/refresh', { refreshToken });
      return response.data; 
    } catch (error: any) {  // eslint-disable-line
      return rejectWithValue(error.response?.data || 'Failed to refresh token');
    }
  }
);

