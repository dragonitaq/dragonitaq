import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactGA from 'react-ga';
// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  ReactGA.initialize('G-K33LVHN387');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const target = document.getElementById('root');

  const renderMethod = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <ParallaxProvider>
          <Comp />
        </ParallaxProvider>
      </AppContainer>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App);
    });
  }
}
