import type { AppProps } from "next/app";

import "../src/shared/ui/globals.css";
import { PrimaryLayout } from "../src/pages/layouts/primary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}
