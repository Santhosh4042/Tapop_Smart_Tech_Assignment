import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Switch>
          <Route path="/signup" component={SignupForm} />
          <Route path="/profile/:userId" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;