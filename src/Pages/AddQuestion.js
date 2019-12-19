import React from 'react';
import { connect } from 'react-redux';

class AddQuestion extends React.Component {
    render() {
        return (
            'Hello World!'
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(AddQuestion);