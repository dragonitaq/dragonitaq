import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Router } from '@reach/router';

import Home from './pages/Home/Home.component';

import './app.scss';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Home path='/' />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
