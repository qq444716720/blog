import React from "react"

import "./index.less"

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner-box">
        {props.children}
      </div>
    </div>
  )
};
export default Banner
