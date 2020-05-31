import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
