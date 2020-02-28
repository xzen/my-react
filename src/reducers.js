import { combineReducers } from 'redux';

import products from './components/products/reducers';
import caddy from './components/caddy/reducers';

export default combineReducers({
  products,
  caddy,
});
