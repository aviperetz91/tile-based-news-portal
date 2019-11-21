import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from './style';

class Finance extends Component {

    render() {
        const financeObj = this.props.financeObj;

        let content =
            <div style={ styles.spinnerContainer }> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(financeObj) {
            content = 
                <div>
                    <div style={{...styles.item, ...styles.itemGrey}}>
                        <div> EUR: </div>
                        <div> { financeObj.USDEUR.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemDarkBlue}}>
                        <div> CAD: </div>
                        <div> { financeObj.USDCAD.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemGrey}}>
                        <div> GBP: </div>
                        <div> { financeObj.USDGBP.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemDarkBlue}}>
                        <div> AUD: </div>
                        <div> { financeObj.USDAUD.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemGrey}}>
                        <div> CHF: </div>
                        <div> { financeObj.USDCHF.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemDarkBlue}}>
                        <div> NZD: </div>
                        <div> { financeObj.USDNZD.rate } </div>
                    </div>
                    <div style={{...styles.item, ...styles.itemGrey}}>
                        <div> ILS: </div>
                        <div> { financeObj.USDILS.rate } </div>
                    </div>
                </div>
        }

        return(
            <Card>
                <Card.Body>
                    <Card.Title>Finance</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={ styles.subTitle }>
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