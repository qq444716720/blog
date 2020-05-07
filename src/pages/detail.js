import React, { useEffect } from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

import bannerImg from '../images/banner.jpg'

const Detail = ({ children, featuredImage, title }) => {
  const { childImageSharp: { fluid: { src } = {} } = {} } = featuredImage || {}
  useEffect(() => {
    try {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
      deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
      console.error(err);
    }
  }, [])

  return (
    <Layout footer={false} style={{
      backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      backgroundRepeat: "repeat"
    }}>
      <SEO title={title} />
      <Banner img={src || bannerImg} />
      <div className="blog-content">
        {children}
      </div>
    </Layout>
  )
}

export default Detail
