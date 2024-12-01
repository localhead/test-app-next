interface Operator {
  phone_view: string;
  prefix: string;
  generation: Generation[];
}

interface Generation {
  name: string;
}

export interface CountryPricePerDay {
  amount: string;
  currency: string;
  iso2: string;
  iso3: string;
  symbol: string;
}

export type CountryRecord = {
  country: string;
  iso: string;
  id: string;
  fl_unlimited: string;
  cost_per_day: string;
  url: string;
  new: boolean;
  popular: string;
  cost_per_gb: string;
  search: string[];
  operators: Operator[];
  price: CountryPricePerDay;
  price_per_day: CountryPricePerDay;
};

export type GetCountriesResponse = [CountryRecord[]];

export type GetCountriesRequest = {
  lang?: "ru" | "en";
};
