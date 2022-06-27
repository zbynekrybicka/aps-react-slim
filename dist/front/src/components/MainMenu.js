import React from 'react';
import { connect } from 'react-redux'
import getContacts from '../actions/getContacts'
import { menuCalendar, } from '../slice'

function MainMenu(props) {
    return (<div className="MainMenu">
        <span
            onClick={() => props.dispatch(menuCalendar())}>Kalendář</span>
        <span
            onClick={() => props.dispatch(getContacts())}>Kontakty</span>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(MainMenu);