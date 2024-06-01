import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MBK1VS8F9W"></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-MBK1VS8F9W');`}
        </script>
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
