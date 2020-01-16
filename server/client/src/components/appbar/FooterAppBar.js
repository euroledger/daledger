import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { DeviceHelper } from '../../utils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    links: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontFamily: 'inherit'
    }
}));
function ListItemLink(props) {
    return (
        <ListItem
            color='primary'
            component={Link}
            {...props}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderBottom: 'solid',
                borderWidth: '2px',
                fontFamily: 'inherit'
            }}
        />
    );
}
const ButtonAppBar = ({ linkItems }) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    const isLaptop = () => {
        return DeviceHelper();
    };
    return (
        <div className={classes.root}>
            {isLaptop() ? (
                <AppBar position='relative' style={{bottom: 0}}>
                    <Toolbar className={classes.links}>
                        <Typography style={{ fontFamily: 'inherit' }}>
                            {linkItems.map(item => (
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
                    </Toolbar>
                </AppBar>
            ) : (
                <List component='nav'>
                    {linkItems.map(item => (
                        <ListItemLink href={item.href} key={item.title}>
                            <ListItemText
                                // className={classes.text}
                                primary={item.title}
                            />
                        </ListItemLink>
                    ))}
                </List>
            )}
        </div>
    );
};

export default ButtonAppBar;
