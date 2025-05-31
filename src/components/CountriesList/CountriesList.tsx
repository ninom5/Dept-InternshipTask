import type { CountryType } from "types";
import { CountryCard } from "@components/index";

export const CountriesList = ({ countries }: { countries: CountryType[] }) => {
  return countries.map((country) => <CountryCard country={country} />);
};
