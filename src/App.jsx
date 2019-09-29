import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Recipe from './pages/recipe';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/recipe/:id" component={Recipe} />
    </Router>
  );
}

export default App;
