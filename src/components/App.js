import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserAction } from '../actions'
import AuthService from '../services'
import '../App.css'

const App = ({user, setUser}) => {

  const userToken = AuthService.getUserToken();

  React.useMemo(() => {
    if (userToken) {
      AuthService.getUserInfo().then((res) => {
        if (res.data.status === 'ok') {
          setUser(res.data)
        }
      })
    }
  }, [userToken, setUser])

  return (
    <div className="app">
      <Header />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.login.user
})

const mapStateToDispatch = dispatch => ({
  setUser: (user) => dispatch(setUserAction(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(App);
