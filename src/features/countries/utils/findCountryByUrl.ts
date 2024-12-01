import { CountryRecord } from "../store/types";

export function findCountryByName(
  url: string,
  countries: CountryRecord[]
): CountryRecord | null | undefined {
  if (!countries || !url) return null;

  return countries.find((country) => {
    const countryFromUrl = country.url.split("/")[2];
    return countryFromUrl.toLowerCase() === url.toLowerCase();
  });
}
