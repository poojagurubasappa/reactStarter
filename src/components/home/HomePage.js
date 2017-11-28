import React from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron homepg">
          <div className="container-fluid">
            <div className="row">
              <Link to="/library" className="libLink"><h1>MUSIC LIBRARY</h1></Link>
            </div>
            <div className="row libLink">
              <h3>The Lyrical Store</h3>
            </div>
          </div>
        </div>
    );
  }
}
