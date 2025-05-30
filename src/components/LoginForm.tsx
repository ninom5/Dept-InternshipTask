import type { LoginData } from "types";
import React, { useState } from "react";
import { useLogin } from "@api/index";
import { useNavigate } from "react-router-dom";
import { routes } from "@routes/index";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate: login } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(loginData, {
      onSuccess: () => {
        setLoginData({ email: "", password: "" });
        navigate(routes.COUNTRIES);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Email</label>
      <input
        type="email"
        name="email-input"
        value={loginData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password-input">Password</label>
      <input
        type="password"
        name="password-input"
        value={loginData.password}
        onChange={handleChange}
        required
      />

      <button type="submit" id="login-button">
        Login
      </button>
    </form>
  );
};
