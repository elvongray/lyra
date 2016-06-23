import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Login } from '../components';

class LoginContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Login />
  }
}

export default connect()(LoginContainer);
