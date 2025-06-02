import type { LoginData } from "types";
import React, { useState } from "react";
import { useLogin } from "@api/index";
import { useNavigate } from "react-router-dom";
import { routes } from "@routes/index";
import s from "./loginForm.module.css";

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
    <form onSubmit={handleSubmit} className={s.form}>
      <h2>Login</h2>
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input
          className={s.loginInput}
          type="email"
          name="email"
          value={loginData.email}
          placeholder="email@example.com"
          onChange={handleChange}
          required
        />
      </div>

      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <input
          className={s.loginInput}
          type="password"
          name="password"
          value={loginData.password}
          placeholder="password"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" id="login-button" className={s.loginButton}>
        Login
      </button>
    </form>
  );
};
