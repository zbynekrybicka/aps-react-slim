import React from 'react';
import { connect } from 'react-redux'
import { } from '../slice'

function ContactListSearch(props) {
    return (
        <div>ContactListSearch</div>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(ContactListSearch);