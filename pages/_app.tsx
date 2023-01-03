import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Header />
      <main className="container px-4 pt-6 mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
