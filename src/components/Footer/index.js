import React from 'react'
import { Popover } from 'antd'
import CallWechat from '../Image/call-wechat'

import './index.less'

import GithubIcon from '../Image/github'
import WechatIcon from '../Image/wechat'

const linkList = [{
  typeName: '常用链接',
  children: [{
    name: 'easyicon',
    url: 'https://www.easyicon.net/',
    remark: '找到你想要的icon',
    icon: ''
  }, {
    name: 'tinypng',
    url: 'https://tinypng.com/',
    remark: '压缩图片',
    icon: ''
  }, {
    name: 'more ...',
    url: 'https://tinypng.com/',
  }]
}, {
  typeName: '工具集',
  children: [{
    name: 'Can i use',
    url: 'https://www.easyicon.net/',
    remark: '',
    icon: ''
  }, {
    name: 'npm',
    url: 'https://www.npmjs.com/',
    remark: '',
    icon: ''
  }, {
    name: 'more ...',
    url: 'https://tinypng.com/',
  }]
}, {
  typeName: '我的',
  children: [{
    name: 'github',
    url: 'https://github.com/qq444716720',
    remark: '',
    icon: <GithubIcon />
  }, {
    name: <Popover placement="right" content={<CallWechat />}>微信</Popover>,
    url: '',
    remark: '',
    icon: <WechatIcon />
  }]
}]

const Footer = (props) => {
  return (
    <footer className='footer-wrap'>
      <div className='useful-content'>
        {
          linkList.map((list, index) => {
            return (
              <section key={index}>
                <h3>{list.typeName}</h3>
                <ul>
                  {
                    list.children.map(({ url, name, remark, icon }, cIndex) =>
                      <li key={cIndex}>
                        {icon}
                        {
                          url ?
                            <a target='_blank' rel="noopener noreferrer" href={url}>
                              {name} {remark && <span>- {remark}</span>}
                            </a>
                            :
                            <span>{name} {remark && <span>- {remark}</span>}</span>
                        }
                      </li>
                    )
                  }
                </ul>
              </section>
            )
          })
        }
      </div>
      <p className='site-footer-info'>
        © {new Date().getFullYear()},  Built with <a href='https://www.gatsbyjs.org/'>{` gastby `}</a> by tom 👨🏻‍💻
      </p>
    </footer>
  )
}

export default Footer
