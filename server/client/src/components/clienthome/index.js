import React, { useContext } from 'react';
import { useStyles } from '../containerstyle';
import ProfileContext from '../../ProfileContext';

const ClientHome = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();
    return (
        <div className={classes.container} data-test='contentComponent'>
            <div className={classes.panel}>
                <p style={{ background: 'white', color: 'black' }}>{translations.clientHomeMessage.toUpperCase()}</p>
            </div>
        </div>
    );
};

export default ClientHome;
