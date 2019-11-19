import React, { Component, Fragment } from 'react';
import { Spinner, Card, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class News extends Component {

    state = {
        showModal: false
    }

    showModalHandler = () => {
        this.setState({ showModal: true });
    }

    closeModalHandler = () => {
        this.setState({ showModal: false });
    }

    render() {

        const newsObj = this.props.newsObj;

        let content =
            <div style={{textAlign: 'center'}}> 
                <Spinner animation="border" variant="secondary" /> 
            </div>
        
        let modal = false;

        if(newsObj) {
            content = 
                <div>
                    <div>
                        <Card.Subtitle className="mb-2 text-muted">{ newsObj.articles[0].source.name }</Card.Subtitle>
                        <div>
                            { newsObj.articles[0].title }
                        </div>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}> 
                        <Card.Subtitle className="mb-2 text-muted" style={{fontStyle: 'italic'}}>
                        Author: { newsObj.articles[0].author ? 
                                newsObj.articles[0].author :
                                ' Prefers to remain anonymous' }
                        </Card.Subtitle>
                    </div>
                </div>

            modal = 
                <Modal centered show={this.state.showModal} onHide={ this.closeModalHandler }>
                    <Modal.Header closeButton>
                        <Modal.Title>{ newsObj.articles[0].source.name }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        { newsObj.articles[0].description ? 
                          newsObj.articles[0].description :
                          'There is no extension to this news coverage.'
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ this.closeModalHandler }>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        }

        return(
            <Fragment>
                <Card onClick={ this.showModalHandler }>
                    <Card.Body>
                        <Card.Title>News update</Card.Title>
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
        newsObj: state.newsObj
    }
}

export default connect(mapStateToProps, null)(News);