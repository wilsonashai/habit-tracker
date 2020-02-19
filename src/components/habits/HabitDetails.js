import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

const HabitDetails = (props) => {
    console.log('rendering...');
    const { habit } = props;
    if (habit) {
        return (
            <div className="habit-details">
                <h3>{habit.name}</h3>
                <div className="detail-info">
                    <label>Cadence</label>
                    <p>{habit.cadence}</p>
                </div>
            </div>
        )
    } else {
        return ( 
            <div>Loading Habit...</div>
        )
    }
}

// HabitDetails.propTypes = {
//     habit: PropTypes.shape({
//         cadence: PropTypes.string,
//         daysComplete: PropTypes.number,
//         name: PropTypes.string,
//         startDate: PropTypes.string,
//         trackedDays: PropTypes.array
//     }).isRequired
// };

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    //console.log(ownProps);
    const id = ownProps.match.params.id;
    const habits = state.firestore.data.habit;
    console.log(habits);
    const habit = habits ? habits[id] : null;
    return {
        habit: habit
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    { collection: 'habit', /*doc: ownProps.match.params.id*/ }
    ])
)(HabitDetails);