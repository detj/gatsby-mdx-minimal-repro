module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        mdPlugins: [],
        hastPlugins: [],
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
  ],
}
