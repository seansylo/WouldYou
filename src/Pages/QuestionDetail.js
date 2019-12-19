import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';

class QuestionDetails extends React.Component {
    render() {
        let { questions } = this.props;
        const qid = this.props.match.params['question_id'],
            question = questions[qid],
            percentageVoted = function(option, optionOther) {
                return (
                    question[option].votes.length /
                    (question[option].votes.length +
                        question[optionOther].votes.length)
                );
            };
        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Would You Rather?</Card.Header>
                        <Row>
                            <Col md={6}>{question.optionOne.text}</Col>
                            <Col md={3}>
                                No. Voted: {question.optionOne.votes.length}
                            </Col>
                            <Col md={3}>
                                Percentage:
                                {(
                                    percentageVoted('optionOne', 'optionTwo') *
                                    100
                                ).toFixed(2)}
                                %
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>{question.optionTwo.text}</Col>
                            <Col md={3}>
                                No. Voted: {question.optionTwo.votes.length}
                            </Col>
                            <Col md={3}>
                                Percentage:
                                {(
                                    percentageVoted('optionTwo', 'optionOne') *
                                    100
                                ).toFixed(2)}
                                %
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => ({
    questions: state.questions,
});
export default connect(mapStateToProps)(QuestionDetails);