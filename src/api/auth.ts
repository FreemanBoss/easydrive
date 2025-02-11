import apiClient from './apiClient';



export const register = async (credentials: string ) => {
    try {
        const response = await apiClient.post('auth/register', credentials);
        console.log(response)
        return ;
    } catch (error: any ) { // eslint-disable-line
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};


export const login = async (credentials: string) => {
    try {
        const response = await apiClient.post('/auth/login', credentials);
        console.log("API Response:", response.data); // Log the full response

        // Extract the user from the data field
        return response.data;  // Assuming the user info is inside the "data" field
    } catch (error: any) { // eslint-disable-line
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const logout = async () => {
    try {
        await apiClient.post('/auth/logout');
    } catch (error) {
        console.log(error)
        // throw new Error('Logout failed', error);
    }
};

export const refreshToken = async () => {
    try {
        const response = await apiClient.post('/auth/refresh');
        console.log('Refresh token response:', response); // Log the response for debugging
        return response; // Return the response so it can be used in your hook
    } catch (error) {
        console.log('Error refreshing token:', error);
        return null; // Return null if there's an error
    }
};
export const googleAuth = async() =>{
 try {
    window.location.href = 'https://handyman-backend-c1ri.onrender.com/api/v1/auth/google'; 
  } catch (error) {
    console.error('Google OAuth initiation failed:', error);
    throw error;
  }
}