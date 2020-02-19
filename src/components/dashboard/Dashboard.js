import React, { Component } from 'react';
import HabitList from '../habits/HabitList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../../styles/partials/_dashboard.scss';

class Dashboard extends Component {
    render() {
        const { habits } = this.props;

        if(habits) {
            return (
                <div id="dashboard">
                    <h1 className="header-1">Your Tracked Habits</h1>
                    <div className="flex-group content-center">
                        <HabitList habits={habits}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div><h2>Loading your dashboard...</h2></div>
            )
        }
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