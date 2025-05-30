import type { ErrorResponseType } from "types";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://bootcamp2025.depster.me",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error: ErrorResponseType) => {
    console.error("Error: ", error);

    if (error.response) {
      const data = error.response.data;

      const message =
        data?.message ||
        data?.errors?.[0]?.message ||
        data?.errors?.[0] ||
        error.message;

      return Promise.reject(message);
    }

    return Promise.reject("Network error");
  }
);
