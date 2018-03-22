import React, { Component } from 'react';

export default class Countdown extends Component {
  state = {
    count: 3
  }

  render() {
    setTimeout(() => {
      if (this.state.count === 1) {
        return this.props.showResult();
      }

      this.setState({
        count: this.state.count - 1
      });
    }, 1000);

    return (
      <div>
        <span>{this.state.count}</span>
      </div>
    );
  }
}