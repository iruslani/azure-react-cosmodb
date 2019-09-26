import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import SearchResultsTable from '../components/results/SearchResults';
import requestHeaders from '../config/requestHeaders';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [errors, setErrors] = useState({});

  const search = async () => {
    const request = {
      keyword: query
    };
    const res = await fetch('/api/search', requestHeaders(request));
    res
      .json()
      .then(response => setResults(response.data))
      .catch(err => setErrors(err));
  };

  const onChangeHandler = e => {
    setQuery(e.target.value);
  };
  //   console.log(results);
  //   console.log(errors);
  //   console.log(results && results.results > 0);
  //   const show = !!(results.results && results.results.length > 0);
  return (
    <>
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
      <div>
        {!!(results.results && results.results.length > 0) && (
          <SearchResultsTable baseImgUrl={results.baseUri} data={results.results} />
        )}
        {errors && <p>We encountered an error</p>}
      </div>
    </>
  );
};

export default Search;
