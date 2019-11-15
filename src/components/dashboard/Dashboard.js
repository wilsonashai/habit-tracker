import React, { Component } from 'react';
import HabitList from '../habits/HabitList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { habits } = this.props;

        return (
            <div id="dashboard">
                <h3>Your Tracked Habits</h3>
                <div class="flex-group">
                    <HabitList habits={habits}/>
                </div>
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