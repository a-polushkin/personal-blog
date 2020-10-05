import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "../../.cache/gatsby-browser-entry"
import Article from "../components/article"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <StaticQuery
      query={graphql`
        {
          contentfulUser(avatar: { file: { url: {} } }) {
            fullName
          }
          allContentfulArticle {
            edges {
              node {
                title
                text {
                  text
                }
                banner {
                  file {
                    url
                  }
                }
                publishedAt
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) =>
        edges.map(({ node }) => <Article key={node.id} content={node} />)
      }
    />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
