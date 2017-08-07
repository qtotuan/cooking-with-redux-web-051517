import React, { Component } from 'react';
import { Link } from 'react-router'

import { ConnectedRecipes } from './components/recipes/Recipes'
import { ConnectedAddIngredients } from './components/ingredients/AddIngredients'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/recipes/new">Create Recipe </Link>
        <ConnectedRecipes />
        <ConnectedAddIngredients />
      </div>
    );
  }
}

export default App;
