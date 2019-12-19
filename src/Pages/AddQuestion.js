import React from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from './../_redux/_actions/questions';
import { Row, Col, Form, Button } from 'react-bootstrap';

class AddQuestion extends React.Component {
    state = {
        opt1: '',
        opt2: '',
    }

    handleChange = (e, optNumber) => {
        let options = {
            opt1: this.state.opt1,
            opt2: this.state.opt2,
        };
        options[optNumber] = e.currentTarget.value;
        this.setState({
            ...options,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.opt1 !== '' && this.state.opt2 !== '') {
            this.props.dispatch(
                handleSaveQuestion(
                    this.state.opt1,
                    this.state.opt2,
                    this.props.authUser,
                ),
            );
        }
        console.log(this.state)
        this.props.history.push('/');
    }

    render() {
        return (
            <Row>
                <Col sm={6} className="mx-auto">
                    <div className="newQContainer">
                        <h2>Add new question</h2>
                        <h4>Would you rather...?</h4>
                        <Form className="mx-auto" onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Control id="opt1" placeholder="Enter option 1" value={this.state.opt1} onChange={(e) => this.handleChange(e, 'opt1')
                                    }/>
                            <p>OR...</p>
                            <Form.Control id="opt2" placeholder="Enter option 2" value={this.state.opt2} onChange={(e) => this.handleChange(e, 'opt2')
                                    }/>
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