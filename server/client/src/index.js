import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';
import reduxThunk from 'redux-thunk';
import './components/language/i18n';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#000',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary: blue
    },
    typography: {
        button: {
            textTransform: 'none',
            fontFamily: 'inherit',
            borderWidth: '2px',
            borderColor: 'white',
            borderStyle: 'solid',
            background: 'transparent'
        }
    },
    props: {
        // Name of the component 
        MuiListItemText: {
            // The default props to change
            fontFamily: 'inherit'
        }
    }
});
ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiThemeProvider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
