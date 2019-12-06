import React from 'react';
import { renderRoutes } from 'react-router-config';
import '../../css/Admin/Admin.css';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const Admin = ({
  route,
  fetchAdminInfo,
  user_count,
  category_count,
  product_count,
  order_count,
  role
}) => {
  if (role !== 1) {
    return <Redirect to="/" />;
  }

  fetchAdminInfo();

  return (
    <>
      <div className="Admin-dashboard">
        <NavLink
          to="/admin/users"
          className="Admin-link"
          activeClassName="Admin-selected"
        >
          <div className="card text-white bg-primary mb-3 Admin-card">
            <div className="card-header">
              <i className="fa fa-user fa-4x" aria-hidden="true"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">USERS DETAILS</h5>
              <h3 className="card-text">{user_count}</h3>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/admin/categories"
          className="Admin-link"
          activeClassName="Admin-selected"
        >
          <div className="card text-white bg-success mb-3 Admin-card">
            <div className="card-header">
              <i className="fa fa-list-alt fa-4x" aria-hidden="true"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">CATEGORIES DETAIL</h5>
              <h3 className="card-text">{category_count}</h3>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/admin/products"
          className="Admin-link"
          activeClassName="Admin-selected"
        >
          <div className="card text-white bg-danger mb-3 Admin-card">
            <div className="card-header">
              <i className="fa fa-product-hunt fa-4x" aria-hidden="true"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">PRODUCTS DETAIL</h5>
              <h3 className="card-text">{product_count}</h3>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className="Admin-link"
          activeClassName="Admin-selected"
        >
          <div className="card text-white bg-warning mb-3 Admin-card">
            <div className="card-header">
              <i className="fa fa-shopping-bag fa-4x" aria-hidden="true"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">ORDERS DETAIL</h5>
              <h3 className="card-text">{order_count}</h3>
            </div>
          </div>
        </NavLink>
      </div>
      {renderRoutes(route.routes)}
    </>
  );
};

const mapStateToProps = state => {
  const {
    user_count,
    category_count,
    product_count,
    order_count
  } = state.adminInfo.adminInfo;

  const { role } = state.user.currentUser;
  return {
    user_count,
    category_count,
    product_count,
    order_count,
    role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdminInfo: () => {
      dispatch(actions.fetchAdminInfo());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
