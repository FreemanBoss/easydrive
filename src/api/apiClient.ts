import axios from "axios";

const API_BASE_URL = "https://boilerplate-b7j4.onrender.com/api/v1/";


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This is crucial for sending cookies with requests
});


export default apiClient;