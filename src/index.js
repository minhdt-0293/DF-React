import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';
import { renderRoutes } from 'react-router-config';
import routes from './routes/routes';
import './css/App.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(rootSaga);

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
