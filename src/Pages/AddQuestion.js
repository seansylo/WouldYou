import React from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from './../_redux/_actions/questions';
import { Row, Col, Form, Button } from 'react-bootstrap';

class AddQuestion extends React.Component {
    state = {
        opt1: '',
        opt2: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        handleSaveQuestion(this.state.opt1, this.state.opt2, this.props.authUser);
    }

    render() {
        return (
            <Row>
                <Col sm={6} className="mx-auto">
                    <div className="newQContainer">
                        <h2>Add new question</h2>
                        <h4>Would you rather...?</h4>
                        <Form className="mx-auto" onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Control id="opt1" placeholder="Enter option 1" value={this.state.opt1} onChange={this.handleChange}/>
                            <p>OR...</p>
                            <Form.Control id="opt2" placeholder="Enter option 2" value={this.state.opt2} onChange={this.handleChange}/>
                            <Button className="btn-submit" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(AddQuestion);