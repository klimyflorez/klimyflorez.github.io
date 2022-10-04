import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useRef } from "react";
import { AppProvider } from "../context/appContext";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";
import "normalize.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.scss";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
          <meta name="description" content="Hi, I am Backend Developer. I am passionate about new development technologies, creative and innovative. Trained with values and ethical principles, capable of providing optimal solutions." />          
          <meta name="keywords" content="Backend Developer, Development, Tecnology, Resume, Curriculum vitae" />
          <meta name="author" content="Klimy Florez López" />
          <meta name="theme-color" content="#72E2AE" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <title>Klimy Florez López</title>
        </Head>
        <ParallaxProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ParallaxProvider>
      </AppProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
