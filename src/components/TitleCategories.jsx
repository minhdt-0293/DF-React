import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const TitleCategory = props => {
  const [activeDrink, setActive] = useState(0);
  var result = null;
  const { categories } = props;

  if (categories.length > 0) {
    result = categories.map((category, index) => {
      let active = activeDrink === index ? 'nav-link active' : 'nav-link';
      return (
        <li className="nav-item" key={index}>
          <span
            className={active}
            onClick={e =>
              fetchProductsByCategory(e, props, setActive, category.id, index)
            }
          >
            {category.name}
          </span>
        </li>
      );
    });
  }
  return result;
};

const fetchProductsByCategory = (e, props, setActive, categoryId, index) => {
  setActive(index);
  e.preventDefault();
  props.fetchProductsByCategory(categoryId, props.productType);
};

const TitleCategories = props => {
  return (
    <div className="Home-category-drink">
      <ul className="nav justify-content-center">
        {props.categories.length > 0 && <TitleCategory {...props} />}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsByCategory: (categoryId, productType) =>
      dispatch(actions.fetchProductsByCategory(categoryId, productType))
  };
};

export default connect(null, mapDispatchToProps)(TitleCategories);
