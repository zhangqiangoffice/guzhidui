import React from 'react';

const LoginBox = ({showRegisterBox, name, username, password1, password, showRegisterTips, registerTips, onChangeName, onChangeUsername, onChangePassword1, onChangePassword, onCheckUsername, onCheckData, onClose}) => {
  if (!showRegisterBox) {
    return null;
  }

  return (
    <div className="register_box">
      <i className="icon gzdfont gzd-guanbi" onClick={onClose}></i>
      <div>
        <table>
          <tbody>
            <tr>
              <td>姓名昵称：</td>
              <td>
                <input type="text" placeholder="请输入姓名或昵称" value={name} onChange={onChangeName}></input>
              </td>
            </tr>
            <tr>
              <td>登录账号：</td>
              <td>
                <input type="text" placeholder="请输入手机、邮箱" value={username} onChange={onChangeUsername} onBlur={onCheckUsername}></input>
              </td>
            </tr>
            <tr>
              <td>设置密码：</td>
              <td><input type="password" value={password} onChange={onChangePassword}/></td>
            </tr>
            <tr>
              <td>重复密码：</td>
              <td><input type="password" value={password1} onChange={onChangePassword1}/></td>
            </tr>
            <tr className={showRegisterTips ? 'tips' : 'hide'}>
              <td></td>
              <td>{registerTips}！</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" id="login" onClick={e => onCheckData(name, username, password, password1)}>注册</button>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  );
}

export default LoginBox