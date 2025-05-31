import type { CountryType } from "types";

export const CountryCard = ({ country }: { country: CountryType }) => {
  return <div>{country.name}</div>;
};
