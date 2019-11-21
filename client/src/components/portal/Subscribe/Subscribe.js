import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';


class Subscribe extends Component {

    state = {
        email: '',
        session: null
    }

    componentDidMount() {
        this.getSession();
    }

    getSession = ()=>{
        axios.get('http://localhost:4000/api')
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/subscribe',{ email:this.state.email })
        .then(response => {
            console.log(response.data);
            this.setState({ session: response.data.session.email })
        })
        .catch(err => console.log(err))
    }

    render() {

        let subscribe = 
            <Button
                variant="success" 
                type="submit"
                onClick={ this.submitHandler }
            >
            Submit
            </Button>

        if(this.state.session) {
            subscribe = 
                <h4> Thank you for subscriebed </h4>
        }

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
                                onChange={(event) => this.setState({ email: event.target.value })}
                            />
                            <Form.Text className="text-muted">
                            Please enter a valid email address (e.g. - username@gmail.com).
                            </Form.Text>
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            { subscribe }
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default Subscribe;