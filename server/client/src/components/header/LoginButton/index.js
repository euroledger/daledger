import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        float: 'right',
        textTransform: 'none',
        marginLeft: '1em',
        marginRight: '1em',
        fontSize: '1em',
        background: 'transparent',
        paddingLeft: '1em',
        paddingRight: '1em',
        borderWidth: '1px',
        '&:hover': {
            backgroundColor: '#616060'
            // opacity: 0.4
        }
    }
    ,
    [theme.breakpoints.down('sm')]: {
        button: {
            borderWidth: 0,
            right: theme.spacing(5)
        }
    }
  
   
}));

const LoginButton = ({ auth, loginbuttonText, logoutbuttonText }) => {
    const classes = useStyles();
    const handleClick = e => {
        e.preventDefault();
        let text = 'LoginButton::handleclick() User Logged In';
        let href = '/auth/google';
        if (auth) {
            text = 'LoginButton::handleclick() User Logged Out';
            href = '/api/logout';
        }
        const message = {
            user: 'Mike', // replace with login info
            level: 'INFO',
            text: text
        };
        window.location = href;
        window.applogger.info(JSON.stringify(message));
    };
    const renderContent = auth => {
        switch (auth) {
            case null:
                return '';
            case false:
                return loginbuttonText;
            default:
                return logoutbuttonText;
        }
    };
    return (
        <Button data-test="loginButtonComponent"
            className={classes.button}
            color='inherit'
            onClick={handleClick}
        >
            {renderContent(auth)}
        </Button>
    );
};

export default LoginButton;
