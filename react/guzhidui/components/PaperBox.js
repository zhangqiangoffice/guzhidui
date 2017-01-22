import React from 'react';

const LoginBox = ({showPaperBox, paperContent, key1, key2, key3, onChangeKey1, onChangeKey2, onChangeKey3, onChangePaperContent, onSubmitPaper, onClosePaper, onClose}) => {
  if (!showPaperBox) {
    return null;
  }

  return (
    <div className="paper_box">
      <i className="icon gzdfont gzd-guanbi" onClick={onClose}></i>
      <textarea value={paperContent} onChange={onChangePaperContent} placeholder="关于历史的一个故事 ... ..."></textarea>
      <p>标签是故事的关键字，读者可以通过搜索来找故事</p>
      <ul>
        <li>故事标签：</li>
        <li><input type="text" placeholder="标签1" value={key1} onChange={onChangeKey1}/></li>
        <li><input type="text" placeholder="标签2" value={key2} onChange={onChangeKey2}/></li>
        <li><input type="text" placeholder="标签3" value={key3} onChange={onChangeKey3}/></li>
      </ul>
      <button type="button" onClick={onSubmitPaper}>提交</button>
    </div>
  );
}

export default LoginBox