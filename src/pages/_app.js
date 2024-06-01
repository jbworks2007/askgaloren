import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/custom.scss";
import "@/styles/style.scss";
import "@/styles/style.css";
import Head from 'next/head';
import Script from "next/script";
import Top from "@/layout/Header/Top";
import Navbar from "@/layout/Header/Navbar";
import Footer from "@/layout/Footer/Footer";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={raleway.className}>
        <Top />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>

    </>
  )
}