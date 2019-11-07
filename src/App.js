import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateHabit from './components/habits/CreateHabit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <h1>HABIT TRAKR</h1>
          <Switch>
            <Route path ='/project/:id' />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/createHabit' component={CreateHabit}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
