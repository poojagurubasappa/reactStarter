 import 'babel-polyfill';
 import React from 'react';
 import { render } from 'react-dom';
 import HomePage from './components/home/HomePage';
 import LibraryPage from './components/library/LibraryPage';
 import App from './components/App';
 import { Route, BrowserRouter } from 'react-router-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import './styles/styles.css';


render(
  <BrowserRouter>
    <div>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/library" component={LibraryPage} />
        <Route path="/Home" component={HomePage} />
      </App>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
