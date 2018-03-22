import React, { Component } from 'react';

import { WIN, LOSE } from '../../constants/results';

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
        <span>{message}</span>
        <a href="#" className="reset-button" onClick={this.handleReset}>
          Play again
        </a>
      </div>
    );
  }
}
