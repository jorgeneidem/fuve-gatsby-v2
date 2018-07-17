module.exports = {
  siteMetadata: {
    title: 'Fuve Gatsby Levelup',
    desc: 'Find your future vehicle'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-copy-images`,
        ]
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms'
  ],
};
