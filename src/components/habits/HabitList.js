import React from 'react';
import HabitSummary from './HabitSummary';

const HabitList = ({habits}) => {
    return (
        <div className="habit-list">
            { habits && habits.map(habit => {
                return (
                    <HabitSummary habit={habit} key={habit.id}/>
                )
            })}
        </div>
    )
}

export default HabitList;