import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}



export default App;
