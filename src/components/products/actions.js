import actionTypes from './action-types'

/**
 * Delete Product
 * @param {Object} 
 */
export const deleteProduct = (id) => ({
  type: actionTypes.DELETE_PRODUCT,
  id
});
