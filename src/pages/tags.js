import React, { useEffect } from "react"
import echarts from 'echarts'

import Layout from '../components/Layout'

import './tags.less'

require('echarts-wordcloud')


const TagPage = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('main'))
    const maskImage = new Image()
    const keywords = {
      "react": 22199,
      "react native": 10288,
      "flutter": 620,
      "JavaScript": 274470,
      "TypeScript": 12311,
      "Node.js": 1206,
      "PWA": 4885,
      "Serverless": 32294,
      "es6": 18574,
      "nginx": 38929,
      "Ant Design": 969,
      "HTTP": 37517,
      "HTML": 12053,
      "CSS": 57299,
      "单元测试": 15418,
      "人脸识别": 22905,
      "Apache": 5146,
      "Flex": 49487,
      "原型链": 33837,
      "链式编程": 4500,
      "模块化开发": 5744,
      "webpack": 4840,
      "WebGL": 232,
      "JSON": 3706,
      "数据可视化": 4812,
      "echarts": 16578,
      "面向对象": 76970,
      "设计模式": 6704,
      "算法": 15964,
      "面试题": 60679,
      "编程思想": 24347,
      "组件化开发": 43420,
      "Docker": 25222,
      "D3.js": 16904,
      "git": 4029,
      "CORS": 5319,
      "Jenkins": 3393,
      "npm": 43066,
      "Promise": 3110,
      "函数编程": 20285,
      "性能优化": 3425,
      "Yeoman": 2431,
      "CI/CD": 5175,
      "github": 12738,
      "gitlab": 19601,
      "ESLint": 7133,
      "cli": 8831,
      "SSR": 17516,
      "EventLoop": 590,
      "GraphQL": 23426,
      "Electron": 38497,
      "数据埋点": 15214,
      "axios": 7236,
      "OSS": 66514,
      "grid": 28516,
      "微前端": 1295,
    };

    const data = [];
    for (var name in keywords) {
      data.push({
        name: name,
        value: Math.sqrt(keywords[name])
      })
    }

    const isMobile = (document.body.offsetWidth / document.body.offsetHeight) <= 0.7
    const option = {
      series: [{
        type: 'wordCloud',
        shape: 'pentagon',
        maskImage,
        left: 'center',
        top: 'center',
        width: isMobile ? '90%' : '70%',
        height: isMobile ? '50%' : '70%',
        sizeRange: isMobile ? [14, 22] : [12, 60],
        rotationRange: [-5, 30],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            fontWeight: 500,
            fontSize: isMobile ? 24 : 60,
            shadowBlur: 10,
            shadowColor: '#333',
          }
        },
        data,
      }],
    }
    maskImage.onload = function () {
      chart.setOption(option);
    }

    maskImage.src = require('../images/cloud.svg');
    chart.on('click', function (params) {
      const name = params.name;
      const value = params.value;
      console.log(name + ":" + value);
    })
  }, [])

  return (
    <Layout isHome>
      <div className="tags-page">
        <div id="main"></div>
      </div>
    </Layout>
  )
}

export default TagPage
