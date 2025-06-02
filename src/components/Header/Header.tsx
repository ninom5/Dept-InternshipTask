import { routes } from "@routes/index";
import { Link, useNavigate } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
  const token = localStorage.getItem("jwt");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate(routes.LOGIN);
  };

  return (
    <nav className={s.header}>
      <Link to={routes.HOME} className={s.navItem}>
        Home
      </Link>

      <Link to={routes.COUNTRIES} className={s.navItem}>
        Countries
      </Link>

      {token ? (
        <p className={s.navItem} onClick={handleLogout}>
          Logout
        </p>
      ) : (
        <Link to={routes.LOGIN} className={s.navItem}>
          Login
        </Link>
      )}
    </nav>
  );
};
