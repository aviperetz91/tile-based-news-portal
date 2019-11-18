import React, { Component } from "react";
import { connect } from 'react-redux';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import * as portalActions from './store/actions/portalActions';

import News from './components/portal/News/News';
import Weather from './components/portal/Weather/Weather';
import Sports from './components/portal/Sports/Sports';
import Finance from './components/portal/Finance/Finance';


class App extends Component {  

  componentDidMount = () => {
    this.props.loadNews();
    this.props.loadWeather();
    this.props.loadFinance();
    this.props.loadSports();
  }

  render() {

    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={4}> <News /> </Col>
            <Col sm={8}> <Weather /> </Col>
          </Row>
          <br/>
          <Row>
            <Col> <Finance /> </Col>
            <Col> <Sports /> </Col>
            <Col><h2>Subscribe for updates</h2></Col>
          </Row>
        </Container>
      </Jumbotron>
      
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
