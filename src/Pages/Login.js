import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from './../_redux/_actions/users';
import { Row, Col } from 'react-bootstrap';

class Login extends React.Component {

    render() {
        let { users } = this.props;
        if(users) {
            return (
                <Row>
                    <Col sm={6} className="mx-auto">
                        <div className="login-container">
                            <h2 className="login-heading">Would you Rather...?</h2>
                            <p>
                                A game of would you this or that...?<br/>
                                Please login to continue.
                            </p>
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

export default connect(mapStateToProps, { getAllUsers })(Login);