import React from 'react'

const TitleBar = ({hasLogin, name, word, onGoLogin, onGoWritePaper, onSearch, onChangeWord, onKeyUpEnter, onLogout, onGoRegister}) => (
  <div className="title_bar">
    <div className="bar_main">
      <span className="title">故纸堆</span>
      <input type="text" placeholder="搜索历史人物或者历史事件" value={word} onChange={onChangeWord} onKeyUp={onKeyUpEnter}/><button className="search" type="button" onClick={onSearch}>搜索</button>
      <button type="button" className="write_paper" onClick={onGoWritePaper}>写纸条</button>
      <div className="user">
        {hasLogin ? 
          <span className="member">
            {name}
            <ul>
              <li onClick={onLogout}><i className="icon gzdfont gzd-tuichu"></i> 退出</li>
            </ul>
          </span>
        : <span className="btns"><button type="button" onClick={onGoLogin}>登录</button><button type="button" onClick={onGoRegister}>注册</button></span>}
      </div>
    </div>
  </div>
)

export default TitleBar