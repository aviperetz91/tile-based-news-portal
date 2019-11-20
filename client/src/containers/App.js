import React, { Component } from "react";
import { connect } from 'react-redux';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import * as portalActions from '../store/actions/portalActions';

import News from '../components/portal/News/News';
import Weather from '../components/portal/Weather/Weather';
import Sports from '../components/portal/Sports/Sports';
import Finance from '../components/portal/Finance/Finance';
import Subscribe from '../components/Subscribe/Subscribe';


class App extends Component {  

    componentDidMount = () => {
        this.props.loadNews();
        this.props.loadWeather();
        this.props.loadFinance();
        this.props.loadSports();
    }
  
  render() {

    return (
        <Jumbotron style={{ backgroundColor: '#f4f4f4' }}>
            <Container>
                <Row>
                    <Col md={4}> <News /> </Col>
                    <Col md={8}> <Weather /> </Col>
                </Row>
                <br/>
                <Row>
                    <Col> <Finance /> </Col>
                    <Col> <Sports /> </Col>
                    <Col> <Subscribe /> </Col>
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
