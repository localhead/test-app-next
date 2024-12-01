import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { countriesApi } from "../store/apiService";
import { CountryRecord } from "../store/types";

export const useGetCountriesApiData = () => {
  const [data, setData] = useState<CountryRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);
  const router = useRouter();

  const [getCountriesQ] = countriesApi.useLazyGetCountriesQuery();

  const locale = router.locale ?? "ru";

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res = await getCountriesQ({ lang: locale }).unwrap();
        setData(res[0]);
      } catch (e) {
        setIsError("Ошибка при загрузке");
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [getCountriesQ]);

  return { data, isLoading, isError };
};
