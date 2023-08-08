import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("userinfo")) {
      config.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("userinfo")!).token
      }`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
