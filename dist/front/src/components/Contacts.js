import React from 'react';
import { connect } from 'react-redux'
import ContactsList from './ContactsList';
import ContactDetail from './ContactDetail';
import { } from '../slice'

function Contacts(props) {
    return (<div className="Contacts">
        {props.state.data.selectedContact === "" && <ContactsList/>}
        {props.state.data.selectedContact !== "" && <ContactDetail/>}
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Contacts);