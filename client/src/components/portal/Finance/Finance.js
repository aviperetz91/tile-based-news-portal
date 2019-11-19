import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class Finance extends Component {

    render() {
        const financeObj = this.props.financeObj;

        let display =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(financeObj) {
            display = 
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> EUR: </div>
                        <div> { financeObj.USDEUR.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> CAD: </div>
                        <div> { financeObj.USDCAD.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> GBP: </div>
                        <div> { financeObj.USDGBP.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> AUD: </div>
                        <div> { financeObj.USDAUD.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> CHF: </div>
                        <div> { financeObj.USDCHF.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> NZD: </div>
                        <div> { financeObj.USDNZD.rate } </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div> ILS: </div>
                        <div> { financeObj.USDILS.rate } </div>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Finance</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Exchange rates (based USD):</Card.Subtitle>
                    { display }
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