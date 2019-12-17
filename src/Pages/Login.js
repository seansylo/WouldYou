import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from './../_redux/_actions/users';
import { setAuthUser } from './../_redux/_actions/authUser';
import { Row, Col, ListGroup } from 'react-bootstrap';

class Login extends React.Component {
    handleUser = (id) => {
        this.props.setAuthUser(id);
    }

    render() {
        let { users } = this.props;
        if(users) {
            return (
                <Row>
                    <Col sm={6} className="mx-auto">
                        <div className="login-container">
                            <h2 className="login-heading">Would you Rather...?</h2>
                            <p>
                                Choose User.
                            </p>
                            <ListGroup>
                                {Object.keys(users).map((user, idx) => {
                                    return ( 
                                        <ListGroup.Item key={idx} action onClick={() => this.handleUser(users[user].id)}>
                                            { users[user].name }
                                        </ListGroup.Item>
                                    );
                                })}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, { getAllUsers, setAuthUser })(Login);