import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from './Reducers/userReducer';
import rootSaga from './sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:userReducer,
  middleware:[...getDefaultMiddleware(),sagaMiddleware]
})


sagaMiddleware.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

