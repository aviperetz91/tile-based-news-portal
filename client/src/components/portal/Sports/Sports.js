import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class Sports extends Component {

    render() {
        const sportsObj = this.props.sportsObj;

        let content =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(sportsObj) {
            content = 
                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', paddingBottom: 8 }}>
                    <div> 
                        <img 
                            style={{ backgroundColor: '#e4e4e4', borderRadius: 30, borderColor: 'black', borderWidth: 2 }}
                            src={ sportsObj.home_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                        <p style={{ marginBottom: 0, fontWeight: '500' }}>{ sportsObj.home_team.city }</p>
                        <p style={{ fontWeight: '500' }} >{ sportsObj.home_team.name }</p>
                        <h4 style={{ color: '#565656' }}>{ sportsObj.home_team_score }</h4>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}> <h4 style={{ color: '#565656' }}>VS</h4> </div>
                    <div> 
                        <img 
                            style={{ backgroundColor: '#e4e4e4', borderRadius: 30, borderColor: 'black', borderWidth: 2 }}
                            src={ sportsObj.visitor_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                        <p style={{ marginBottom: 0, fontWeight: '500' }}>{ sportsObj.visitor_team.city }</p>
                        <p style={{ fontWeight: '500' }}>{ sportsObj.visitor_team.name }</p>
                        <h4 style={{ color: '#565656' }}>{ sportsObj.visitor_team_score }</h4>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Sports</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: 12 }}
                        >NBA Latest Games:
                    </Card.Subtitle>
                    { content }
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