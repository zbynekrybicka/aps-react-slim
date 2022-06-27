import React from 'react';
import { connect } from 'react-redux'
import { selectContact, } from '../slice'

function ContactListListItem(props) {
    return (<div className="ContactListListItem">
        <span
            className="ContactListListItemClick"
            onClick={() => props.dispatch(selectContact(props.index))}>{props.item.name}</span>
        <span>{props.item.email}</span>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(ContactListListItem);