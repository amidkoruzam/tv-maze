import type { AppProps } from "next/app";

import "../src/shared/ui/globals.css";
import { PrimaryLayout } from "../src/pages/layouts/primary";
import { ConnectionObserver } from "src/features/internet-connection-monitor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
      <ConnectionObserver />
    </PrimaryLayout>
  );
}
