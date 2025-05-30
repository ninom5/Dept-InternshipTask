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

const login = async (loginData: LoginData) => {
  const response = api.post<LoginData, JwtResponse>("/login", loginData);
  return response;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],

    onSuccess: (responseData: JwtResponse) => {
      localStorage.setItem("jwt", responseData.data.token);
      toast.success("Successfully logged in");
    },
    onError: (error: string) => {
      toast.error(`Error: ${error}`);
    },
  });
};
