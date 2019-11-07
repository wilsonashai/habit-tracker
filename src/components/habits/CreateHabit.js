import React, { Component } from 'react';

class CreateHabit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cadence: '',
            startDate: new Date(),
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                        <label htmlFor="password">At what cadence would you like to track your habit? </label>
                        <input type="radio" id="cadence" value="WEEKLY" onChange={this.handleChange}/>Weekly 
                        <input type="radio" id="cadence" value="MONTHLY" onChange={this.handleChange}/>Monthly
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateHabit ;