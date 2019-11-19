import React, { Component, Fragment } from 'react';
import { Spinner, Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';

class Weather extends Component {

    state = {
        showModal: false
    }

    showModalHandler = () => {
        this.setState({ showModal: true });
    }

    closeModalHandler = () => {
        this.setState({ showModal: false });
    }

    setIcons = (icon) => {
        const current = icon.replace(/-/g, '_').toUpperCase();
        return current;
    }

    render() {

        const weatherObj = this.props.weatherObj;

        let content = 
            <div style={{ textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" />
            </div>

        let modal = false;
        let fullWeek = false;

        if(weatherObj) {
            content = 
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div>
                            <h2> { weatherObj.currently.temperature } °F </h2>
                            <h2> { weatherObj.timezone } </h2>
                        </div>
                        <div>
                            <Skycons 
                                color='black' 
                                height='110'
                                icon={ this.setIcons(weatherObj.hourly.data[0].icon) }
                                autoplay={ true }
                            />
                        </div>
                    </div>
                    <div style={{ fontStyle: 'oblique' }}>
                        ** { weatherObj.hourly.summary }
                    </div>
                </div>

            fullWeek = weatherObj.daily.data.map(day => {
                return (
                    <Col key={day.time}>
                        <div>
                            <Skycons 
                                color='black' 
                                icon={ this.setIcons(day.icon) }
                                autoplay={ true }
                            />
                        </div>
                        <div>
                            <p style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}> { day.temperatureMin } °F - { day.temperatureMax } °F </p>
                        </div>
                    </Col>
                )
            })

            modal = 
                <Modal centered show={this.state.showModal} onHide={this.closeModalHandler} size='xl'>
                    <Modal.Header closeButton style={{ display: 'flex', justifyContent: 'center' }}>
                        <Modal.Title>Weather</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                { fullWeek }
                            </Row>
                        </Container>
                        <Container>
                            <Row style={{ textAlign: 'center' }}>
                                <Col>Sunday</Col>
                                <Col>Monday</Col>
                                <Col>Tuesday</Col>
                                <Col>Wednesday</Col>
                                <Col>Thursday</Col>
                                <Col>Friday</Col>
                                <Col>Saturday</Col>
                                <Col>Sunday</Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModalHandler}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        }
        
        return(
            <Fragment>
                <Card onClick={ this.showModalHandler }>
                    <Card.Body >
                        <Card.Title>Weather</Card.Title>
                        { content }
                    </Card.Body>
                </Card>
                { modal }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherObj: state.weatherObj
    }
}

export default connect(mapStateToProps, null)(Weather);