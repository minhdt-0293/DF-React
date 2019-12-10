import React, { useEffect } from 'react';
import DrinkProducts from './DrinkProducts';
import FoodProducts from './FoodProducts';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import TitleCategories from './TitleCategories';

const Products = props => {
  useEffect(() => {
    props.fetchCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Home-Products">
      <div className="Home-Drink container">
        <div className="Home-Title">Drink Products</div>
        <TitleCategories
          categories={props.drinkCategories}
          productType={'drink'}
        />

        <DrinkProducts />
      </div>
      <div className="Home-Food">
        <div className="Home-Title">Food Products</div>

        <TitleCategories
          categories={props.foodCategories}
          productType={'food'}
        />

        <FoodProducts />
      </div>
    </div>
  );
};

const mapStateToProp = state => ({
  drinkCategories: state.categories.drinkCategories,
  foodCategories: state.categories.foodCategories
});

const mapDispatchToProp = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(actions.fetchCategoriesNormalUser());
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Products);
