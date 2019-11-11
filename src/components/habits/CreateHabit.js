import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHabit } from '../../store/actions/habitActions';
import moment from 'moment';

class CreateHabit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cadence: '',
            startDate: moment().format('YYYY-MM-DD'),
            daysComplete: 0,
            trackedDays: []
        }

        this.initTrackedDaysArr = this.initTrackedDaysArr.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.initTrackedDaysArr();
        this.props.createHabit(this.state);
    }

    initTrackedDaysArr() {
        const today = moment();
        const totalDays = this.state.cadence === 'WEEKLY'? 7 : 30;

        for(var i = 0; i < totalDays; i++) {
            this.state.trackedDays.push({
                date: today.format('YYYY-MM-DD'),
                completed: false
            });

            today.add(1, 'day');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Let's get started by creating a new habit to track!</h3>
                    <div>
                        <label htmlFor="name">What habit would you like to track? </label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="cadence">At what cadence would you like to track your habit? </label>
                        <input type="radio" name="cadence" id="cadence" value="WEEKLY" onChange={this.handleChange}/>Weekly 
                        <input type="radio" name="cadence" id="cadence" value="MONTHLY" onChange={this.handleChange}/>Monthly
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createHabit: (habit) => dispatch(createHabit(habit))
    }
}

export default connect(null, mapDispatchToProps)(CreateHabit);