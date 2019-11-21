import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import AppBarMenu from '../menu/AppBarMenu';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import './styles.scss';

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
    button: {
        float: 'right',
        textTransform: 'none',
        marginLeft: '1em',
        marginRight: '1em',
        fontSize: '1em',
        background: 'transparent',
        paddingLeft: '1em',
        paddingRight: '1em',
        borderWidth:'1px',
        '&:hover': {
            backgroundColor: '#616060',
            // opacity: 0.4
        }
    }
}));



const ButtonAppBar = ({ links, buttonText, helpTitle, helpItems, onSelect }) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <img
                        className={classes.img}
                        data-test='logoIMG'
                        src='logo4.png'
                        alt='Logo'
                    ></img>

                    <>
                        <Typography className={classes.typography}>
                            {links.map(item => (
                                <Link
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

                    <Button
                        className={classes.button}
                        color='inherit'
                    >
                       {buttonText}
                    </Button>
                    <ReactFlagsSelect
                        showSelectedLabel={false}
                        showOptionLabel={false}
                        onSelect={onSelect}
                        defaultCountry='GB'
                        countries={['GB', 'RO']}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default ButtonAppBar;
