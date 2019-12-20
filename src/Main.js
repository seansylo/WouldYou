import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AddQuestion from './Pages/AddQuestion';
import LeaderBoard from './Pages/LeaderBoard';
import QuestionDetails from './Pages/QuestionDetail';
import PageNoExist from './Pages/PageNoExist';

class Main extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        path="/add"
                        render={(props) => <AddQuestion {...props} />}
                    />
                    <Route path="/leaderboard" render={() => <LeaderBoard />} />
                    <Route
                        path="/questions/:question_id"
                        render={(props) => <QuestionDetails {...props} />}
                    />
                    <Route render={(props) => <PageNoExist {...props} />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);
