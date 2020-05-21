import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./index.less"

const iconList = ['🦐', '🦀', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥒', '🌶', '🌽', '🥕', '🥔', '🥐', '🍠', '🍞', '🥖', '🧀', '🥚', '🥞', '🥓', '🥩', '🍗', '🍖', '🌭', '🍔', '🍕', '🥪', '🌮', '🍝', '🍜', '🍲', '🍝', '🍛', '🍣', '🥟', '🍤', '🍚', '🍥', '🥠', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🍯', '🥛', '🍼️', '🍵', '🥤', '🍶', '🍺', '🍻', '🍷', '🥃', '🍹', '🤪', '🤫', '🤣', '🤨', '😛', '🧐', '🎉', '🤔', '🤭', '🤒', '🥱', '🥴'];
const colorList = ["#42b983", "#33A5FF", "#B03734", "#2EAFB0", "#6EC1C2", "#ED9EC7", "#FCA650", "#3F7CFF", "#93C0A4", "#EA7E5C", "#F5CE50", "#465975", "#FFDD4D", "#7F2B82", "#4b4b4b", "#E41A6A"];

const PostItem = ({ edge: { node } }) => {
  const { frontmatter, timeToRead, excerpt } = node
  const { path, title, date, featuredImage } = frontmatter

  const iconIndex = Math.floor(Math.random() * iconList.length);
  const colorIndex = Math.floor(Math.random() * colorList.length);
  return (
    <div to={path} className="post-item">
      <div className="post-content">
        <h3>
          {iconList[iconIndex]}
          <Link style={{ color: colorList[colorIndex] }} to={path}> {title} </Link>
        </h3>
        <p className="post-meta">
          发布于 {date} 预计阅读需要 {timeToRead} 分钟
        </p>
        <div className="post-content-preview">
          {excerpt}
        </div>
      </div>
      {
        featuredImage &&
        featuredImage.childImageSharp &&
        featuredImage.childImageSharp.fluid &&
        <Link className="link" to={path}>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </Link>
      }
    </div>
  )
};
export default PostItem
