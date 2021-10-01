import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {console.log(data.allMdx.nodes)}
        {
          data.allMdx.nodes.map(node => (
            <li key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <time type='date'>{node.frontmatter.date}</time>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
        }
        id
        body
      }
    }
  }
`

export default BlogPage