import React, { Component } from 'react';

import { getImageSrc } from '../../utils/weapon';
import { ROCK } from '../../constants/weaponTypes';
import { COUNTDOWN, RESULT } from '../../constants/gameState';

import './weapon.css';

export default (props) => {
  const weapon = props.gameState !== RESULT ? ROCK : props.weapon;
  const imageSrc = getImageSrc(weapon);

  const weaponClass = props.gameState !== RESULT ? 'weapon--hide' : 'weapon--reveal';
  const weaponImageClass = props.gameState === COUNTDOWN ? 'weapon__image--animate' : '';

  return (
    <div className={`weapon ${weaponClass}`}>
      <img src={imageSrc} alt={weapon.toLowerCase()} className={`weapon__image ${weaponImageClass}`}/>
    </div>
  );
}