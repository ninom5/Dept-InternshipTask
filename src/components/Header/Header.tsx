import { routes } from "@routes/routes";
import { Link } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
  return (
    <nav className={s.header}>
      <Link to={routes.HOME} className={s.navItem}>
        Home
      </Link>
      <Link to={routes.LOGIN} className={s.navItem}>
        Login
      </Link>
      <Link to={routes.COUNTRIES} className={s.navItem}>
        Countries
      </Link>
    </nav>
  );
};
