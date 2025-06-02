import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";
import { routes } from "@routes/index";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <h1 className={s.title}>🌍 Country Explorer 🌍</h1>
      <p className={s.description}>
        Discover countries around the world. View flags, names, and save your
        favorites. Explore the globe in a fun and easy way!
      </p>

      <button className={s.button} onClick={() => navigate(routes.COUNTRIES)}>
        Start exploring
      </button>
    </div>
  );
};
