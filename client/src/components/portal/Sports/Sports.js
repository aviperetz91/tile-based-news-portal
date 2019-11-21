import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from './style';

class Sports extends Component {

    render() {
        const sportsObj = this.props.sportsObj;

        let content =
            <div style={ styles.spinnerContainer }> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(sportsObj) {
            content = 
                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', paddingBottom: 8 }}>
                    <div> 
                        <img 
                            style={ styles.logo }
                            src={ sportsObj.home_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                        <p style={ styles.team }>
                            { sportsObj.home_team.city }
                            <br/>
                            { sportsObj.home_team.name }
                        </p>
                        <h4 style={ styles.score }>{ sportsObj.home_team_score }</h4>
                    </div>
                    <div style={ styles.vsContainer }> <h1 style={ styles.vs }>VS</h1> </div>
                    <div> 
                        <img 
                            style={ styles.logo }
                            src={ sportsObj.visitor_team_logo } 
                            alt='logo'
                            width='60' 
                        />
                         <p style={ styles.team }>
                            { sportsObj.visitor_team.city }
                            <br/>
                            { sportsObj.visitor_team.name }
                        </p>
                        <h4 style={ styles.score }>{ sportsObj.visitor_team_score }</h4>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Sports</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={ styles.subTitle }
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