import { TitleWrapper } from "@components/TitleWrapper";

import { MainLayout } from "@layouts/MainLayout";
import { CountriesSearchSection } from "@sections/CountriesSearchSection";
import { PopularCountriesSection } from "@sections/PopularCountriesSection";
import { ProductFunctionalitySection } from "@sections/ProductFunctionalitySection";
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
      <CountriesSearchSection />
      <PopularCountriesSection />
      <ProductFunctionalitySection />
    </MainLayout>
  );
}
