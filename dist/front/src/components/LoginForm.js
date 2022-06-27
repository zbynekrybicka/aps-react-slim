import React from 'react';
import { connect } from 'react-redux'
import LoginFormUsername from './LoginFormUsername';
import LoginFormPassword from './LoginFormPassword';
import LoginFormSend from './LoginFormSend';
import { } from '../slice'

function LoginForm(props) {
    return (<div className="LoginForm">
        <h1>Automatizovaný programovací systém DEMO</h1>
        <LoginFormUsername/>
        <LoginFormPassword/>
        <LoginFormSend/>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(LoginForm);