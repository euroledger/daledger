import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useStyles } from '../containerstyle';

const ClientHome = () => {
    const classes = useStyles();
    // const { t } = useTranslation();
    return (
        <div className={classes.container} data-test='contentComponent'>
            <div className={classes.panel}>
                <p style={{ background: 'white', color: 'black' }}>YOU ARE LOGGED IN...PAGE UNDER CONSTRUCTION</p>
            </div>
        </div>
    );
};

export default ClientHome;
