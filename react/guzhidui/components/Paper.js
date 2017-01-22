import React from 'react'
import { dateToString } from '../api'

const Paper = ({paper, onWritePaper}) => (
  <li className="paper">
    <div className="top"><span className="author_name">{paper.author.name}</span> <span className="publish_time"> 发布于：{dateToString(paper.date)}</span></div>
    <div className="middle">
      <p dangerouslySetInnerHTML={{__html: paper.content}}></p>
    </div>
    <div className="bottom">
      <span className="write_paper" onClick={onWritePaper}>写张纸条</span>
    </div>  
  </li>
)

export default Paper