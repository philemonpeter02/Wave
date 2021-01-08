module.exports = {
  siteMetadata: {
    title: `Wave++ | Phil's`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@philemonpeter02`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '2nhiwjxik902',
        accessToken: 'lzYT34gvb4nxh-X3jsfDMYTbC9B_kulZNzv3x17HHm0'
      },
    },
  ],
}
