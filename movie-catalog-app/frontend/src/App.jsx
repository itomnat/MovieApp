import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AuthForm from './components/AuthForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={AuthForm} />
      </Switch>
    </Router>
  );
};

export default App;