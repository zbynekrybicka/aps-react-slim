import React from 'react';
import { connect } from 'react-redux'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar(props) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridWeek"
            firstDay="1"
        />
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Calendar);