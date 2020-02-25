import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../navbar';

const listNav = ['about', 'products'];

const Product = ({ image, name, text }) => (
  <div className="col-4 mb-4">
    <div className="card">
      <img src={image} className="card-img-top" alt="{name}" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <button type="button" className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  </div>
);

const Products = ({ items }) => (
  <div>
    <Navbar listNav={listNav} />
    <div className="container">
      <div className="row">
        {items.map((product) => {
          const { image, name, text } = product;

          return (<Product image={image} name={name} text={text} />);
        })}
      </div>
    </div>
  </div>
);


const mapToProps = (state) => {
  const { items } = state.products;

  return ({
    items,
  });
};

export default connect(mapToProps)(Products);
