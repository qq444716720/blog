import React from 'react'
import { Popover } from 'antd'
import CallWechat from '../Image/call-wechat'

import './index.less'

import GithubIcon from '../Image/github'
import WechatIcon from '../Image/wechat'

const linkList = [{
  typeName: '常用链接',
  children: [{
    name: 'Can I use',
    url: 'https://www.caniuse.com',
    remark: '兼容自检',
    target: '_blank',
  }, {
    name: 'tinypng',
    url: 'https://tinypng.com',
    remark: '压缩图片',
    target: '_blank',
    icon: ''
  }, {
    name: 'more ...',
    url: '/links',
  }]
}, {
  typeName: '工具集',
  children: [{
    name: '语雀',
    url: 'https://www.yuque.com',
    remark: '专业的云端知识库',
    target: '_blank',
    icon: ''
  }, {
    name: '掘金',
    url: 'https://juejin.cn',
    remark: '代码不止,掘金不停',
    target: '_blank',
    icon: ''
  }, {
    name: 'Notion',
    url: 'https://www.notion.so',
    target: '_blank',
    remark: '万物皆对象',
  }]
}, {
  typeName: '我的',
  children: [{
    name: 'github',
    url: 'https://github.com/qq444716720',
    remark: '',
    target: '_blank',
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
                    list.children.map(({ url, name, remark, icon, target }, cIndex) =>
                      <li key={cIndex}>
                        {icon}
                        {
                          url ?
                            <a target={target} rel="noopener noreferrer" href={url}>
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
