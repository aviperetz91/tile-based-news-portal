import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class News extends Component {

    render() {
        const newsObj = this.props.newsObj;

        let display =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>

        if(newsObj) {
            display = 
                <div>
                    <div>
                        { newsObj.articles[0].description }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>

                        </div>
                        <div>
                            { newsObj.articles[0].source.name }
                        </div>
                        
                    </div>
                </div>
        }

        return(
            <Card style={{ height: 250 }}>
                <Card.Body>
                    <Card.Title>News update</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Breaking news!</Card.Subtitle>
                    { display }
                    {/* <Card.Link href="#">Show me the full article</Card.Link> */}
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsObj: state.newsObj
    }
}

export default connect(mapStateToProps, null)(News);