import React from 'react';
import { Root, Head } from 'react-static';
import { Router } from '@reach/router';

import Home from './pages/Home/Home.component.jsx';

import favicon from './assets/favicon.png';

import './app.scss';

function App() {
  return (
    <Root>
      <Head>
        <title>Hi! I'm Kevin!</title>
        <meta name='description' content='Personal website to show myself and my works.' />
        <meta name='keywords' content='web developer, full-stack, programmer, code, website, webapp' />
        <meta name='author' content='Kevin' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Petrona:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        <link rel='icon' type='image/png' href={favicon} />
      </Head>
      <div>
        <Router>
          <Home path='/' />
        </Router>
      </div>
    </Root>
  );
}

export default App;
