import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    img: {
        maxWidth: '20em',
        height: '6.5em',
        marginTop: '-1.5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '-0.4em',
            maxWidth: '15em',
            maxHeight: '4.9em',
            margin: '0 auto'
        }
    }
}));

const LogoImage = ({ language }) => {
    const classes = useStyles();
    const image = `logo6-${language}.png`;
    return (
        <div id='parent' className='logo'  data-test='logoIMG'>
            <img
                className={classes.img}
                src={image}
                alt='Logo'
            ></img>
        </div>
    );
};

export default LogoImage;
