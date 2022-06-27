import React from 'react';
import { connect } from 'react-redux'
import { modelChange, } from '../slice'

function LoginFormUsername(props) {
    return (
        <input
            type="text"
            defaultValue={props.state.data.loginForm.username}
            onChange={e => props.dispatch(modelChange(['loginForm.username', e.target.value]))}
            className="LoginFormUsername"/>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(LoginFormUsername);