import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import requestHeaders from '../config/requestHeaders';

const Recipe = props => {
  const [recipe, setRecipe] = useState({});
  const [errors, setErrors] = useState({});
  const [hasErrors, sethasErrors] = useState(false);
  const { match } = props;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const getRecipe = async () => {
      sethasErrors(false);
      const res = await fetch('/api/recipeById', requestHeaders({ id: match.params.id }));
      res
        .json()
        .then(response => setRecipe(response.data[0]))
        .catch(err => {
          setErrors(err);
          sethasErrors(true);
        });
    };
    getRecipe();
  }, [match.params.id]);

  return (
    <div>
      <RecipeDetails recipe={recipe} />
      {hasErrors && <span>{JSON.stringify(errors)}</span>}
    </div>
  );
};

Recipe.defaultProps = {
  match: {}
};

Recipe.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Recipe;
