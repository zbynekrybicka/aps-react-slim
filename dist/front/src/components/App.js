import React from 'react';
import { connect } from 'react-redux'
import MainMenu from './MainMenu';
import Content from './Content';
import { } from '../slice'

function App(props) {
    return (<div className="App">
        <MainMenu/>
        <Content/>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(App);