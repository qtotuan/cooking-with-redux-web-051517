import React, { Component } from 'react';
import { connect } from 'react-redux'

export class AddIngredient extends Component {

  render() {
    return (
      <div>
        <button>{this.props.selectedIngredients}</button>
      </div>
    )
  }
}



export const ConnectedAddIngredient = connect()(AddIngredient)
