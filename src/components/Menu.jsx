import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

const menus = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Categories', to: '/categories' }
];

const showMenu = menus => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, i) => {
      return (
        <li key={i} className="nav-item">
          <NavLink exact to={menu.to} className="nav-link">{menu.name}</NavLink>
        </li>
      )
    });
  }
  return result;
};

const rightMenu = props => {
  const { currentUser } = props;
  if (currentUser.id != null) {
    return (
      <>
        <li className="nav-item"></li>
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle cursor-pointer"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={currentUser.image.url}
              className="rounded-circle z-depth-0 avatar"
              alt="avatar"
            />
            <Link to="#" className="mx-1 text-white text-decoration-none">{currentUser.username}</Link>
          </span>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/admin" className="dropdown-item">
              Settings
            </Link>
            <Link
              to="/login"
              onClick={() => props.logout()}
              className="dropdown-item"
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Logout
            </Link>
          </div>
        </li>
      </>
    );
  } else {
    return (
      <li>
        <Link to="/login">
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Login
        </Link>
      </li>
    );
  }
};

const showAdmin = role =>
  role === 1 ? (
    <li>
      <NavLink to="/admin" className="nav-link" activeClassName="active">
        Admin
      </NavLink>
    </li>
  ) : null;

const Menu = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {showMenu(menus)}
          {props.currentUser !== null ? showAdmin(props.currentUser.role) : <></>}
        </ul>
        <ul className="navbar-nav ml-auto">{rightMenu(props)}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actions.logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
