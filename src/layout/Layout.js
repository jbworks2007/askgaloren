import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : null} ${classOpt}`}>
      <Head>
        <title>
          {title
            ? `AskGalore | ${title}`
            : 'AskGalore - Blockchain, Software & IT Solutions'}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
