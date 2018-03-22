import { connect } from 'react-redux';
import App from './app';

import { selectWeapon, calculateResult, resetGame } from '../../actions/game';
import { WIN, DRAW, LOSE } from '../../constants/results';

const mapStateToProps = (state) => ({
  gameState: state.gameState,
  userWeapon: state.userWeapon,
  cpuWeapon: state.cpuWeapon,
  lastResult: state.results.slice(-1)[0],
  winCount: state.results.filter(x => x === WIN).length,
  drawCount: state.results.filter(x => x === DRAW).length,
  loseCount: state.results.filter(x => x === LOSE).length,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectWeapon(weapon) {
    dispatch(selectWeapon(weapon));
  },
  showResult() {
    dispatch(calculateResult());
  },
  handleReset() {
    dispatch(resetGame());
  }
});

var AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;