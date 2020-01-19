import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import LoginButton from './LoginButton';
import FlagMenu from './FlagMenu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './styles.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        position: 'absolute',
        fontFamily: 'inherit',
        left: theme.spacing(-1)
    },
    paper: {
        height: '40%',
        paddingTop: '8em',
        backgroundColor: 'transparent'
    },
    panel: {
        display: 'flex',
        position: 'absolute',
        right: '-9%',
        marginRight: '2.5rem',
        // [theme.breakpoints.down('sm')]: {
        //     marginRight: '1rem',
        // },
      
    },
    icon: {
        color: 'white',
        marginLeft: '6em'
    },
    toolbar: {
        height: '2em'
    }
}));

const MobileButtonAppBar = ({
    links,
    onSelect,
    auth,
    loginbuttonText,
    logoutbuttonText,
    language
}) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    // if (auth) {
    //     links.push({
    //         href: '#',
    //         title: settingsLink
    //     });
    // }
    const toggleDrawer = (side, open) => event => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const preventDefault = event => {
        event.preventDefault();
    };
    const sideList = side => (
        <div
            // className={classes.list}
            role='presentation'
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={toggleDrawer('left', false)}>
                    <ChevronLeftIcon className={classes.icon} />
                </IconButton>
            </div>
            {/* <Divider /> */}
            <List>
                {links.map(item => (
                    <ListItem
                        key={item.title}
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderBottom: 'solid',
                            borderWidth: '2px',
                            fontFamily: 'inherit'
                        }}
                    >
                        <Link
                            href={item.href}
                            onClick={preventDefault}
                            color='inherit'
                            className={classes.link}
                        >
                            {item.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.panel}>
                        <LoginButton
                            auth={auth}
                            loginbuttonText={loginbuttonText}
                            logoutbuttonText={logoutbuttonText}
                        />
                        <FlagMenu
                            onSelect={onSelect}
                            language={language}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                open={state.left}
                classes={{ paper: classes.paper, modal: classes.modal }}
                onClose={toggleDrawer('left', false)}
            >
                {sideList('left')}
            </Drawer>
        </div>
    );
};

export default MobileButtonAppBar;
