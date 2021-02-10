import React from 'react';
import { Root, Head } from 'react-static';
import { Router } from '@reach/router';

import Home from './pages/Home/Home.component.jsx';
import Loader from './components/loader/commonLoader.component.jsx';

import './app.scss';

function App() {
  return (
    <Root>
      <Head>
        <title>Hi! I'm Kevin!</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Petrona:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
      </Head>
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
