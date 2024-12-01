import { CountryRecord } from "../store/types";

export function sortCountriesByPopularity(
  countries: CountryRecord[] | null
): CountryRecord[] | null {
  if (!countries) return null;

  // Create a copy of the array and then sort it
  return [...countries].sort(
    (a, b) => parseInt(b.popular) - parseInt(a.popular)
  );
}
