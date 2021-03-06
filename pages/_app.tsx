import "antd/dist/antd.css";
import "styles/index.scss";

import type { AppProps } from "next/app";
import { Navbar } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
