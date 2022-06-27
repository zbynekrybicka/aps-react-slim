import React from 'react';
import { connect } from 'react-redux'
import postLogin from '../actions/postLogin'
import { } from '../slice'

function LoginFormSend(props) {
    return (
        <button
            onClick={() => props.dispatch(postLogin())}
            className="LoginFormSend">Přihlásit se</button>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(LoginFormSend);