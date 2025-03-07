import axios from "axios";
import { ENV } from "../config/env";

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;

// 인터셉터 적용 가능:
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// API 응답 타입을 적용하면 더 안전한 코드 작성 가능
// export const getUsers = async (): Promise<User[]> => {
//   const { data } = await api.get<ApiResponse<User[]>>('/users');
//   return data.data;
// };
