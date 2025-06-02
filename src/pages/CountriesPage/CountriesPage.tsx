import { CountriesFetcher, CountriesList, GoogleMap } from "@components/index";
import s from "./countriesPage.module.css";
import { useEffect, useState } from "react";

export const CountriesPage = () => {
  const [favoriteCountries, setFavoriteCountries] = useState([]);

  useEffect(() => {
    const countries = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteCountries(countries);
  }, []);

  useEffect(() => {
    const update = () => {
      const countries = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavoriteCountries(countries);
    };

    window.addEventListener("favUpdated", update);
    window.addEventListener("storage", update);

    update();

    return () => {
      window.removeEventListener("favUpdated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return (
    <section className={s.countriesPage}>
      <div className={s.listMapWrapper}>
        <CountriesFetcher />

        <GoogleMap />
      </div>

      <div className={s.favoriteListWrapper}>
        <h2 className={s.favoriteListHeading}>Your favorite countries</h2>
        <CountriesList countries={favoriteCountries} />
      </div>
    </section>
  );
};
