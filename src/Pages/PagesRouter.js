import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddQuestion from './AddQuestion';

class PagesRouter extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                    <Route 
                        path="/add" 
                        render={(props) => <AddQuestion {...props} />} 
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(PagesRouter);