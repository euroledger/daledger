import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from './LoginButton';
// import AppBarMenu from '../menu/AppBarMenu';
import LogoImage from './LogoImage';
import 'react-flags-select/scss/react-flags-select.scss';
import FlagMenu from './FlagMenu';
import Link from '@material-ui/core/Link';


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
    },
    footerbutton: {
        color: 'white',
        border: 'none',
        '&:hover': {
            textDecoration: 'underline',
            textDecorationThickness: '10em'
        },
    },
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
                                    color='inherit'
                                    className={classes.link}
                                >
                                    {item.title}
                                </Link>
                                // <Button className={classes.footerbutton}
                                //     component="button"
                                //     variant="body2"
                                //     onClick={() => {
                                //         window.location.href = item.href;
                                //     }}
                                // >
                                //     {item.title}
                                // </Button>
                            ))}
                        </Typography>
                        {/* <AppBarMenu
                            title={helpTitle}
                            items={helpItems}
                        ></AppBarMenu> */}
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
