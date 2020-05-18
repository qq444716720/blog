import React, { useEffect } from "react"
import lottie from 'lottie-web'
import { Link } from "gatsby"

import Layout from '../components/Layout'

import missing from '../static/missing.json'
import './404.less'

const NotFoundPage = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("box"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: missing
    })
  }, [])

  return (
    <Layout isHome>
      <div id="notFoundPage">
        <div id="box" />
        <Link to="/" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 600 }}>🤒页面不存在鸭 !</div>
          <div>点我去首页看看吧～</div>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
