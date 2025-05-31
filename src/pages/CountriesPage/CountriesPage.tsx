import {
  CountriesFetcher,
  // CountriesList,
  UserCountriesList,
} from "@components/index";

export const CountriesPage = () => {
  return (
    <section>
      <h1>Countries</h1>

      <CountriesFetcher />

      {/* <CountriesList /> */}
      <UserCountriesList />
    </section>
  );
};
