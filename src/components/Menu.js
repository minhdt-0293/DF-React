import React from 'react'
import { connect } from 'react-redux'
import {
  NavLink as RRNavLink,
} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import LogoutLink from './LogoutLink'

const Menu = ({user}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const AuthLink = () => {
    if (user !== undefined) {
      return (
        <></>
      )
    } else {
      return (
        <NavItem>
          <NavLink tag={RRNavLink} to="/login/">Login</NavLink>
        </NavItem>
      )
    }
  }

  const UserInfo = () => {

    if (user !== undefined) {

      const Admin = () => {

        const handleClickManage = () => {
          window.location = '/admin'
        }

        if (user.user_info.role === 1) {
          return (
            <DropdownItem onClick={handleClickManage}>Manage</DropdownItem>
          )
        } else {
          return <></>
        }
      }

      return (
        <>
          <img src="https://via.placeholder.com/45" className="rounded-circle mr-2" alt={user.user_info.username} />
          <span className="navbar-text">
            <UncontrolledDropdown nav inNavbar className="list-unstyled">
              <DropdownToggle nav caret>
                {user.user_info.username}
              </DropdownToggle>
              <DropdownMenu right>
                <Admin />
                <DropdownItem divider />
                <LogoutLink />
              </DropdownMenu>
            </UncontrolledDropdown>
          </span>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavLink className="navbar-brand" tag={RRNavLink} to="/">Drink &amp; Food</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/about/">About</NavLink>
            </NavItem>
            <AuthLink />
          </Nav>
          <UserInfo />
        </Collapse>
      </Navbar>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.login.user
});

export default connect(mapStateToProps)(Menu);
