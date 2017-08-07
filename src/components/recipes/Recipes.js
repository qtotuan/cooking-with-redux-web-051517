import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Recipes extends Component {
  render(){
    return(
        <div>
          <ul>
            {this.props.recipes.map( recipe => {
              return <li>{recipe.name}: {recipe.calories} calories</li>
            })}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes }
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
