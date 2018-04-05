import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      description: ''
    }

  }

  handleFormSubmit(event){

  }

  handleUnicornNameChange(event) {

  }
  
  handleDescriptionChange(event) {

  }

  render() {

    return (
      <div>
        <form className="callout">
          <TextField
            fieldValue={this.state.unicornName}
            fieldName="unicornName"
            fieldChangeHandler={this.handleUnicornNameChange}
          />
          <TextField
            fieldValue={this.state.description}
            fieldName="description"
            fieldChangeHandler={this.handleDescriptionChange}
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UnicornFormContainer;
