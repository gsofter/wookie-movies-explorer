import axios from "axios";

const ACCESS_TOKEN = "Wookie2021";

export const axiosInstance = axios.create({
  baseURL: "https://wookie.codesubmit.io",
});

// interceptors
axiosInstance.interceptors.request.use((config) => {
  if (config.headers) config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  return config;
});

export default axiosInstance;
