import React, { Component } from "react"

class UnicornShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      unicorn: {}
    }

  }

  componentDidMount(){
    let unicornId = this.props.params.id
    fetch(`/api/v1/unicorns/${unicornId}`)
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      this.setState({ unicorn: body })
    })
  }

  render(){
    return(
      <div>
        {this.state.unicorn.unicornName}
        <br/>
        {this.state.unicorn.description}
      </div>
    )
  }
}

export default UnicornShowContainer
