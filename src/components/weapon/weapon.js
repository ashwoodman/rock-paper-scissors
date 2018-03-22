import React, { Component } from 'react';

import { getImageSrc } from '../../utils/weapon';
import { ROCK } from '../../constants/weaponTypes';
import { RESULT } from '../../constants/gameState';

import './weapon.css';

export default (props) => {
  const weapon = props.gameState !== RESULT ? ROCK : props.weapon;
  const imageSrc = getImageSrc(weapon);

  const weaponClass = props.gameState !== RESULT ? 'weapon--hide' : 'weapon--reveal';
  // TODO weapon__image class

  return (
    <div className={`weapon ${weaponClass}`}>
      <img src={imageSrc} alt className="weapon__image"/>
    </div>
  );
}