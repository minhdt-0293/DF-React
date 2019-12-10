import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/Profile.css';
import Flash from '../Flash';
import { withRouter } from 'react-router-dom';

class AdminEditOrder extends Component {

  componentDidMount() {
    let orderId = this.props.match.params.id;
    this.props.fetchOrder(orderId);
  }

  componentWillUnmount() {
    this.props.clearOldOrder();
  }

  render() {

    let { id, address, phone, status, description, total_money } = this.props.order;

    const onUpdateOrder = e => {
      e.preventDefault();

      const formData = new FormData();
      formData.append(
        'order[id]', id
      );

      formData.append(
        'order[status]', document.getElementById('status').value
      );

      this.props.updateOrder(formData, this.props.match.params.id);
    };

    const flashMessage = () => (
      this.props.status === 'ok' ? (
        <Flash type="success" message="Update successfully" />
      ) : null
    );

    if (this.props.statusFetch === 'ok') {
      const orderDetailRows = () => (
        this.props.orderDetails.map((orderDetail, index) => (
          <tr key={index}>
            <th scope="row">{++index}</th>
            <td>{orderDetail.product_name}</td>
            <td>{orderDetail.quantity}</td>
          </tr>
          )
        )
      )

      return (
        <>
          <form onSubmit={onUpdateOrder}>
            {flashMessage()}
            <h1>Edit Order</h1>
            <div className="form-group">
              <div className="row">
                <label htmlFor="status" className="col-sm-2 col-form-label">
                  Status
                </label>
                <div className="col-sm-10">
                  <select id="status" className="form-control" defaultValue={status}>
                    <option value="1" className="text-warning">Pending</option>
                    <option value="2" className="text-success">Approved</option>
                    <option value="3" className="text-danger">Canceled</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="address" className="col-sm-2 col-form-label">
                  Address
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    id="address"
                    defaultValue={address}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">
                  Phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    id="phone"
                    defaultValue={phone}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="total_money" className="col-sm-2 col-form-label">
                  Total money
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    id="total_money"
                    defaultValue={total_money}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="description"
                  defaultValue={description}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Update Order
                </button>
              </div>
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderDetailRows()}
            </tbody>
          </table>
        </>
      );
    } else
    return <></>;
  }
}

const mapStateToProps = state => ({
  status: state.adminUpdateOrder.status,
  order: state.adminUpdateOrder.order,
  user: state.adminUpdateOrder.user,
  orderDetails: state.adminUpdateOrder.orderDetails,
  statusFetch: state.adminUpdateOrder.statusFetch
});

const mapDispatchToProps = dispatch => ({
  updateOrder: (data, orderId) => {
    dispatch(actions.updateOrder(data, orderId));
  },
  fetchOrder: id => {
    dispatch(actions.fetchOrder(id));
  },
  clearOldOrder: () => {
    dispatch(actions.clearOldOrder());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEditOrder));
