import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import ContentPanel from './ContentPanel';


const HowItWorks = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    return (
        <div
        className={classes.container}
        data-test='contentComponent'
        >
            <ContentPanel title={translations.howitworkstitle}></ContentPanel>
        </div>
    );
};

export default HowItWorks;
