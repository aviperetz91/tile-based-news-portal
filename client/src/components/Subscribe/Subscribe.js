import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';


class Subscribe extends Component {

    state = {
        userInput: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api')
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Card onClick={ this.showModalHandler }>
                <Card.Body>
                    <Card.Title>Subscribe for updates</Card.Title>
                    <Form style={{ padding: 18 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={(event) => this.setState({ userInput: event.target.value })}
                            />
                            <Form.Text className="text-muted">
                            Please enter a valid email address (e.g. - username@gmail.com).
                            </Form.Text>
                        </Form.Group>
                        <Button 
                            variant="success" 
                            type="submit"
                            onClick={ () => console.log('SUBMIT') }
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default Subscribe;