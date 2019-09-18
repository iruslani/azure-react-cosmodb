import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
