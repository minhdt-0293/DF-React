import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

// add sự kiện submit login form
// khi name và pass đúng => sử dụng localStorage để set giá trị user = true

class Login extends Component {
  render() {
    const onLogin = e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('passWord').value;
      const { authenticateUser } = this.props;
      authenticateUser({ email: email, password: password });
    };

    if (this.props.currentUser != null) {
      return <Redirect to="/" />;
    }

    return (
      <div className="d-flex justify-content-center">
        <div className="w-50 p-3">
          <h1>This is Login Page</h1>
          <form onSubmit={onLogin}>
            <legend>Login</legend>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="User Name"
                name="txtEmail"
              />
            </div>
            <div className="form-group">
              <label>PassWord</label>
              <input
                type="password"
                className="form-control"
                id="passWord"
                placeholder="Input field"
                name="txtPassWord"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: data => {
      dispatch(actions.logIn(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
