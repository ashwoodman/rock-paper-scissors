import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <span>{this.props.test}</span>
      </div>
    );
  }
}

export default App;