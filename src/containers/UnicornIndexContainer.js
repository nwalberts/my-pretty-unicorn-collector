import { Component }, React from "react"
import { Link } from "react-router"

import UnicornTile from "../components/UnicornTile"

class UnicornIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      unicorns: []
    }
  }

  componentDidMount(){
    fetch("", {})
    .then(response => response.json())
    .then(body => {

    })
  }


  render(){

    let unicorntiles = this.state.unicorn.map((unicorn) => {

      return(
        <UnicornTile />
      )
    })

    return(
      <div>
        {unicorntiles}
      </div>
    )
  }
}

export default UnicornIndexContainer
