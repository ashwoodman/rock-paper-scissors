import React, { Component } from 'react';

import WeaponMenu from '../weaponMenu/weaponMenu';
import Weapon from '../weapon/weapon';
import SelectText from '../selectText/selectText';
import Countdown from '../countdown/countdown';
import ResultDisplay from '../resultDisplay/resultDisplay';

import { SELECTION, COUNTDOWN } from '../../constants/gameState';

import './app.css';

class App extends Component {
  renderUserComponent = () => {
    if (this.props.gameState === SELECTION) {
      return <WeaponMenu handleSelectWeapon={this.props.handleSelectWeapon} />;
    }
    return <Weapon gameState={this.props.gameState} weapon={this.props.userWeapon} />;
  }

  renderMiddleComponent = () => {
    if (this.props.gameState === SELECTION) {
      return <SelectText />;
    }
    if (this.props.gameState === COUNTDOWN) {
      return <Countdown showResult={this.props.showResult} />;
    }
    return <ResultDisplay lastResult={this.props.lastResult} handleReset={this.props.handleReset} />;
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
            <Weapon gameState={this.props.gameState} weapon={this.props.cpuWeapon} />
          </div>
        </div>
        
        <div className="footer">
          <span>Wins: {this.props.winCount}, Draws: {this.props.drawCount}, Losses: {this.props.loseCount}</span>
        </div>
      </div>
    );
  }
}

export default App;