import { connect } from 'react-redux';
import App from './app';

import { selectWeapon } from '../../actions/game';

const mapStateToProps = (state) => ({
  gameState: state.gameState
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectWeapon(weapon) {
    dispatch(selectWeapon(weapon));
  }
});

var AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;