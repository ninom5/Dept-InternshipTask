import { useMutation } from "@tanstack/react-query";
import { api } from "api";
import { toast } from "react-toastify";
import type { LoginData } from "types";

interface JwtResponse {
  token: string;
}

const login = async (loginData: LoginData) => {
  return api.post<LoginData, JwtResponse>("/login", loginData);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],

    onSuccess: (data: JwtResponse) => {
      localStorage.setItem("jwt", data.token);
      toast.success("Successfully logged in");
    },
    onError: (error: string) => {
      toast.error(`Error: ${error}`);
    },
  });
};
