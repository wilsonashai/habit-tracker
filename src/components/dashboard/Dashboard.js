import React, { Component } from 'react';
import HabitList from '../habits/HabitList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { habits } = this.props;

        return (
            <div className="dashboard container">
                <h3>Your Tracked Habits</h3>
                <HabitList habits={habits}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        habits: state.firestore.ordered.habit
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'habit' }
    ])
)(Dashboard);