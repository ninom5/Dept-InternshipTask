import type { CountryType } from "types";
import { CountryCard } from "@components/index";
import s from "./countryList.module.css";

export const CountriesList = ({ countries }: { countries: CountryType[] }) => {
  return (
    <section className={s.countriesList}>
      {countries.length !== 0 ? (
        countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))
      ) : (
        <em>
          <h1>No countries available</h1>
        </em>
      )}
    </section>
  );
};
