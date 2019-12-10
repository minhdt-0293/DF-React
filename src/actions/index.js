import * as types from './../constants/ActionTypes';

export const logIn = data => {
  return {
    type: types.LOG_IN,
    data
  };
};

export const fetchCategories = data => {
  return {
    type: types.FETCH_CATEGORIES,
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

export const updateCategory = (data, categoryId) => {
  return {
    type: types.UPDATE_CATEGORY,
    data,
    categoryId
  };
};

export const fetchCategory = id => {
  return {
    type: types.FETCH_CATEGORY,
    id
  }
}

export const fetchProducts = data => {
  return {
    type: types.FETCH_PRODUCTS,
    data
  };
};

export const deleteProduct = data => {
  return {
    type: types.DELETE_PRODUCT,
    data
  };
};

export const updateProduct = (data, productId) => {
  return {
    type: types.UPDATE_PRODUCT,
    data,
    productId
  };
};

export const fetchProduct = id => {
  return {
    type: types.FETCH_PRODUCT,
    id
  }
}

export const addProduct = data => {
  return {
    type: types.ADD_PRODUCT,
    data
  };
};

export const fetchAllCategories = (data) => {
  return {
    type: types.ALL_CATEGORIES,
    data
  }
}
