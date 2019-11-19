import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';

class Weather extends Component {

    setIcons = () => {
        const icon = this.props.weatherObj.hourly.data[0].icon;
        const current = icon.replace(/-/g, '_').toUpperCase();
        return current;
    }

    render() {
        const weatherObj = this.props.weatherObj;

        let display = 
            <div style={{ textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" />
            </div>

        if(weatherObj) {
            display = 
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <h2> { weatherObj.currently.temperature } °F </h2>
                        <h2> { weatherObj.timezone } </h2>
                    </div>
                    <div>
                        <Skycons 
                            color='black' 
                            height='120'
                            icon={ this.setIcons() }
                            autoplay={true}
                        />
                    </div>
                </div>
        }
        
        return(
            <Card style={{ height: 250 }}>
                <Card.Body >
                    <Card.Title>Weather</Card.Title>
                    { display }
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherObj: state.weatherObj
    }
}

export default connect(mapStateToProps, null)(Weather);