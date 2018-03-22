import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Countdown extends Component {
  static propTypes = {
    showResult: PropTypes.func.isRequired
  }

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
    }, 700);

    return (
      <div>
        <span>{this.state.count}</span>
      </div>
    );
  }
}