import React from 'react';
import UnicornTile from '../components/UnicornTile';

class UnicornsIndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unicorns: []
    }
  }

  componentDidMount(){

  }

  render() {
    let unicorns = this.state.unicorns.map(unicorn => {
      return(
        <UnicornTile
          key={unicorn.id}
          unicorn={unicorn}
        />
      )
    })

    return(
      <div className='page'>
        <h1>Who Runs the World? Unicorns</h1>
        <div className='unicorn-list'>
          {unicorns}
        </div>
      </div>
    )
  }
}

export default UnicornsIndexContainer;
