import React from 'react';
import { connect } from 'react-redux'
import { deselectContact, modelChange, } from '../slice'

function ContactDetail(props) {
    return (<div className="ContactDetail">
        <span
            onClick={() => props.dispatch(deselectContact())}>&lt;</span>
        <h2>{props.state.data.contacts[props.state.data.selectedContact].name}</h2>
        <input
            type="text"
            defaultValue={props.state.data.contacts[props.state.data.selectedContact].name}
            onChange={e => props.dispatch(modelChange(['contacts[state.selectedContact].name', e.target.value]))}/>
    </div>);
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(ContactDetail);