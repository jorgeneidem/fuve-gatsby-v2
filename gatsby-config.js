module.exports = {
  siteMetadata: {
    title: 'Fuve',
    desc: 'Find your future vehicle'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              wrapperStyle: 'margin-bottom:0.65rem;'
            },
          },
          `gatsby-remark-copy-images`
        ]
      }
    },
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
