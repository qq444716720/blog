import React, { useEffect } from "react"
import { Link } from "gatsby"
import lottie from 'lottie-web'
import { Button } from "antd"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './index.less'

const tips = [
  "“但是”之前的话都是废话",
  "一切都将逝去，唯有死神永生",
  "少啰嗦，你还不如虫子呢！",
  "心若不动，风又奈何"
]

const IndexPage = () => {
  useEffect(() => {
    const jsonIndex = Math.floor(Math.random() * 5)
    const json = require(`../static/${jsonIndex}.json`)
    lottie.loadAnimation({
      container: document.getElementById("box"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: json
    })
  }, [])
  const tipsIndex = Math.floor(Math.random() * tips.length);
  return (
    <Layout isHome>
      <SEO title="首页" />
      <div className='banner-wrap'>
        <div className='left-content'>
          <h1>Coding 日志</h1>
          <p>{tips[tipsIndex]}</p>
          <Link to='/posts'>
            <Button type="primary" size="large" shape="round">开始阅读{' '}<span>🍉</span></Button>
          </Link>
        </div>
        <div id="box" style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} />
      </div>
    </Layout>
  )
}

export default IndexPage
