import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import CreateHabit from './components/habits/CreateHabit';
import Dashboard from './components/dashboard/Dashboard';
import HabitDetails from './components/habits/HabitDetails'
import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar/>
          <div className="outside-container">
            <div className="main-container">
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/habit/:id' component={HabitDetails}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/createhabit' component={CreateHabit}/>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;