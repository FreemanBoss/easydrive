import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, refreshAccessToken } from './authThunk';

// Define the interface for the state
interface AuthState {
  user: { id: number; name: string; email: string } | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
  message: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  message: null,
  isAuthenticated: false,
};

// Create the authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle refreshAccessToken
      .addCase(refreshAccessToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        const { accessToken, user } = action.payload;
        state.token = accessToken;
        state.user = user;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('accessToken', accessToken); 
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
        localStorage.removeItem('accessToken');
      })
      // Handle login
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { accessToken, refreshToken, user }: any = action.payload;  // eslint-disable-line
        state.isLoading = false;
        state.user = user;
        state.token = accessToken;
        state.refreshToken = refreshToken;
        state.isAuthenticated = true;
        localStorage.setItem('accessToken', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as any; // eslint-disable-line
      })
      // Handle register
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        const { accessToken, refreshToken, user } : any = action.payload;  // eslint-disable-line
        state.isLoading = false;
        state.user = user;
        state.token = accessToken;
        state.refreshToken = refreshToken;
        state.isAuthenticated = true;
        localStorage.setItem('accessToken', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as any; // eslint-disable-line
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
