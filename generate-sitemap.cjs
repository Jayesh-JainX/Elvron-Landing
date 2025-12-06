const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Only include actual pages that exist in the application
const links = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: new Date().toISOString().split("T")[0],
  },
];

const sitemap = new SitemapStream({
  hostname: "https://elvron-crypto.vercel.app",
});

streamToPromise(sitemap)
  .then((data) => {
    require("fs").writeFileSync("public/sitemap.xml", data.toString());
    console.log(
      "✓ sitemap.xml created in /public with",
      links.length,
      "URL(s)"
    );
  })
  .catch(console.error);

links.forEach((link) => sitemap.write(link));
sitemap.end();
