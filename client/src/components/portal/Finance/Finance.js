import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class Finance extends Component {

    render() {
        const financeObj = this.props.financeObj;

        let content =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(financeObj) {
            content = 
                <div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around', backgroundColor: '#e4e4e4', borderRadius: 10 }}>
                        <div> EUR: </div>
                        <div> { financeObj.USDEUR.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around' }}>
                        <div> CAD: </div>
                        <div> { financeObj.USDCAD.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around', backgroundColor: '#e4e4e4', borderRadius: 10 }}>
                        <div> GBP: </div>
                        <div> { financeObj.USDGBP.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around' }}>
                        <div> AUD: </div>
                        <div> { financeObj.USDAUD.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around', backgroundColor: '#e4e4e4', borderRadius: 10 }}>
                        <div> CHF: </div>
                        <div> { financeObj.USDCHF.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around' }}>
                        <div> NZD: </div>
                        <div> { financeObj.USDNZD.rate } </div>
                    </div>
                    <div style={{ fontWeight: '500', display: 'flex', justifyContent: 'space-around', backgroundColor: '#e4e4e4', borderRadius: 10 }}>
                        <div> ILS: </div>
                        <div> { financeObj.USDILS.rate } </div>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Finance</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: 12 }}>
                        Exchange rates based USD:
                    </Card.Subtitle>
                    { content }
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        financeObj: state.financeObj
    }
}

export default connect(mapStateToProps, null)(Finance);