import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import ProfileContext from '../../../../ProfileContext';

const GlobalPast = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    return (
        <div className={classes.container} data-test='contentComponent'>
        <div className={classes.panel}>
            <p style={{ background: 'transparent', color: 'white' }}>{translations.nopastcompetitions}</p>
        </div>
    </div>
    )
}

export default GlobalPast