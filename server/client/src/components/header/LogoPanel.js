import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogoImage from './LogoImage';

import './styles.scss';

const useStyles = makeStyles(theme => ({
    header: {
        // paddingLeft: theme.spacing(0),
        
        height: '10em',
        [theme.breakpoints.down('md')]: {
            height: '4.5em'
        },
    },
  
    img: {
        margin: '0 auto',
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

const LogoPanel = ({language}) => {
    const classes = useStyles();
    return (
        <header data-test='logopanelComponent' className={classes.header}>
            <div >
               <LogoImage language={language}/>
            </div>
        </header>
    );
};

export default LogoPanel;
