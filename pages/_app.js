import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";

import store from "@/store/store";
export default function App({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <Component {...pageProps} />
      <Toaster />
      </Provider>
    </>
  );
}
