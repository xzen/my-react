import React from 'react';
import { Button } from 'react-bootstrap';

import Header from '../header';

const Caddy = () => (
  <div>
    <Header />
    <div className="container mt-3">
      <div className="form-row">
        <div className="form-group col-md-1">
          <Button variant="dark" block>+</Button>
        </div>
        <div className="form-group col-md-1">
          <input type="text" value="1" className="form-control" />
        </div>
        <div className="form-group col-md-1">
          <Button variant="dark" block>-</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Caddy;
