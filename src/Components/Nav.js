import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthUser } from './../_redux/_actions/authUser';
import { getAllUsers } from './../_redux/_actions/users';
import { Navbar, Nav } from 'react-bootstrap';

class MainNav extends React.Component {
    handleLogOut = () => {
        this.props.setAuthUser(null);
    }

    render() {
        let { users } = this.props;
        return(
            <Navbar bg="light">
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Question</Link>
                    <Link to="/leaderboard">Leader Board</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Signed in as: <b>{users[this.props.authUser].name}</b></Navbar.Text>
                </Navbar.Collapse>
                <Nav.Link onClick={() => this.handleLogOut()}>[Sign Out]</Nav.Link>        
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
    users: state.users,
});

export default connect(mapStateToProps, { setAuthUser, getAllUsers })(MainNav);