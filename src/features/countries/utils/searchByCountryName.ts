import { CountryRecord } from "../store/types";

export function searchByCountryName(
  countries: CountryRecord[] | null,
  countryName: string | null
) {
  if (!countries || !countryName) return null;

  return countries.filter(
    (item) =>
      item.country.toLowerCase().includes(countryName.toLowerCase()) ||
      item.iso.toLowerCase().includes(countryName.toLowerCase())
  );
}
