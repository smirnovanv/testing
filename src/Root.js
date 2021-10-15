import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
          {children}
        </Provider>
    );
};