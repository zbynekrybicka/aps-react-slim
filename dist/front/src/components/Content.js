import React from 'react';
import { connect } from 'react-redux'
import Calendar from './Calendar';
import Contacts from './Contacts';
import { } from '../slice'

function Content(props) {
    return (<div className="Content">
        {props.state.data.menu === "" && <Calendar/>}
        {props.state.data.menu === "contacts" && <Contacts/>}
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Content);