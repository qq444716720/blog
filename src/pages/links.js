import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'

import './links.less'

const data = [{
  name: 'carbon',
  url: 'https://carbon.now.sh/',
  describe: '生成美丽的源代码图像',
}, {
  name: 'codelf',
  url: 'https://carbon.now.sh/',
  describe: '变量命名',
}, {
  name: 'regexr',
  url: 'https://regexr.com/',
  describe: '正则表达式小工具',
}, {
  name: 'lottiefiles',
  url: 'https://lottiefiles.com/',
  describe: 'Lottie动画',
}, {
  name: 'codesandbox',
  url: 'https://codesandbox.io/',
  describe: '在线代码编辑器',
}, {
  name: 'codepen',
  url: 'https://codepen.io/',
  describe: '在线代码编辑器',
}, {
  name: '图标工厂',
  url: 'https://icon.wuruihong.com/',
  describe: '图标工厂',
}, {
  name: 'tinypng',
  url: 'https://tinypng.com/',
  describe: '图片压缩',
}]

const LinkPage = () => {

  return (
    <Layout isHome>
      <div className="links-page">
        {
          data.map(({ name, url, describe }) => (
            <div>
              <h4>{name}</h4>
              <a href={url} target="_blank">{url}</a>
              <div>{describe}</div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default LinkPage
