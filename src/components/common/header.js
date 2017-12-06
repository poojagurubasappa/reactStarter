import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar  navbar-light headerfx">
          <div className="row">
          <Link to="/Home" className="glyphicon glyphicon-headphones col-md-2 logo"></Link>
          <Link to="/Home" className="col-md-2">Home</Link>
          <Link to="/library" className="col-md-2">Library</Link>
          <Link to="/About" className="col-md-2">About</Link>
          <Link to="/ContactUs" className="col-md-2">ContactUs</Link>
          </div>
      </div>
    )
  }
}
