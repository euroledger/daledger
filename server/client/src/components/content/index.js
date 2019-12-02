import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceHelper } from '../../utils';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '94vh',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 'calc(1em + 2vmin)',
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
        marginLeft: '1em',
        marginRight: '1em',
        fontSize: '1em',
        background: 'transparent',
        paddingLeft: '1em',
        paddingRight: '1em',
        width: '12em',
        '&:hover': {
            backgroundColor: '#616060',
            opacity: 0.4
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
    const isLaptop = () => {
        return DeviceHelper();
    };
    return (
        <div className={classes.container} data-test="contentComponent">
            <div className={classes.panel}>
                <Button color='inherit' className={classes.button}>
                    {t('frontbuttons.project')}
                </Button>
                <Button
                    color='inherit'
                    className={classes.button}
                    style={
                        !isLaptop() ? { marginTop: '2em' } : { marginTop: 0 }
                    }
                >
                    {t('frontbuttons.designer')}
                </Button>
            </div>
        </div>
    );
};

export default Content;
