import React, { Component } from 'react';

import { WIN, LOSE } from '../../constants/results';

import './resultDisplay.css';

export default class ResultDisplay extends Component {
  handleReset = (event) => {
    event.preventDefault();
    this.props.handleReset();
  }

  render() {
    let message = 'Draw!';
    if (this.props.lastResult === WIN) message = 'You win!';
    if (this.props.lastResult === LOSE) message = 'You lose!';

    return (
      <div>
        <span className="result__message">{message}</span>
        <a href="#" className="result__reset" onClick={this.handleReset}>
          Play again
        </a>
      </div>
    );
  }
}
