import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getImageSrc } from '../../utils/weapon';
import { ROCK } from '../../constants/weaponTypes';
import { COUNTDOWN, RESULT } from '../../constants/gameState';

import './weapon.css';

export default class Weapon extends Component {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    weapon: PropTypes.string.isRequired
  }

  render() {
    const weapon = this.props.gameState !== RESULT ? ROCK : this.props.weapon;
    const imageSrc = getImageSrc(weapon);

    const weaponClass = this.props.gameState !== RESULT ? 'weapon--hide' : 'weapon--reveal';
    const weaponImageClass = this.props.gameState === COUNTDOWN ? 'weapon__image--animate' : '';

    return (
      <div className={`weapon ${weaponClass}`}>
        <img src={imageSrc} alt={weapon.toLowerCase()} className={`weapon__image ${weaponImageClass}`}/>
      </div>
    );
  }
}