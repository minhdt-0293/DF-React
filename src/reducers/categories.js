import * as types from './../constants/ActionTypes';

const initialState = {
  drinkCategories: [],
  foodCategories: [],
  drinkProducts: [],
  foodProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_NU:
      return state;
    case types.FETCH_CATEGORIES_SUCCESS_NU:
      return {
        ...state,
        drinkCategories: action.data.drink_categories,
        foodCategories: action.data.food_categories,
        drinkProducts: action.data.drink_products,
        foodProducts: action.data.food_products
      };
    case types.FETCH_PRODUCTS_BY_CATEGORY:
      return state;
    case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      if (action.data.food_products === undefined) {
        return {
          ...state,
          drinkProducts: action.data.drink_products
        };
      } else {
        return {
          ...state,
          foodProducts: action.data.food_products
        };
      }
    default:
      return state;
  }
};

export default reducer;
