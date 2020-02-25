import actionTypes from './action-types';

const initialState = {
  items: [{
    id: '1',
    image: 'https://www.stickpng.com/assets/images/5871217c38315b0eebc1da26.png',
    name: 'Alexa',
    text: 'C\'est un super produit',
  }, {
    id: '2',
    image: 'https://www.stickpng.com/assets/images/5871217c38315b0eebc1da26.png',
    name: 'Alexa',
    text: 'C\'est un super produit',
  }, {
    id: '3',
    image: 'https://www.stickpng.com/assets/images/5871217c38315b0eebc1da26.png',
    name: 'Alexa',
    text: 'C\'est un super produit',
  }, {
    id: '4',
    image: 'https://www.stickpng.com/assets/images/5871217c38315b0eebc1da26.png',
    name: 'Alexa',
    text: 'C\'est un super produit',
  }],
};

const deleteProduct = (state, action) => ({
  items: state.items.filter((item) => (
    (item.id !== action.id) ? item : false
  )),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      return deleteProduct(state, action);
    default:
      return state;
  }
};
