import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import { Container } from '@material-ui/core';
import { DeviceHelper } from './utils';
import log4javascript from 'log4javascript';

// @TODO
// Footer language support (mobile) DONE
// Get rid of warnings DONE
// Get Express working: Add logging to front end and be able to send log messages to server DONE
// Unit tests
// Add chosen language to state store; swap correct logo image for language
// close icon for mobile navbar menu DONE
// Routing links to new pages

import { withStyles } from '@material-ui/core';

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        '.MuiTypography-root': {
            fontFamily: 'inherit'
        }
    }
})(() => null);
function App() {
   
    // const appPadding = DeviceHelper() ? process.env.REACT_APP_PADDING : 0;
    const appPadding = 0;
    console.log('Component Loaded...setting up Logging');
    //in debug mode use
    //window.myLogger = log4javascript.getDefaultLogger();
    window.applogger = log4javascript.getLogger();
    var ajaxAppender = new log4javascript.AjaxAppender('/api/logger');
    ajaxAppender.setBatchSize(1); // send in batches of 10
    var layout = new log4javascript.PatternLayout('%m');
    ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
    ajaxAppender.setLayout(layout);
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
    return (
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
                <Content></Content>
                <Footer></Footer>
            </Container>
        </>
    );
}

export default App;
