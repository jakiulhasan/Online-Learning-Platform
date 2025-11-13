import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://online-learning-server-three.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional: 10s timeout
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
