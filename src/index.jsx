import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import favicon from './assets/favicon.png';
import Favicon from 'react-favicon';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <div>
    <Favicon url={favicon}/>
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>
    </div>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}
/*eslint-enable */
