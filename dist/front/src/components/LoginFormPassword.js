import React from 'react';
import { connect } from 'react-redux'
import { modelChange, } from '../slice'

function LoginFormPassword(props) {
    return (
        <input
            type="password"
            defaultValue={props.state.data.loginForm.password}
            onChange={e => props.dispatch(modelChange(['loginForm.password', e.target.value]))}
            className="LoginFormPassword"/>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(LoginFormPassword);