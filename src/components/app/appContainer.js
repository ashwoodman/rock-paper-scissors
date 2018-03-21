import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => ({
  gameState: state.gameState
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch({});
  }
});

var AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;