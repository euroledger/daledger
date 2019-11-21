import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import Divider from '@material-ui/core/Divider';
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
        // top: theme.spacing(-0.1)
    },
    button: {
        // position: 'absolute',
        fontFamily: 'inherit',
        borderWidth: 0,
        top: theme.spacing(-0.3)
    },
    paper: {
        height: '40%',
        paddingTop: '8em',
        backgroundColor: 'transparent'
    },
    panel: {
        position: 'absolute',
        right: theme.spacing(-2)
    },
    icon: {
        color: 'white',
        marginLeft: '6em'
    },
    toolbar: {
        height: '2em'
    }
}));

const MobileButtonAppBar = ({ links, onSelect }) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        console.log('QOOHOOO');
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
            className={classes.list}
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
                        <Button className={classes.button} color='inherit'>
                            Login
                        </Button>
                        <ReactFlagsSelect
                            className={classes.flagMenu}
                            showSelectedLabel={false}
                            showOptionLabel={false}
                            onSelect={onSelect}
                            defaultCountry='GB'
                            countries={['GB', 'RO']}
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
