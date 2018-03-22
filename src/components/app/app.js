import React, { Component } from 'react';

import WeaponMenu from '../weaponMenu/weaponMenu';
import Weapon from '../weapon/weapon';
import SelectText from '../selectText/selectText';
import Countdown from '../countdown/countdown';
import ResultDisplay from '../resultDisplay/resultDisplay';

import { SELECTION, COUNTDOWN, RESULT } from '../../constants/gameState';

import './app.css';

class App extends Component {
  renderUserComponent = () => {
    if (this.props.gameState === SELECTION) {
      return <WeaponMenu handleSelectWeapon={this.props.handleSelectWeapon} />;
    }
    return <Weapon />;
  }

  renderMiddleComponent = () => {
    if (this.props.gameState === SELECTION) {
      return <SelectText />;
    }
    if (this.props.gameState === COUNTDOWN) {
      return <Countdown showResult={this.props.showResult} />;
    }
    return <ResultDisplay />;
  } 

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Rock, Paper, Scissors</h1>
        </div>
      
        <div className="main">
          <div className="player player--user">
            {this.renderUserComponent()}
          </div>

          <div className="middle">
            {this.renderMiddleComponent()}
          </div>

          <div className="player player--cpu">
            <Weapon />
          </div>
        </div>
        
        <div className="footer">
          <span>Wins: TODO, Draws: TODO, Losses: TODO</span>
        </div>
      </div>
    );
  }
}

export default App;