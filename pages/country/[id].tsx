import { CountriesAndOperatorsSection } from "@features/countries/sections/CountriesAndOperatorsSection";
import { CountryDetailInfoSection } from "@features/countries/sections/CountryDetailInfoSection";
import { countriesApi } from "@features/countries/store/apiService";
import { CountryRecord } from "@features/countries/store/types";
import { findCountryByName } from "@features/countries/utils/findCountryByUrl";
import { ProductFunctionalitySection } from "@features/productFunctionality/sections/ProductFunctionalitySection";
import { getAppServerSideProps } from "@features/ssr/getAppServerSideProps";
import { MainLayout } from "@layouts/MainLayout";

export const getServerSideProps = getAppServerSideProps(async (store, ctx) => {
  const param = ctx.params?.id;
  const lang = ctx.locale;

  if (!param || typeof param !== "string") {
    return {
      notFound: true,
    };
  }

  const response = await store.dispatch(
    countriesApi.endpoints.getCountries.initiate({ lang: lang })
  );

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  const country = findCountryByName(param, response.data[0]);

  return {
    props: { country } as CountryDetailPageProps,
  };
});

interface CountryDetailPageProps {
  country: CountryRecord;
}

export default function CountryDetailPage(props: CountryDetailPageProps) {
  const { country } = props;

  const { country: name, iso } = country;

  return (
    <MainLayout>
      <CountryDetailInfoSection name={name} iso={iso} />
      <CountriesAndOperatorsSection name={name} iso={iso} />
      <ProductFunctionalitySection />
    </MainLayout>
  );
}
