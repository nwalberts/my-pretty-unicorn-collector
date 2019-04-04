import React, { Component } from "react"
import { Link } from "react-router"

import UnicornTile from "../components/UnicornTile"

class UnicornIndexContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){

    let unicornTiles = this.props.unicorns.map((unicorn) => {
      return(
        <UnicornTile
          key={unicorn.id}
          id={unicorn.id}
          unicornName={unicorn.unicornName}
        />
      )
    })

    return(
      <div>
        {unicornTiles}
      </div>
    )
  }
}

export default UnicornIndexContainer
