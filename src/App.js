import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { initDataLoad } from './_redux/_actions/common';
import Login from './Pages/Login';
import MainNav from './Components/Nav';
import { Container } from 'react-bootstrap';
import './App.css';
import Main from './Main';

class App extends React.Component {
    componentDidMount() {
        this.props.initDataLoad();
    }

    componentDidUpdate() {
        this.props.initDataLoad();
    }

    render() {
        const { authUser } = this.props;
        return (
            <Router>
                <Container>
                    { authUser !== null ? (
                        <>
                            <MainNav authUser={authUser} {...this.props}></MainNav>
                            <Main/>
                        </>
                    ) : (
                        <Login />
                    )}
                </Container>
            </Router>    
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps, { initDataLoad })(App);
