import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class QuestionDetails extends React.Component {
    constructor() {
        super()
        this.opt1 = false;
        this.opt2 = false;
    }

    render() {
        let { questions } = this.props;
        const qid = this.props.match.params['question_id'],
            question = questions[qid];
            
        let convertToPercent = function(option, optionOther) {
            return (question[option].votes.length / (question[option].votes.length + question[optionOther].votes.length) );
        };

        if(question === undefined) {
            return <Redirect to="/404" {...this.props} />;
        }

        if(question.optionOne.votes.indexOf(this.props.authUser) >= 0) {
            this.opt1 = true;
            this.opt2 = false;
        } else {
            this.opt1 = false;
            this.opt2 = true;
        }
    
        return (
            <Row className="userQuestion">
                <Col>
                    <Row>
                        <Col>
                            <h4>Would You Rather...?</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>{question.optionOne.text} {this.opt1 && <b>(Your Choice)</b>}</Col>
                        <Col md={3}>
                            Times Chosen: <b>{question.optionOne.votes.length}</b>
                        </Col>
                        <Col md={3}>
                            Percent Chosen: <b>{(convertToPercent('optionOne', 'optionTwo') * 100).toFixed(2)}%</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>{question.optionTwo.text} {this.opt2 && <b>(Your Choice)</b>}</Col>
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
    authUser: state.authUser,
});
export default connect(mapStateToProps)(QuestionDetails);