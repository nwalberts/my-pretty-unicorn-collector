import React, { Component } from "react"

import TextField from "../components/TextField"

class UnicornFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      unicornName: "",
      description: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleNameChange(event){
    let nameValue = event.target.value
    this.setState({ unicornName: nameValue })
  }

  handleDescriptionChange(event){
    let descriptionValue = event.target.value
    this.setState({ description: descriptionValue })
  }

  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
      unicornName: this.state.unicornName,
      description: this.state.description
    }

    this.props.trackNewUnicorn(unicornPayload)
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            displayName="Name"
            inputValue={this.state.unicornName}
            handleChange={this.handleNameChange}
          />

          <TextField
            displayName="Description"
            inputValue={this.state.description}
            handleChange={this.handleDescriptionChange}
          />

          <input type="submit" value="TRIGGER UNICORN CREATION"/>
        </form>
      </div>
    )
  }
}

export default UnicornFormContainer
