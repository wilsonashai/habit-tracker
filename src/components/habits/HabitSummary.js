import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HabitSummary = ({habit}) => {
    const startDate = moment(habit.startDate).format('MMMM Do, YYYY');
    return (
        <div className="habit-list section">
            <div className="habit-card">
                <Link to={'/habit/' + habit.id} key={habit.id}><h3 className="header-3">{habit.name}</h3></Link>
                <p className="habit-detail">Cadence: {habit.cadence}
                <br/>
                Start Date: {startDate}</p>
            </div>
        </div>
    )
}

export default HabitSummary;