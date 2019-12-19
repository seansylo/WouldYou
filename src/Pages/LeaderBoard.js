import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from './../_redux/_actions/users';
import { Container, Row, Col } from 'react-bootstrap';

class LeaderBoard extends React.Component {
    render() {
        function leaderboardList(leaderboard) {
            return leaderboard.map((user) => (
                <Row key={user.id} className="userLeader">
                    <Col>
                        <Row>
                            <Col sm={1}>
                                <img
                                    src={
                                        user.avatarURL ||
                                        'https://placeimg.com/72/72/any'
                                    }
                                    alt="user icon"
                                />
                            </Col>
                            <Col sm={4} className="userFullName">
                                <b>{user.name}</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <b>Questions Asked:</b> {user.questionAmt}
                            </Col>
                            <Col md={3}>
                                <b>Questions Answered:</b> {user.answerAmt}
                            </Col>
                            <Col md={6} className="totalCol">
                                <b>Total:</b> {user.total}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ));
        }

        let { leaderboard } = this.props;
        if (leaderboard) {
            return <Container>{leaderboardList(leaderboard)}</Container>;
        } else {
            return <div>Loading...</div>;
        }
    }
}

function mapStateToProps(state) {
    const leaderboard = Object.keys(state.users)
        .map((user) => ({
            id: state.users[user].id,
            name: state.users[user].name,
            avatarURL: state.users[user].avatarURL,
            answerAmt: Object.keys(state.users[user].answers).length,
            questionAmt: state.users[user].questions.length,
            total:
                Object.keys(state.users[user].answers).length +
                state.users[user].questions.length,
        }))
        .sort((a, b) => b.total - a.total);
    return {
        leaderboard,
    };
}

export default connect(mapStateToProps, { getAllUsers })(LeaderBoard);
