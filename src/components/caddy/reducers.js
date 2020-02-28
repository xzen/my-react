import actionTypes from './action-types';

const initialState = {
  items: [],
};

const addProductCaddy = (state, action) => ({
  items: state.items.concat(action.product),
});

const loadCaddy = (state, action) => ({
  items: action.items,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_CADDY:
      return addProductCaddy(state, action);
    case actionTypes.LOAD_CADDY:
      return loadCaddy(state, action);
    default:
      return state;
  }
};
