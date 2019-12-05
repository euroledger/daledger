import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceHelper } from '../../utils';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    container: {
        height: '91vh',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 'calc(1rem + 2vmin)',
        color: 'white',
        // backgroundImage: 'url("mainimage.jpg")',
        backgroundImage: 'url("road.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    },
    button: {
        textTransform: 'none',
        marginLeft: '1rem',
        marginRight: '1rem',
        fontSize: '2rem',
        background: 'transparent',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '25rem',
        height: '4.5rem',
        '&:hover': {
            backgroundColor: '#616060',
            opacity: 0.4
        },
        marginTop: 0, 
        [theme.breakpoints.down('md')]: {
            width: '18rem',
            marginTop: '2rem' 
        }
    },
    panel: {
        position: 'absolute',
        top: '50%'
    }
}));
const Content = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.container} data-test="contentComponent">
            <div className={classes.panel}>
                <Button color='inherit' className={classes.button}>
                    {t('frontbuttons.project')}
                </Button>
                <Button
                    color='inherit'
                    className={classes.button}
                >
                    {t('frontbuttons.designer')}
                </Button>
            </div>
        </div>
    );
};

export default Content;
