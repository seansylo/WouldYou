import React from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import AskCard from './../Components/AskCard';
import { handleSaveAnswer } from './../_redux/_actions/users';

class Home extends React.Component {
    state = {
        value: '',
        qid: '',
    };

    handleClickButton = (e) => {
        this.setState({ value: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { authUser } = this.props,
            questionId = e.currentTarget.getAttribute('data-id');
        if (this.state.value !== '') {
            this.props.dispatch(
                handleSaveAnswer(
                    authUser,
                    questionId,
                    this.state.value,
                ),
            );
            this.setState({value: '', qid: questionId});
        }
    };

    render() {
        let { userQuestions, questions, users, authUser } = this.props,
            handleClickButton = this.handleClickButton,
            handleSubmit = this.handleSubmit;

        if(this.state.qid.length > 1) {
            let path = `/questions/${this.state.qid}`;
            return <Redirect to={path} />
        }

        let sortedAns = [],
            sortedUnAns = [];
        Object.keys(questions).sort( (a,b)=>{
            return questions[b].timestamp - questions[a].timestamp
        }).forEach( question => {
            if(~userQuestions['answered'].indexOf(question)){
                sortedAns.push(question);
            }
            if(~userQuestions['unanswered'].indexOf(question)){
                sortedUnAns.push(question);
            }
        })  

        return (
            <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="Unanswered" title="Unanswered">
                    <AskCard
                        questionsByType={sortedUnAns}
                        questionType="unanswered"
                        questions={questions}
                        handleSubmit={handleSubmit}
                        handleClickButton={handleClickButton}
                        users={users}
                        authUser={authUser}
                    />
                </Tab>
                <Tab eventKey="Answer" title="Answered">
                    <AskCard
                        questionsByType={sortedAns}
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
