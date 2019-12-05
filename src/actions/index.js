import * as types from './../constants/ActionTypes';

export const logIn = data => {
  return {
    type: types.LOG_IN,
    data
  };
};

export const fetchCategories = data => {
  return {
    type: types.FECTH_CATEGORIES,
    data
  };
};

export const deleteCategory = data => {
  return {
    type: types.DELETE_CATEGORY,
    data
  };
};

export const setCurrentPage = currentPage => {
  return {
    type: types.SET_CURRENT_PAGE,
    currentPage
  };
};

export const updateProfile = data => {
  return {
    type: types.UPDATE_PROFILE,
    data
  };
};

export const logOut = () => {
  return {
    type: types.LOG_OUT
  };
};

export const fetchAdminInfo = () => ({
  type: types.FETCH_ADMIN_INFO
});

export const fetchCategoriesNormalUser = () => {
  return {
    type: types.FETCH_CATEGORIES_NU
  };
};

export const fetchProductsByCategory = (categoryId, productType) => ({
  type: types.FETCH_PRODUCTS_BY_CATEGORY,
  categoryId,
  productType
});

export const addCategory = data => {
  return {
    type: types.ADD_CATEGORY,
    data
  };
};
