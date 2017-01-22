import React from 'react';

const LoginBox = ({showLoginBox, username, password, changeUsername, changePassword, onSubmit, onClose, toRegister}) => {
  if (!showLoginBox) {
    return null;
  }

  return (
    <div className="login_box">
      <i className="icon gzdfont gzd-guanbi" onClick={onClose}></i>
      <div>
        <table>
          <tbody>
            <tr>
              <td>账号：</td>
              <td>
                <input type="text" placeholder="请输入手机、邮箱" value={username} onChange={changeUsername}></input>
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td><input type="password" value={password} onChange={changePassword}/></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" id="login" onClick={onSubmit}>登录</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span className="to_register" onClick={toRegister}>去注册</span>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  );
}

export default LoginBox