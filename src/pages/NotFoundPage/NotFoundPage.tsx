import { routes } from "@routes/index";
import { useNavigate } from "react-router-dom";
import s from "./notFoundPage.module.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className={s.notFoundPage}>
      <h1>404</h1>
      <h3>Page not found</h3>

      <div className={s.buttonWrapper}>
        <button onClick={() => navigate(routes.HOME)}>Go home</button>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </section>
  );
};
