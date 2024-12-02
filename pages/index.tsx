import { MainTitle } from "@components/MainTitle";

import { CountriesSearch } from "@features/countries/components/CountriesSearch";
import { PopularCountriesSection } from "@features/countries/sections/PopularCountriesSection";
import { ProductFunctionalitySection } from "@features/productFunctionality/sections/ProductFunctionalitySection";
import { getAppServerSideProps } from "@features/ssr/getAppServerSideProps";
import { MainLayout } from "@layouts/MainLayout";
import Head from "next/head";

export const getServerSideProps = getAppServerSideProps(async (store, ctx) => {
  return {
    props: {},
  };
});

export default function MainPage() {
  return (
    <MainLayout>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Приложение Yesim" />
        <meta name="description" content="Описание" />
        <meta property="og:site_name" content="Yesim" />
      </Head>
      <MainTitle />
      <CountriesSearch />
      <PopularCountriesSection />
      <ProductFunctionalitySection />
    </MainLayout>
  );
}
