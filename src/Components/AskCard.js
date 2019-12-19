import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AskCard extends React.Component {
    render() {
        let {
            questionsByType,
            questionType,
            questions,
            handleSubmit,
            handleClickAnswer,
            users,
            authUser,
        } = this.props;

        return questionsByType.map((question) => (
            <Row key={questions[question].id} className="userQuestion">
                <Col>
                    <Row>
                        <Col className="homeUserName">   
                            <h5>{`${users[questions[question].author].name} is asking...`}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>Would you rather?</h6>
                            {questionType === 'answered' && (
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <img
                                                src={users[authUser].avatarURL ||'https://placeimg.com/72/72/any'}
                                                alt="user icon"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}>
                                            {questions[question]['optionOne'].text}
                                        </Col>
                                        <Col><b>OR</b></Col>
                                        <Col sm={5}>
                                            {questions[question]['optionTwo'].text}
                                        </Col>
                                    </Row>
                                        <Link
                                            to={`/questions/${questions[question].id}`}>
                                            Question Details
                                        </Link>
                                </Col>
                            </Row>
                        )}
                        {questionType === 'unanswered' && (
                            <Form
                                onSubmit={(e) => handleSubmit(e)}
                                data-id={question}
                            >
                                <Form.Group as={Row}>
                                    <Col sm={10}>
                                        <Button
                                            type="submit"
                                            value="optionOne"
                                            label={
                                                questions[question][
                                                    'optionOne'
                                                ].text
                                            }
                                            onClick={(e) => handleClickAnswer(e)}
                                        >
                                            {questions[question]['optionOne'].text}
                                        </Button>
                                        <b> OR </b>
                                        <Button
                                            type="submit"
                                            value="optionTwo"
                                            label={
                                                questions[question][
                                                    'optionTwo'
                                                ].text
                                            }
                                            onClick={(e) => handleClickAnswer(e)}
                                        >
                                            {questions[question]['optionTwo'].text}
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        ));
    }
}

export default AskCard;
