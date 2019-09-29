import React from 'react';
import PropTypes from 'prop-types';
// import { Button, InputGroup, FormControl } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {
  return (
    <>
      <div>{recipe.title}</div>
    </>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ])
  ).isRequired
  //   recipe: PropTypes.object.isRequired
};

export default RecipeDetails;
