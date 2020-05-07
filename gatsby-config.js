module.exports = {
  siteMetadata: {
    title: `自信膨胀的汤姆`,
    description: ``,
    author: `444716720@qq.com`,
  },
  pathPrefix: `/blog`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-import`,
      options: {
        "libraryName": "antd",
        "style": true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: {
          "primary-color": "#6ecbc8",
        },
        javascriptEnabled: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
