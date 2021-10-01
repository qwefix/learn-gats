module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "my learn gats",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
