import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import { Container } from '@material-ui/core';
import { DeviceHelper } from './utils';

// @TODO 
// Footer language support (mobile) DONE
// Get rid of warnings DONE
// Unit tests 
// Add chosen language to state store; swap correct logo image for language
// close icon for mobile navbar menu 
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
    const appPadding = DeviceHelper() ? process.env.REACT_APP_PADDING : 0;
    return (
        <>
            <Container
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
