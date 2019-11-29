import React from 'react';
import { Route, Link } from 'react-router-dom';

const logout = () => {
  localStorage.removeItem('token');
};

const menus = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Login', to: '/login' },
  { name: 'Logout', to: '/login', event: logout }
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
  let result = [];
  if (menus.length > 0) {
    for (let i = 0; i < menus.length; i++) {
      let menu = menus[i];
      if (localStorage.getItem('token') != null && menu.name === 'Login') {
        continue;
      }
      if (localStorage.getItem('token') == null && menu.name === 'Logout') {
        continue;
      }
      result.push(
        <MenuLink key={i} label={menu.name} to={menu.to} event={menu.event} />
      );
    }
  }
  return result;
};

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">{showMenu(menus)}</ul>
    </div>
  </nav>
);

export default Menu;
