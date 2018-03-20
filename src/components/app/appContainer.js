import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => ({
  test: state.test
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