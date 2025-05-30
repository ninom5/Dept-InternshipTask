import { LoginForm } from "@components/index";
import s from "./loginPage.module.css";

export const LoginPage = () => {
  return (
    <section className={s.loginPage}>
      <h1>Login</h1>
      <LoginForm />
    </section>
  );
};
