import actionTypes from './action-types';

/**
 * Load Caddy
 * @param {Object}
 */
export const loadCaddy = (items) => ({
  type: actionTypes.LOAD_CADDY,
  items,
});

/**
 * Add Product Caddy
 * @param {Number} id - id of product
 */
export const addProductCaddy = (id) => ({
  type: actionTypes.ADD_PRODUCT_CADDY,
  id,
});
