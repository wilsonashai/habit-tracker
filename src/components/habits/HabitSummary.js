import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HabitSummary = ({habit}) => {
    const startDate = moment(habit.startDate).format('MMMM Do, YYYY');
    return (
        <div className="habit-list section">
            <div className="habit-card">
                <Link to={'/habit/' + habit.id}><h4>{habit.name}</h4></Link>
                <p>Cadence: {habit.cadence}</p>
                <p>Start Date: {startDate}</p>
            </div>
        </div>
    )
}

export default HabitSummary;