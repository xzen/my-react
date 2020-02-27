import actionTypes from './action-types';

const initialState = {
  items: [],
};

const deleteProduct = (state, action) => ({
  items: state.items.filter((item) => (
    (item.id !== action.id) ? item : false
  )),
});

const addProduct = (state, action) => ({
  items: state.items.concat(action.product),
});

const loadProducts = (state, action) => ({
  items: state.items.concat(action.items),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      return deleteProduct(state, action);
    case actionTypes.ADD_PRODUCT:
      return addProduct(state, action);
    case actionTypes.LOAD_PRODUCTS:
      return loadProducts(state, action);
    default:
      return state;
  }
};
