import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { appConfig } from "../appConfig";

// Creating Axios Instance
const API: AxiosInstance = axios.create({
  baseURL: appConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Creating Request Intercepeter
API.interceptors.request.use(
  async (axiosConfig) => {
    return axiosConfig;
  },
  (error: AxiosError) => Promise.reject(error),
)

// Response Intercepter
API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response?.data;
  },
  async (error: any) => Promise.reject(error),
)

export { API }