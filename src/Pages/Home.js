import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import AskCard from './../Components/AskCard';
import { addAnwser } from './../_redux/_actions/users';

class Home extends React.Component {
    state = {
        value: '',
    };

    handleClickAnswer = (e) => {
        this.setState({ value: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { authUser } = this.props,
            questionId = e.currentTarget.getAttribute('data-id');
        if (this.state.value !== '') {
            this.props.dispatch(
                addAnwser(
                    authUser,
                    questionId,
                    this.state.value,
                ),
            );
        }
    };

    render() {
        let { userQuestions, questions, users, authUser } = this.props,
            handleClickAnswer = this.handleClickAnswer,
            handleSubmit = this.handleSubmit;

        return (
            <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="Unanswered" title="Unanswered">
                    <AskCard
                        questionsByType={userQuestions.unanswered}
                        questionType="unanswered"
                        questions={questions}
                        handleSubmit={handleSubmit}
                        handleClickAnswer={handleClickAnswer}
                        users={users}
                        authUser={authUser}
                    />
                </Tab>
                <Tab eventKey="Answer" title="Answered">
                    <AskCard
                        questionsByType={userQuestions.answered}
                        questionType="answered"
                        questions={questions}
                        users={users}
                        authUser={authUser}
                    />
                </Tab>
            </Tabs>
        );
    }
}

function mapStateToProps(state) {
    let answeredIds = Object.keys(state.users[state.authUser].answers);
    let unanswered = Object.keys(state.questions)
        .filter(
            (question) => !answeredIds.includes(state.questions[question].id),
        )
        .sort((a, b) => b.timestamp - a.timestamp);
    let answered = Object.keys(state.questions)
        .filter((question) =>
            answeredIds.includes(state.questions[question].id),
        )
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        authUser: state.authUser,
        users: state.users,
        questions: state.questions,
        userQuestions: {
            answered,
            unanswered,
        },
    };
}

export default connect(mapStateToProps)(Home);
