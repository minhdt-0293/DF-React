import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPage: 1
    };
  }

  componentDidMount() {
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  render() {
    const { currentPage, orders, totalPage } = this.props;

    let arrPages = [];

    for (let page = 1; page <= totalPage; page++) {
      arrPages.push(page);
    }

    const statusOrder = (status) => {
      switch (status) {
        case 1:
          return (
            <button type="button" className="btn btn-warning"><i className="fa fa-spinner"></i></button>
          )
        case 2:
          return (
            <button type="button" className="btn btn-success"><i className="fa fa-check-circle"></i></button>
          )
        case 3:
          return (
            <button type="button" className="btn btn-danger"><i className="fa fa-ban"></i></button>
          )
        default:
          return;
      }

    }

    const RowOrder = () =>
      orders.map(order => (
        <tr key={order.id}>
          <th scope="row">{order.id}</th>
          <td>{order.address}</td>
          <td>{order.phone}</td>
          <td className="text-center">
            <Link to={`/admin/orders/edit/${order.id}`} className="btn btn-info"><i className="fa fa-pencil"></i></Link>
          </td>
          <td className="text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              {statusOrder(order.status)}
            </div>
          </td>
        </tr>
      ));

    const handleClickPaginate = ({ page }) => {
      this.props.setCurrentPage(page);
      this.props.fetchOrders({ page });
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-12">
                <h1 className="my-4 admin-title">Orders</h1>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col" className="text-center">Action</th>
                  <th scope="col" className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <RowOrder />
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Pagination
              currentPage={currentPage}
              arrPages={arrPages}
              handleClickPaginate={handleClickPaginate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const adminState = state.adminOrders;
  return {
    currentPage: adminState.currentPage,
    orders: adminState.orders,
    totalPage: adminState.total_pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: page => {
      dispatch(actions.fetchOrders(page));
    },
    changeStatusOrder: (orderId) => {
      dispatch(actions.changeStatusOrder({ orderId: orderId }));
    },
    setCurrentPage: page => dispatch(actions.setCurrentPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
