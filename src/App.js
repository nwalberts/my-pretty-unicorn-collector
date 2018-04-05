import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import UnicornPageContainer from './containers/UnicornPageContainer'

const App = (props) => {
  return (
    <div>
      Replace this div with your Router.
      <UnicornPageContainer />
    </div>
  );
}

export default App;
