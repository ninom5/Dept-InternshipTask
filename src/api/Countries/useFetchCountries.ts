import { api } from "@api/base";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { CountriesListType } from "types";

const fetchCountries = (limit?: number) => {
  return api.get<never, CountriesListType>(`/api/countries?limit=${limit}`);
};

export const useFetchCountries = () => {
  return useMutation({
    mutationFn: fetchCountries,
    mutationKey: ["fetch-countries"],
    onError: (error: string) => {
      toast.error(`Error fetching countries: ${error}`);
    },
  });
};
