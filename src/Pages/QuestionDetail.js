import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class QuestionDetails extends React.Component {
    render() {
        let { questions } = this.props;
        const qid = this.props.match.params['question_id'],
            question = questions[qid];
            
        let convertToPercent = function(option, optionOther) {
                return (question[option].votes.length / (question[option].votes.length + question[optionOther].votes.length) );
            };
    
        return (
            <Row className="userQuestion">
                <Col>
                    <Row>
                        <Col>
                            <h4>Would You Rather...?</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>{question.optionOne.text}</Col>
                        <Col md={3}>
                            Times Chosen: <b>{question.optionOne.votes.length}</b>
                        </Col>
                        <Col md={3}>
                            Percent Chosen: <b>{(convertToPercent('optionOne', 'optionTwo') * 100).toFixed(2)}%</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>{question.optionTwo.text}</Col>
                        <Col md={3}>
                            Times Chosen: <b>{question.optionTwo.votes.length}</b>
                        </Col>
                        <Col md={3}>
                            Percent Chosen: <b>{(convertToPercent('optionTwo', 'optionOne') * 100).toFixed(2)}%</b>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => ({
    questions: state.questions,
});
export default connect(mapStateToProps)(QuestionDetails);