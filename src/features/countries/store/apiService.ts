import { API_URL } from "@features/api/constants";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { COUNTRIES_URL_SUBPATH } from "./constants";
import { GetCountriesRequest, GetCountriesResponse } from "./types";

const COUNTRY_TAG = "COUNTRY_TAG" as const;
const getCountryItemTag = (id: string) => ({
  type: COUNTRY_TAG,
  id,
});

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, timeout: 8000 }),

  tagTypes: [COUNTRY_TAG],
  endpoints: (builder) => {
    return {
      getCountries: builder.query<GetCountriesResponse, GetCountriesRequest>({
        providesTags: (response) => [
          COUNTRY_TAG,
          ...(response?.map((item) => getCountryItemTag(item[0].id)) ?? []),
        ],
        query: (request) => ({
          url: `${COUNTRIES_URL_SUBPATH}/`,
          method: "GET",
          params: request,
        }),
      }),
    };
  },
});
