import React from 'react';
import { connect } from 'react-redux';

const showProduct = foodProducts => {
  let resultFirst = null;
  let resultSecond = null;
  let resultThird = null;
  let resultFourth = null;
  let result = null;
  if (foodProducts.length > 0) {
    const count = Math.ceil(foodProducts.length / 4);
    const columnFirst = foodProducts.slice(0, count);
    const columnSecond = foodProducts.slice(count, count * 2);
    const columnThird = foodProducts.slice(count * 2, count * 3);
    const columnFourth = foodProducts.slice(count * 3, count * 4);

    resultFirst = foodProduct(columnFirst);
    resultSecond = foodProduct(columnSecond);
    resultThird = foodProduct(columnThird);
    resultFourth = foodProduct(columnFourth);

    result = (
      <>
        <div className="col-md-3">{resultFirst}</div>
        <div className="col-md-3">{resultSecond}</div>
        <div className="col-md-3">{resultThird}</div>
        <div className="col-md-3">{resultFourth}</div>
      </>
    );
  }

  return result;
};

const foodProduct = products => {
  let result = null;
  if (products.length > 0) {
    result = products.map(product => (
      <div className="Home-column-food" key={product.id}>
        <span className="mb-4 h-100">
          <img className="img-fluid" src={product.image.url} alt="" />
        </span>
      </div>
    ));
  }
  return result;
};

const FoodProducts = props => {
  const { foodProducts } = props;
  return <div className="row text-center">{showProduct(foodProducts)}</div>;
};

const mapStateToProps = state => ({
  foodProducts: state.categories.foodProducts
});

export default connect(mapStateToProps)(FoodProducts);
