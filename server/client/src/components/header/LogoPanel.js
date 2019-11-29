import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles(theme => ({
    header: {
        paddingLeft: theme.spacing(0),
        height: '10em',
        [theme.breakpoints.down('md')]: {
            height: '4.5em'
        },
        textAlign: 'center'
    },
    img: {
        maxWidth: '20em',
        [theme.breakpoints.down('md')]: {
            maxWidth: '15em',
        },
        maxHeight: '5em',
        [theme.breakpoints.down('md')]: {
            maxHeight: '4em'
        },
    }
}));

const LogoPanel = () => {
    const classes = useStyles();
    return (
        <header data-test='logopanelComponent' className={classes.header}>
            <div>
                <div id='parent' className='logo'>
                    <img
                        className={classes.img}
                        data-test='logoIMG'
                        src='logo4.png'
                        alt='Logo'
                    ></img>
                </div>
            </div>
        </header>
    );
};

export default LogoPanel;
