import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from './LoginButton';
import { Link } from '@material-ui/core';
import AppBarMenu from '../menu/AppBarMenu';
import LogoImage from './LogoImage';
import 'react-flags-select/scss/react-flags-select.scss';
import FlagMenu from './FlagMenu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    link: {
        flexGrow: 1,
        margin: theme.spacing(1)
    },

    header: {
        height: '6em'
    },
    typography: {
        display: 'inline-block',
        margin: '0 auto'
    },
    img: {
        maxWidth: '20em',
        [theme.breakpoints.down('md')]: {
            maxWidth: '15em'
        },
        maxHeight: '4em',
        [theme.breakpoints.down('md')]: {
            maxHeight: '4em'
        }
    },
    toolbar: {
        position: 'relative',
        marginTop: '1em'
    }
}));

const ButtonAppBar = ({
    links,
    loginbuttonText,
    logoutbuttonText,
    helpTitle,
    helpItems,
    language,
    onSelect,
    auth
}) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    return (
        <div className={classes.root} data-test='buttonAppBarComponent'>
            <AppBar position='fixed' className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <LogoImage language={language} />
                    <>
                        <Typography className={classes.typography}>
                            {links.map(item => (
                                <Link
                                    data-test={item.title}
                                    key={item.title}
                                    href={item.href}
                                    onClick={preventDefault}
                                    color='inherit'
                                    className={classes.link}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </Typography>
                        <AppBarMenu
                            title={helpTitle}
                            items={helpItems}
                        ></AppBarMenu>
                    </>

                    <LoginButton
                        auth={auth}
                        loginbuttonText={loginbuttonText}
                        logoutbuttonText={logoutbuttonText}
                    />
                    <FlagMenu onSelect={onSelect} language={language} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default ButtonAppBar;
