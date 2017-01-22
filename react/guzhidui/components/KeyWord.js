import React from 'react'

const KeyWord = ({keyWord}) => {
  if (keyWord !== '') {
    return (
      <div className="key_word">
        {keyWord}
      </div>

    )
  }

  return (
    <div className="no_word">
      热门纸条
    </div>
  )

}

export default KeyWord