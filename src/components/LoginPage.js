import React from 'react'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <div className="warp-login-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h3 className="text-primary">Login Page</h3>
            <LoginForm />
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage;
