import React, {PropTypes} from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import styles from '../styles/styles.css';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row appContents">
        {this.props.children}
      </div>
      <div className="row">
        <Footer />
      </div>
      </div>
    );
  }
}



export default App;
