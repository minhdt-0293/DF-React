import React from 'react'
import Menu from './Menu'
import {
  Switch,
  Route,
} from 'react-router-dom'

import LoginPage from './LoginPage'

const Header = () => {

  return (
    <>
      <Menu />
      <Switch>
        <Route path="/about">
          <h2>About</h2>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <h2>Dashboard Admin</h2>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </>
  )
}

export default Header
