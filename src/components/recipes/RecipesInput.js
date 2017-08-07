import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import addRecipe from '../../actions/recipes'


export class RecipesInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      calories: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRecipe(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input type='text' name="name" onChange={this.handleChange}/><br /><br />
          Calories: <input type='text' name="calories" onChange={this.handleChange}/><br /><br />
          <input type='submit'/>
        </form>
        {this.state.name}<br />
        {this.state.calories}<br />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

export const ConnectedRecipesInput = connect(null, mapDispatchToProps)(RecipesInput)
