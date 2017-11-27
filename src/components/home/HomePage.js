import React from 'react';
import {Link} from 'react-router-dom';
import ProductPage from '../product/ProductPage';

export default class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
          <p>Hello</p>
          <Link to="/catalogue" className="btn btn-primary">Product Page</Link>
        </div>
    );
  }
}
