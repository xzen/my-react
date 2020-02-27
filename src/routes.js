import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Caddy from './components/caddy';
import Home from './components/home';
import Products from './components/products';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/caddy" component={Caddy} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
