import axios from 'axios';

import actionTypes from './action-types';

/**
 * Delete Product
 * @param {Object}
 */
export const deleteProduct = (id) => {
  axios.delete(`http://127.0.0.1:3000/product/remove/${id}`);

  return ({
    type: actionTypes.DELETE_PRODUCT,
    id,
  });
};

/**
 * Add Product
 * @param {Object}
 */
export const addProduct = () => {
  axios.post('http://127.0.0.1:3000/product/create', {
    type: actionTypes.ADD_PRODUCT,
    product: {
      id: '2UDHHDHDHDHDHDH12',
      image: 'https://api.tourism-system.com/resize/clip/782/400/80/aHR0cDovL2NkdDQwLm1lZGlhLnRvdXJpbnNvZnQuZXUvdXBsb2FkL0VjdXJpZS1kZS1Nb3VyaWxsb24tMy5qcGc=/image.jpg',
      name: 'Toto',
      text: 'c\'est mon super poney !',
      price: 34,
    },
  });

  return ({
    type: actionTypes.ADD_PRODUCT,
    product: {
      id: '2UDHHDHDHDHDHDH12',
      image: 'https://api.tourism-system.com/resize/clip/782/400/80/aHR0cDovL2NkdDQwLm1lZGlhLnRvdXJpbnNvZnQuZXUvdXBsb2FkL0VjdXJpZS1kZS1Nb3VyaWxsb24tMy5qcGc=/image.jpg',
      name: 'Toto',
      text: 'c\'est mon super poney !',
      price: 34,
    },
  });
};

/**
 * Load Products
 * @param {Object}
 */
export const loadProducts = (items) => ({
  type: actionTypes.LOAD_PRODUCTS,
  items,
});
