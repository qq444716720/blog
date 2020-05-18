import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import Banner from "../components/Banner"
import BannerImage from '../components/Image/banner'

const Posts = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "YYYY-MM-DD")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
            }
            timeToRead
            excerpt(pruneLength: 200)
          }
        }
      }
    }`)

  return (
    <Layout>
      <SEO title="博客列表" />
      <Banner>
        <BannerImage />
      </Banner>
      <div className="content">
        {
          data && data.allMarkdownRemark.edges.map(edge => (
            <PostItem key={edge.node.frontmatter.path} edge={edge} />
          ))
        }
      </div>
    </Layout>
  )
};
export default Posts
