//Home.jsx
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class Product extends Component {
  constructor(props) {
    super(props);

    let wishList = localStorage.getItem('wishList');
    this.state = {
      wishList: wishList !== null ? wishList.split(',') : []
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }

  render() {
    let product = this.props.product;
    let classWishList = '';

    if (localStorage.getItem('wishList') !== null) {
      let inWishList = false;

      inWishList = this.state.wishList.includes(this.props.match.params.id.toString());
      classWishList = inWishList ? 'bg-light text-danger' : '';
    }

    const handleClickWishList = e => {
      e.preventDefault();
      e.target.classList.toggle("bg-light");
      e.target.classList.toggle("text-danger");

      if(this.state.wishList.includes(product.id.toString())) {
        let indexProductId = this.state.wishList.indexOf(product.id.toString())
        this.state.wishList.splice(indexProductId, 1);
      } else {
        this.state.wishList.push(product.id.toString());
      }

      localStorage.setItem('wishList', this.state.wishList.join(','));
    }

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 product-left">
            <img src={product.image === undefined ? '' : product.image.url} alt={product.name}/>
          </div>
          <div className="col-sm-6 product-right">
            <h3 className="product-title">{product.name}</h3>
            <hr/>
            <div className="rating-wrapper">
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star text-warning"></span>
              <span className="fa fa-star-o"></span>
            </div>
            <hr/>
            <div className="short-desc attr">
              <p>
                <span className="font-weight-bold text-black">Quantity: </span>
                <span className="text-gray">{product.quantity}</span>
              </p>
              <p>
                <span className="font-weight-bold text-black">Description: </span>{product.description}
              </p>
            </div>
            <hr/>
            <p className="text-black font-weight-bold">${product.price}</p>
            <div className="d-flex cart-block">
              <input type="number" defaultValue="1" className="mx-1 qty-input form-control w-auto d-inline-block"/>
              <button className="btn btn-primary mx-1">Add to Cart</button>
              <button className={`btn btn-danger mx-1 bg-danger text-white ${classWishList}`} onClick={handleClickWishList}><i className="fa fa-heart"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.adminUpdateProduct.product
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => {
    dispatch(actions.fetchProduct(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
