import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Flash from '../Flash';
import { withRouter } from 'react-router-dom';

class AdminEditProduct extends Component {

  componentDidMount() {
    let productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
    this.props.fetchAllCategories();
  }

  componentWillUnmount() {
    this.props.clearOldProduct();
  }

  render() {
    let { id, category_id, name, price, quantity, avg_rating, product_type, image, description } = this.props.product;
    let allCategories = this.props.allCategories;

    const onUpdateProduct = e => {
      e.preventDefault();

      const formData = new FormData();
      const file = document.querySelector('[type=file]').files[0];
      if (file) formData.append('product[image]', file);
      formData.append(
        'product[id]', id
      );

      formData.append(
        'product[name]', document.getElementById('name').value
      );

      formData.append(
        'product[price]', document.getElementById('price').value
      );

      formData.append(
        'product[quantity]', document.getElementById('quantity').value
      );

      formData.append(
        'product[product_type]', document.getElementById('product_type').value
      );

      formData.append(
        'product[description]', document.getElementById('description').value
      );

      this.props.updateProduct(formData, this.props.match.params.id);
    };

    const previewImage = e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.setState({ image: reader.result });
        };
        reader.readAsDataURL(file);
      } else {
        this.setState({ image: '' });
      }
    };

    const flashMessage = () =>
      this.props.status === 'ok' ? (
        <Flash type="success" message="Update successfully" />
      ) : null;

    const listCategories = allCategories => {
      if( allCategories !== undefined ) {
        return allCategories.map(cat => (
          <option key={cat[0]} value={cat[0]}>
            {cat[1]}
          </option>
        ));
      }
    }

    if (this.props.statusFetch === 'ok') {
      return (
        <form onSubmit={onUpdateProduct}>
          {flashMessage()}
          <h1>Edit Product</h1>
          <div className="form-group">
            <div className="row">
              <label htmlFor="category_id" className="col-sm-2 col-form-label">
                Categories
              </label>
              <div className="col-sm-10">
                <select id="category_id" className="form-control" defaultValue={category_id}>
                  {listCategories(allCategories)}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={name}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="price" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  defaultValue={price}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="quantity" className="col-sm-2 col-form-label">
                Quantity
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  defaultValue={quantity}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="avg_rating" className="col-sm-2 col-form-label">
                Avg rating
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="avg_rating"
                  defaultValue={avg_rating}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="product_type" className="col-sm-2 col-form-label">
                Product type
              </label>
              <div className="col-sm-10">
                <select id="product_type" className="form-control" defaultValue={product_type}>
                  <option value="1">Drink</option>
                  <option value="2">Food</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="image" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10 Profile-upload-image">
                <div className="Profile-browser col-sm-10">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="image"
                    onChange={previewImage}
                  />
                  <label className="custom-file-label" htmlFor="image">
                    Choose file
                  </label>
                </div>
                <div className="Profile-image col-sm-2">
                  <img src={image.url} alt={name} />
                </div>
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
                Update Category
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return <></>;
    }
  }
}

const mapStateToProps = state => ({
  status: state.adminUpdateProduct.status,
  product: state.adminUpdateProduct.product,
  allCategories: state.adminCategories.allCategories,
  statusFetch: state.adminUpdateProduct.statusFetch
});

const mapDispatchToProps = dispatch => ({
  updateProduct: (data, productId) => {
    dispatch(actions.updateProduct(data, productId));
  },
  fetchProduct: id => {
    dispatch(actions.fetchProduct(id));
  },
  fetchAllCategories: () => {
    dispatch(actions.fetchAllCategories());
  },
  clearOldProduct: () => {
    dispatch(actions.clearOldProduct());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEditProduct));
