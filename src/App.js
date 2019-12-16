import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initDataLoad } from './_redux/_actions/common';
import Login from './Pages/Login';
import { Container } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.initDataLoad();
    }

    render() {
        const { authUser } = this.props;
        return (
            <BrowserRouter>
                <Container>
                    { authUser !== null ? (
                        `Hello, ${this.props.authUser}`
                    ) : (
                        <Login />
                    )}
                </Container>
            </BrowserRouter>    
        );
    }
}

function mapStateToProps({authUser}){
    return {
        authUser,
    }
}

export default connect(mapStateToProps, { initDataLoad })(App);
