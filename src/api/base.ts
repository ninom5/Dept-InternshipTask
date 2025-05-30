import type { ErrorResponseType } from "types";
import axios from "axios";

export const api = axios.create({
  baseURL: "bootcamp2025.depster.me",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.get("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error: ErrorResponseType) => {
    if (error.response)
      return Promise.reject(error.response.data.message || error.message);

    return Promise.reject("Network error");
  }
);
