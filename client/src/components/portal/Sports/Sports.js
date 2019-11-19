import React, { Component } from 'react';
// import { Spinner, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class Sports extends Component {

    render() {
        const sportsObj = this.props.sportsObj;

        let display =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(sportsObj) {
            display = 
                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                    <div> 
                        <img 
                            style={{ backgroundColor: '#e4e4e4', borderRadius: 30, borderColor: 'black', borderWidth: 2 }}
                            src={ sportsObj.home_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                        <p style={{ marginBottom: 0 }}>{ sportsObj.home_team.city }</p>
                        <p>{ sportsObj.home_team.name }</p>
                        <h5 style={{ fontWeight: 'bold' }}>{ sportsObj.home_team_score }</h5>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}> <h4>VS</h4> </div>
                    <div> 
                        <img 
                            style={{ backgroundColor: '#e4e4e4', borderRadius: 30, borderColor: 'black', borderWidth: 2 }}
                            src={ sportsObj.visitor_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                        <p style={{ marginBottom: 0 }}>{ sportsObj.visitor_team.city }</p>
                        <p>{ sportsObj.visitor_team.name }</p>
                        <h5 style={{ fontWeight: 'bold' }}>{ sportsObj.visitor_team_score }</h5>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Sports</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">NBA Latest Games:</Card.Subtitle>
                    { display }
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        sportsObj: state.sportsObj
    }
}

export default connect(mapStateToProps, null)(Sports);