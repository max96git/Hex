import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <div>
      <h1>Hex</h1>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/inventory/:userId" component={Inventory} />
        <Route path="/avatar/:userId" component={Avatar} />
      </Switch>
    </div>
  );
};

export default App;
