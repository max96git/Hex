import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Avatar from './components/Avatar';
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';      // Import Games Page
import GameDetails from './components/GameDetails';  // Import Game Details Page
import CreateGame from './components/CreateGame';    // Import Create Game Page

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/inventory/:userId" component={Inventory} />
        <Route path="/avatar/:userId" component={Avatar} />
        <Route path="/games" component={GamesPage} />        {/* Games Page route */}
        <Route path="/games/:id" component={GameDetails} />  {/* Game Details route */}
        <Route path="/create-game" component={CreateGame} /> {/* Create Game route */}
      </Switch>
    </div>
  );
};

export default App;
