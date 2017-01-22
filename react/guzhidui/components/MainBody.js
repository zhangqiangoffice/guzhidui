import React from 'react'
import KeyWordContainer from '../containers/KeyWordContainer'
import PaperListContainer from '../containers/PaperListContainer'

const MainBody = () => (
  <div className="main_body">
    <div className="left_body">
      <KeyWordContainer />
      <PaperListContainer />
      <i id="anchor"></i>
    </div>
    <div className="right_body"></div>
  </div>
)

export default MainBody