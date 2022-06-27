import React from 'react';
import { connect } from 'react-redux'
import ContactListSearch from './ContactListSearch';
import ContactListList from './ContactListList';
import { } from '../slice'

function ContactsList(props) {
    return (<div className="ContactsList">
        <ContactListSearch/>
        <ContactListList/>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(ContactsList);