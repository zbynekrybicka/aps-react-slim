import React from 'react';
import { connect } from 'react-redux'
import { } from '../slice'

function Preloader(props) {
    return (
        <div
            className="Preloader">&nbsp;</div>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Preloader);