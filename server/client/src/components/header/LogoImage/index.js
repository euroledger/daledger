import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    img: {
        maxWidth: '20em',
        height: '5.2em',
        marginTop: '-1.2em',
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
        <div id='parent' className='logo' data-test='logoIMG'>
            <Link href={'/'}>
                <img className={classes.img} src={image} alt='Logo'></img>
            </Link>
        </div>
    );
};

export default LogoImage;
