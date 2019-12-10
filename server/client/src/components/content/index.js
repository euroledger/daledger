import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../containerstyle';

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
