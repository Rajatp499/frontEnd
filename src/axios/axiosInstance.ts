import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//request Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) 
        config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default axiosInstance;
