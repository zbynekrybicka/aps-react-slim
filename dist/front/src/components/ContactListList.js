import React from 'react';
import { connect } from 'react-redux'
import ContactListListItem from './ContactListListItem';
import { } from '../slice'

function ContactListList(props) {
    return (<div className="ContactListList">
        <hr/>
        {props.state.data.contacts.map((item, index) => <ContactListListItem
            item={item}
            key={index}
            index={index}/>)}
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(ContactListList);