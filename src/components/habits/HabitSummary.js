import React from 'react';
import moment from 'moment';

const HabitSummary = ({habit}) => {
    const startDate = moment(habit.startDate).format('MMMM Do, YYYY');
    return (
        <div className="habit-list section">
            <div className="habit-card">
                <h4>{habit.name}</h4>
                <p>Cadence: {habit.cadence}</p>
                <p>Start Date: {startDate}</p>
            </div>
        </div>
    )
}

export default HabitSummary;