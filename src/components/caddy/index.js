import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { loadCaddy } from './actions';

import Header from '../header';

class Caddy extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    axios.post('http://127.0.0.1:3000/products/caddy/show', {
      user_id: '5e58ce815d1156194ed5c6bd',
    }).then((res) => {
      dispatch(loadCaddy(res.data));
    });
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <Header />
        <div className="container mt-3">
          {items.map((product) => (
            <div className="row bg-light pt-3">
              <div className="form-group col-1">
                <img width="100%" src="https://api.tourism-system.com/resize/clip/782/400/80/aHR0cDovL2NkdDQwLm1lZGlhLnRvdXJpbnNvZnQuZXUvdXBsb2FkL0VjdXJpZS1kZS1Nb3VyaWxsb24tMy5qcGc=/image.jpg" alt="Product" />
              </div>
              <div className="form-group col-6">
                <p className="mt-3">{product.name}</p>
              </div>
              <div className="form-group col-1">
                <p className="mt-3">{`Stock : ${product.stock}`}</p>
              </div>
              <div className="form-group col-1 mt-3">
                <Button variant="dark" block>+</Button>
              </div>
              <div className="form-group col-1 mt-3">
                <Form.Control type="text" value={20} className="form-control" />
              </div>
              <div className="form-group col-1 mt-3">
                <Button variant="danger" block>-</Button>
              </div>
              <div className="form-group col-1">
                <p className="mt-4">{`${product.price} €`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapToProps = (state) => ({
  items: state.caddy.items,
});

export default connect(mapToProps)(Caddy);
