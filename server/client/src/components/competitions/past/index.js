// import React, { useContext } from 'react';
import React from 'react';
import { useStyles } from '../../containerstyle';
// import ProfileContext from '../../../ProfileContext';

const Past = () => {
    // const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    return (
        <div className={classes.container} data-test='contentComponent'>
        <div className={classes.panel}>
            <p style={{ background: 'white', color: 'black' }}>PAST COMPETITIONS</p>
        </div>
    </div>
    )
}

export default Past