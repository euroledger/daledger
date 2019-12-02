import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    img: {
        maxWidth: '20em',
        [theme.breakpoints.down('md')]: {
            maxWidth: '15em'
        },
        maxHeight: '4em',
        [theme.breakpoints.down('md')]: {
            maxHeight: '4em'
        }
    }
}));

const LogoImage = ({ language }) => {
    const classes = useStyles();
    const image = `logo4-${language}.png`;
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
