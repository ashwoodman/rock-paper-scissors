import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ROCK, PAPER, SCISSORS } from '../../constants/weaponTypes';
import { getImageSrc } from '../../utils/weapon';

import './weaponMenu.css';

export default class WeaponMenu extends Component {
  static propTypes = {
    handleSelectWeapon: PropTypes.func.isRequired
  }

  handleSelectWeapon = (event, weapon) => {
    event.preventDefault();
    this.props.handleSelectWeapon(weapon);
  }

  render() {
    return (
      <div className="weapon-menu">
        <a
          href="#"
          className="weapon-menu__option"
          onClick={(event) => this.handleSelectWeapon(event, ROCK)}
        >
          <img className="weapon-menu__image" src={getImageSrc(ROCK)} alt="rock" />
        </a>
        <a
          href="#"
          className="weapon-menu__option"
          onClick={(event) => this.handleSelectWeapon(event, PAPER)}
        >
          <img className="weapon-menu__image" src={getImageSrc(PAPER)} alt="paper" />
        </a>
        <a
          href="#"
          className="weapon-menu__option"
          onClick={(event) => this.handleSelectWeapon(event, SCISSORS)}
        >
          <img className="weapon-menu__image" src={getImageSrc(SCISSORS)} alt="scissors" />
        </a>
      </div>
    );
  }
}
