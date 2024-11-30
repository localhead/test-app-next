import { interFont } from "@features/fonts/utils/localFont";
import { storeWrapper } from "@features/store/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import "@styles/colors.scss";
import "@styles/globals.scss";
import "@styles/variables.scss";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Yesim App</title>
      </Head>
      <main className={interFont.className}>
        <Component {...props.pageProps} />
      </main>
    </Provider>
  );
}
