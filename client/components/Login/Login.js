import React, { Component } from 'react';

import './Login.scss';

import InstagramLogo from '../../assets/instagram-logo.png'


class Login extends Component {

  render() {
    return (
      <div className="login-page">
        <div className="content">
          <div className="login-container">
            <div className="login-container__header">Lyra</div>
            <div className="login-container__button">
              <a className="btn btn-secondary" href="#">
                <img className="instagram-logo" src={InstagramLogo}/>
                Login with Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
