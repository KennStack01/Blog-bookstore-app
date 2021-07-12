/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Vers et Chroniques App`,
    siteUrl: `https://versetchroniques.netlify.app`,
    author: "@PenielKatombe",
    description: `Vers et Chroniques, un Blog, une Librairie et une Radio`,
    keywords: `Lecture, Blog, Literature, Bookstore, Librarie, Vers, Chroniques, Poésies`,
    image: "/Images/Picture-Cover.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@PenielKatombe",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    {
    resolve: `gatsby-source-datocms`,
    options: {
      // You can find your read-only API token under the Settings > API tokens
      // section of your administrative area. Make sure to grant both CDA and CMA permissions.
      apiToken: process.env.YOUR_READONLY_API_TOKEN,

      // The project environment to read from. Defaults to the primary environment:
      environment: `main`,

      // If you are working on development/staging environment, you might want to
      // preview the latest version of records instead of the published one:
      previewMode: false,

      // Disable automatic reloading of content when some change occurs on DatoCMS:
      disableLiveReload: false,

      // Custom API base URL (most don't need this)
      // apiUrl: 'https://site-api.datocms.com',

      // Setup locale fallbacks
      // In this example, if some field value is missing in Italian, fall back to English
      localeFallbacks: {
        it: ['en'],
      },
    },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
  ],
}
