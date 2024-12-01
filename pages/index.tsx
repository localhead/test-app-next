import { TitleWrapper } from "@components/TitleWrapper";

import { CountriesSearch } from "@features/countries/components/CountriesSearch";
import { PopularCountriesSection } from "@features/countries/sections/PopularCountriesSection";
import { ProductFunctionalitySection } from "@features/productFunctionality/sections/ProductFunctionalitySection";
import { MainLayout } from "@layouts/MainLayout";
import Head from "next/head";

export default function MainPage() {
  return (
    <MainLayout>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Приложение Yesim" />
        <meta name="description" content="Описание" />
        <meta property="og:site_name" content="Yesim" />
      </Head>
      <TitleWrapper padding="45px 0px" textAlign="center">
        <TitleWrapper.Large>
          eSIM карты с интернетом для путешествий и бизнеса
        </TitleWrapper.Large>
      </TitleWrapper>
      <CountriesSearch />
      <PopularCountriesSection />
      <ProductFunctionalitySection />
    </MainLayout>
  );
}
