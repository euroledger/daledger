import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import './language/i18n';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#000',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary: cyan,
        // fontFamily: "'Architects Daughter',"
    },
    typography: {
        button: {
            textTransform: 'none',
            fontFamily: 'inherit',
            borderWidth: '2px',
            borderColor: 'white',
            borderStyle: 'solid',
            background: 'transparent'
            // '&:hover': {
            //     backgroundColor: '#616060'
            // }
        }
    },
    props: {
        // Name of the component ⚛️
        MuiListItemText: {
            // The default props to change
            fontFamily: 'inherit'
        }
    }
    // ,
    // overrides: {
    //     MuiAppBar: {
    //         root: {
    //             background: '#fff'
    //         }
    //     }
    // }
});
ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
