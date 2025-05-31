import { useFetchCountries } from "@api/index";
import type { CountryType } from "types";
import React, { useState } from "react";
import { CountriesList } from "@components/index";
import s from "./countriesFetcher.module.css";

export const CountriesFetcher = () => {
  const { mutateAsync: fetchCountries } = useFetchCountries();
  const [limit, setLimit] = useState<number | undefined>(undefined);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const handleClick = async () => {
    const data = await fetchCountries(limit);
    setCountries(data.data);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <section className={s.countriesFetcher}>
      <div className={s.fetchControls}>
        <h1>Countries</h1>
        <select defaultValue="" onChange={handleLimitChange}>
          <option value="" disabled>
            Select limit
          </option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <button onClick={() => handleClick()} className={s.fetchButton}>
          Get countries
        </button>
      </div>

      <CountriesList countries={countries} />
    </section>
  );
};
