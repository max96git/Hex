import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';
import CreateGame from './components/CreateGame';
import GameDetails from './components/GameDetails';
import NotFound from './components/NotFound';  // Optional for 404

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
    <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/inventory/:userId" component={Inventory} />
        <Route path="/avatar/:userId" component={Avatar} />
        <Route path="/games" component={GamesPage} />
        <Route path="/create-game" component={CreateGame} />
        <Route path="/games/:id" component={GameDetails} />
        <Route component={NotFound} /> {/* Optional 404 handling */}
      </Switch>
    </Router>
  );
};

export default App;
