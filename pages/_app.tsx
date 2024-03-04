import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/store";
import Header from "@/components/organisms/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Header />
      <main style={{ padding: "0 30px 30px" }}>
        <Component {...props.pageProps} />
      </main>
    </Provider>
  );
}
