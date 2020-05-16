import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classnames from 'classnames'
import { Drawer } from 'antd'

import { getScrollTop } from '../../utils'
import logo from '../../images/gatsby-icon.png'

import './index.less'

const links = [{
  path: '/',
  text: '首页',
  icon: '🍙',
}, {
  path: '/posts',
  text: '博客',
  icon: '📁',
}, {
  path: '/links',
  text: '链接',
  icon: '🔗'
}, {
  path: '/app',
  text: '工具',
  icon: '🔧'
}, {
  path: '/about',
  text: '关于',
  icon: '🤫'
}]

const Header = ({ siteTitle, isHome }) => {
  useEffect(() => {
    const navBar = document.querySelector(".header");
    let scroll = getScrollTop();
    window.addEventListener("scroll", function (e) {
      const navBarH = document.body.offsetWidth > 750 ? 76 : 58;
      let top = getScrollTop();
      let dir = top - scroll;

      if (top > navBarH && !navBar.classList.contains("fixed")) {
        navBar.classList.add("fixed");
      }

      if (top <= 0 && navBar.classList.contains("fixed")) {
        navBar.classList.remove("fixed");
        navBar.classList.remove("visible");
      }

      if (dir < 0 && navBar.classList.contains("fixed") && !navBar.classList.contains("visible")) {
        navBar.classList.add("visible");
      }

      if (dir > 0 && navBar.classList.contains("fixed") && navBar.classList.contains("visible")) {
        navBar.classList.remove("visible");
      }

      scroll = top;
    }, { passive: true });
  }, [])

  let pathname = '';
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname.replace('/blog', '') || ''
  }
  const [visible, setVisible] = useState(false)
  return (
    <header className='header' style={isHome ? {} : {
      background: '#0e0e0e61',
      position: 'fixed',
      width: '100%'
    }
    }>
      <div className='header-container'>
        <h3>
          <Link to="/" >
            <span className='logo'><img src={logo} alt="logo" /></span>
            {siteTitle}
          </Link>
        </h3>
        <div className="m-menu">
          👉<span style={{ marginLeft: 5 }} onClick={() => setVisible(true)}>🛎</span>
        </div>
        <div className='blog-links'>
          {
            links.map(({ path, text }) => (
              <Link key={path} to={path} className={classnames({
                active: (path.length === 1 && pathname === path) ||
                  (path.length > 1 && pathname.includes(path.slice(1))) ||
                  (path === '/posts' && pathname.includes('detail'))
              })}>
                {text}
              </Link>
            ))
          }
        </div>
      </div>
      <Drawer
        title="我的博客"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {
          links.map(({ path, text, icon }) => (
            <div key={path} >
              <Link to={path} className={classnames({
                active: (path.length === 1 && pathname === path) ||
                  (path.length > 1 && pathname.includes(path.slice(1))) ||
                  (path === '/posts' && pathname.includes('detail'))
              })}>
                {icon} &nbsp;&nbsp; {text}
              </Link>
            </div>
          ))
        }
      </Drawer>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
