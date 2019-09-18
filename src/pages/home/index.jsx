import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    const res = await fetch('/api/message');
    res
      .json()
      .then(response => setMessage(response))
      .catch(err => setErrors(err));
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{message}</h1>
        <span>
          Has Errors:
          {JSON.stringify(hasError)}
        </span>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a className="App-link" href="/search">
          Search
        </a>
      </header>
    </div>
  );
};

export default Home;
