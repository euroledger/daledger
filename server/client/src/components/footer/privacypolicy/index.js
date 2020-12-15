import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import { DeviceHelper } from '../../../utils';
import TextContent from '../TextContent';


const Privacy = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const isLaptop = () => {
        return DeviceHelper();
    };

    return (
        <div
        className={classes.container}
        data-test='contentComponent'
        >
            <TextContent title="Privacy Policy"></TextContent>
        </div>
    );
};

export default Privacy;
