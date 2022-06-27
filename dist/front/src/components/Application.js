import React from 'react';
import { connect } from 'react-redux'
import Preloader from './Preloader';
import LoginForm from './LoginForm';
import App from './App';
import { } from '../slice'

function Application(props) {
    return (<div className="Application">
        {props.state.data.preloader && <Preloader/>}
        {props.state.data.authToken === "" && <LoginForm/>}
        {props.state.data.authToken && <App/>}
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Application);