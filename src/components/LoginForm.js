import React from 'react'
import { connect } from 'react-redux'
import { setUserAction } from '../actions'
import AuthService from '../services'
import { Redirect } from 'react-router-dom'

const LoginForm = ({user, setUser}) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [messageAlert, setMessageAlert] = React.useState('')
  const [typeAlert, setTypeAlert] = React.useState('success')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    AuthService.login({email: email, password: password}).then((res) => {
      if (res.data.status === 'ok') {
        setUser(res.data)
        localStorage.setItem('token', res.data.jwt)
        return (
          <Redirect to={{ pathname: '/about' }}/>
        )
      } else {
        if (res.data.status === 'unauthorized') {
          setMessageAlert(res.data.message)
          setTypeAlert('danger')
        } else {
          setMessageAlert('Something was wrrong !')
          setTypeAlert('danger')
        }
      }
    });
  }

  if (user !== undefined) {
    return (
      <p className="alert alert-success">Welcome to Drink &amp; Food</p>
    )
  }

  const Alert = () => {
    if (messageAlert !== '') {
      let classAlert = 'alert alert-' + typeAlert

      return (
        <p className={classAlert} >{messageAlert}</p>
      )
    } else {
      return (<></>)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <Alert/>
      </div>
      <div className="form-group">
        <input type="email" onChange={handleEmailChange} className="form-control" />
      </div>
      <div className="form-group">
        <input type="password" onChange={handlePasswordChange} className="form-control" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
  user: state.login.user
})

const mapStateToDispatch = dispatch => ({
  setUser: (user) => dispatch(setUserAction(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(LoginForm);
