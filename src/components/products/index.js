import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import { loadProducts, deleteProduct } from './actions';
import { addProductCaddy } from '../caddy/actions';

import Header from '../header';

const Product = ({ item, dispatch }) => (
  <div className="col-3 mb-4">
    <div className="card">
      <img width="400" src={item.image} className="card-img-top" alt="{name}" />
      <div className="card-body">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h6>{`${item.price} euros`}</h6>
          </li>
        </ul>
        <div className="card-body">
          <Button
            variant="success"
            value="add"
            block
            onClick={() => {
              axios.post(`http://127.0.0.1:3000/product/${item.id}/caddy/add`, {
                user_id: '5e58ce815d1156194ed5c6bd',
              })
                .then(() => {
                  dispatch(addProductCaddy(item.id));
                });
            }}
          >
            add
          </Button>
          <Button
            variant="danger"
            value="delete"
            block
            onClick={() => dispatch(deleteProduct(item.id))}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  </div>
);

class Products extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    axios.get('http://127.0.0.1:3000/products/list')
      .then((res) => {
        dispatch(loadProducts(res.data));
      });
  }

  render() {
    const { items, dispatch } = this.props;

    return (
      <div>
        <Header />
        <div>
          <div className="container mt-3">
            <div className="row">
              {items.map((item) => (
                <Product dispatch={dispatch} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToProps = (state) => {
  const { items } = state.products;

  return ({
    items,
  });
};

export default connect(mapToProps)(Products);
