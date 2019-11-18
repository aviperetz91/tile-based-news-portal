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
            // <Container style={{textAlign:'center'}}>
            //     <Row>
            //         <Col sm={6}>
            //             <Image src={ sportsObj.home_team_logo } width='60' roundedCircle   />
            //             <p style={{ marginBottom: 0 }}>{ sportsObj.home_team.city }</p>
            //             <p>{ sportsObj.home_team.name }</p>
            //             <p style={{ fontWeight: 'bold' }}>{ sportsObj.home_team_score }</p>
            //         </Col>
            //         {/* <Col sm={4} style={{verticalAlign: 'center'}}> <p>VS</p> </Col> */}
            //         <Col sm={6}>
            //             <Image src={ sportsObj.visitor_team_logo } width='60' roundedCircle   />
            //             <p style={{ marginBottom: 0 }}>{ sportsObj.visitor_team.city }</p>
            //             <p>{ sportsObj.visitor_team.name }</p>
            //             <p style={{ fontWeight: 'bold' }}>{ sportsObj.visitor_team_score }</p>
            //         </Col>
            //     </Row>
            // </Container>
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
            <Card style={{ height: 250 }}>
                <Card.Body>
                    <Card.Title>Sports</Card.Title>
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