import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedAddIngredient } from './AddIngredient'

export class AddIngredients extends Component {
  render() {
    let unselectedIngredients = this.props.unselectedIngredients.map( ingredient => {
      return <ConnectedAddIngredient />
    })

    let selectedIngredients = this.props.selectedIngredients.map( ingredient => {
        return <li>{ingredient.name}</li>
      })

    return(
      <div>
        <div>
          Ingredients
          <ul>
            {selectedIngredients}
          </ul>
        </div>
        <div>
          Add More Ingredients
          <ul>
            {unselectedIngredients}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  let ingredients = state.ingredients
  let selectedIngredients = state.ingredients.filter( ingredient => {
    return state.recipeForm.ingredientIds.includes(ingredient.id)
  })
  let unselectedIngredients = ingredients.filter( ingredient => {
    return selectedIngredients.indexOf(ingredient) < 0
  })

  return {
    ingredients: ingredients,
    selectedIngredients: selectedIngredients,
    unselectedIngredients: unselectedIngredients
  }
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
