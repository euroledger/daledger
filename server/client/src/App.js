import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import ClientHome from './components/clienthome';
import DesignerHome from './components/designerhome';
import ClientRegister from './components/register/client';
import Launch from './components/competitions/launch/forms';
import Draft from './components/competitions/draft';
import Ongoing from './components/competitions/ongoing';
import Past from './components/competitions/past';
import { Container } from '@material-ui/core';
import log4javascript from 'log4javascript';
import i18next from 'i18next';
import Translations from './components/config';
import ProfileContext from './ProfileContext';
import { withStyles } from '@material-ui/core';

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        '.MuiTypography-root': {
            fontFamily: 'inherit'
        },
        
        '.MuiFormLabel-root': {
            fontFamily: 'inherit',
            color: 'black',
            // fontSize: '0.8rem'
        },
        '.MuiInputBase-root': {
            fontFamily: 'inherit',
            color: 'black'
        },
        '.MuiFormControl-root': {
            margin: '0rem',
            marginTop: '1rem'
        },

        // colors for drawer
        '.MuiDrawer-paper': {
            background: 'black',
            color: 'white'
        }, 

        // selected radio button color
        '.MuiRadio-colorSecondary.Mui-checked': {
            color: 'black'
        },
        // font for table cells
        '.MuiTableCell-root': {
            fontFamily: 'inherit',
            userSelect: 'none'
        },
        // padding for card typography (subtitle)
        '.MuiCardContent-root:last-child': {
            padding: '9px'
        }
    }
})(() => null);

// TODO move this into separate file
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
    const appPadding = 0;
    const { fetchUser } = props;
    useEffect(() => {
        async function getStateData() {
            i18next.changeLanguage(language);
            fetchUser();
        }
        getStateData();
    }, [language, fetchUser]);

    const getStateData = (language, auth) => {
        let translations = Translations();
        if (auth) {
            translations.links.push({
                href: '#',
                title: translations.settingsLink
            });
        }
        return {
            translations: translations,
            onSelectFlag: onSelectFlag,
            language: language,
            auth: auth
        };
    };

    return (
        <ProfileContext.Provider value={getStateData(language, props.auth)}>
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
                        <Route
                            exact
                            path='/clienthome'
                            component={ClientHome}
                        />
                        <Route
                            exact
                            path='/designerhome'
                            component={DesignerHome}
                        />
                        <Route
                            path='/clientregister'
                            component={ClientRegister}
                        />
                        {/* TODO create separate screen for Designer Register */}
                        <Route
                            path='/designerregister'
                            component={ClientRegister}
                        />
                        <Route path='/launch' component={Launch} />
                        <Route path='/draft' component={Draft} />
                        <Route path='/ongoing' component={Ongoing} />
                        <Route path='/past' component={Past} />
                    </BrowserRouter>
                    <Footer></Footer>
                </Container>
            </>
        </ProfileContext.Provider>
    );
};

function mapStateToProps({ auth, projects }) {
    return { auth, projects };
}

export default connect(mapStateToProps, actions)(App);
