import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import ContactPanel from './contactPanel';


const Contact = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    return (
        <div
        className={classes.container}
        data-test='contentComponent'
        >
            <ContactPanel title={translations.contactustitle}></ContactPanel>
        </div>
    );
};

export default Contact;
