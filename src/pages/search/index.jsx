import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import requestHeaders from '../../config/requestHeaders';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [errors, setErrors] = useState({});

  const search = async () => {
    const res = await fetch('/api/search', requestHeaders(query));
    res
      .json()
      .then(response => setResults(response))
      .catch(err => setErrors(err));
  };

  const onChangeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={query}
          onChange={onChangeHandler}
        />
        <InputGroup.Append>
          <Button onClick={search} variant="outline-secondary">
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
