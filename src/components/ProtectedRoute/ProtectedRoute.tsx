import { routes } from "@routes/index";
import { Link, Outlet } from "react-router-dom";
import s from "./protectedRoute.module.css";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("jwt");

  if (!token || token.trim() === "")
    return (
      <div className={s.unauthorized}>
        <h1>Unauthorized</h1>
        <p>
          Please{" "}
          <Link to={routes.LOGIN} className={s.loginLink}>
            login
          </Link>{" "}
          to continue
        </p>
      </div>
    );

  return <Outlet />;
};
