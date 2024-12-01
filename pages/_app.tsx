import { interFont } from "@features/fonts/utils/localFont";
import { storeWrapper } from "@features/store/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";

import "@styles/colors.scss";
import "@styles/globals.scss";
import "@styles/variables.scss";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export default function App({
  Component,
  ...rest
}: AppProps<{
  locale: string;
  messages: AbstractIntlMessages;
}>) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  const { messages, locale } = rest.pageProps;

  return (
    <Provider store={store}>
      <NextIntlClientProvider
        locale={locale || "en"}
        timeZone="Europe/Moscow"
        messages={messages}
      >
        <NextNProgress color={"#FF8801"} />
        <Head>
          <meta charSet="UTF-8" />
          <title>Yesim App</title>
        </Head>
        <main className={interFont.className}>
          <Component {...props.pageProps} />
        </main>
      </NextIntlClientProvider>
    </Provider>
  );
}
