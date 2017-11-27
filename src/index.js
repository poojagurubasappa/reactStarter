import 'babel-polyfill';
 import React from 'react';
 import { render } from 'react-dom';
 import HomePage from './components/home/HomePage';
 import ProductPage from './components/product/ProductPage';
 import App from './components/App';
 import { Route, BrowserRouter } from 'react-router-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
  <BrowserRouter>
    <div>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalogue" component={ProductPage} />
      </App>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
