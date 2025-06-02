import s from "./countriesFetcher.module.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFetchCountries } from "@api/index";
import { CountriesList, Spinner } from "@components/index";
import type { CountryType } from "types";
import throttle from "lodash.throttle";

export const CountriesFetcher = () => {
  const [limit, setLimit] = useState<number | undefined>(undefined);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const { mutateAsync: fetchCountries, isPending } = useFetchCountries();

  const throttleRef = useRef<ReturnType<typeof throttle>>(null);

  const handleClick = useCallback(async () => {
    const data = await fetchCountries(limit);
    setCountries(data.data);
  }, [fetchCountries, limit]);

  useEffect(() => {
    throttleRef.current = throttle(() => {
      handleClick();
    }, 1200);

    return () => {
      throttleRef.current?.cancel();
    };
  }, [handleClick]);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <section className={s.countriesFetcher}>
      <div className={s.fetchControls}>
        <h1>Countries fetcher</h1>

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

        <button
          onClick={() => throttleRef.current?.()}
          className={s.fetchButton}
          disabled={isPending}
        >
          Get countries
        </button>
      </div>

      {isPending ? <Spinner /> : <CountriesList countries={countries} />}
    </section>
  );
};
