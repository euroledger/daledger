import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import Button from '@material-ui/core/Button';
import { DeviceHelper } from '../../../utils';


const Template = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const isLaptop = () => {
        return DeviceHelper();
    };

    return (
        <div
            className={`${classes.container}`}
            data-test='contentComponent'
        >
            <div style = {{position: 'absolute', top: '50%'}}>
                HERE IS SOME TEXT
            </div>
        </div>
    );
};

export default Template;
