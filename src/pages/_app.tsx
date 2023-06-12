import Image from "next/image";

import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import IgniteLogo from "@/assets/ignite-logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={IgniteLogo}
          alt="Logo da aplicacão"
          onClick={() => window.location.replace("/")}
          style={{ cursor: "pointer" }}
        />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
