import React from 'react';
import { Provider, connect } from 'react-redux'
import { store } from '../store';
import { } from '../slice'

function LoginFormAuthToken(props) {
    return (
        <div
            className="LoginFormAuthToken">{store.getState().data.loginForm.username}</div>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(LoginFormAuthToken);