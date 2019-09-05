import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [message, setMessage] = useState("");

  async function fetchData() {
    const res = await fetch("/api/message");
    res
      .json()
      .then(res => setMessage(res))
      .catch(err => setErrors(err));
  }
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
        <span>Has Errors: {JSON.stringify(hasError)}</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
