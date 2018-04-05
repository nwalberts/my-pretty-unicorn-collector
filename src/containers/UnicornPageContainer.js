import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornTile from '../components/UnicornTile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: []
    }

    // this.addNewUnicorn = this.addNewUnicorn.bind(this);
  }

  componentDidMount() {
    // fetch('')
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       let errorMessage = `${response.status} (${response.statusText})`,
    //           error = new Error(errorMessage);
    //       throw(error);
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(body => {
    //     // ADD CODE HERE
    //   })
    //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }




  render() {

    // const UnicornsList = something.something.map.....

      // we should generate lis here that can be links to unicorn show pages
      let unicornsList = "I should be a bunch of unicorn items"


    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">My Pretty Unicorn Collector</h1>
          <UnicornFormContainer

          />
          {unicornsList}
        </div>
      </div>
    );
  }
}

export default App;
