import React from 'react';
import { connect } from 'react-redux';

const showProduct = drinkProducts => {
  var result = null;
  if (drinkProducts.length > 0) {
    result = drinkProducts.map((product, index) => {
      return (
        <div
          className="col-lg-3 col-md-4 col-6 thumbnail Home-product"
          key={index}
        >
          <a href="javacript:void(0)" className="mb-4 h-100">
            <img className="img-fluid" src={product.image.url} alt="" />
          </a>
          <div className="Home-detail-product">
            <div className="Home-order">
              <i
                className="fa fa-shopping-cart"
                aria-hidden="true"
                onClick={e => addToCart(e, product.id)}
              ></i>
              <i className="fa fa-heart" aria-hidden="true"></i>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <i className="fa fa-search-plus" aria-hidden="true"></i>
            </div>
            <div className="Home-name-product">{product.name}</div>
            <div className="Home-price-product">${product.price}</div>
          </div>
        </div>
      );
    });
  }
  return result;
};

const addToCart = (e, productId) => {
  activeOrderIcon(e);
};

const activeOrderIcon = e => {
  let className = e.target.className;
  if (className.includes('active-order-icon')) {
    e.target.classList.remove('active-order-icon');
  } else {
    e.target.classList.add('active-order-icon');
  }
};

const DrinkProducts = props => {
  const { drinkProducts } = props;
  return (
    <div className="row text-center text-lg-left">
      {showProduct(drinkProducts)}
    </div>
  );
};

const mapStateToProps = state => ({
  drinkProducts: state.categories.drinkProducts
});

export default connect(mapStateToProps)(DrinkProducts);
