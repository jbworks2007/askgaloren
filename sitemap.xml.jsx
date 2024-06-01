import React from "react";
import * as fs from "fs";

const Sitemap = () => {
  return null;
};

// https://nextjs.org/docs/messages/gssp-export
export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://askgalore.nl";

  const staticPaths = fs
    .readdirSync("./src/pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "_index.js",
        "404.js",
        ".DS_Store",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const allPaths = [...staticPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://askgalore.nl/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>


      ${allPaths
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
    </urlset>
`;

  const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
