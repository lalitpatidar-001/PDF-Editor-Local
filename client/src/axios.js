import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const STATIC_PATH = "http://localhost:5000/api/pdf/"

export default axiosInstance;