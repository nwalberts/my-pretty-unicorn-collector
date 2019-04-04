import React, { Component } from "react"
import { Link } from "react-router"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

class UnicornPageContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      unicorns: []
    }

    this.trackNewUnicorn = this.trackNewUnicorn.bind(this)
  }

  componentDidMount(){
    fetch("/api/v1/unicorns")
    .then((response) => {
      return response.json()
    })
    .then((unicornCollection) => {
      this.setState({ unicorns: unicornCollection })
    })
  }

  trackNewUnicorn(unicornPayload){
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(unicornPayload)
    })
    .then((response) => {
      return response.json()
    })
    .then((newUnicornWithId) => {
      let oldArrayOfUnicorns = this.state.unicorns
      this.setState({ unicorns: oldArrayOfUnicorns.concat(newUnicornWithId)})
    })
  }

  render(){

    return(
      <div>
        <UnicornIndexContainer
          unicorns={this.state.unicorns}
        />
        <UnicornFormContainer
          trackNewUnicorn={this.trackNewUnicorn}
        />
      </div>
    )
  }
}

export default UnicornPageContainer
