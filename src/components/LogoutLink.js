import React from 'react'
import { DropdownItem } from 'reactstrap'
import { connect } from 'react-redux'
import { setUserAction } from '../actions'

const LogoutLink = ({user, setUser}) => {

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    setUser({})
    window.location = '/login'
  }

  return (
    <DropdownItem onClick={handleClick}>Logout</DropdownItem>
  )
}

const mapStateToProps = state => ({
  user: state.login.user
})

const mapStateToDispatch = dispatch => ({
  setUser: (user) => dispatch(setUserAction(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(LogoutLink);
