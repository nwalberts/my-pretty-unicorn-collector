import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import UnicornPageContainer from "./containers/UnicornPageContainer"
import UnicornShowContainer from "./containers/UnicornShowContainer"

const App = () => {

  return(
    <Router history={browserHistory} >
      <Route path="/" component={UnicornPageContainer} />
      <Route path="/unicorns" component={UnicornPageContainer} />
      <Route path="/unicorns/:id" component={UnicornShowContainer}  />
    </Router>
  )
}

export default App

// <div>
//   <UnicornPageContainer />
//   <UnicornShowContainer />
// </div>
