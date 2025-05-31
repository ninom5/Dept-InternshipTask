import { useFetchCountries } from "@api/index";
import type { CountryType } from "types";
import React, { useEffect, useState } from "react";
import { CountriesList } from "@components/index";

export const CountriesFetcher = () => {
  const { mutateAsync: fetchCountries } = useFetchCountries();
  const [limit, setLimit] = useState<number | undefined>(undefined);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const handleClick = async () => {
    const data = await fetchCountries(limit);
    console.log(data.data);
    setCountries(data.data);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  useEffect(() => {
    console.log(countries);
    console.log(limit);
  }, [countries, limit]);

  return (
    <section>
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

      <button onClick={() => handleClick()}>Get countries</button>

      <CountriesList countries={countries} />
    </section>
  );
};
