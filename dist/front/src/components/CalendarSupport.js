import React from 'react';
import { Provider, connect } from 'react-redux'
import { store } from '../store';
import { } from '../slice'

function CalendarSupport(props) {
    return (
        <div
            className="CalendarSupport"/>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(CalendarSupport);