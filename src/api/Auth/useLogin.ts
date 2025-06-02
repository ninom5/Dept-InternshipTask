import { useMutation } from "@tanstack/react-query";
import { api } from "api";
import { toast } from "react-toastify";
import type { LoginData } from "types";

interface JwtResponse {
  data: {
    userId: number;
    token: string;
  };
}

const login = (loginData: LoginData) => {
  return api.post<LoginData, JwtResponse>("/login", loginData);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],

    onSuccess: (responseData: JwtResponse) => {
      localStorage.setItem("jwt", responseData.data.token);
      toast.success("Successfully logged in");
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      toast.error(`Error: ${message}`);
    },
  });
};
