import React, { Component } from 'react';
import { ROCK, PAPER, SCISSORS } from '../../constants/weaponTypes';
import { getImageSrc } from '../../utils/weapon';

export default (props) => (
  <div class="weapon-menu">
    <a
      href
      class="weapon-menu__option"
      onClick={() => props.handleSelectWeapon(ROCK)}
    >
      <img class="weapon-menu__image" src={getImageSrc(ROCK)} alt="rock" />
    </a>
    <a
      href
      class="weapon-menu__option"
      onClick={() => props.handleSelectWeapon(PAPER)}
    >
      <img class="weapon-menu__image" src={getImageSrc(PAPER)} alt="paper" />
    </a>
    <a
      href
      class="weapon-menu__option"
      onClick={() => props.handleSelectWeapon(SCISSORS)}
    >
      <img class="weapon-menu__image" src={getImageSrc(SCISSORS)} alt="scissors" />
    </a>
  </div>
);
