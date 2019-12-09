import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPage: 1,
      showModal: false
    };
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { currentPage, products, totalPage } = this.props;

    let arrPages = [];

    for (let page = 1; page <= totalPage; page++) {
      arrPages.push(page);
    }

    const RowProduct = () =>
      products.map(product => (
        <tr key={product.id + product.name}>
          <th scope="row">{product.id}</th>
          <td>
            <img className="w-100" src={product.image} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>
            <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
            <span
              className="text-danger mx-1 cursor-pointer"
              onClick={event =>
                handleClickDelete(event, product.id, product.name)
              }
            >
              Delete
            </span>
          </td>
        </tr>
      ));

    const handleClickPaginate = ({ page }) => {
      this.props.setCurrentPage(page);
      this.props.fetchProducts({ page });
    };

    const handleClickDelete = (event, productId, productName) => {
      if (window.confirm('Confirm delete product "' + productName + '" ?')) {
        event.preventDefault();
        this.props.deleteProduct(productId, currentPage);
      }
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">
                <h1 className="my-4 admin-title">Products</h1>
              </div>
              <div className="col-12 col-md-4 text-right">
                <Link className="btn btn-primary" to="/admin/products/add">
                  Add Product
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <RowProduct />
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
  const adminState = state.adminProducts;
  return {
    currentPage: adminState.currentPage,
    products: adminState.products,
    totalPage: adminState.total_pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: page => {
      dispatch(actions.fetchProducts(page));
    },
    deleteProduct: (productId, page) => {
      dispatch(actions.deleteProduct({ productId: productId, page: page }));
    },
    setCurrentPage: page => dispatch(actions.setCurrentPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
