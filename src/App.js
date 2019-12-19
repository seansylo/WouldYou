import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initDataLoad } from './_redux/_actions/common';
import Login from './Pages/Login';
import MainNav from './Components/Nav';
import { Container } from 'react-bootstrap';
import './App.css';
import AddQuestion from './Pages/AddQuestion';

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
                        <>
                            <MainNav authUser={authUser} {...this.props}></MainNav>
                            <Switch>
                                <Route 
                                    path="/add" 
                                    render={(props) => <AddQuestion {...this.props} />} 
                                />
                            </Switch>
                        </>
                    ) : (
                        <Login />
                    )}
                </Container>
            </BrowserRouter>    
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps, { initDataLoad })(App);
