import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <span>{this.props.temp}</span>
      </div>
    );
  }
}

export default App;