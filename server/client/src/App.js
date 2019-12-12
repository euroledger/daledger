import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import ClientHome from './components/clienthome';
import { Container } from '@material-ui/core';
import log4javascript from 'log4javascript';
import i18next from 'i18next';
import Translations from './components/config';
import ProfileContext from './ProfileContext';

// @TODO
// Footer language support (mobile) DONE
// Get rid of warnings DONE
// Get Express working: Add logging to front end and be able to send log messages to server DONE
// Add Express to heroku DONE
// Unit tests HALF DONE
// Store language items in context rather than pass down as props...Put that in HERE (App.js) for use in whole app
// Add chosen language to state store; swap correct logo image for language DONE
// close icon for mobile navbar menu DONE
// Routing links to new pages DONE

import { withStyles } from '@material-ui/core';

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        '.MuiTypography-root': {
            fontFamily: 'inherit'
        }
    }
})(() => null);

const setupLogging = () => {
    window.applogger = log4javascript.getLogger();
    var ajaxAppender = new log4javascript.AjaxAppender('/api/logger');
    ajaxAppender.setBatchSize(1); // send in batches of 10
    var layout = new log4javascript.PatternLayout('%m');
    ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
    ajaxAppender.setLayout(layout);
    ajaxAppender.addHeader('Content-Type', 'application/json;charset=utf-8');
    window.applogger.addAppender(ajaxAppender);

    //report all user console errors
    window.onerror = function(message, url, lineNumber) {
        const errorMsg = {
            user: 'Mike', // replace with login info
            level: 'ERROR',
            url: url,
            text: message
        };
        window.applogger.error(JSON.stringify(errorMsg));
        return true;
    };
};
setupLogging();

const App = props => {

    const currentLanguage = localStorage.getItem('language') || 'en';
    const [language, setLanguage] = useState(currentLanguage);
    const onSelectFlag = countryCode => {
        switch (countryCode) {
            case 'GB':
                i18next.changeLanguage('en');
                setLanguage('en');
                localStorage.setItem('language', 'en');
                break;
            case 'RO':
                i18next.changeLanguage('ro');
                setLanguage('ro');
                localStorage.setItem('language', 'ro');
                break;
            default:
                break;
        }
    };
    // useEffect(() => {
    //     // Update the language on initial load
    //     i18next.changeLanguage(language);
    // }, []);
    const appPadding = 0;
    useEffect(() => {
        async function getUserData() {
            i18next.changeLanguage(language);
            props.fetchUser();
        }
        getUserData();
    }, [props, language]);

    const getTranslations = (language) => ({
        translations: Translations(),
        onSelectFlag: onSelectFlag,
        language: language
    });

    return (
        <ProfileContext.Provider value={getTranslations(language)}>
            <>
                <Container
                    data-test='containerComponent'
                    maxWidth={false}
                    style={{
                        paddingLeft: appPadding,
                        paddingRight: appPadding
                    }}
                >
                    <GlobalCss></GlobalCss>
                    <Header></Header>
                    <BrowserRouter>
                        <Route exact path='/' component={Content} />
                        <Route path='/clienthome' component={ClientHome} />
                    </BrowserRouter>
                    <Footer></Footer>
                </Container>
            </>
        </ProfileContext.Provider>
    );
};

export default connect(null, actions)(App);
