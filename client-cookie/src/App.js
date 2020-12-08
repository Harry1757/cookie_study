import React, { Component } from 'react';
import Login from './components/Login';
import Mypage from './components/Mypage';

const FILL_ME_IN = 'FILL_ME_IN';
//! 시작하기 앞서 package.json의 FILL_ME_IN을 서버가 사용하는 인증서 key.pem파일 경로, cert.pem 파일 경로로 대체해야 합니다
class App extends Component {
  // isLogin은 반드시 boolean 타입이여야 하며 userData는 반드시 Object 여야 합니다.
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userData: null,
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  // 로그인이후 로그인 상태를 참으로 변경합니다
  loginHandler() {
    this.setState({
      isLogin: true,
    });
  }

  // 입력받은 데이터를 바탕으로 userData 상태를 업데이트 해야 합니다.
  setUserInfo(object) {
    // TODO : 여기에 코드를 작성합니다.
    this.setState({ userData: object });
  }

  // 상태를 조작하여 로그아웃 상태로 만들어야 합니다.
  // 또한 저장된 쿠키 정보를 제거해야 합니다.
  // HttpOnly 쿠키는 자바스크립트에서 접근이 불가능하니 서버의 POST /users/logout에 로그아웃 요청을 해서 쿠키를 제거 합니다.
  logoutHandler() {
    // TODO : 여기에 코드를 작성합니다.
    this.setState({ isLogin: false });
  }

  // Mypage 컴포넌트 및 Login 컴포넌트에 적절한 props를 전달해야 합니다.
  render() {
    const { isLogin } = this.state;
    return (
      <div className='App'>
        {isLogin ? (
          <Mypage userData={FILL_ME_IN} logoutHandler={FILL_ME_IN} />
        ) : (
          <Login loginHandler={FILL_ME_IN} setUserInfo={FILL_ME_IN} />
        )}
      </div>
    );
  }
}

export default App;
