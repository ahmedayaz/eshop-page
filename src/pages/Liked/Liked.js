import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Product from '../../components/Product';
import MySpinner from '../../components/MySpinner';
import './styles.css';

import { config } from '../../services/config';

const Liked = ({ liked: { likedProducts } }) => {
  // console.log(likedProducts);

  return (
    <Fragment>
      <Row>
        {likedProducts.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </Row>
    </Fragment>
  );
};

export default connect(
  state => ({
    liked: state.likedReducer,
  }),
  {},
)(Liked);
