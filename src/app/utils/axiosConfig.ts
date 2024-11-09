import axios from 'axios';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Ensure this env variable is set
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If your API requires cookies (JWT or session-based auth)
});

// Add an interceptor to attach the token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the access token from localStorage, Redux, or cookies
    const accessToken = localStorage.getItem('accessToken'); // Or use Redux to fetch the token

    // If there is an access token, attach it to the request headers
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
