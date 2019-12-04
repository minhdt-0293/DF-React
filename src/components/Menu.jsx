import React from 'react';
import { Route, Link } from 'react-router-dom';
import './../css/Menu.css';
import { connect } from 'react-redux';

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('current_user');
};

const menus = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Categories', to: '/admin/categories' },
  { name: 'Products', to: '/products' }
];

const MenuLink = ({ label, to, event }) => {
  return (
    <Route
      path={to}
      exact
      children={({ match }) => {
        let active = match ? 'nav-item active' : 'nav-item';
        return (
          <li className={active}>
            <Link to={to} className="nav-link" onClick={event}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const showMenu = menus => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, i) => {
      return <MenuLink key={i} label={menu.name} to={menu.to} />;
    });
  }
  return result;
};

function userLogged() {
  return localStorage.getItem('token') != null;
}

const rightMenu = () => {
  let currentUser = JSON.parse(localStorage.getItem('current_user'));
  if (userLogged()) {
    return (
      <>
        <li className="nav-item"></li>
        <li className="nav-item dropleft">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={currentUser.image.url}
              className="rounded-circle z-depth-0 avatar"
              alt="avatar image"
            />
          </a>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <Link to="/login" onClick={logout} className="dropdown-item">
              <i
                className="fa fa-sign-out"
                aria-hidden="true"
                onClick={logout}
              ></i>
              Logout
            </Link>
          </div>
        </li>
        <li className="mgt-15 Menu-username">{currentUser.username}</li>
      </>
    );
  } else {
    return (
      <li>
        <Link to="/login" onClick={logout}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Login
        </Link>
      </li>
    );
  }
};

const Menu = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">{showMenu(menus)}</ul>
      <ul className="navbar-nav ml-auto">{rightMenu(props)}</ul>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  current_user: state.update_profile.current_user
});

export default connect(mapStateToProps, null)(Menu);
