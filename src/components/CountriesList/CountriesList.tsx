import type { CountryType } from "types";
import { CountryCard } from "@components/index";
import s from "./countryList.module.css";

export const CountriesList = ({ countries }: { countries: CountryType[] }) => {
  return (
    <section className={s.countriesList}>
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </section>
  );
};
