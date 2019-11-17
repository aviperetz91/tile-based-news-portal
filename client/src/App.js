import React, { Component } from "react";
import { connect } from 'react-redux';

import * as portalActions from './store/actions/portalActions';
import Test from './containers/Test/Test';

class App extends Component {  

  componentDidMount = () => {
    this.props.loadNews();
    this.props.loadWeather();
    this.props.loadFinance();
    this.props.loadSports();
  }

  render() {

    return (
      <div>
        <div>HOME PAGE!</div>
        <Test />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
      loadNews: () => dispatch(portalActions.getNews()),
      loadWeather: () => dispatch(portalActions.getWeather()),
      loadFinance: () => dispatch(portalActions.getFinance()),
      loadSports: () => dispatch(portalActions.getSports())
  }
}

export default connect(null, mapDispatchToProps)(App);
