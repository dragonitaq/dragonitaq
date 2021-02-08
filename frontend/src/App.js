import React from 'react';
import { Root } from 'react-static';
import { Router } from '@reach/router';

import Home from './pages/Home/Home.component.jsx';
import Loader from './components/loader/commonLoader.component.jsx';

function App() {
  return (
    <Root>
      <div>
        {/* <React.Suspense fallback={Loader}> */}
        {/* <React.Suspense fallback={<em>Loading...</em>}> */}
        <Router>
          <Home path='/' />
        </Router>
        {/* </React.Suspense> */}
      </div>
    </Root>
  );
}

export default App;
