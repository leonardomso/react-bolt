import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <App />
        </Provider>
        <GlobalStyle />
    </Fragment>,
    document.getElementById('root')
);
