import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
// import { useState, useEffect } from 'react';

const Search = () => {
  //   const [hasError, setErrors] = useState(false);
  //   const [message, setMessage] = useState('');

  //   const fetchData = async () => {
  //     const res = await fetch('/api/message');
  //     res
  //       .json()
  //       .then(response => setMessage(response))
  //       .catch(err => setErrors(err));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   });

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
