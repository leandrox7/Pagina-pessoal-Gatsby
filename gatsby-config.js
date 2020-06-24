module.exports = {
  siteMetadata: {
    title: `Leandro Rodrigues Desenvolvimento de Sistemas`,
    description: `Criação de sites, sistemas web e eCommerce WordPress. Soluções em .NET Core, PHP, React.js, Node.js e WordPress`,
    author: `https://www.linkedin.com/in/leandro-rodrigues-b3014b162/`,
    siteURL: 'https://lrodrigues.site/',
    siteName: 'Leandro Rodrigues',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
